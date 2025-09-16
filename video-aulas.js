const  videos = {

    Ácidos: [

      { titulo: "WHAT ARE ACIDS AND THEIR CLASSIFICATIONS | Chemistry Summary for Enem", professor: "Prof. Felipe Sobis", id: "P9ZZ0K-yHS4" },

      { titulo: "Ácidos - Brasil Escola", professor: " Prof. Murilo Xoven", id: "4ggxiI48QOk" },

      { titulo: "ACIDS - INORGANIC FUNCTIONS", professor: "Prof. Marcos Ennes", id: "jJ0PfLUBKnQ" },

      { titulo: "ÁCIDOS - Funções Inorgânicas", professor: "Prof. Zanin", id: "KadylqXJ0Jk" },

      { titulo: "ÁCIDOS - AULA COMPLETA ", professor: " Prof. Diego Fares", id: "ezy3mlOzO2s" },

      { titulo: "Acid Classifications - Brasil Escola", professor: "Prof. Murilo Xoven", id: "3d7s-Rfqsk4" },

      { titulo: "ÁCIDOS #1 [Resolvendo Questões]", professor: "Prof. Deydson Azevedo", id: "1GPGtt0Oic8" }

    ],

    Bases: [

      { titulo: "NOMENCLATURE OF BASES", professor: "Prof. Felipe Sobis", id: "8SDwEe3nM80" },

      { titulo: "Funções Inorgânicas: Bases (1/1) [Química Geral]", professor: "Prof. Paulo Valim", id: "FzClnCk3QQ8" },

      { titulo: "BASES - INORGANIC FUNCTIONS", professor: "Prof. Marcos Ennees", id: "gHYNjKn_gpI" },

      { titulo: "WHAT ARE BASES", professor: "Prof. Felipe Sobis", id: "KjkS7tMsbgM" },

      { titulo: "Bases - Brazil School", professor: "Prof. Murilo Xoven", id: "IKoUj8okqPQ" },

      { titulo: "BASES - Funções Inorgânicas - Hidróxidos", professor: "Prof. Zanin", id: "5icsx4H6bpo" },

      { titulo: "BASES - Exercício Resolvido 01", professor: "Prof. Bruno Carvalho", id: "8EI33luoxeE" }

    ],

    Sais: [

      { titulo: "INORGANIC FUNCTIONS - SALTS", professor: "Prof. Marcos Ennees", id: "TKn780feTFE" },

      { titulo: "Salts: Definition and Classifications - Brasil Escola", professor: "Prof. Murilo Xoven", id: "52ABzqF9PBo" },

      { titulo: "Salt Classification - Brasil Escola", professor: "Prof.  Diogo Lopes", id: "_Kl8JrWOIg0" },

      { titulo: "Química Simples #71 - Sais ", professor: "Prof. Vinicíos Pavanelli", id: "gQNybvvzpsA" },

      { titulo: "SALTS: NEUTRALIZATION REACTION", professor: "Prof. Felipe Sobis", id: "2rietheHZwQ" },

      { titulo: "SALTS - ACID BASE NEUTRALIZATION", professor: "Prof. Michel ", id: "RLpodQNzeI0" },

      { titulo: "Exercícios sobre Sais", professor: "Prof. Evandro ", id: "vRg-0k8zRzc" }

    ],

    óxidos: [

      { titulo: "Classification of Oxides - Brasil Escola", professor: "Prof. Diogo Lopes", id: "u1GTD33WKmg" },

      { titulo: "INORGANIC FUNCTIONS - OXIDES", professor: "Prof. Marcos Ennees", id: "TIYXQER1hAg" },

      { titulo: "Óxidos (11/12) [Funções Inorgânicas]", professor: "Prof. Paulo Valim", id: "4hUS-kOgySc" },

      { titulo: "Funções Inorgânicas: Óxidos", professor: "Prof. Paulo Valim", id: "t3xuXIVpqoA" },

      { titulo: "Funções Inorgânicas: Óxidos", professor: "Prof. Paulo Valim", id: "ZsUDg9uNpkg" },

      { titulo: "OXIDES I - Acid and basic oxides", professor: "Prof. Michel", id: "JfTWSnjhoT0" },

      { titulo: "Exercícios sobre Óxidos - 9 ano", professor: "Prof. Evandro", id: "Y6PKmsVfvL4" }

    ],

    Balanciamento: [

      { titulo: "BALANCING BY TRIAL", professor: "Prof. Felipe Sobis", id: "Ac4AY_AfRkk" },

      { titulo: "Balancing Chemical Equations - Brasil Escola", professor: "Prof. Murilo Xoven", id: "yF8o5vTOGc4" },

      { titulo: " Balanceamento de Equações Químicas", professor: "Prof. Paulo Valim", id: "z959zZSDb6Q" },

      { titulo: "BALANCEAMENTO DE EQUAÇÕES QUÍMICAS", professor: "Prof. Diego Fares", id: "BeZ8rJh3eug" },

      { titulo: "Química - Balanceamento de Equações", professor: "Prof. Eduardo Silva", id: "qjjpmI2MTfA" },

      { titulo: "ENEM 2021 - BALANCEAMENTO DE EQUAÇÕES", professor: "Prof. Michel", id: "UrAkzpE5IYY" },

      { titulo: "Balanceamento de equações químicas", professor: "Prof. Gabriel", id: "elpuLN3CwtI" }

    ]

  };

 

 

  function openInNewTab(url) {

    window.open(url, "_blank");

  }

 

 

  function criarCarrossel(categoriaId, listaVideos) {

    const container = document.getElementById(categoriaId);

    if (!container) return;

 

 

    container.innerHTML = '';

 

 

    listaVideos.forEach(video => {

      const card = document.createElement("div");

      card.className = "card";

      card.onclick = () => openInNewTab(`https://www.youtube.com/watch?v=${video.id}`);

      card.innerHTML = `

        <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.titulo}">

        <div class="info">

          <h2>${video.titulo}</h2>

          <p>${video.professor}</p>

        </div>

      `;

      container.appendChild(card);

    });

  }

 

 

  // Criar todos os carrosséis

  criarCarrossel("container-acidos", videos.Ácidos);

  criarCarrossel("container-bases", videos.Bases);

  criarCarrossel("container-sais", videos.Sais);

  criarCarrossel("container-oxidos", videos.óxidos);

  criarCarrossel("container-balanciamento", videos.Balanciamento);

 

 

  // Habilitar arrastar com mouse e touch em todos os carrosséis

  const carrosseis = document.querySelectorAll('.container');

 

 

  carrosseis.forEach(carrossel => {

    let isDragging = false;

    let startX;

    let scrollLeft;

 

 

    // Sempre mostrar o cursor 'grab'

    carrossel.style.cursor = 'grab';

 

 

    carrossel.addEventListener('mousedown', (e) => {

      isDragging = true;

      startX = e.pageX - carrossel.offsetLeft;

      scrollLeft = carrossel.scrollLeft;

      carrossel.style.cursor = 'grabbing';

    });

 

 

    carrossel.addEventListener('mouseleave', () => {

      isDragging = false;

      carrossel.style.cursor = 'grab';

    });

 

 

    carrossel.addEventListener('mouseup', () => {

      isDragging = false;

      carrossel.style.cursor = 'grab';

    });

 

 

    carrossel.addEventListener('mousemove', (e) => {

      if (!isDragging) return;

      e.preventDefault();

      const x = e.pageX - carrossel.offsetLeft;

      const walk = (x - startX) * 1.5; 

      carrossel.scrollLeft = scrollLeft - walk;

    });

 

 

    carrossel.addEventListener('touchstart', (e) => {

      isDragging = true;

      startX = e.touches[0].pageX;

      scrollLeft = carrossel.scrollLeft;

    });

 

 

    carrossel.addEventListener('touchmove', (e) => {

      if (!isDragging) return;

      const x = e.touches[0].pageX;

      const walk = (x - startX) * 1.5;

      carrossel.scrollLeft = scrollLeft - walk;

    });

 

 

    carrossel.addEventListener('touchend', () => {

      isDragging = false;

    });

  });

