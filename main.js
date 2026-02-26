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

// 랜덤 이모지 뽑기 (한 번만 가능)
const bearEmojis = ['🧸', '🐻', '🐻‍❄️', '🐼', '🐨', '🍯', '🐾', '🌟', '🍀', '🍎', '🍰', '🎈'];
const emojiButtons = document.querySelectorAll('.emoji-btn');

emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 이미 뽑은 버튼이면 아무것도 하지 않음
    if (button.classList.contains('done')) return;

    const randomEmoji = bearEmojis[Math.floor(Math.random() * bearEmojis.length)];
    const card = button.parentElement;
    const emojiDisplay = card.querySelector('.bear-emoji');
    
    // 이모지 변경 및 효과
    emojiDisplay.innerText = randomEmoji;
    emojiDisplay.style.transform = 'scale(1.4)';
    setTimeout(() => {
      emojiDisplay.style.transform = 'scale(1)';
    }, 200);

    // 버튼 상태 변경 (확정)
    button.innerText = '오늘의 행운 확인 완료!';
    button.classList.add('done');
    button.style.opacity = '0.5';
    button.style.cursor = 'default';
  });
});
