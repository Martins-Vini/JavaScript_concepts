//Arrow functions, são formas mais básicas de se escrever uma função, em que ela só é necessária caso a função seja atribuída à uma constante

function sum(){
    let params = 0
    for(const n of arguments){ //Através do array arguments, ele junta todos os parâmetros passados e faz a operação que desejar
        params += n
    }

    return params
}

console.log(sum(3,9,8))

const sum = ()=>{
    let params = 0
    for(const n of arguments){ //Através do array arguments, ele junta todos os parâmetros passados e faz a operação que desejar
        params += n
    }

    return params
}

//Funções callbacks -> São funções que executam outras funções dentro delas, que geralmente são funções passadas como parâmetros em outras funções e o fluxo delas se repete

let numeros = [3,6,5,8,30,28];
const func = (n)=> n + 4

function operacao(n,func){
    for(let i = 0; i <= n.length ;i++){
        n[i] += func(n)
    }
};

console.log(operacao(numeros, func));

