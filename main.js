console.log('main.js loaded!');

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 저장된 테마 불러오기
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// 테마 전환
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}

// 랜덤 이모지 기능
const bearEmojis = ['🧸', '🐻', '🐻‍❄️', '🐼', '🐨', '🍯', '🐾', '🌟', '🍀', '🍎', '🍰', '🎈'];
const emojiButtons = document.querySelectorAll('.emoji-btn');

emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    const randomEmoji = bearEmojis[Math.floor(Math.random() * bearEmojis.length)];
    const card = button.parentElement;
    const emojiDisplay = card.querySelector('.bear-emoji');
    
    // 원래 이모지 저장 (처음 한 번만)
    if (!button.dataset.originalEmoji) {
      button.dataset.originalEmoji = emojiDisplay.innerText;
    }

    // 이모지 변경 애니메이션 효과
    emojiDisplay.style.transform = 'scale(1.5)';
    emojiDisplay.innerText = randomEmoji;
    
    setTimeout(() => {
      emojiDisplay.style.transform = 'scale(1)';
    }, 200);
  });
});
