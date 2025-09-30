
function toggleNav(){
  const nav = document.getElementById('nav');
  nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
}
document.getElementById('year').textContent = new Date().getFullYear();
