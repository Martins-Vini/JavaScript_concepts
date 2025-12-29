let checkbox = document.querySelector(`input#checkboxNegrito`);
let paragrafo = document.querySelector(`p#paragrafo`);
console.log(checkbox)
console.log(paragrafo)

//Evento change -> Aplica mudança quando o estado de algo muda
checkbox.addEventListener('change', function checarEstado() {
    if (paragrafo && checkbox) {
        if (checkbox.checked) {
            paragrafo.style.fontWeight = `bold`;
        } else {
            paragrafo.style.fontWeight = `normal`;
        }
    }
})

