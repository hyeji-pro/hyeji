const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 저장된 테마 불러오기
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// 버튼 클릭 시 테마 전환
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // 상태 저장
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
