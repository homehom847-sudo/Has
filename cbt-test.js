  const bank = [
    { q: "Simplify: (2x²)(3x³)", options: ["6x⁵", "5x⁶", "6x⁶", "5x⁵"], answer: 0 },
    { q: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 2 },
    { q: "Choose the correctly spelt word:", options: ["Necesary", "Neccessary", "Necessary", "Neccesary"], answer: 2 },
    { q: "The process by which plants lose water vapour is:", options: ["Respiration", "Transpiration", "Photosynthesis", "Osmosis"], answer: 1 },
    { q: "Nigeria gained independence in:", options: ["1957", "1960", "1963", "1966"], answer: 1 }
  ];

  let idx = 0, score = 0;

  function startExam(label) {
    document.getElementById("examArea").style.display = "block";
    document.getElementById("examTitle").textContent = label;
    idx = 0; score = 0;
    renderQ();
    document.getElementById("examArea").scrollIntoView({ behavior: "smooth" });
  }

  function renderQ() {
    const item = bank[idx];
    document.getElementById("qNum").textContent = idx + 1;
    document.getElementById("qScore").textContent = "Score: " + score;
    document.getElementById("examQ").textContent = "Q" + (idx+1) + ". " + item.q;
    const opts = document.getElementById("examOptions");
    opts.innerHTML = "";
    item.options.forEach((opt, i) => {
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML = '<span class="label">' + String.fromCharCode(65+i) + ". " + opt + '</span>';
      row.addEventListener("click", () => {
        if (row.dataset.picked) return;
        row.dataset.picked = "1";
        if (i === item.answer) { row.style.background = "var(--card-mint-bg)"; score++; }
        else { row.style.background = "var(--card-peach-bg)"; }
        document.getElementById("qScore").textContent = "Score: " + score;
      });
      opts.appendChild(row);
    });
  }

  document.getElementById("nextQ").addEventListener("click", () => {
    idx = (idx + 1) % bank.length;
    renderQ();
  });

  document.querySelectorAll('[data-mode="year"]').forEach(btn => {
    btn.addEventListener("click", () => startExam("JAMB " + btn.dataset.value + " Past Questions"));
  });
  document.getElementById("startRandom").addEventListener("click", () => startExam("Random CBT Mock"));

  // simple countdown
  let seconds = 40 * 60;
  setInterval(() => {
    if (document.getElementById("examArea").style.display !== "block") return;
    seconds = Math.max(0, seconds - 1);
    const m = String(Math.floor(seconds/60)).padStart(2,"0");
    const s = String(seconds%60).padStart(2,"0");
    document.getElementById("timer").textContent = "Time left: " + m + ":" + s;
  }, 1000);
