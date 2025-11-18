// quiz.js — Final Boss Edition (Answers Toggle)

// =======================
// Answer Key (40 Qs, 3 marks each)
// =======================
const answers = {
  // Unit 1
  q1: "d",
  q2: "b",
  q3: "c",
  q4: "b",
  // Unit 2
  q5: "b",
  q6: "b",
  q7: "d",
  q8: "a",
  // Unit 3
  q9: "b",
  q10: "b",
  q11: "b",
  q12: "a",
  // Unit 4
  q13: "a",
  q14: "c",
  q15: "b",
  q16: "d",
  // Unit 5
  q17: "a",
  q18: "b",
  q19: "c",
  q20: "d",
  // Unit 6
  q21: "c",
  q22: "b",
  q23: "a",
  q24: "d",
  // Unit 7
  q25: "c",
  q26: "b",
  q27: "a",
  q28: "d",
  // Unit 8
  q29: "b",
  q30: "a",
  q31: "c",
  q32: "d",
  // Unit 9
  q33: "a",
  q34: "b",
  q35: "c",
  q36: "d",
  // Unit 10
  q37: "b",
  q38: "a",
  q39: "c",
  q40: "d",
};

// =======================
// Quiz Scoring
// =======================
document.getElementById("quizForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const totalMarks = 120;
  const marksPerQuestion = 3;

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score += marksPerQuestion;
    }
  }

  document.getElementById("result").innerHTML =
    `<h2>Your Score: ${score} / ${totalMarks}</h2>` +
    `<p>${
      score >= 84
        ? "🔥 Exam‑ready (70%+ mastery)"
        : "Keep revising — you’re close!"
    }</p>`;
});

// =======================
// Reset Quiz
// =======================
function resetQuiz() {
  document
    .querySelectorAll(".quiz-section input[type=radio]")
    .forEach((r) => (r.checked = false));
  document.getElementById("result").innerHTML = "";
}
document.getElementById("resetQuizBtn")?.addEventListener("click", resetQuiz);

// =======================
// Master Toggle (Show/Hide all ANSWERS)
// =======================
let answersHidden = true; // start hidden
function toggleAnswers() {
  const ans = document.querySelectorAll(".answer"); // target answer spans/divs
  answersHidden = !answersHidden;
  ans.forEach((a) => (a.style.display = answersHidden ? "none" : ""));
  document.getElementById("answerToggleBtn").textContent = answersHidden
    ? "Show Answers"
    : "Hide Answers";
}
document
  .getElementById("answerToggleBtn")
  ?.addEventListener("click", toggleAnswers);

// =======================
// Init defaults
// =======================
document.getElementById("answerToggleBtn").textContent = "Show Answers";
