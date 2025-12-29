const transacoes = [
    { item: 'Salário', valor: 3000 },
    { item: 'Aluguel', valor: -1200 }
]

let tblTransacoes = document.querySelector(`#tabelaTransacoes`);
console.log(tblTransacoes);

document.addEventListener('DOMContentLoaded', function inject(){
    let corpoTbl = document.createElement("tbody");
    tblTransacoes.appendChild(corpoTbl);

    transacoes.forEach(e => {
        let linha = document.createElement(`tr`)
        corpoTbl.appendChild(linha)

        let cedula1 = document.createElement(`td`)
        cedula1.textContent = e.item
        let cedula2 = document.createElement(`td`)
        cedula2.textContent = e.valor

        linha.appendChild(cedula1)
        linha.appendChild(cedula2)
    })
})