let botao = document.getElementById("botaoContador");
let contagem = document.getElementById("contador");
let audio = document.getElementById("audio_soco");
let cont = 0;

botao.addEventListener("click", function contar(){
    cont = cont+1
    contagem.innerHTML = `Cliques: ${cont}`;
    audio.play()
})