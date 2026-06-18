const botao = document.querySelector("button")
botao.addEventListener("click" , curtir);


function curtir(){
let curtidas = document.querySelector("span")
curtidas.textContent++;
}
 
// Botao  tamanho
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)
let fonte = 16

//funçao
function aumentarFonte(){
fonte++;
    document.body.style.fontSize = fonte + "px";
}

const Contraste = document.getElementById("Contraste")
Contraste.addEventListener("click", contraste)


function contraste(){

    document.body.style.color = 'yellow';
}

