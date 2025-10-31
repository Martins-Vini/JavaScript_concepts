function addlist() {
    let precoInput = document.getElementById('ins')
    let p = precoInput.value
    let res = document.getElementById('resp')
    let lista = document.getElementById('list')
    let valores = []


    if (p != 0) {
        valores.push(Number(p))
        let op = document.createElement('option')
        op.text = `Valor ${p} adicionado`
        c++
        lista.appendChild(op)
        resp.innerHTML = ' '
    }
    else {
        window.alert(`Valor de preço inserido é inválido`)
    }

    p.text = " "
    p.focus()
}


function seeResult() {

}