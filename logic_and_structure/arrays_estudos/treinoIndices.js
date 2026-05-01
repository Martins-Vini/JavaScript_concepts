//Métodos de índices -> Faz uma leitura do array, não há comportamento sob o array em si.

//Os métodos de índices servem para encontrar as posições que um certo dado está num array qualquer

//Métodos mais comuns: indexOf() e lastIndexOf(), além do findIndex()

//indexOf() -> Procura posição de um dado no array, se ele achar, retorna a primeira posição em que achou, senão, retorna o valor -1

let idades = [19,18,20,23,24,18,19,20,20,19];

console.log(idades.indexOf(20));

//lastIndexOf() -> Faz o mesmo que o último array, mas retorna a última posição achada

let idades2 = [19,18,20,23,24,18,19,20,20,19];

console.log(idades2.lastIndexOf(20));

//findIndex() -> Encontra as posições de um valor que satisfaz uma condição complexa

let idades3 = [19,18,20,23,24,18,19,20,20,19];
console.log(idades3.findIndex((a) => a%2 == 0));