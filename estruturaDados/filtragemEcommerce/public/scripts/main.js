let listaProdutos = document.getElementsByTagName('ul')[0];
let menuFiltro = document.getElementById('menuFiltro');
let menuAvaliar = document.getElementById('menuAvaliacao');
let menuEstoque = document.getElementById('menuEstoque');
let barraPesquisa = document.querySelector('#pesquisarProduto');

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

    let produtosOrdenados = lista.sort((a,b) => b.avaliacao - a.avaliacao);

    if (Array.isArray(produtosOrdenados)) {
        produtosOrdenados.forEach(e => {
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
            listaProdutos.appendChild(listaItem);
        })
    } else {
        console.error("O dado recebido não é um array", produtosOrdenados)
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

        let produtosOrdenados = produtosFiltrados.sort((a,b) => b.avaliacao - a.avaliacao);

        produtosOrdenados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
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

        let produtosOrdenados = produtosFiltrados.sort((a,b) => b.avaliacao - a.avaliacao);

        produtosOrdenados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
            listaProdutos.appendChild(listaItem);
        })
    } else{
        listaProdutos.innerHTML = ' ';
        exibirProdutos();
    }

})

menuAvaliar.addEventListener('change', async (e) => {
    let filtro = e.target.value;

    if (filtro === '1') {
        let resp = await consumirAPI();
        let produtos = resp.produtos;
        let produtosFiltrados = []

        listaProdutos.innerHTML = ' ';
        produtosFiltrados = produtos.filter(p =>{
            return p.avaliacao > 4.5
        })

        let produtosOrdenados = produtosFiltrados.sort((a,b) => b.avaliacao - a.avaliacao);

        produtosOrdenados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
            listaProdutos.appendChild(listaItem);
        })

    } else if (filtro === '2') {
        let resp = await consumirAPI();
        let produtos = resp.produtos;
        let produtosFiltrados = []

        listaProdutos.innerHTML = ' ';
         produtosFiltrados = produtos.filter(p =>{
           return p.avaliacao <= 4.5
        })

        let produtosOrdenados = produtosFiltrados.sort((a,b) => b.avaliacao - a.avaliacao);

        produtosOrdenados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
            listaProdutos.appendChild(listaItem);
        })
    } else{
        listaProdutos.innerHTML = ' ';
        exibirProdutos();
    }
})

menuEstoque.addEventListener('change', async (e) => {
    let filtro = e.target.value;

    if (filtro === '1') {
        let resp = await consumirAPI();
        let produtos = resp.produtos;
        let produtosFiltrados = []

        listaProdutos.innerHTML = ' ';
        produtosFiltrados = produtos.filter(p =>{
            return p.estoque > 15
        })

        let produtosOrdenados = produtosFiltrados.sort((a,b) => b.avaliacao - a.avaliacao);

        produtosOrdenados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
            listaProdutos.appendChild(listaItem);
        })

    } else if (filtro === '2') {
        let resp = await consumirAPI();
        let produtos = resp.produtos;
        let produtosFiltrados = []

        listaProdutos.innerHTML = ' ';
         produtosFiltrados = produtos.filter(p =>{
           return p.estoque <= 15
        })

        let produtosOrdenados = produtosFiltrados.sort((a,b) => b.avaliacao - a.avaliacao);

        produtosOrdenados.forEach((e) =>{
            let listaItem = document.createElement('li');
            listaItem.innerHTML = `Nome: ${e.nome} | Preço: R$${e.preco} | Categoria: ${e.tipo} | Avaliação: ${e.avaliacao} | Estoque: ${e.estoque}`;
            listaProdutos.appendChild(listaItem);
        })
    } else{
        listaProdutos.innerHTML = ' ';
        exibirProdutos();
    }

})

barraPesquisa.addEventListener('input', async (e) => {
    let busca = e.target.value;
    let resp = await consumirAPI();
    let produtos = resp.produtos;
    let produtosFiltrados = []

    produtos.forEach(a =>{})

    if(busca.lenght > 0){

    } else{
        alert("Digite algo na barra de pesquisa")
    }
})

exibirProdutos();