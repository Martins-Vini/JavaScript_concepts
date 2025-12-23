let lista = document.querySelector(`#listaTarefas`);
console.log(lista);
let adicionar = document.querySelector(`#add`);
console.log(adicionar);
let campoItem = document.querySelector(`#campoItem`);
console.log(campoItem);
let principal = document.getElementsByTagName("main")[0];
let aviso = document.createElement("p");
aviso.classList.add("aviso");
principal.appendChild(aviso);

adicionar.addEventListener('click', function adicionarLista() {
    let textoInput = campoItem.value;
    if (textoInput.length === 0) {
        aviso.style.color = `red`
        aviso.innerHTML = `Insira um item válido na lista!`
    } else {
        aviso.innerHTML = ``
        let remove = document.createElement("button");
        let item = document.createElement("li");

        lista.appendChild(item);
        item.innerHTML = textoInput;

        item.appendChild(remove);

        remove.classList.add("btn_remover")
        remove.innerHTML = `<strong>X</strong>`;

       remove.addEventListener('click', function removerLista() {
            item.remove()
        })
    }
});
