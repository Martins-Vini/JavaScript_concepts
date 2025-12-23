let btnOrdenar = document.querySelector("button#ordenar");
let lista = document.querySelector("ul#listaPrioridades");
console.log(btnOrdenar)
console.log(lista)

btnOrdenar.addEventListener('click', function sort(){
    let itens = Array.from(lista.children);
    console.log(itens)

    let listaOrdenada = itens.sort((a,b) =>{
        let propA = Number(a.dataset.prioridade);
        let propB = Number(b.dataset.prioridade);

        return propA-propB;
    })
    console.log(listaOrdenada);

    listaOrdenada.forEach(item => {
        lista.appendChild(item)
    })
})