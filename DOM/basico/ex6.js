let senhas = [
    {
        "senha": "HOMEM321"
    },
    {
        "senha": "caralegal111"
    },
    {
        "senha": "oicarasoulegal!"
    }
]

let acessoAceito = false;
let resultado = window.prompt(`Insira a senha para ter acesso: `)

for(let i = 0; i < senhas.length; i++) {
    if (resultado === senhas[i].senha) {
        acessoAceito = true;

    } else if (resultado !== senhas[i].senha) {
        acessoAceito = false;
    }
}

if(acessoAceito){
       window.location.href = `ex6_2.html`
} else{
    alert(`Acesso negado: Senha errada!`)
}