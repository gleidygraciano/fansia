const camino = document.querySelector('.camino');
const brillo = document.querySelector('.brillo');
const imagen = document.querySelector('.camino');

camino.addEventListener('transitionend', () => {
  const caminoRect = camino.getBoundingClientRect();
  const brilloRect = brillo.getBoundingClientRect();
  
  if (caminoRect.left + caminoRect.width >= brilloRect.left &&
      caminoRect.top + caminoRect.height >= brilloRect.top &&
      caminoRect.left <= brilloRect.left + brilloRect.width &&
      caminoRect.top <= brilloRect.top + brilloRect.height) {
    brillo.style.opacity = 0;
  }
});







imagen.addEventListener('click', () => {
  imagen.style.left = '50%';
  setTimeout(() => {
    imagen.classList.add('desvanecer');
  }, 500); // tiempo después de que termine el movimiento
}); 