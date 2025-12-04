const button = document.querySelector("button");

button.onclick = (event) => {
    event.preventDefault();
    signUpInorga();
};

async function signUpInorga() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (email === "" || password === "") {
        alert("Preencha TODAS as informações");
        return;
    }

    const user = { email, password };

    // Faz a requisição
    const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();

    // Aqui tratamos sucesso ou erro
    if (!response.ok) {
        // Backend retornou erro
        alert(data.message || "Erro ao fazer login");
        return;
    }

    // Sucesso
    alert("Login realizado com sucesso!");
    console.log(data);
}
