import inquirer from 'inquirer';
console.log("Iniciando busca por país...");
const question = {
    type: 'input',
    name: 'country',
    message: 'Digite o nome do país que deseja buscar:',
    validate: (input) => input.toString().length > 0 ? true : 'Por favor, insira um nome válido.'
}

const resp = await inquirer.prompt(question);

async function showCountryInfo(nameCountry){
    let datas = await fetch(`https://restcountries.com/v3.1/name/`+nameCountry);
    let country = await datas.json();
    console.log(country);
}

showCountryInfo(resp.country);