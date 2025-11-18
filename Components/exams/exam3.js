document.getElementById("exam3Form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Configurable weights
  const weights = {
    mcq: 3,
    tf: 2,
    match: 4,
    fill: 4,
    desc: 21,
  };

  let score = 0;
  const total = 120;

  // Answer keys
  const mcq = { mcq1: "c", mcq2: "b" };
  const tf = { tf1: "F", tf2: "T" };
  const match = { match1: "C", match2: "A", match3: "D", match4: "B" };
  const fill = {
    fill1: ["left", "right"], // accepts "left,right" or "left, right"
    fill2: ["priority queue", "min-heap"], // either accepted
  };

  // MCQ
  Object.keys(mcq).forEach((id) => {
    const sel = document.querySelector(`input[name="${id}"]:checked`);
    if (sel && sel.value.toLowerCase() === mcq[id].toLowerCase()) {
      score += weights.mcq;
    }
  });

  // True/False
  Object.keys(tf).forEach((id) => {
    const sel = document.querySelector(`input[name="${id}"]:checked`);
    if (sel && sel.value.toUpperCase() === tf[id].toUpperCase()) {
      score += weights.tf;
    }
  });

  // Matching (A–D; ignore case and spaces)
  Object.keys(match).forEach((id) => {
    const val = (document.querySelector(`input[name="${id}"]`)?.value || "")
      .trim()
      .toUpperCase();
    if (val === match[id]) score += weights.match;
  });

  // Fill-in-the-blank (supports multiple correct synonyms)
  Object.keys(fill).forEach((id) => {
    const raw = (document.querySelector(`input[name="${id}"]`)?.value || "")
      .toLowerCase()
      .trim();
    if (id === "fill1") {
      const parts = raw.replace(/\s+/g, "").split(",");
      if (
        parts.length === 2 &&
        parts[0] === fill[id][0] &&
        parts[1] === fill[id][1]
      ) {
        score += weights.fill;
      }
    } else {
      if (fill[id].some((ans) => raw === ans)) {
        score += weights.fill;
      }
    }
  });

  // Descriptions (auto-award baseline, manual review recommended)
  // You can set baseline points (e.g., 5) and add manual override later
  const descBaseline = 5; // per description, adjust if needed
  const descResponses = ["desc1", "desc2"].map((n) =>
    (document.querySelector(`textarea[name="${n}"]`)?.value || "").trim()
  );
  descResponses.forEach((resp) => {
    if (resp.length > 0) score += descBaseline;
  });

  // Render result
  const pct = Math.round((score / total) * 100);
  document.getElementById("result").innerHTML =
    `<h2>Your Score: ${score} / ${total} (${pct}%)</h2>` +
    `<p>${
      score >= Math.floor(0.7 * total)
        ? "🔥 Exam‑ready (70%+ mastery)"
        : "Keep pushing — focus the weak sections and go again."
    }</p>`;
});

// exam3.js

// Master toggle for all Exam3 questions
let exam3Hidden = false;
function toggleExam3Questions() {
  const qs = document.querySelectorAll(".exam3-section .q");
  exam3Hidden = !exam3Hidden;
  qs.forEach((q) => (q.style.display = exam3Hidden ? "none" : ""));
  document.getElementById("exam3ToggleBtn").textContent = exam3Hidden
    ? "Show Exam3 Questions"
    : "Hide Exam3 Questions";
}

// Hook up button
document
  .getElementById("exam3ToggleBtn")
  ?.addEventListener("click", toggleExam3Questions);
