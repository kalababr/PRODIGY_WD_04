const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);

// Update button icon based on theme
themeToggle.innerHTML = savedTheme === 'light' 
  ? '<i class="fa-solid fa-moon"></i>' 
  : '<i class="fa-solid fa-sun"></i>';

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Update button icon
  themeToggle.innerHTML = newTheme === 'light' 
    ? '<i class="fa-solid fa-moon"></i>' 
    : '<i class="fa-solid fa-sun"></i>';
});