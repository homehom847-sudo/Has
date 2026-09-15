  const state = SUSU.get();
  document.getElementById("lvBadge").textContent = "Lv. " + state.level;
  document.getElementById("streakBadge").textContent = state.streak + " Day Streak";
  document.getElementById("streakMeta").textContent = state.streak + " days";
  document.getElementById("curScore").textContent = state.currentScore;
  document.getElementById("tgtScore").textContent = state.aimedScore;
  document.getElementById("scoreBar").style.width = Math.min(100, Math.round((state.currentScore/state.aimedScore)*100)) + "%";

  const list = document.getElementById("analysisWeak");
  state.weakAreas.forEach(w => {
    const color = w.pct < 50 ? "#EF7B4F" : (w.pct < 70 ? "#F0AC1B" : "#1FA766");
    const row = document.createElement("div");
    row.className = "weak-row";
    row.innerHTML = `
      <div class="weak-top"><span>${w.subject}</span><span class="weak-pct">${w.pct}%</span></div>
      <div class="weak-bar-track"><div class="weak-bar-fill" style="width:${w.pct}%;background:${color};"></div></div>
    `;
    list.appendChild(row);
  });
