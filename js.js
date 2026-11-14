// Find button element
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Listen for click event to toggle 'dark' class on body
themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});