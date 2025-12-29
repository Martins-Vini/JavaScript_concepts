//01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

//-> Ordenações sem métodos de array

let idades = [19, 18, 17, 14, 19, 20, 18];
let valores = [10, 6];

function orderTwoValues(array){
    let guardarN = 0;

    if(array[1] < array[0]){
        guardarN = array[1]
        array[1] = array[0]
        array[0] = guardarN
    }

    return array;

};

//-> Ordenação com números maiores Bubble sort

function order(array){
    let flagTroca;

    do{
        flagTroca = false; //Se não tiver mais trocas, a ordenação foi feita

        for(let i = 0;i <= array.length; i++){
            let guardarN = 0

            if(array[i] > array[i+1]){
                guardarN = array[i+1];
                array[i+1] = array[i];
                array[i] = guardarN;

                flagTroca = true;
            };

        };

    } while(flagTroca);


    return array;
};

//Insertion sort e selection sort(?)

console.log(order(idades));

console.log(orderTwoValues(valores));