const btn = document.querySelector('.btn-duvidas');
const popup = document.getElementById('popup');
const fechar = document.getElementById('fechar');

btn.addEventListener('click', () => {
  popup.classList.add('show');
});

fechar.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Fechar clicando fora do popup
window.addEventListener('click', (e) => {
  if(e.target === popup) {
    popup.classList.remove('show');
  }
});