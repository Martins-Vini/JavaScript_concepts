let button = document.querySelector("button#btn-req");
let resp = document.querySelector("div#res");

//Sobre variável Object

//Criação de um objeto dentro de uma constante (Valores e propriedades podem ser mudados em constantes se for em objetos ou arrays).

const pessoa = {
    "nome":"Vinícius",
    "idade": 16,
    "cargo":"Estudante",
    "endereco":{
        "rua":"R. Aleatória",
        "numero":87,
        "apartamento":"yy"
    }
};

//É possível adicionar propriedades e mudar valores que já existem enquanto o programa roda

pessoa.nome = `José`
pessoa.idade = 23
pessoa.altura = 1.76

console.log(pessoa);

//Log como texto, antes tem que passar pela conversão (O que deixa mais fácil de ler)
console.log(`${JSON.stringify(pessoa)}`);


button.addEventListener("click", ()=>{
    resp.innerHTML = JSON.stringify(pessoa);
});