  const questions = [
    { q: "Evaluate: 7 + 3 × (5 - 2)", options: ["30", "16", "24", "18"], answer: 1 },
    { q: "The chemical symbol for Sodium is:", options: ["So", "Sd", "Na", "S"], answer: 2 },
    { q: "Identify the synonym of 'benevolent':", options: ["Cruel", "Kind", "Lazy", "Proud"], answer: 1 },
    { q: "Which organ pumps blood round the body?", options: ["Liver", "Lungs", "Heart", "Kidney"], answer: 2 },
    { q: "The capital of Nigeria is:", options: ["Lagos", "Kano", "Abuja", "Ibadan"], answer: 2 },
    { q: "Solve for x: 2x + 5 = 17", options: ["6", "5", "7", "8"], answer: 0 },
    { q: "Photosynthesis mainly occurs in the:", options: ["Roots", "Stem", "Leaves", "Flower"], answer: 2 },
    { q: "Choose the correct plural of 'child':", options: ["Childs", "Childes", "Children", "Childrens"], answer: 2 },
    { q: "The freezing point of water in Celsius is:", options: ["0°C", "100°C", "32°C", "-10°C"], answer: 0 },
    { q: "Which arm of government makes laws?", options: ["Executive", "Judiciary", "Legislature", "Civil Service"], answer: 2 }
  ];

  let idx = 0, correct = 0;

  document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("introCard").style.display = "none";
    document.getElementById("challengeArea").style.display = "block";
    idx = 0; correct = 0;
    renderQ();
  });

  function renderQ() {
    const item = questions[idx];
    document.getElementById("cNum").textContent = idx + 1;
    document.getElementById("cQ").textContent = item.q;
    const opts = document.getElementById("cOptions");
    opts.innerHTML = "";
    item.options.forEach((opt, i) => {
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML = '<span class="label">' + String.fromCharCode(65+i) + ". " + opt + '</span>';
      row.addEventListener("click", () => {
        if (row.dataset.picked) return;
        row.dataset.picked = "1";
        if (i === item.answer) { row.style.background = "var(--card-mint-bg)"; correct++; }
        else { row.style.background = "var(--card-peach-bg)"; }
        document.getElementById("cXp").textContent = Math.round((correct/10)*100);
        setTimeout(next, 500);
      });
      opts.appendChild(row);
    });
  }

  function next() {
    idx++;
    if (idx >= questions.length) { finish(); return; }
    document.getElementById("cBar").style.width = (idx/10*100) + "%";
    renderQ();
  }

  function finish() {
    document.getElementById("cBar").style.width = "100%";
    document.getElementById("challengeArea").style.display = "none";
    document.getElementById("doneCard").style.display = "block";
    document.getElementById("finalScore").textContent = correct + " / 10";
    const state = SUSU.get();
    const updated = SUSU.completeDailyChallenge();
    SUSU.update({ xp: state.xp + 100 });
    document.getElementById("finalStreak").textContent = updated.streak;
  }
