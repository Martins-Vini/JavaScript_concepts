let button = document.querySelector(`button#btn`);
let buttonNormal = document.querySelector(`button#btn`);
let botaoClicado = false;

//Funções JavaScript que demandam um elemento ter um estado depois voltar ao estado original usa somente uma função com condicional de estado

function clique() {
    if (botaoClicado == false) {
        botaoClicado = true
        button.style.width = "200px"
        button.style.height = "150px"
        button.style.color = "black"
        button.style.backgroundColor = "whitesmoke"
        button.innerHTML = "<strong>Botão clicado!</strong>"

    } else if(botaoClicado == true){
        botaoClicado = false
        button.style.width = "90px"
        button.style.height = "25px"
        button.style.color = "white"
        button.style.backgroundColor = "blueviolet"
        button.innerHTML = "Clique aqui!"
    }
}





