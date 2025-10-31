//Declaração de variáveis

//Variável -> Espaço de memória RAM que armazena um dado.

//Escopo -> Partes do programa separada em blocos (Escopo global e local).

//Declaração com var (Declaração em que a variável pode ser acessada em qualquer escopo independentemente de onde ela foi declarada)

var value = 3;

console.log(value);

{
    console.log(value);

    if(true){
        var value2 = 9
        console.log(value);
    }

    console.log(value2);
};

console.log(value2);

//Declaração com let (Declaração que só pode acessar a variável onde ela foi declarada e um esc opo filho, nunca um escopo pai)

let nome = "Ricardo"

console.log(nome)

{
    console.log(nome)
    let nome2 = "Giovanne"
}

//console.log(nome2) -> Não acessa

//Declaração com const (funciona semelhante ao let em questão de escopo, mas é imutável);

const imc = 13.2;

console.log(imc)

//imc = 4.3; -> Não altera

console.log(imc);

//Concatenação e interpolação;

let name = "Felipe"
let idade = 34
let address = {
    "rua":"Central",
    "Bairro":"Bairro daora",
    "cep":"08567-042"
};

console.log(`Mensagem normal -> Meu nome é João, e eu tenho 24 anos`);
console.log("Mensagem concatenada -> Meu nome é " + name + ", e eu tenho " + idade + " anos");
console.log(`Mensagem interpolada -> Meu nome é ${name}, e eu tenho ${idade} anos`)

console.log(`Objeto sem formatação para string: ${address}`)
console.log(`Objeto com formatação para string: ${JSON.stringify(address)}`)

