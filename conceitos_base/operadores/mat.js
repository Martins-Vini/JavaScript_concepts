//Operadores aritméticos e ordens de precedência

console.log(`Tipos de contas a se fazer (De forma simples)`);

console.log(`Cálculo da média de nota de um aluno`);

let n1 = 8
let n2 = 9
let n3 = 7.5
let media = (n1+n2+n2)/3

console.log(`Notas: ${n1}, ${n2}, ${n3}`);
console.log(`Média: ${media}`);

//Outras contas como a sequência de fibonacci ou verificação de um número requer saber certa estruturas

console.log(`Conceito de acumulador`);
//--> Um acumulador é uma variável que serve para ir acumulando valores ao longo do programa, seja acrescentando ou debitando da variável

let num = 9; //Operador de atribuição em uso
num = num+1
num = num-1
num++
num--
num = num+9

console.log(num);
console.log(++num);
console.log(num++);

console.log(`Outras formas de acumular valores`);

let num2 = 5

num2 +=5
num2 -=2
num2 +=10
num2 *=2
num2 /=2

console.log(num2)