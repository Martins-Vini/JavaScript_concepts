let lampadaEstado = document.querySelector("img#lampada");
let botaoLigar = document.querySelector("button#ligar");
let botaoDesligar = document.querySelector("button#desligar");

let lampadaQuebrada = false
//Se a lâmpada estiver quebrada, não pode mais acender nem desligar -> Usando uma variável como flag

function acender(){
    if(lampadaQuebrada == false){
        lampadaEstado.src = `./img/lampada-acessa.png`
    } else{
        alert(`Lâmpada quebrada, reinicie o site`)
    };
};

function desligar(){
    if(lampadaQuebrada == false){
        lampadaEstado.src = `./img/lampada.png`
    } else{
        alert(`Lâmpada quebrada, reinicie o site`)
    };
};

function quebrar(){
    lampadaQuebrada = true;
    lampadaEstado.src = `./img/lampada-quebrada.png`
};

botaoLigar.addEventListener("click", acender);
botaoDesligar.addEventListener("click", desligar);
lampadaEstado.addEventListener("dblclick", quebrar);