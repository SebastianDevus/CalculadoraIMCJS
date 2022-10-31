const campoAltura = document.getElementById("alturaUsuario");
const campoMassa = document.getElementById("massaUsuario");
const botao = document.getElementById("botaoCalcular");
const dadosUsuario = {
    altura: null,
    massa: null
}

campoAltura.addEventListener("change", event => {
    dadosUsuario.altura = Number(event.target.value);
    console.log(dadosUsuario)
});

campoMassa.addEventListener("change", event => {
    dadosUsuario.massa = Number(event.target.value);
    console.log(dadosUsuario)
});

botao.addEventListener("click", event => {
    const paragrafoExibeIMC = document.getElementById("exibeIMC");
    const paragrafoExibeSituacao = document.getElementById("exibeSituacao");
    
    const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
    const situacaoUsuario = null;

    switch (valorIMC) {
        case valorIMC < 17:
            situacaoUsuario = "Muito abaixo do peso.";
            break;

        case valorIMC >= 17 && valorIMC < 18.5:
            situacaoUsuario = "Abaixo do peso.";
            break;

        case valorIMC >= 18.5 && valorIMC < 24.5:
            situacaoUsuario = "Peso normal."
            break;

        case valorIMC >= 25 && valorIMC < 30:
            situacaoUsuario = "Acima do peso."
            break;

        case valorIMC >= 30 && valorIMC < 35:
            situacaoUsuario = "Obesidade."
            break;

        case valorIMC >= 35 && valorIMC < 40:
            situacaoUsuario = "Obesidade severa."
            break

        case valorIMC >= 40:
            situacaoUsuario = "Obesidade mórbida."
            break;

        default:
            console.error("Um erro ocorreu na verificação da situação do usuário.");
            break;
    }

    paragrafoExibeIMC.innerHTML = `${valorIMC} kg/m².`;
    paragrafoExibeSituacao.innerHTML = `${situacaoUsuario}.`;
})