//Uso da lógica do Guanabara
//Inicialização de variáveis
let init = document.getElementById('init')
let end = document.getElementById('end')
let jump = document.getElementById('jump')
let marc = document.getElementById('marc')
let cont = document.getElementById('cont')
let res = document.getElementById('res')

//Função que analisa os valores e desvia o fluxo para a contagem específica

function contagem() {
    res.innerHTML = " " //O método innerHTML permite que o texto não ultrapasse seu container na hora em que o programa for executado
    let i = Number(init.value)
    let e = Number(end.value)
    let j = Number(jump.value)
    let m = Number(marc.value)

    if (i == 0 || e == 0) {
        res.style.marginTop = '40px'
        res.innerHTML = `[Erro] um campo ou mais está vazio, preencha todos corretamente`
    }

    if(j == 0){
        window.alert(`O salto será considerado 1`)
        j = 1
    }


    if (i < e) {
        let c = i

        while (c < e) {
            res.style.marginTop = '40px'
            if (c % m == 0) {
                res.innerHTML += `[${c}], `
            } else {
                res.innerHTML += `${c}, ` //Concatenando apenas com "+=" impede do valor anterior sumir e só aparecer o final do loop
            }

            c += j
        }

        res.innerHTML += `${e}.`

    } else if (e < i) {
        contagemregressiva()
    } else{
        window.alert(`Erro, valores iguais`)
    }
}

function contagemregressiva() {
    let i = Number(init.value)
    let e = Number(end.value)
    let j = Number(jump.value)
    let m = Number(marc.value)

    let c = i

    while (c > e) {
        res.style.marginTop = '40px'
        if (c % m == 0) {
            res.innerHTML += `[${c}], `
        } else {
            res.innerHTML += `${c}, `
        }

        c -= j
    }

    res.innerHTML += `${e}.`
}


cont.addEventListener('click', contagem, contagemregressiva)