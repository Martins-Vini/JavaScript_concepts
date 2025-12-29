/*08. Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz, inicialize todos os elementos de 1 até 'linha x coluna'.*/

import inquirer from "inquirer";

async function criacaoMatriz(){
    const q = {
        "type":"number",
        "name":"c",
        "message":"Insira o número de linhas da matriz:",
        validate: a => a > 0 ? true : "Insira valor válido"
    }

    const q2 = {
        "type":"number",
        "name":"j",
        "message":"Insira o número de colunas da matriz:",
        validate: a => a > 0 ? true : "Insira valor válido"
    }

    const resp = await inquirer.prompt(q)
    const resp2 = await inquirer.prompt(q2)

    return {"colunas":resp.c, "linhas":resp2.j};
}

async function gerarMatriz(linhas, colunas){
    let matriz = []

    for(let i = 0;i < linhas;i++){
        matriz[i] = []; //representa a linha atual

        for(let j = 0; j < colunas;j++){
            const q = {
                "type":"number",
                "name":"n",
                "message":`Insira um valor na posição ${i}${j} da matriz: `
            }

            let resp = await inquirer.prompt(q)
            matriz[i][j] = resp.n;
        }
    }

    return matriz;
};

let dimensoes = await criacaoMatriz();
let novaMatriz = await gerarMatriz(dimensoes.linhas , dimensoes.colunas);
console.log(novaMatriz);
