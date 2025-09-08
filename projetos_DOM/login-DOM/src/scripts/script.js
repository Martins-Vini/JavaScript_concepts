import { users } from './database-memory.js'

let campoNome = document.querySelector('input#nomeUser')
let campoSenha = document.querySelector('input#senhaUser')
let confirmarInfo = document.querySelector('button#botaoPrincipal')
let entrarConvidado = document.querySelector('button#botaoConvidado')

confirmarInfo.addEventListener('click', function acessar(){
    let nome = campoNome.value
    let senha = campoSenha.value
    let usuarioEncontrado = false

    if(nome.length == 0 || senha.length == 0){
        window.alert(`[ERRO] Um ou dois campos vazios, verifique se a senha ou o nome de usuário estão preenchidos ou corretos`)
    } else{
        users.find((a) => {
            if((a.nome == nome) && (a.senha == senha)){
                window.location.href = `/src/pages/paginaPrincipal.html`
                usuarioEncontrado = true
                return true;
            } return false;
        })

        if(usuarioEncontrado == false){
            window.alert(`[ERRO]Usuário ou senha incorretos`)
        }
    } 

})