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

// 랜덤 이모지 카드 뽑기 기능
const bearEmojis = ['🧸', '🐻', '🐻‍❄️', '🐼', '🐨', '🍯', '🐾', '🌟', '🍀', '🍎', '🍰', '🎈'];
const emojiButtons = document.querySelectorAll('.emoji-btn');

emojiButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 이미 뽑았다면 리턴 (한 번만 가능하게)
    if (button.classList.contains('checked')) return;

    const card = button.parentElement;
    const emojiDisplay = card.querySelector('.bear-emoji');
    
    button.innerText = '행운 확인 중...';
    button.disabled = true;

    // 셔플 애니메이션 (0.5초 동안 빠르게 변경)
    let count = 0;
    const shuffle = setInterval(() => {
      emojiDisplay.innerText = bearEmojis[Math.floor(Math.random() * bearEmojis.length)];
      count++;
      
      // 10번 정도 섞은 후 멈춤
      if (count > 10) {
        clearInterval(shuffle);
        const finalEmoji = bearEmojis[Math.floor(Math.random() * bearEmojis.length)];
        emojiDisplay.innerText = finalEmoji;
        
        // 결과 확정 스타일 적용
        button.innerText = '오늘의 행운 확인 완료!';
        button.classList.add('checked');
        emojiDisplay.classList.add('reveal');
      }
    }, 50);
  });
});
