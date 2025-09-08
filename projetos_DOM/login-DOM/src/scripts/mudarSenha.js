import { users } from './database-memory.js'

let campoNome = document.querySelector('input#nomeUser')
let campoSenha = document.querySelector('input#senhaUser')
let campoSenha2 = document.querySelector('input#confirmSenhaUser')
let botaoTrocar = document.querySelector('button#trocarSenha')

botaoTrocar.addEventListener('click', function trocarSenha() {
    let nome = campoNome.value
    let senha = campoSenha.value
    let senhaConfirmada = campoSenha2.value
    let dadosEncontrados = false

    if (nome.length == 0 || senha.length == 0 || senhaConfirmada.length == 0) {
        window.alert(`[ERRO]Contém campo(s) vazio(s), veja se os campos estão preenchidos corretamente`)
        return;
    }

    if (senha != senhaConfirmada) {
        window.alert(`Senhas diferentes, corrija e tente novamente`)
    } else {
        for(let c = 0;c < users.length;c++){
            if(users[c].nome == nome){
                window.alert(`Senha trocada`)
                users[c].senha = senha
                dadosEncontrados = true
                break //Quebrar o loop logo após nome de usuário ser encontrado
            } 
        }
    }

    if(dadosEncontrados == false){
        window.alert(`Dados não encontrados, verifique se a senha ou nome estão corretos`)
    }
})