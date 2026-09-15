  const sampleQuestions = {
    "Mathematics": { q: "Simplify: 3(x - 2) + 4x", options: ["7x - 6", "7x - 2", "3x - 6", "x - 6"], answer: 0 },
    "English Language": { q: "Choose the option nearest in meaning to: 'candid'", options: ["Frank", "Angry", "Silent", "Shy"], answer: 0 },
    "Physics": { q: "The SI unit of electric current is:", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: 1 },
    "Chemistry": { q: "The pH of a neutral solution at 25°C is:", options: ["0", "14", "7", "1"], answer: 2 },
    "Biology": { q: "The powerhouse of the cell is the:", options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"], answer: 2 },
    "Government": { q: "The term 'separation of powers' was propounded by:", options: ["John Locke", "Montesquieu", "Rousseau", "Aristotle"], answer: 1 },
    "Economics": { q: "A rise in the general price level is called:", options: ["Deflation", "Inflation", "Recession", "Depreciation"], answer: 1 },
    "Literature-in-English": { q: "A play written mainly in verse is called:", options: ["Prose drama", "Poetic drama", "Farce", "Comedy"], answer: 1 }
  };

  document.querySelectorAll("#subjectList .pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const subject = btn.getAttribute("data-subject");

      // Chemistry has a dedicated CBT system built from real JAMB past
      // questions — send it there instead of the generic inline demo.
      if (subject === "Chemistry") {
        window.location.href = "chemistry-cbt.html";
        return;
      }

      const data = sampleQuestions[subject];
      document.getElementById("practiceArea").style.display = "block";
      document.getElementById("practiceSubjectLabel").textContent = subject + " Practice";
      const box = document.getElementById("questionBox");
      box.innerHTML = "";
      const qEl = document.createElement("p");
      qEl.style.fontWeight = "700";
      qEl.style.fontSize = "14.5px";
      qEl.textContent = "Q1. " + data.q;
      box.appendChild(qEl);
      data.options.forEach((opt, i) => {
        const row = document.createElement("div");
        row.className = "list-row";
        row.style.cursor = "pointer";
        row.innerHTML = '<span class="label">' + String.fromCharCode(65+i) + ". " + opt + '</span>';
        row.addEventListener("click", () => {
          if (i === data.answer) {
            row.style.background = "var(--card-mint-bg)";
            SUSU.toast("Correct! Well done.");
          } else {
            row.style.background = "var(--card-peach-bg)";
            SUSU.toast("Not quite — keep practicing.");
          }
        });
        box.appendChild(row);
      });
      document.getElementById("practiceArea").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
