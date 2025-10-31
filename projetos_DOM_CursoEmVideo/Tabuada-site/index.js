let inputnumTabu = document.getElementById('num')
let confirmTabu = document.getElementById('gerar')
let msg = document.getElementById('espera')
let resTabu = document.getElementById('tabu')
function tabu(){
    //Zera os valores anterior antes de executar uma nova função, para não haver duplicações
    resTabu.innerText = " "
    msg.innerText = " "
    let numT = Number(inputnumTabu.value)
    let c = 0

    if(numT == 0){
        msg.innerText = "A tabuada de 0 tem qualquer resultado igual a 0"
    }
    
    while(c <= 10){
        //Elemento criado repetidas vezes dentro do loop, senão só a última opção aparece
        let opc = document.createElement('option')
        //Impressão da mensagem
        opc.textContent = `${numT} x ${c} = ${numT*c}`
        //Link do elemento criado (linha) com seu container, que é a lista a qual ela se insere
        resTabu.appendChild(opc)
        c++
    }
}

confirmTabu.addEventListener('click', tabu)

/*Documentação do que eu observei que tive dificuldade nesses exercícios:
Eu poderia ter criado uma lista já com 10 linhas para então inserir a tabuada em cada linha da lista no HTML.

Porém, eu optei pela alternativa de criar listas ol e ul dinamicamente, antes de elas existirem no HTML.

Para isso, a lógica é: Sempre criar um novo elemento li dentro de um loop, já que a criação dele irá se repetir. Com isso, se o usa a função .appendChild para ir linkando o elemento linha com sua lista, e eu imprimo o resultado que eu quiser dentro desse loop.

E para evitar que o resultado se duplique em uma próxima execução, toda vez que eu executo a função novamente, ela limpa automaticamente os valores que já estavam anteriormente.

*/