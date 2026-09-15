  const window_ = document.getElementById("chatWindow");
  const input = document.getElementById("chatInput");

  function addBubble(text, who) {
    const b = document.createElement("div");
    b.className = "chat-bubble " + who;
    b.textContent = text;
    window_.appendChild(b);
    window_.scrollTop = window_.scrollHeight;
  }

  function reply(userText) {
    const t = userText.toLowerCase();
    if (t.includes("math")) return "For Mathematics, start with number bases, indices and algebra — they show up most often in past questions. Want a quick practice question?";
    if (t.includes("physics")) return "Physics past questions lean heavily on mechanics and electricity. Review Newton's laws and Ohm's law first.";
    if (t.includes("chemistry")) return "Chemistry favours organic chemistry and periodic table trends. Make sure you know the first 20 elements by heart.";
    if (t.includes("english")) return "For English, practice comprehension speed-reading and revise common idioms and figures of speech.";
    if (t.includes("anxious") || t.includes("anxiety") || t.includes("nervous")) return "That's normal before a big exam. Try timed mock tests so the real format feels familiar, and get enough sleep the night before — cramming late rarely helps.";
    if (t.includes("streak")) return "Keep your streak alive by completing the Daily Challenge every day — it only takes a few minutes!";
    if (t.includes("score") || t.includes("target")) return "You can track your score progress toward your target on the Profile page.";
    return "Good question! For a deep dive, try Subject Practice or Study Materials from the Home screen — I'll keep learning to answer more directly over time.";
  }

  function send() {
    const val = input.value.trim();
    if (!val) return;
    addBubble(val, "me");
    input.value = "";
    setTimeout(() => addBubble(reply(val), "bot"), 500);
  }

  document.getElementById("chatSend").addEventListener("click", send);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") send(); });
