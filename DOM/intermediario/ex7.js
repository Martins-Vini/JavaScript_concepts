let campoMsg = document.querySelector(`#reqInput`)
let btnSend = document.querySelector(`#send`)
console.log(campoMsg)
console.log(btnSend)

campoMsg.addEventListener('input', function enviarMsg(){
    if(campoMsg.value.length > 0){
        btnSend.removeAttribute('disabled')
    } else{
        btnSend.setAttribute('disabled', true)
    }

})

btnSend.addEventListener('click', function enviar(){
    alert(`Mensagem enviada!`)
    campoMsg.value = ` `
})