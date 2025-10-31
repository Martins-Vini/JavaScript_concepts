//Manipulação básica de arrays

//-> Os arrays são variáveis compostas que guardam uma coleção de dados

const nomes = ["Vinícius", "Mirela", "Nicollas", "Leticia", "Miguel", "Daniel"];

console.log(nomes);

//Acesso à uma posição específica

console.log(nomes[4]);

//Adição de um dado que não existe (Má prática);

nomes[6] = `Esther`

console.log(nomes);

//Array de objetos (Como retornam promises de APIs e um banco de dados em memória);

const pessoas = [
    {"nome":"Ana", "idade":16},
    {"nome":"Mayara", "idade":16},
    {"nome":"Rafaela", "idade":16}
];

console.log(pessoas);

console.log(pessoas[2]);