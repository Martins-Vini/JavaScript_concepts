//Conceito -> Laços de repetição são estruturas que executam blocos de código várias vezes se uma condição for verdadeira. (Pode-se mudar o fluxo de código também)

console.log(`Exemplo com while`);
let i = 0;
while(i <= 10){
    console.log(i)
    i++
};

//Características: Estrutura simples, que tem que ter a declaração do contador.
//O incremento/decremento ocorre dentro da própria estrutura.

console.log(`Exemplo com for`);
for(let c = 10;c >= 0 ; c--){
    console.log(c);
};

//Características: Estrutura mais compactada, que a declaração do contador, da condição e do incremento ou decremento fica nos parâmetros dessa estrutura

console.log(`Exemplo com for in`);

//formas de acessar um objeto:

//objeto.prop
//objeto[prop]

const conta = {
    "nome":"Vinícius",
    "idade":16,
    "cpf":1111111-11,
    "saldo":20
};

for(const contas in conta){
    console.log(`Nome: ${contas} - Propriedade: ${conta[contas]}`)
};

//Um for específico com uma sintaxe mais adequada caso o objetivo seja acessar propriedades de objetos e seus valores

console.log(`Exemplo com for of`);

let nomes = ["Rogers", "Guilherme", "Rafael", "Chris"];

for(const nome of nomes){
    console.log(nome)
};

//Isso é igual a:

for(let i = 0; i <= nomes.length;i++){
    console.log(nomes);
};

//Um for específico com uma sintaxe mais adequada caso o objetivo seja acessar índices de arrays e o conteúdo desses índices