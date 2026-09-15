/* ===================================================================
   SUSU JAMB PREP — Chemistry CBT logic
   Reads CHEMISTRY_QUESTIONS / CHEMISTRY_YEARS from chemistry-questions.js
   Uses SUSU (app.js) only for the toast helper — its own state lives
   under separate localStorage keys so it never touches the rest of
   the app's saved state.
   =================================================================== */

const CHEM_ACTIVE_KEY = "susu_chem_cbt_active_v1";
const CHEM_RESULT_KEY = "susu_chem_cbt_lastresult_v1";

// Full JAMB year span for the picker. 1996 and 2002 are omitted because
// the source PDF itself has no section for those two years.
const ALL_JAMB_YEARS = [1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,
                         1997,1998,1999,2000,2001,2003,2004];

const NUM_Q_OPTIONS = [10, 20, 30, 40, 50, 60];
const DURATION_OPTIONS = [
  { label: "10 min", minutes: 10 },
  { label: "20 min", minutes: 20 },
  { label: "30 min", minutes: 30 },
  { label: "45 min", minutes: 45 },
  { label: "60 min", minutes: 60 },
  { label: "90 min", minutes: 90 },
  { label: "No Time Limit", minutes: null }
];

// ---------------------------------------------------------------
// Setup state (in-memory, rebuilt each time the setup screen loads)
// ---------------------------------------------------------------
let setupState = {
  numQ: null,        // number or "all"
  year: "all",        // "all" or a year number
  duration: 30,        // minutes or null
  mode: "practice"     // "practice" | "cbt"
};

// ---------------------------------------------------------------
// Active test state (persisted to localStorage while a test is live)
// ---------------------------------------------------------------
let test = null;
let timerInterval = null;
let pendingNavHref = null;
let reviewFilter = "wrong";

function poolForYear(year) {
  if (year === "all") return CHEMISTRY_QUESTIONS.slice();
  return CHEMISTRY_QUESTIONS.filter(q => q.year === year);
}

function countForYear(year) {
  return poolForYear(year).length;
}

function saveActiveTest() {
  if (!test) return;
  localStorage.setItem(CHEM_ACTIVE_KEY, JSON.stringify(test));
}

function clearActiveTest() {
  localStorage.removeItem(CHEM_ACTIVE_KEY);
}

