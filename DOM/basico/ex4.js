let fundo = document.body;
console.log(fundo)

fundo.addEventListener('keydown', function alterarCor(event){
    if(event.key === "A" || event.key === "a"){
        fundo.style.backgroundColor = "Yellow"
        fundo.style.color = "black"
    } else if(event.key === "B" || event.key === "b"){
        fundo.style.backgroundColor = "Blue"
        fundo.style.color = "white"
    } else if(event.key === "R" || event.key === "r" ){
        fundo.style.backgroundColor = "Red"
        fundo.style.color = "white"
    } else if(event.key === "V" || event.key === "v" ){
        fundo.style.backgroundColor = "Green"
        fundo.style.color = "white"
    }
})