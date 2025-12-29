let btnAlerta = document.querySelector("#botaoAlerta");
let areaAlerta = document.querySelector("#areaAlerta");
console.log(btnAlerta);
console.log(areaAlerta);

btnAlerta.addEventListener('click', function ativarAlerta() {
    let alerta = document.createElement("div");
    alerta.classList.add("alertaSucesso");
    alerta.textContent = `Dados salvos com sucesso!`;
    areaAlerta.appendChild(alerta);

    setTimeout(()=>{
        alerta.remove()
    }, 3000)

});
