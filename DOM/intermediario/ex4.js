const usuarios = [
    {nome: "Ana", email: "a@a.com"}, 
    {nome: "Bruno", email: "b@b.com"}
]

let container = document.querySelector("#containerUsuario")
console.log(container)

usuarios.forEach(user =>{
    let c = document.createElement("div");
    let nome = document.createElement("h2");
    let email = document.createElement("p");

    c.appendChild(nome)
    c.appendChild(email)
    nome.textContent = user.nome
    email.innerHTML = user.email
    container.appendChild(c)
})