//Formatação de casas decimais com js

let valor = 2629.2829

//Dita quantas casas decimais vai aparecer de um decimal específico, o que é importante dependendo do contexto

console.log(valor.toFixed(2));

//Arredonda valor inteiro para cima

console.log(Math.ceil(valor));

//Arredonda inteiro para baixo

console.log(Math.floor(valor));
console.log(Math.round(valor));

//Formatação do número para uma moeda

console.log(
    new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL",
    }).format(valor)
);

//Contagem de dígitos de um número e string

let nome = "Zezinho";
let num = 178237;

console.log(nome.length);
console.log(String(num).length);

//Separação e junção de arrays com métodos SPLIT e JOIN.

let msg = "Chave da API";

console.log(msg.split(" ").join("-"));

//Strings maiúsculas e minúsculas

const sql = "Select * From ?;";
console.log(sql.toLowerCase());
console.log(sql.toUpperCase());

//Localização de strings com método includes

const sql2 = "Select user from table where id = 5"
if(sql2.includes("5")){
    console.log("user5")
} else{
    console.log("user dont exist")
}

//Substituição de strings com método replace -> Substitui uma string por outra

let precoProduto = 2500.90;
String(precoProduto).replace(".",",");
console.log(
    new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL",
}).format(precoProduto))