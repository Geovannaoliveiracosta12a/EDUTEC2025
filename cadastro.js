const button = document.querySelector("button")
button.onclick = (event) =>{
    event.preventDefault()
    signUpInorga()

}

function signUpInorga(){
    const name = document.querySelector("#name"). value
    const email = document.querySelector("#email"). value
    const age = document.querySelector("#age"). value
    const nickname = document.querySelector("#nickname"). value
    const password = document.querySelector("#name"). value

    if (name === "" || email === "" || age === "" || nickname === "" || password === ""){
        alert("Preencha TODAS as informaões")
        return
    }

    const user = {
        name,
        email,
        age,
        nickname,
        password
    }
    console.log(user)
}