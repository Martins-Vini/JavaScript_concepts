//8. Crie um exercício completo de cálculo de fatorial

//5! = 5*4*3*2*1 = 120
import inquirer from 'inquirer';

async function fatorial(){
    const q = {
        "type":"number",
        "name":"n",
        "message":"Insira o número que deseja ver o fatorial: ",
        validate: a => a >= 0 ? true : "Insira um número inteiro positivo"
    }

    const resp = await inquirer.prompt(q);
    return resp.n;
}

function calcfatorial(valor){
    let fatorialres = 1;
    for(let i = valor; i >= 1; i--){
        fatorialres = fatorialres*i
    }

    return fatorialres;
}

let valorfatorial = await fatorial();
console.log(`O fatorial de ${fatorial} é igual a ${calcfatorial(valorfatorial)}`);
