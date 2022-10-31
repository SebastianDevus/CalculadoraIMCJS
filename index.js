const campoAltura = document.getElementById("alturaUsuario");
const campoMassa = document.getElementById("massaUsuario");
const botao = document.getElementById("botaoCalcular");
const dadosUsuario = {
    altura: null,
    massa: null
}

campoAltura.addEventListener("change", function(event) {
    dadosUsuario.altura = Number(event.target.value);
    console.log(dadosUsuario)
});

campoMassa.addEventListener("change", event => {
    dadosUsuario.massa = Number(event.target.value);
    console.log(dadosUsuario)
});

botao.addEventListener("click", event => {
    let paragrafoExibeIMC = getElementById("exibeIMC");
    
    const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
})