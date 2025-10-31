//Type Casting e type coersion

//Type Casting é um tipo de conversão de tipos de dados realizados no programa, quando um usuário manda um dado para o backend, e ele é tratado devidamente.

//Type Coersion é a conversão de dados automática realizada pela VM do JavaScript, como a concatenação, interpolação, etc.

//=============================================================================================

//Elementos para boolean

console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean("Qualquer mensagem"));

//Boolean para número

console.log(Number(true));
console.log(Number(false));

//Boolean para String

console.log(String(false));
console.log(String(true));

//String para Datas

console.log(new Date("11/08/2008"));

//Datas em String

console.log(new Date("11/08/2008").toISOString());

//Array de caracteres para uma mensagem (Uma string é um array de caracteres);

let nome = ["V","i","n","i"];
console.log(nome.join(""));

//Separa as strings de uma mensagem:
let nome2 = "Carlos Almeida"
console.log(nome2.split(" "))
