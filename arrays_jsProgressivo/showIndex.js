/*
06. Crie uma função que recebe um vetor e um número.
Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).
*/

let valores = [1,5,2,5, 8, 10, 10, 10, 2, 10];
let numero = 10

//métodos de indíce: findIndex, indexOf, lastIndexOf

function indiceNoVetor(array, n){
    let indiciesArray = [];
    for(let i = 0; i <= array.length ;i++){
        if(array[i] === n){
            indiciesArray.push(i)
        };
    }

    return indiciesArray;
}

console.log(indiceNoVetor(valores,numero))