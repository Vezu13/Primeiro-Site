const botao = document.querySelector("button")
botao.addEventListener("click" , curtir);


function curtir(){
let curtidas = document.querySelector("span")
curtidas.textContent++;
}
 
// Botao  tamanho
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)

//funçao
function aumentarFonte{
fonte++;
    document.body.style.fontSize = fonte + "px";
}