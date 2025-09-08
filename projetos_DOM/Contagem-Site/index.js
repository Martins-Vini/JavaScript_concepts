let inputStartCont = document.getElementById('init')
let inputEndCont = document.getElementById('end')
let inputJumpCont = document.getElementById('jump')
let confirmCont = document.getElementById('confirm')
let lista = document.getElementById('cont-list')
let msgErro = document.getElementById('container-error1')

function contagem() {
    lista.innerText = ''
    let startCont = Number(inputStartCont.value)
    let endCont = Number(inputEndCont.value)
    let jumpCont = Number(inputJumpCont.value)

    if (startCont > endCont && jumpCont > 0) {
        msgErro.textContent = `Impossível realizar contagem inversa com salto positivo, digite um salto com valor numérico negativo`

        ultlinha.textContent = " "
    }

    if ((startCont == 0 || endCont == 0 && jumpCont >= 0)) {
        msgErro.textContent = `Impossível realizar contagem sem valores de parâmetros definidos corretamente`
    } else if (startCont < endCont && jumpCont == 0) {
        msgErro.textContent = " "
        window.alert(`O valor do salto da contagem será considerado igual a 1`)
        jumpCont = 1

        while (startCont < endCont) {
            let linha = document.createElement('li')
            linha.style.display = 'inline-flex'

            lista.appendChild(linha)
            lista.style.textAlign = 'center'

            linha.textContent = startCont + ", " + `\u{1F449}`

            startCont = startCont + jumpCont

        }

        let ultlinha = document.createElement('li')
        ultlinha.style.display = 'inline-flex'

        lista.appendChild(ultlinha)
        ultlinha.textContent = endCont + "." + `\u{1F3F3}`

    } else if (jumpCont > 0) {
        msgErro.textContent = " "
        while (startCont < endCont) {
            let linha = document.createElement('li')
            linha.style.display = 'inline-flex'

            lista.appendChild(linha)
            lista.style.textAlign = 'center'

            linha.textContent = startCont + ", " + `\u{1F449}`

            startCont = startCont + jumpCont

        }

        let ultlinha = document.createElement('li')
        ultlinha.style.display = 'inline-flex'

        lista.appendChild(ultlinha)
        ultlinha.textContent = endCont + "." + `\u{1F3F3}`

    } else if (startCont > endCont) {
        contagemInv()
    }

}

function contagemInv() {
    msgErro.textContent = " "
    lista.innerText = ''
    let startCont = Number(inputStartCont.value)
    let endCont = Number(inputEndCont.value)
    let jumpCont = Number(inputJumpCont.value)

    if (startCont > endCont && jumpCont == 0) {
        msgErro.textContent = ""
        window.alert(`O valor do salto da contagem será considerado igual a -1`)
        jumpCont = -1

        while (startCont > endCont) {
            let linha = document.createElement('li')
            linha.style.display = 'inline-flex'

            lista.appendChild(linha)
            lista.style.textAlign = 'center'

            linha.textContent = startCont + ", " + `\u{1F449}`

            startCont = startCont + jumpCont

        }

        let ultlinha = document.createElement('li')
        ultlinha.style.display = 'inline-flex'

        lista.appendChild(ultlinha)
        ultlinha.textContent = endCont + "." + `\u{1F3F3}`

    }
    else {
        while (startCont > endCont) {
            let linha = document.createElement('li')
            linha.style.display = 'inline-flex'

            linha.textContent = startCont + ", " + `\u{1F449}`

            lista.appendChild(linha)
            lista.style.textAlign = 'center'

            startCont = startCont + jumpCont

        }

        let ultlinha = document.createElement('li')
        ultlinha.style.display = 'inline-flex'

        lista.appendChild(ultlinha)
        ultlinha.textContent = endCont + "." + `\u{1F3F3}`
    }
}

confirmCont.addEventListener('click', contagem, contagemInv)