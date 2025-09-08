//Manipulação do tipo date -> Instanciamento de objeto que controla todo tipo de data possível

let data = new Date() //Instanciamento de data atual

console.log(data);
console.log(data.toISOString()); //Formato sem fuso horário de data

let dataNascimento = new Date(2008, 10, 8, 6);
let anoNascimento = new Date(2008)
let dataAtual = new Date();

console.log("Data de nascimento:" + dataNascimento.toISOString());

//Cálculo de idade

let idade = dataAtual.getFullYear() - anoNascimento;

console.log(`Idade: ${idade}`)

