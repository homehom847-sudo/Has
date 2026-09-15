  const notes = {
    alg: { title: "Algebra Cheat Sheet", body: "Key identities: (a+b)² = a² + 2ab + b². Quadratic formula: x = [-b ± √(b²-4ac)] / 2a. Always factor before applying the formula where possible, and check both roots against the original equation." },
    grammar: { title: "English Grammar Essentials", body: "Focus on subject-verb agreement, tenses, and correct use of prepositions. For JAMB, practice identifying the odd-one-out in phonetics and picking the option nearest in meaning for lexis and structure." },
    organic: { title: "Organic Chemistry Basics", body: "Learn the homologous series for alkanes, alkenes and alkynes, their general formulas, and naming rules (IUPAC nomenclature). Practice drawing structural isomers for compounds up to C5." },
    mechanics: { title: "Mechanics Formulas", body: "Newton's second law: F = ma. Equations of motion: v = u + at, s = ut + ½at², v² = u² + 2as. Always state units and convert to SI before substituting into formulas." }
  };

  document.querySelectorAll("[data-note]").forEach(row => {
    row.addEventListener("click", () => {
      const n = notes[row.getAttribute("data-note")];
      document.getElementById("noteViewer").style.display = "block";
      document.getElementById("noteTitle").textContent = n.title;
      document.getElementById("noteBody").textContent = n.body;
      document.getElementById("noteViewer").scrollIntoView({ behavior: "smooth" });
    });
  });