function loadActiveTest() {
  try {
    const raw = localStorage.getItem(CHEM_ACTIVE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function saveLastResult(result) {
  localStorage.setItem(CHEM_RESULT_KEY, JSON.stringify(result));
}

function loadLastResult() {
  try {
    const raw = localStorage.getItem(CHEM_RESULT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function fmtTime(totalSeconds) {
  if (totalSeconds == null) return "—";
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// =================================================================
// SETUP SCREEN
// =================================================================

function renderSetupScreen() {
  renderNumQGrid();
  renderYearGrid();
  renderDurationGrid();
  renderModeCards();
  updateSetupSummary();
  checkResumeAndLastResult();
}

function renderYearGrid() {
  const grid = document.getElementById("yearGrid");
  grid.innerHTML = "";
  const allChip = makeChip("All Years", setupState.year === "all", () => {
    setupState.year = "all";
    onYearChanged();
  });
  grid.appendChild(allChip);
  ALL_JAMB_YEARS.forEach(y => {
    const count = countForYear(y);
    const chip = makeChip(String(y), setupState.year === y, () => {
      setupState.year = y;
      onYearChanged();
    });
    if (count === 0) chip.classList.add("chip-disabled");
    grid.appendChild(chip);
  });
  updateYearHint();
}

function onYearChanged() {
  renderYearGrid();
  renderNumQGrid();
  updateSetupSummary();
}

function updateYearHint() {
  const available = countForYear(setupState.year);
  const label = setupState.year === "all" ? "all available years" : setupState.year;
  const hint = document.getElementById("yearHint");
  if (available === 0) {
    hint.textContent = "No verified Chemistry questions are available for " + label + " yet — try All Years or 1983.";
    hint.style.color = "#C0392B";
  } else {
    hint.textContent = available + " question" + (available === 1 ? "" : "s") + " available for " + label + ".";
    hint.style.color = "var(--navy-soft)";
  }
}

function renderNumQGrid() {
  const grid = document.getElementById("numQGrid");
  grid.innerHTML = "";
  const available = countForYear(setupState.year);

  // Cap/repair current selection against availability
  if (setupState.numQ !== "all" && setupState.numQ > available) {
    setupState.numQ = available > 0 ? "all" : null;
  }
  if (setupState.numQ === null && available > 0) {
    // sensible default: 10, or "all" if fewer than 10 available
    setupState.numQ = available >= 10 ? 10 : "all";
  }

  NUM_Q_OPTIONS.forEach(n => {
    const chip = makeChip(String(n), setupState.numQ === n, () => {
      setupState.numQ = n;
      renderNumQGrid();
      updateSetupSummary();
    });
    if (n > available) chip.classList.add("chip-disabled");
    grid.appendChild(chip);
  });
  const allChip = makeChip("All Questions (" + available + ")", setupState.numQ === "all", () => {
    setupState.numQ = "all";
    renderNumQGrid();
    updateSetupSummary();
  });
  if (available === 0) allChip.classList.add("chip-disabled");
  grid.appendChild(allChip);

  document.getElementById("numQHint").textContent =
    "The test will never use more questions than are available for the selected year.";
}

function renderDurationGrid() {
  const grid = document.getElementById("durationGrid");
  grid.innerHTML = "";
  DURATION_OPTIONS.forEach(opt => {
    const selected = setupState.duration === opt.minutes;
    const chip = makeChip(opt.label, selected, () => {
      setupState.duration = opt.minutes;
      renderDurationGrid();
      updateSetupSummary();
    });
    grid.appendChild(chip);
  });
}

function renderModeCards() {
  const normal = document.getElementById("modeNormal");
  const cbt = document.getElementById("modeCbt");
  normal.classList.toggle("selected", setupState.mode === "practice");
  cbt.classList.toggle("selected", setupState.mode === "cbt");
  normal.onclick = () => { setupState.mode = "practice"; renderModeCards(); updateSetupSummary(); };
  cbt.onclick = () => { setupState.mode = "cbt"; renderModeCards(); updateSetupSummary(); };
}

function makeChip(label, selected, onClick) {
  const el = document.createElement("div");
  el.className = "option-chip" + (selected ? " selected" : "");
  el.textContent = label;
  el.addEventListener("click", onClick);
  return el;
}

function updateSetupSummary() {
  const available = countForYear(setupState.year);
  const n = setupState.numQ === "all" ? available : (setupState.numQ || 0);
  const yearLabel = setupState.year === "all" ? "All Years" : setupState.year;
  const durLabel = setupState.duration ? setupState.duration + " minutes" : "No Time Limit";
  const modeLabel = setupState.mode === "cbt" ? "CBT Test Mode" : "Normal Practice Mode";
  document.getElementById("setupSummary").textContent =
    n + " question" + (n === 1 ? "" : "s") + " · " + yearLabel + " · " + durLabel + " · " + modeLabel;

  const startBtn = document.getElementById("startTestBtn");
  startBtn.disabled = (available === 0 || !n || n === 0);
  startBtn.style.opacity = startBtn.disabled ? "0.5" : "1";
}

function checkResumeAndLastResult() {
  const active = loadActiveTest();
  const resumeCard = document.getElementById("resumeCard");
  if (active && !active.submitted) {
    resumeCard.style.display = "block";
  } else {
    resumeCard.style.display = "none";
  }

  const last = loadLastResult();
  const lastCard = document.getElementById("lastResultCard");
  if (last && (!active || active.submitted)) {
    const yearLabel = last.year === "all" ? "All Years" : last.year;
    document.getElementById("lastResultText").textContent =
      last.correctCount + " / " + last.total + " (" + last.pct + "%) — " + yearLabel + ", " +
      (last.mode === "cbt" ? "CBT Test Mode" : "Normal Practice Mode");
    lastCard.style.display = "block";
  } else {
    lastCard.style.display = "none";
  }
}

// =================================================================
// START TEST
// =================================================================

function startTest() {
  const available = countForYear(setupState.year);
  if (available === 0) { SUSU.toast("No questions available for that year yet."); return; }

  const pool = shuffle(poolForYear(setupState.year));
  const count = setupState.numQ === "all" ? pool.length : Math.min(setupState.numQ, pool.length);
  const selected = pool.slice(0, count);

  const durationSeconds = setupState.duration ? setupState.duration * 60 : null;

  test = {
    questions: selected,
    current: 0,
    answers: {},         // questionId -> letter
    locked: {},           // questionId -> true once answered in practice mode
    mode: setupState.mode,
    year: setupState.year,
    durationSeconds: durationSeconds,
    remainingSeconds: durationSeconds,
    startedAt: Date.now(),
    submitted: false
  };
  saveActiveTest();
  enterTestScreen();
}

function resumeTest() {
  const active = loadActiveTest();
  if (!active) return;
  test = active;
  enterTestScreen();
}

function discardActiveTest() {
  clearActiveTest();
  test = null;
  checkResumeAndLastResult();
}

// =================================================================
// TEST SCREEN
// =================================================================

function enterTestScreen() {
  document.getElementById("screen-setup").style.display = "none";
  document.getElementById("screen-results").style.display = "none";
  document.getElementById("screen-test").style.display = "block";
  document.getElementById("pageSubtitle").textContent =
    (test.mode === "cbt" ? "CBT Test Mode" : "Normal Practice Mode") +
    (test.year === "all" ? " · All Years" : " · " + test.year);

  renderQuestion();
  renderPalette();
  startTimerIfNeeded();
}

function startTimerIfNeeded() {
  clearInterval(timerInterval);
  if (test.durationSeconds == null) {
    document.getElementById("timerBadge").textContent = "No Limit";
    document.getElementById("timerBadge").className = "timer-badge";
    return;
  }
  updateTimerBadge();
  timerInterval = setInterval(() => {
    test.remainingSeconds = Math.max(0, test.remainingSeconds - 1);
    updateTimerBadge();
    if (test.remainingSeconds % 5 === 0) saveActiveTest();
    if (test.remainingSeconds <= 0) {
      clearInterval(timerInterval);
      finalizeSubmit(true);
    }
  }, 1000);
}

function updateTimerBadge() {
  const badge = document.getElementById("timerBadge");
  badge.textContent = fmtTime(test.remainingSeconds);
  badge.className = "timer-badge";
  if (test.remainingSeconds <= 60) badge.classList.add("danger");
  else if (test.remainingSeconds <= 300) badge.classList.add("warning");
}

function currentQuestion() {
  return test.questions[test.current];
}

function renderQuestion() {
  const q = currentQuestion();
  document.getElementById("testProgressLabel").textContent =
    "Question " + (test.current + 1) + " of " + test.questions.length;
  document.getElementById("questionMeta").textContent = "Year " + q.year;
  document.getElementById("questionText").textContent = q.question;

  const optionsBox = document.getElementById("answerOptions");
  optionsBox.innerHTML = "";
  const feedbackBox = document.getElementById("feedbackArea");
  feedbackBox.innerHTML = "";

  const selectedLetter = test.answers[q.id];
  const isLocked = test.mode === "practice" && !!test.locked[q.id];

  Object.keys(q.options).forEach(letter => {
    const row = document.createElement("div");
    row.className = "answer-option";
    if (selectedLetter === letter) row.classList.add("selected");

    if (isLocked) {
      row.classList.add("locked");
      if (letter === q.answer) row.classList.add("correct");
      else if (letter === selectedLetter) row.classList.add("wrong");
    }

    row.innerHTML = '<span class="opt-letter">' + letter + '</span><span>' + q.options[letter] + '</span>';

    if (!isLocked) {
      row.addEventListener("click", () => selectAnswer(letter));
    }
    optionsBox.appendChild(row);
  });

  if (isLocked) {
    renderFeedback(q, selectedLetter);
  }

  document.getElementById("prevBtn").disabled = test.current === 0;
  updatePaletteHighlight();
}

function selectAnswer(letter) {
  const q = currentQuestion();
  test.answers[q.id] = letter;

  if (test.mode === "practice") {
    test.locked[q.id] = true;
  }
  saveActiveTest();
  renderQuestion();
  updatePaletteHighlight();
}

function renderFeedback(q, selectedLetter) {
  const box = document.getElementById("feedbackArea");
  const isCorrect = selectedLetter === q.answer;
  const div = document.createElement("div");
  div.className = "feedback-box " + (isCorrect ? "correct" : "wrong");
  div.innerHTML =
    '<div class="fb-title">' + (isCorrect ? "✅ Correct" : "❌ Incorrect") + '</div>' +
    (isCorrect ? "" : '<div>Your answer: <strong>' + selectedLetter + ". " + q.options[selectedLetter] + '</strong></div>') +
    '<div>Correct answer: <strong>' + q.answer + ". " + q.options[q.answer] + '</strong></div>' +
    '<div class="fb-explain"><strong>Explanation:</strong> ' + q.explanation + '</div>';
  box.appendChild(div);
}

function renderPalette() {
  const palette = document.getElementById("qPalette");
  palette.innerHTML = "";
  test.questions.forEach((q, i) => {
    const btn = document.createElement("div");
    btn.className = "qpalette-btn";
    btn.textContent = i + 1;
    btn.addEventListener("click", () => {
      test.current = i;
      renderQuestion();
      saveActiveTest();
    });
    palette.appendChild(btn);
  });
  updatePaletteHighlight();
}

function updatePaletteHighlight() {
  const buttons = document.querySelectorAll(".qpalette-btn");
  test.questions.forEach((q, i) => {
    const btn = buttons[i];
    if (!btn) return;
    btn.classList.toggle("current", i === test.current);
    btn.classList.toggle("answered", test.answers.hasOwnProperty(q.id));
  });
}

document.getElementById("prevBtn")?.addEventListener("click", () => {
  if (test.current > 0) { test.current--; renderQuestion(); saveActiveTest(); }
});
document.getElementById("nextBtn")?.addEventListener("click", () => {
  if (test.current < test.questions.length - 1) { test.current++; renderQuestion(); saveActiveTest(); }
  else { SUSU.toast("This is the last question."); }
});

// =================================================================
// SUBMIT
// =================================================================

document.getElementById("submitBtn")?.addEventListener("click", () => {
  const answered = Object.keys(test.answers).length;
  const unanswered = test.questions.length - answered;
  document.getElementById("submitSummaryText").innerHTML =
    "Answered: <strong>" + answered + "</strong><br>Unanswered: <strong>" + unanswered + "</strong>";
  document.getElementById("submitModal").classList.add("open");
});
document.getElementById("cancelSubmitBtn")?.addEventListener("click", () => {
  document.getElementById("submitModal").classList.remove("open");
});
document.getElementById("confirmSubmitBtn")?.addEventListener("click", () => {
  document.getElementById("submitModal").classList.remove("open");
  finalizeSubmit(false);
});

function finalizeSubmit(auto) {
  clearInterval(timerInterval);
  const timeUsedSeconds = Math.round((Date.now() - test.startedAt) / 1000);

  let correct = 0, wrong = 0, unanswered = 0;
  test.questions.forEach(q => {
    const given = test.answers[q.id];
    if (!given) unanswered++;
    else if (given === q.answer) correct++;
    else wrong++;
  });
  const total = test.questions.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  const result = {
    questions: test.questions,
    answers: test.answers,
    correctCount: correct,
    wrongCount: wrong,
    unansweredCount: unanswered,
    total: total,
    pct: pct,
    year: test.year,
    mode: test.mode,
    durationSeconds: test.durationSeconds,
    timeUsedSeconds: timeUsedSeconds,
    timeRemainingSeconds: test.durationSeconds != null ? test.remainingSeconds : null,
    autoSubmitted: !!auto,
    finishedAt: Date.now()
  };

  saveLastResult(result);
  clearActiveTest();
  test = null;
  renderResults(result);
  if (auto) SUSU.toast("Time's up — your test was submitted automatically.");
}

// =================================================================
// RESULTS SCREEN
// =================================================================

function renderResults(result) {
  document.getElementById("screen-setup").style.display = "none";
  document.getElementById("screen-test").style.display = "none";
  document.getElementById("screen-results").style.display = "block";
  document.getElementById("pageSubtitle").textContent = "Result";

  document.getElementById("resultScore").textContent = result.correctCount + " / " + result.total;
  document.getElementById("resultPct").textContent = result.pct + "%";
  document.getElementById("statCorrect").textContent = result.correctCount;
  document.getElementById("statWrong").textContent = result.wrongCount;
  document.getElementById("statUnanswered").textContent = result.unansweredCount;

  document.getElementById("metaTotal").textContent = result.total;
  document.getElementById("metaYear").textContent = result.year === "all" ? "All Years" : result.year;
  document.getElementById("metaMode").textContent = result.mode === "cbt" ? "CBT Test Mode" : "Normal Practice Mode";
  document.getElementById("metaTimeUsed").textContent = fmtTime(result.timeUsedSeconds);
  document.getElementById("metaTimeRemaining").textContent =
    result.durationSeconds == null ? "No time limit" : fmtTime(result.timeRemainingSeconds);

  reviewFilter = "wrong";
  document.getElementById("toggleWrongBtn").classList.add("selected");
  document.getElementById("toggleAllBtn").classList.remove("selected");
  renderReviewList(result);
}

function renderReviewList(result) {
  const list = document.getElementById("reviewList");
  list.innerHTML = "";

  const items = result.questions
    .map((q, i) => ({ q, i, given: result.answers[q.id] }))
    .filter(item => reviewFilter === "all" || item.given !== item.q.answer);

  if (items.length === 0) {
    const p = document.createElement("p");
    p.style.cssText = "font-size:13.5px;color:var(--navy-soft);text-align:center;padding:10px 0;";
    p.textContent = "Nothing to show here — every question was answered correctly.";
    list.appendChild(p);
    return;
  }

  items.forEach(({ q, i, given }) => {
    const card = document.createElement("div");
    const unanswered = !given;
    card.className = "review-card" + (unanswered ? " unanswered" : "");

    let body = '<div class="rc-head">Question ' + (i + 1) + " — " + q.year + '</div>';
    body += '<div class="rc-q">' + q.question + '</div>';
    if (unanswered) {
      body += '<div class="rc-answer-line rc-your"><span class="tag">Unanswered</span></div>';
    } else {
      const wasWrong = given !== q.answer;
      body += '<div class="rc-answer-line rc-your' + (wasWrong ? " wrong-tag" : "") + '">Your answer: <span class="tag">' + given + ". " + q.options[given] + '</span></div>';
    }
    body += '<div class="rc-answer-line rc-correct">Correct answer: <span class="tag">' + q.answer + ". " + q.options[q.answer] + '</span></div>';
    body += '<div class="rc-explain"><strong>Explanation:</strong> ' + q.explanation + '</div>';

    card.innerHTML = body;
    list.appendChild(card);
  });
}

document.getElementById("toggleWrongBtn")?.addEventListener("click", () => {
  reviewFilter = "wrong";
  document.getElementById("toggleWrongBtn").classList.add("selected");
  document.getElementById("toggleAllBtn").classList.remove("selected");
  renderReviewList(loadLastResult());
});
document.getElementById("toggleAllBtn")?.addEventListener("click", () => {
  reviewFilter = "all";
  document.getElementById("toggleAllBtn").classList.add("selected");
  document.getElementById("toggleWrongBtn").classList.remove("selected");
  renderReviewList(loadLastResult());
});

document.getElementById("newTestBtn")?.addEventListener("click", () => {
  document.getElementById("screen-results").style.display = "none";
  document.getElementById("screen-setup").style.display = "block";
  document.getElementById("pageSubtitle").textContent = "Real JAMB Chemistry past questions";
  setupState = { numQ: null, year: "all", duration: 30, mode: "practice" };
  renderSetupScreen();
});

// =================================================================
// EXIT PROTECTION while a test is in progress
// =================================================================

function isTestLive() {
  return document.getElementById("screen-test").style.display !== "none";
}

function guardedNavigate(href) {
  if (isTestLive()) {
    pendingNavHref = href;
    document.getElementById("exitModal").classList.add("open");
  } else {
    window.location.href = href;
  }
}

document.getElementById("backBtn")?.addEventListener("click", (e) => {
  e.preventDefault();
  guardedNavigate("subject-practice.html");
});
document.querySelectorAll(".bottom-nav .nav-item").forEach(link => {
  link.addEventListener("click", (e) => {
    if (isTestLive()) {
      e.preventDefault();
      guardedNavigate(link.getAttribute("href"));
    }
  });
});

document.getElementById("stayBtn")?.addEventListener("click", () => {
  document.getElementById("exitModal").classList.remove("open");
  pendingNavHref = null;
});
document.getElementById("leaveBtn")?.addEventListener("click", () => {
  document.getElementById("exitModal").classList.remove("open");
  if (pendingNavHref) window.location.href = pendingNavHref;
});

window.addEventListener("beforeunload", (e) => {
  if (isTestLive()) {
    e.preventDefault();
    e.returnValue = "";
  }
});

document.getElementById("resumeBtn")?.addEventListener("click", resumeTest);
document.getElementById("discardBtn")?.addEventListener("click", discardActiveTest);
document.getElementById("viewLastResultBtn")?.addEventListener("click", () => {
  const last = loadLastResult();
  if (last) renderResults(last);
});

document.getElementById("startTestBtn")?.addEventListener("click", startTest);

// =================================================================
// INIT
// =================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderSetupScreen();
});
