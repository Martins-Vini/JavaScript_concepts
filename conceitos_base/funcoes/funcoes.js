//Base de funções em js

//-> Função básica:

function boasVindas(){
    console.log(`Olá! Seja bem-vindo(a)`)
};

//-> Função com parâmetro, variáveis que são passadas e só existem no momento em que a função tá sendo executada

function soma(a,b){
    console.log(a+b)
};

soma(3,4)

//-> Função com retorno

//O retorno vem da necessidade de se pegar o resultado do processamento dessa função e guardar em uma variável ou constante para se usar esse resultado em outro momento.

const numeros = [4,5,6,7,9,48,21,37,90];

function separarPares(vetor){
    let paresVetor = []
    for(let i = 0; i <= vetor.length; i++){
        if(vetor[i]%2 == 0){
            paresVetor += vetor[i];
        }
    };

    return console.log(paresVetor);
};

separarPares(numeros);

//Função com uso de Object Arguments (Iterador que processa os parâmetros da função

function sum(){
    let params = 0
    for(const n of arguments){ //Através do array arguments, ele junta todos os parâmetros passados e faz a operação que desejar
        params += n
    }

    return params
}

console.log(sum(3,9,8))
