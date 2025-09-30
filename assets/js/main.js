// Toggle navigation menu for mobile
function toggleNav() {
  const nav = document.getElementById('nav');
  if (nav.style.display === 'flex' || nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
}

// Update year in footer automatically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
