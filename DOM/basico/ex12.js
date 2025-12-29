let conteudo = document.querySelector(`#caixaConteudo`);
console.log(conteudo);
let caixa = document.querySelector(`#seletorTema`);
console.log(caixa);

//lógica

let estilos = ['default', 'dark', 'light', 'fancy'];

caixa.addEventListener('change', function mudarTema() {
    let opcao = caixa.selectedIndex;
    let textoOpcao = caixa[opcao].text;

    for (let i = 0; i < estilos.length; i++) {
        conteudo.classList.remove(estilos[i]);
    }

    conteudo.classList.add(textoOpcao);
})