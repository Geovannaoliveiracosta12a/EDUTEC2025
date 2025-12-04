// Pega o nome do usuário logado/cadastrado
const playerName = localStorage.getItem("userName") || "Anônimo";

// ---------------------------------------------------------

const quizDataOriginal = [
    {
        question: "Qual é a fórmula geral dos ácidos oxigenados?",
        options: ["HOX", "HX", "XO", "XOH"],
        answer: "HOX",
        explanation: "Ácidos oxigenados possuem oxigênio ligado ao hidrogênio e outro elemento X, formando HOX."
    },
    {
        question: "Qual elemento sempre está presente em uma base?",
        options: ["Hidrogênio", "Oxigênio", "Metal", "Carbono"],
        answer: "Metal",
        explanation: "Bases geralmente possuem um metal ligado a OH⁻, por isso o metal está presente."
    },
    {
        question: "Qual é o ácido presente no vinagre?",
        options: ["Ácido acético", "Ácido sulfúrico", "Ácido nítrico", "Ácido clorídrico"],
        answer: "Ácido acético",
        explanation: "O vinagre é uma solução aquosa de ácido acético (CH3COOH)."
    },
    {
        question: "Qual composto é um óxido ácido?",
        options: ["SO₃", "Na₂O", "CaO", "Al₂O₃"],
        answer: "SO₃",
        explanation: "SO₃ reage com água formando ácido sulfúrico, caracterizando óxido ácido."
    },
    {
        question: "HCl em água forma:",
        options: ["Base", "Sal", "Ácido", "Óxido"],
        answer: "Ácido",
        explanation: "HCl é um ácido forte e em água libera H⁺, sendo classificado como ácido."
    },
    {
        question: "Qual é a característica de um sal neutro?",
        options: [
            "Formado por ácido forte e base forte",
            "Formado por ácido fraco e base forte",
            "Formado por ácido forte e base fraca",
            "Formado por ácido fraco e base fraca"
        ],
        answer: "Formado por ácido forte e base forte",
        explanation: "Esse tipo de sal não altera o pH da solução."
    },
    {
        question: "Qual é a classificação do NH₃ em água?",
        options: ["Ácido", "Base", "Óxido", "Sal"],
        answer: "Base",
        explanation: "NH₃ aceita prótons, formando NH₄⁺, sendo uma base de Brønsted."
    },
    {
        question: "O CO₂ reage com água formando:",
        options: ["H₂CO₃", "HCl", "NaOH", "H₂SO₄"],
        answer: "H₂CO₃",
        explanation: "CO₂ + H₂O → H₂CO₃, que é o ácido carbônico."
    },
    {
        question: "Qual é o nome do NaOH?",
        options: ["Hidróxido de sódio", "Cloreto de sódio", "Óxido de sódio", "Ácido de sódio"],
        answer: "Hidróxido de sódio",
        explanation: "NaOH é uma base forte conhecida como hidróxido de sódio."
    },
    {
        question: "Qual das alternativas é um ácido forte?",
        options: ["HNO₃", "H₂CO₃", "CH₃COOH", "HF"],
        answer: "HNO₃",
        explanation: "Ácido nítrico é um ácido forte, totalmente ionizado em solução."
    }
];

let quizData = [...quizDataOriginal];
let currentQuestion = 0;
let score = 0;
let timer = 10;
let interval;
let pendingQuestions = [];

// ---------------------------------------------------------

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const resultEl = document.getElementById('result');

function loadQuestion() {
    clearInterval(interval);

    timer = 10;
    timerEl.textContent = `Tempo: ${timer}s`;
    interval = setInterval(updateTimer, 1000);

    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.innerHTML = '';

    current.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option, btn);
        answersEl.appendChild(btn);
    });

    progressEl.style.width = `${(currentQuestion / quizDataOriginal.length) * 100}%`;
}

function updateTimer() {
    timer--;
    timerEl.textContent = `Tempo: ${timer}s`;

    if (timer <= 0) {
        clearInterval(interval);
        pendingQuestions.push(quizData[currentQuestion]);
        nextQuestion();
    }
}

function selectAnswer(option, btn) {
    clearInterval(interval);
    disableButtons();

    const correct = quizData[currentQuestion].answer;

    if (option === correct) {
        btn.classList.add("correct");
        score++;
        setTimeout(nextQuestion, 800);
    } else {
        btn.classList.add("wrong");
        showExplanation(btn, quizData[currentQuestion].explanation);
    }
}

function disableButtons() {
    const buttons = answersEl.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}

function showExplanation(btn, text) {
    const box = document.createElement('div');
    box.className = 'explanation-box';
    box.innerHTML = `<p>${text}</p>`;

    const advanceBtn = document.createElement('button');
    advanceBtn.textContent = 'Avançar';
    advanceBtn.onclick = () => {
        box.remove();
        nextQuestion();
    };

    box.appendChild(advanceBtn);
    btn.insertAdjacentElement('afterend', box);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= quizData.length) {
        if (pendingQuestions.length > 0) {
            quizData = [...pendingQuestions];
            pendingQuestions = [];
            currentQuestion = 0;
        } else {
            showResult();
            return;
        }
    }

    loadQuestion();
}

function showResult() {
    clearInterval(interval);

    questionEl.style.display = "none";
    answersEl.style.display = "none";
    timerEl.style.display = "none";

    resultEl.textContent = `🔥 ${playerName}, você acertou ${score} de ${quizDataOriginal.length} perguntas!`;

    const endButtons = document.getElementById("end-buttons");
    endButtons.style.display = "flex";
    endButtons.style.marginTop = "2rem";

    document.getElementById("exit-btn").onclick = () => location.reload();
    document.getElementById("restart-btn").onclick = restartGame;

    fetch("http://localhost:3333/score", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id: localStorage.getItem("userId"),
        score: score
    })
})

}

function restartGame() {
    clearInterval(interval);

    document.getElementById("end-buttons").style.display = "none";

    questionEl.style.display = "block";
    answersEl.style.display = "flex";
    timerEl.style.display = "block";

    quizData = [...quizDataOriginal];
    currentQuestion = 0;
    score = 0;
    pendingQuestions = [];
    resultEl.textContent = '';
    progressEl.style.width = "0%";

    loadQuestion();
}

loadQuestion();
