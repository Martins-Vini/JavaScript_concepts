let imagensBanner = ['./img/dbz_img.jpg','./img/one_piece-img.jpg', './img/naruto_img.jpg'];
let botaoPassar = document.querySelector(`button#passar`);
console.log(botaoPassar);
let botaoVoltar = document.querySelector(`button#voltar`);
console.log(botaoVoltar);
let img = document.querySelector(`img#imgPrincipal`);
console.log(img);
let c = 0;

botaoPassar.addEventListener('click', function trocarImg() {

    c = (c+1) % imagensBanner.length;

    img.setAttribute('src', imagensBanner[c]);
    return c;
})

let cont = 0

botaoVoltar.addEventListener('click', function voltarImg(){
    cont = (cont+1) % imagensBanner.length;
    img.setAttribute('src', imagensBanner[cont-0]);
})