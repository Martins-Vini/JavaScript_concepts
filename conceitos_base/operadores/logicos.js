//Análise - Operadores lógicos, que são usados com comparadores para mudar fluxo do programa perante uma condição

//Operador || (OU) -> Verifica se uma das condições é verdadeira para a expressão ser verdadeira, se ambas forem falsas, a expressão é falsa

console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log(false || true);

//Operador && (E) -> Verifica se as duas ou mais condições se cumprem para aí sim, a expressão ser verdadeira

console.log(true && false);
console.log(true && true);
console.log(false && false);
console.log(false && true);

//Operador ! (NOT) -> Inverte resultado da expressão, barrando ela.

console.log(true && false ||(false || false) && true);
console.log(!(true && false || (false || false) && true));

