//Importação das operações de outro arquivo
import {somar, subtrair, dividir, multiplicar} from './operators.js'

//Pegar campos que serão trabalhados no programa:
let campoInput1 = document.querySelector('input#num1')
let campoInput2 = document.querySelector('input#num2')
let operacao = document.querySelector('select#operacao')
let botaoCalculo = document.querySelector('button#processar')
let respostaLocal = document.querySelector('p#result')
let somaResp;
let subResp;
let multResp;
let divResp;

botaoCalculo.addEventListener('click', function calcular() {
    //Para realizar operações, tenho que converter os valores digitados do input em números
    let valorInput1 = parseFloat(campoInput1.value)
    let valorInput2 = parseFloat(campoInput2.value)

    if ((isNaN(valorInput1) || isNaN(valorInput2))) {
        return window.alert(`Um ou dois campos vazios, tente novamente`) //Retornar nada para não ocorrer a execução do cálculo
    } else {

        //Para o js identificar o valor do option, o número tem que ser entre aspas, já que os options são vistos como texto
        if (operacao.value === '1') {

            somaResp = somar(valorInput1, valorInput2)
            console.log(somaResp)
            respostaLocal.innerHTML = somaResp

        } else if (operacao.value === '2') {

            subResp = subtrair(valorInput1, valorInput2)
            console.log(subResp)
            respostaLocal.innerHTML = subResp

        } else if (operacao.value === '3') {

            divResp = dividir(valorInput1, valorInput2)
            console.log(divResp)
            respostaLocal.innerHTML = divResp

        } else if (operacao.value === '4') {

            multResp = multiplicar(valorInput1, valorInput2)
            console.log(multResp)
            respostaLocal.innerHTML = multResp
            
        }
    }
})

