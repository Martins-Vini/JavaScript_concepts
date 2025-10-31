let kmP = document.getElementById('km')
let tipoCarro = document.getElementsByName('opcar')
let dias = document.getElementById('dias')
let btn = document.getElementById('botao')
let res = document.getElementById('resp')
let res2 = document.getElementById('resp2')
let imgCarro = document.createElement('img')
imgCarro.setAttribute('id','fotoCarro')
//Estilo das imagens
    imgCarro.style.width = `250px`

function acao(){
    let kmPu = Number(kmP.value)
    let diasu = Number(dias.value)
    let aluguel = 0
    aluguel = aluguel.toFixed('2')

    if(kmPu == 0 || diasu == 0){
        window.alert(`Digite uma opção válida`)
    } else{
        //Fluxos do carro popular
        if(tipoCarro[0].checked && kmPu <= 100){
            aluguel = 90*diasu+(0.2*kmPu)
            res.innerText = `O carro alugado foi um carro popular e o preço do aluguel a ser pago por ele vai ser R$${aluguel}`
            imgCarro.setAttribute('src', 'imagens/img-carro-popular.png')
        } else if(tipoCarro[0].checked && kmPu > 100){
            aluguel = 90*diasu+(0.1*kmPu)
            res.innerText = `O carro alugado foi um carro popular e o preço do aluguel a ser pago por ele vai ser R$${aluguel}`
            imgCarro.setAttribute('src', 'imagens/img-carro-popular.png')
        }

        //Fluxos do carro de luxo
        else if(tipoCarro[1].checked && kmPu <= 100){
            aluguel = 150*diasu+(0.3*kmPu)
            res.innerText = `O carro alugado foi um carro de luxo e o preço do aluguel a ser pago por ele vai ser R$${aluguel}`
            imgCarro.setAttribute('src', 'imagens/img-carro-luxo.png')

        } else{
            aluguel = 150*diasu+(0.25*kmPu)
            res.innerText = `O carro alugado foi um carro de luxo e o preço do aluguel a ser pago por ele vai ser R$${aluguel}`
            imgCarro.setAttribute('src', 'imagens/img-carro-luxo.png')

        }

        res2.appendChild(imgCarro)
    }

}

btn.addEventListener('click', acao)
