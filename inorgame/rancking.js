// ---------------------------------------------------------
// 1) Buscar ranking do backend
// ---------------------------------------------------------

fetch("http://localhost:3333/ranking")
    .then(res => res.json())
    .then(ranking => {
        console.log("RANKING:", ranking)

        if (!Array.isArray(ranking) || ranking.length === 0) return

        // -----------------------------
        // Top 3 exibidos no layout fixo
        // -----------------------------
        const top1 = ranking[0]
        const top2 = ranking[1]
        const top3 = ranking[2]

        // 1º lugar
        if (top1) {
            document.querySelector(".primeiro h4").textContent = `Pontuação ${top1.score}`
            document.querySelector(".primeiro p").textContent = top1.nickname
        }

        // 2º lugar
        if (top2) {
            document.querySelector(".segundo h4").textContent = `Pontuação ${top2.score}`
            document.querySelector(".segundo p").textContent = top2.nickname
        }

        // 3º lugar
        if (top3) {
            document.querySelector(".terceiro h4").textContent = `Pontuação ${top3.score}`
            document.querySelector(".terceiro p").textContent = top3.nickname
        }

        // ---------------------------------------------------------
        // 2) Criar o restante da lista na parte "Ver mais detalhes"
        // ---------------------------------------------------------

        const container = document.querySelector(".parte_vermais")
        container.innerHTML = "" // limpa o modelo fixo

        ranking.slice(3).forEach(player => {
            const item = document.createElement("div")
            item.classList.add("linha_item")
            item.innerHTML = `
                <div class="avatar_e_caixa">
                    <img class="avatar" src="./assets/imagem_pinguim.png" alt="">
                    <div class="borda_rosa_claro caixa">
                        <h4>Pontuação ${player.score}</h4>
                        <p>${player.nickname}</p>
                    </div>
                </div>
                <div class="estrelas">
                    <img src="./assets/estrela_dog.png" alt="">
                </div>
            `
            container.appendChild(item)
        })
    })
    .catch(err => console.error("Erro ao carregar ranking:", err))



// ---------------------------------------------------------
// 3) Seu código do "ver mais detalhes"
// ---------------------------------------------------------

const verMaisBtn = document.querySelector('.verMais');
const parteVerMais = document.querySelector('.parte_vermais');
const textoBtn = verMaisBtn.querySelector('.texto');
const seta = verMaisBtn.querySelector('.seta');

verMaisBtn.addEventListener('click', () => {
    const estaAberto = parteVerMais.style.display === 'block';

    if (estaAberto) {
        parteVerMais.style.display = 'none';
        textoBtn.textContent = "Ver mais detalhes";
        seta.classList.remove('aberta');
        verMaisBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        parteVerMais.style.display = 'block';
        textoBtn.textContent = "Ver menos detalhes";
        seta.classList.add('aberta');
        parteVerMais.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});
