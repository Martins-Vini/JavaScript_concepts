/*09. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o jogador 1 ou jogador 2)*/

import inquirer from "inquirer";

const prompt_jogada = [
    {
        "type": "number",
        "name": "linha",
        "message": "Insira linha da jogada (0,1,2): ",
        validate: n => n >= 0 && n <= 2 ? true : "Defina um valor válido (0,1 ou 2)"
    },
    {
        "type": "number",
        "name": "coluna",
        "message": "Insira coluna da jogada (0,1,2): ",
        validate: n => n >= 0 && n <= 2 ? true : "Defina um valor válido (0,1 ou 2)"
    }
]

function gerarMatriz() {
    let matriz = [];

    for (let l = 0; l < 3; l++) {
        matriz[l] = []
        for (let c = 0; c < 3; c++) {
            matriz[l][c] = 0;
        }
    }

    return matriz;
}


//A matriz está sendo passada como parâmetro corretamente? -> Sim, o menu aqui está fazendo um papel de "roteador" da matriz nas funções
async function jogoPessoa(matriz) {
    console.clear()
    console.log(`-----INÍCIO DO JOGO-----`)
    const jogadores = ["X", "O"]
    for (let turno = 0; turno < 9; turno++) {
        let indiceJogador = turno % 2; //pega o resto de turno quando é dividido por 2
        let marca = jogadores[indiceJogador]

        console.log(`Turno ${turno + 1}`)
        console.log(`-----Vez do jogador ${indiceJogador + 1} (${marca})`)
        console.log(matriz)

        //Validação se posição já tem marca
        let posicaoCorreta = false;
        while (posicaoCorreta == false) {
            let jogada = await inquirer.prompt(prompt_jogada);//invocando prompt de jogada
            let linha = jogada.linha;
            let coluna = jogada.coluna;
            if (matriz[linha][coluna] == 0) {
                posicaoCorreta = true;
                matriz[linha][coluna] = marca;
                validarVitoria(matriz)
            } else {
                console.log(`Posição ${matriz[linha][coluna]} da velha já preenchida ou vazia, tente de novo`);
            }
        }
    }
}

async function jogoComputador() {
    console.clear()
    console.log(`Em construção...`);
}

function cancelarJogo() {
    console.log(`Jogo cancelado, muito obrigado por participar!`);
}

function validarVitoria(matriz){
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < 3;j++){
            if(matriz[i][0]){

            }
        }
    }
}

async function menu(matriz) {
    console.log("<=====JOGO DA VELHA=====>")
    let option = {
        "type": "number",
        "name": "op",
        "message": "Qual opção de jogo deseja? Insira [1] = Jogar contra pessoa, Insira [2] = Jogar contra máquina, [3] = Sair",
        validate: a => a === 1 || a === 2 || a === 3 ? true : "Insira os valores corretos"
    }

    let resp = await inquirer.prompt(option);

    if (resp.op === 3) {
        console.clear()
        cancelarJogo()
    } else if (resp.op === 1) {
        jogoPessoa(matriz)

    } else if (resp.op === 2) {
        jogoComputador(matriz)
    }
}

let matriz = gerarMatriz();
menu(matriz);