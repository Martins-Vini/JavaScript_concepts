//Criação com HTML dinâmico

let campo = document.querySelector(`#novoItem`);
console.log(campo)
let addItem = document.querySelector(`#add`);
console.log(addItem);
let lista = document.querySelector(`#listaCompras`);
console.log(lista);
let p = document.querySelector(`#aviso`);

addItem.addEventListener('click', function adicionar() {
    let textoInput = campo.value;
    if (textoInput.length !== 0) {
        let novoItem = document.createElement(`li`);
        novoItem.textContent = textoInput;

        lista.appendChild(novoItem);
    } else{
        p.style.display = `block`;
        p.style.color = `red`;
        p.innerHTML = `Insira um item válido`
    }
});