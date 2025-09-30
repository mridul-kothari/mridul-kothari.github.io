// Mobile nav toggle
function toggleNav() {
  const nav = document.getElementById('nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
