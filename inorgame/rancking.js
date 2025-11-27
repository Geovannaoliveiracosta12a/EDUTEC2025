
const verMaisBtn = document.querySelector('.verMais');
const parteVerMais = document.querySelector('.parte_vermais');
const textoBtn = verMaisBtn.querySelector('.texto');
const seta = verMaisBtn.querySelector('.seta');


verMaisBtn.addEventListener('click', () => {
    const estaAberto = parteVerMais.style.display === 'block';


    if (estaAberto) {
        // Fechar
        parteVerMais.style.display = 'none';
        textoBtn.textContent = "Ver mais detalhes";
        seta.classList.remove('aberta');


        // ⬆ Subir a tela suavemente
        verMaisBtn.scrollIntoView({ behavior: "smooth", block: "center" });


    } else {
     
        parteVerMais.style.display = 'block';
        textoBtn.textContent = "Ver menos detalhes";
        seta.classList.add('aberta');


        
        parteVerMais.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});
