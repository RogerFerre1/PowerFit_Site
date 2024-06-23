const form = document.querySelector("#form")
const nomeInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#telefone")
const planoSelect = document.querySelector("#plano")

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    if (nomeInput.value === "") {
        alert("Por favor, digite seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, digite seu e-mail");
        return;
    }

    if (telInput.value === "") {
        alert("Por favor, digite seu telefone");
        return;
    }
    
    if(planoSelect.value ===""){
        alert("Por favor, selecione o plano desejado");
        return;
    }

    form.submit();
});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}