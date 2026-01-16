function filtrarProdutos(p){
    const produtosAbaixode30 = p.filter(produto => produto.preco < 30);
    const produtosAcimade30 = p.filter(produto => produto.preco >= 30);

     return {
        produtosAbaixode30,
        produtosAcimade30
    }

}
function ordenarPorAvaliacao(abaixo30,acima30){
    const ordenarAbaixo30 = abaixo30.sort((a,b) => b.avaliacao - a.avaliacao);
    const ordenarAcima30 = acima30.sort((a,b) => b.avaliacao - a.avaliacao);

    return {    
        ordenarAbaixo30,
        ordenarAcima30
    }
}
export { filtrarProdutos, ordenarPorAvaliacao };