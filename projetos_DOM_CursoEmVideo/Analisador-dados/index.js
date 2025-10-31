let valor = document.getElementById('valor')
let an = document.getElementById('an')
let btn = document.getElementById('confirm')
let resp = document.getElementById('resp')
let lista = document.getElementById('sec')
let valores = [] //array que vai armazenar valores inseridos e vai referenciar o select

resp.style.marginTop = '10px'
resp.style.fontFamily = 'Arial'

function isNumero(x) {
    if (Number(x) >= 1 && Number(x) <= 100) { //Verificar se número está no intervalo requisitado
        return true
    } else {
        return false
    }
}

function inList(x, y) { //Verificar com uma condicional se o número está já na lista
    if ((y.indexOf(Number(x)) != -1)) {//(Como eu relaciono o select com a lista?) -> usando métodos internos de arrays
        return true
    } else {
        return false
    }
}

function add() {
    //Condicional que usa duas funções para verificação dos dados inserios com os parâmetros reais
    if (isNumero(valor.value) && !inList(valor.value, valores)) { //Opção que retorna funções de resultado verdadeiro
        valores.push(Number(valor.value))

        let op = document.createElement('option')

        op.text = `Valor adicionado = ${valor.value}`

        lista.appendChild(op)
        resp.innerHTML = ' '
    } else {
        window.alert(`valor inválido ou já encontrado na lista`)
    }

    valor.value = ' '
    valor.focus()
}

function analise(){
    let maior = valores[0]
    let menor = valores[0]
    let s = 0

    if(valores.length == 0){
        window.alert(`Adicione valores à lista!`)
    } else{
        for(let c = 0;c < valores.length ;c++){
            s += valores[c]
            //Verificação do maior e menor valor da lista
            if (valores[c] > maior) {
                maior = valores[c];
              }
              
            if (valores[c] < menor) {
                menor = valores[c];
              }
        }

        resp.innerHTML = ' '
        resp.innerHTML = `A soma dos valores na lista é igual a ${s}`
        resp.innerHTML +=  ` <br>A média dos valores da lista é igual a ${(s/valores.length).toFixed(3)}`
        resp.innerHTML +=  ` <br>O maior número dos valores da lista é igual a ${maior}`
        resp.innerHTML +=  ` <br>O menor número dos valores da lista é igual a ${menor}`
    }
}

btn.addEventListener('click', add)
an.addEventListener('click', analise)