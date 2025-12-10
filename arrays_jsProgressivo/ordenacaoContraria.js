/*03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.*/

import inquirer from 'inquirer';

//É possível realizar validações com o método validate nos objetos e listas de escolhas, atribuindo o atributo com tipo list

const questions = [
    {
        "type":'number',
        "name":'n1',
        "message":"Insira o primeiro valor:",
        validate: (value) => value != Number ? true : "Digite um número válido"
    },
    {
        "type":'number',
        "name":'n2',
        "message":"Insira o segundo valor:",
        validate: (value) => value != Number ? true : "Digite um número válido"
    }
    ,
    {
        "type":'number',
        "name":'n3',
        "message":"Insira o terceiro valor:",
        validate: (value) => value != Number ? true : "Digite um número válido"
    }
];

const resp = await inquirer.prompt(questions); //Aqui é necessário guardar a resposta da promise numa variável para poder acessar os valores;

let values = [];

values.push(resp.n1);
values.push(resp.n2);
values.push(resp.n3);

console.log(values);


function bubbleSort(array){
    let flagTroca;
    do{
        flagTroca = false;
        for(let i = 0;i <= array.length;i++){
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
}

console.log(bubbleSort(values));