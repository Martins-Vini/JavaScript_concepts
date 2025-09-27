let area = document.querySelector('div#area')

function clicar(){
    area.innerHTML = `Quem clicou é gay`
}


function entrarComMouse(){
    area.style.backgroundColor = `brown`
}

function sairComMouse(){
    area.style.backgroundColor = `beige`
    area.innerHTML = `Interaja...`
}