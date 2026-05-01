//Construção de personagens com objetos literais

let personagensBase = [{
    nome: "Asper",
    idade: 26,
    classe: "Guerreiro",
    item1: "Espada",
    item2: "Escudo",
    poder1: "Lâmina ardente",
    poder2: "Lâmina giratória",
    ult: "Mega perfurada"
}]

console.log(personagensBase)

class personagens{
    constructor(nome,idade,classe, poder1,poder2,ult){
        this.nomePersonagem = nome
        this.idadePersonagem = idade
        this.classePersonagem = classe
        this.poder1P = poder1
        this.poder2P = poder2
        this.ultP = ult
    };

    usarPoder1(){
        console.log("Ataque +10")
    }

    usarPoder2(){
        console.log("Ataque + 10")
    }

    usarUlt(){
        console.log("Ataque +100")
    }

}

let personagem1 = new personagens("Agatha", 25, "Maga", "Fogo fátuo", "Lança chamas", "Trovão")

console.log(personagem1)