let lista = document.querySelector("#listaProdutos");
let filtro = document.querySelector("#filtroBuscar");

console.log(lista)
console.log(filtro)

filtro.addEventListener("keyup", function filtrarProduto() {
    if (filtro.value.length === 0) {
        window.alert(`Insira filtragem válida`)
    } else {
        for (let i = 0; i < lista.children.length; i++) {
            if (lista.children[i].textContent == filtro.value) {
                lista.children[i].style.display = `list-item`
            } else{
                lista.children[i].style.display = `none`
            }
        }
    }
});