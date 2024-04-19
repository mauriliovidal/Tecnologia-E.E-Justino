alert("olá Navegador");
let nomeUsuário= "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário==""){
    nomeUsuário= prompt("Qual o seu nome");
}

if(nomeUsuário == null){
    elemento.textContent = 'Navegador seja muito bem vindo.';
}else{
    elemento.textContent = nomeUsuário;
}
