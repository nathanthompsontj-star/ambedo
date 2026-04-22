// Fade in the coords scene on the UTC page
const coords = document.getElementById('scene-coords');
if (coords) {
  requestAnimationFrame(() => coords.classList.add('active'));
}
