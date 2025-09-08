function confirmar(){
    //Chmada dos componentes
    let alt = document.getElementById('altura')
    let pes = document.getElementById('peso')
    let result = document.getElementById('res')
    let cimg = document.getElementById('container-img')
    let dica = document.getElementById('res2')
    let imc = Number(pes.value)/(Number(alt.value*alt.value))
    //Criação do elemento imagem para ilustração
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    img.style.width = '250px'
    img.style.borderRadius = '10px'
    img.style.margin = 'auto'
    img.style.textAlign = 'center'

    imc = imc.toFixed(3)

    if(pes.value == 0 || alt.value == 0){
        window.alert(`[ERRO] Digite valores válidos`)
    } else{
    if(imc < 18.5){
        result.innerText = `Seu imc é de ${imc} e você está abaixo do peso`
        img.setAttribute('src', 'imagens/img-abaixo-peso.png')
        dica.innerText = `Você pode reverter isso com uma alimentação limpa aumentando a frequência entre essas refeições, além do regulamento do sono e exercícios físicos constantes que ajudam no ganho de massa muscular e peso(Consulte um nutricionista para seu caso)`
    } else if(imc >= 18.5 && imc < 25){
        result.innerText = `Seu imc é de ${imc} e você está com peso ideal`
        img.setAttribute('src', 'imagens/img-peso-ideal.png')
    } else if(imc >= 25 && imc < 30){
        result.innerText = `Seu imc é de ${imc} e você está acima do peso`
        img.setAttribute('src', 'imagens/img-acima-peso.png')
        dica.innerText = `Você pode reverter isso com uma dieta/alimetação limpa, além do regulamento do sono e exercícios físicos constantes (Consulte um nutricionista para seu caso)`
    } else{
        result.innerText = `Seu imc é de ${imc} e você está obeso`
        img.setAttribute('src', 'imagens/img-obeso.png')
        dica.innerText = `Você pode reverter isso com uma dieta/alimetação limpa, além do regulamento do sono e exercícios físicos constantes (Consulte um nutricionista para seu caso), porém nesse nível é bom procurar um bom médico para ver irregularidades no organismo causadas pela obesidade. Lembre-se: OBESIDADE É DOENÇA`
    }
}
    cimg.appendChild(img)

}