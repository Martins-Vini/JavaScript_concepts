let buttonValidate = document.querySelector("#sendName");

function getUserNameInputValue() {
  let inputUserName = document.querySelector("#userName");
  let valueName = inputUserName.value;
  return valueName;
}

function validateUserName() {
  try {
    let valueName = getUserNameInputValue();

    if(valueName.length > 0){
        alert("usuário aceito")
    } else{
        alert("Usuário negado")
        throw new Error("Erro na verificação de nome por campo vazio")
    }
  } catch (err) {
    console.error(err.message)
  }
}