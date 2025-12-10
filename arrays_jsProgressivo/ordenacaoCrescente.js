//02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

//-> Bubble sort

let randomValues = [8, 17, 3];

function bubbleSort(array){
    let flagTroca;
    do{
        flagTroca = false;
        for(let i = 0; i <= array.length;i++){
            let guardarN = 0;
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

console.log(bubbleSort(randomValues));