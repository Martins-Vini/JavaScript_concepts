//Como funciona?
//Divide um array em duas partes: Uma parte em que os valores estão em ordem e uma parte que não estão

let array = [0, 1, 9, 21, 20, 8];

//ele basicamente aplica um bubble sort na parte não ordenada da lista e conforme vai ordenando, ele junta mais um valor ao array ordenado

function bubbleSort(e) {
    let flagTroca;
    do{
        flagTroca = false
        for(let i = 0;i <= e.length;i++){
            let guardarN = 0;
            if(e[i] > e[i+1]){
                guardarN = e[i];
                e[i] = e[i+1]
                e[i+1] = guardarN
                flagTroca = true;
            };
        };
    } while(flagTroca)

    return e;
}

let copiaArray = [...array];

console.log(copiaArray.sort((a,b) => a-b)); //Forma que você deve organizar o método para entender que é com números

console.log(bubbleSort(array));