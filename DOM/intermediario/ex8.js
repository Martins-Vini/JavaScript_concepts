let campoURL = document.querySelector("#inputURL")
let link = document.querySelector("#linkVisitado")

campoURL.addEventListener('input', function acesso(){
    let txtInput = campoURL.value;
    if(txtInput.startsWith("http//")){
        link.setAttribute('href', txtInput)
    } else{
        console.log(`Link inválido`)
    }
})