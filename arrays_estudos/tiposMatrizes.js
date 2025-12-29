import inquirer from "inquirer";

async function gerarMatriz() {
    const questions = [{
        "type": "number",
        "name": "linhas",
        "message": "Defina a quantidade de linhas da matriz: ",
        validate: e => e != Number ? true : "Insira uma opção válida"
    },
    {
        "type": "number",
        "name": "colunas",
        "message": "Defina quantidade de colunas da matriz: ",
        validate: e => e != Number ? true : "Insira uma opção válida"
    }
    ]

    let resp = await inquirer.prompt(questions);
    let linha = resp.linhas;
    let coluna = resp.colunas;

    let matriz = [];
    for (let i = 0; i < linha; i++) {
        matriz[i] = []
        for (let j = 0; j < coluna; j++) {
            matriz[i][j] = 0
        }
    }

    console.log(matriz);

    for (let i = 0; i < linha; i++) {
        for (let j = 0; j < coluna; j++) {
            let q = {
                "type": "number",
                "name": "value",
                "message": `Insira valor que deseja na posição ${[i]}${[j]}`,
                validate: e => e != Number ? true : "Insira um valor válida"
            }

            let resp = await inquirer.prompt(q);
            matriz[i][j] = resp.value;
            console.log(matriz)
        }
    }

    console.log(matriz);
    return { matriz, linha, coluna };
}


async function classificarMatriz(matriz, l, c) {
    console.log(`<=====VERIFICADOR=====>`)
    if (l !== c) {
        console.log(`Matriz retangular por ter tamanho de linha e coluna diferentes`)

    } else if (l === c) {
        console.log(`Matriz quadrada por ter tamanhos de linhas e colunas iguais`)
    } else if (l === 0 || c === 0) {
        console.log(`Matriz linear por só ter linhas ou colunas`)
    }


    let matrizDiagonal = false
    let matrizTriangular = false;
    let acumulador = 0;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < c; j++) {
            acumulador = acumulador + matriz[i][j];

            if (i !== j) {
                if (matriz[i][j] == 0) {
                    matrizDiagonal = true;
                }
            }

            if(i > j || j < c){
                if(matriz[i][j] === 0){
                    matrizTriangular = true
                }
            }
        }

        if (acumulador === 0) {
            console.log(`Matriz classificada como nula por só conter 0`)
        }

    }

    if (matrizDiagonal == true) {
        console.log(`Matriz caracterizada como diagonal por conter uma diagonal de números e o resto ser 0`)
    }

    if(matrizTriangular == true){
        console.log(`Matriz caracterizada como triangular por conter um triângulo superior ou inferior e o resto for 0`)
    }
}

    console.log(`<====VERIFICADOR DE MATRIZES E SEUS TIPOS====>`);
    let matrizGerada = await gerarMatriz();
    classificarMatriz(matrizGerada.matriz, matrizGerada.linha, matrizGerada.coluna);