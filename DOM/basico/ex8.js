let nome = document.getElementById(`inputNome`);
let statusP = document.getElementById(`feedback`);
console.log(nome)
console.log(statusP)

//Evento input -> evento que dispara sempre que valor do input muda
nome.addEventListener("input", function validar(){
    let valorInput = nome.value;
    if(valorInput.length < 5){
        statusP.style.display = `block`
        statusP.style.color = `red`
        statusP.innerHTML = `<strong>Acesso negado... (Senha menor que 5 digitos)</strong>`
    } else{
        statusP.style.display = `block`
        statusP.style.color = `green`
        statusP.innerHTML = `<strong>Acesso válido!</strong>`
    }
})