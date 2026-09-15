  const state = SUSU.get();
  const list = document.getElementById("weakList");
  const sorted = [...state.weakAreas].sort((a,b) => a.pct - b.pct);

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

  const weakest = sorted[0];
  document.getElementById("recommendation").textContent =
    weakest.subject + " is your weakest area at " + weakest.pct + "% accuracy — a focused 20-minute session here will help the most.";
  document.getElementById("practiceLink").textContent = "Practice " + weakest.subject;
