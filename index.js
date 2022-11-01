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
    const situacaoUsuario = testaSituacao(valorIMC);

    paragrafoExibeIMC.innerHTML = `${valorIMC} kg/m².`;
    paragrafoExibeSituacao.innerHTML = `${situacaoUsuario}`;
});

function testaSituacao(valorIMC) {
    if (valorIMC < 17) {
        return "Muito abaixo do peso.";
    }
    else if (valorIMC >= 17 && valorIMC < 18.5) {
        return "Abaixo do peso.";        
    }
    else if (valorIMC >= 18.5 && valorIMC < 24.5) {
        return "Peso normal.";
    }
    else if (valorIMC >= 25 && valorIMC < 30){
        return "Acima do peso.";
    }
    else if (valorIMC >= 30 && valorIMC < 35) {
        return "Obesidade.";
    }
    else if (valorIMC >= 35 && valorIMC < 40) {
        return "Obesidade severa."
    }
    else {
        return "Obesidade mórbida."
    }
}