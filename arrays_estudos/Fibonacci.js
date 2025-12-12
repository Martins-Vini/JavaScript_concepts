/*07. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores do array.*/

import inquirer from 'inquirer';


async function fibonacciseq(){

    const q = {
        "type": "number",
        "name": "n",
        "message": "insira um número inteiro positivo para a quantidade de valores da seq:",
        validate: (a) => a >= 0 ? true : "Insira um número válido"
    }

    let resp = await inquirer.prompt(q);

    return resp.n;
}

function mostrarSeq(n){
    let seq = [0,1];
    for(let i = 2;i < n;i++){
            let nextN = seq[i-1]+seq[i-2]
            seq.push(nextN)
    }

    return seq;
};

let qntd = await fibonacciseq();
console.log(mostrarSeq(qntd));