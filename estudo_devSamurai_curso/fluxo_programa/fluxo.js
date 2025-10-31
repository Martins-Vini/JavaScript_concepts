//Estrutura If/else


//If simples
if(true){
    console.log(`Teste de condição`)
};

//If composto

let idade = 17;

if(idade >= 18){
    console.log(`Maior de idade`)
} else{
    console.log(`Menor de idade`)
};

//If encadeado -> Quando se têm vários caminhos

if(true){
    console.log(`Bloco 1`)
} else if(false){
    console.log(`Bloco 2`)
} else{
    console.log(`Bloco 3`)
};

//(Cálculo de IMC, Controle de acesso de login, verificar estado de variável, etc...)

//Operador ternário - Estrutura condicional menos verbosa

idade = 28

idade >= 18 ? console.log(`Maior de idade`) : console.log(`Menor de idade`)

idade = 13

//Switch case - Estrutura de fluxo que compara valores simples de uma variável

switch (idade){
    case 13:
        console.log(`Pirralho adolescente!`)
    break
    default:
        console.log(`Pessoa normal`)
    break
};

//try, catch e finally -> estrutura condicional em blocos que serve para o tratamento de erros no programa

try{
    console.log(`Código padrão (Consulta no banco de dados, requisição de API, etc)`)
    throw `Erro para desvio no try ao catch`
} 
//Conceito de estrutura receber parâmetro -> Variável temporária usada naquele bloco
catch(error){
    console.error(error)
}

finally{
    console.log(`Código sempre executado no final`)
}
