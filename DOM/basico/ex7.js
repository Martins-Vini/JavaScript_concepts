let valores = [];
let result = document.getElementsByTagName("p")[0];
console.log(result)

for(let i = 1 ; i <= 3;i++){
    let valor = window.prompt(`Insira o ${i}° número para a média das notas`);
    let numero = Number(valor);

    valores.push(numero)
}

console.log(valores);

let media = 0; 

for(let i = 0 ; i < valores.length;i++){
    media = (valores[i]+media)/valores.length;
}

result.innerHTML = `Resultado: ${media.toFixed(3)}`