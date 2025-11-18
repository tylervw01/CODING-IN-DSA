// finalExam.js

let finalHidden = false;
function toggleFinalExamQuestions() {
  const qs = document.querySelectorAll(".finalExam-section .q");
  finalHidden = !finalHidden;
  qs.forEach(q => q.style.display = finalHidden ? "none" : "");
  document.getElementById("finalToggleBtn").textContent = finalHidden
    ? "Show Final Exam Questions"
    : "Hide Final Exam Questions";
}

document.getElementById("finalToggleBtn")?.addEventListener("click", toggleFinalExamQuestions);
