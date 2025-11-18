// Auto-mark Section A using memo.json
async function gradeExam() {
  const response = await fetch('memo.json');
  const memo = await response.json();
  let score = 0;

  document.querySelectorAll('.q').forEach(q => {
    const id = q.dataset.id;
    const radios = q.querySelectorAll('input[type="radio"]');
    const text = q.querySelector('input[type="text"], textarea');
    let answer = null;

    if (radios.length) {
      const checked = Array.from(radios).find(r => r.checked);
      answer = checked ? checked.value : null;
    } else if (text) {
      answer = text.value.trim();
    }

    if (answer && memo[id] && answer.toLowerCase() === memo[id].toLowerCase()) {
      score += parseInt(q.dataset.mark, 10);
      q.style.borderColor = 'green';
    } else {
      q.style.borderColor = 'red';
    }
  });

  alert(`Section A score: ${score}/40`);
}
