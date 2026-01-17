let listaProdutos = document.getElementsByTagName('ul')[0];
let menuFiltro = document.getElementById('menuFiltro');

async function consumirAPI() {
    try {
        const url = await fetch('http://localhost:8084/produtos/');
        const dados = await url.json();

        console.log(dados);
        return dados;
    } catch (error) {
        console.error('Erro ao consumir a API:', error);
    }
}

async function exibirProdutos() {
    let resp = await consumirAPI();

    let lista = resp.produtos

    if (Array.isArray(lista)) {
        lista.forEach(e => {
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo}`;
            listaProdutos.appendChild(listaItem);
        })
    } else {
        console.error("O dado recebido não é um array", lista)
    }

}

menuFiltro.addEventListener('change', async (e) => {
    let filtro = e.target.value;

    if (filtro === '1') {
        let resp = await consumirAPI();
        let produtos = resp.produtos;
        let produtosFiltrados = []

        listaProdutos.innerHTML = ' ';
        produtosFiltrados = produtos.filter(p =>{
            return p.preco <= 30
        })

        produtosFiltrados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo}`;
            listaProdutos.appendChild(listaItem);
        })

    } else if (filtro === '2') {
        let resp = await consumirAPI();
        let produtos = resp.produtos;
        let produtosFiltrados = []

        listaProdutos.innerHTML = ' ';
         produtosFiltrados = produtos.filter(p =>{
           return p.preco > 30
        })

        produtosFiltrados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo}`;
            listaProdutos.appendChild(listaItem);
        })
    } else{
        listaProdutos.innerHTML = ' ';
        exibirProdutos();
    }

})

exibirProdutos();