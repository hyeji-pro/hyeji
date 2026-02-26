const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// 저장된 테마 불러오기
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// 버튼 클릭 시 테마 전환
themeToggle.addEventListener('click', () => {
  const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
