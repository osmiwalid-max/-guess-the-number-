let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const result = document.getElementById('result');
const hint = document.getElementById('hint');
const score = document.getElementById('score');

guessBtn.addEventListener('click', () => {
  let guess = Number(guessInput.value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    result.textContent = "من فضلك أدخل رقم بين 1 و 100.";
    return;
  }

  if (guess === secretNumber) {
    result.textContent = `مبروك! رقمك صحيح في محاولة رقم ${attempts}. 🎉`;
    hint.textContent = '';
    score.textContent = `لقد ربحت بعد ${attempts} محاولات.`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else if (attempts >= maxAttempts) {
    result.textContent = `انتهت محاولاتك! الرقم الصحيح كان ${secretNumber}.`;
    hint.textContent = '';
    score.textContent = '';
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else {
    result.textContent = `خطأ! حاول مرة أخرى.`;
    if (guess < secretNumber) {
      hint.textContent = "الرقم الصحيح أكبر من هذا.";
    } else {
      hint.textContent = "الرقم الصحيح أصغر من هذا.";
    }
    score.textContent = `المحاولة رقم: ${attempts} من ${maxAttempts}`;
  }

  guessInput.value = '';
  guessInput.focus();
});
