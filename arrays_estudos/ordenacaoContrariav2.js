import inquirer from 'inquirer';

async function qntdVezes(){
    const q1 = [
    {
        "type":"number",
        "message":"Quantos valores você deseja inserir?",
        "name":"n",
        validate: (value) => value != Number ? true : "Insira um número válido" 
    }
]

    const repeat = await inquirer.prompt(q1);
    return repeat.n;
}

async function coletar(count){
    let values = [];

    for(let i = 1;i <= count;i++){
        const q2 = [{
            "type":"number",
            "name":`n${i}`,
            "message":`Insira o valor ${i}`,
            validate: (value) => value != Number ? true : "Insira um número válido" 
        }]

        const resp = await inquirer.prompt(q2);
        values.push(resp[`n${i}`]);
    };

    return values;

}


function inverter(array){ //Se inverte array utilizando método reverse depois do spread
    let copiaArray = [...array];
    return copiaArray.reverse();
}

//Variáveis guardam o valor do retorno da função

let repeatCount = await qntdVezes();
let valores = await coletar(repeatCount);

console.log(valores);

console.log(inverter(valores));
