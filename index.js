const campoAltura = document.getElementById("alturaUsuario");
const campoMassa = document.getElementById("massaUsuario");
const botaoQueCalcula = document.getElementById("botaoCalcular");
const dadosUsuario = {
    altura: null,
    massa: null
}

// Quando o campoAltura muda, o valor nele é armazenado na propriedade "altura" do objeto dadosUsuário
campoAltura.addEventListener("change", event => {
    dadosUsuario.altura = Number(event.target.value);
});

// Quando o campoMassa muda, o valor nele é armazenado na propriedade "massa" do objeto dadosUsuário
campoMassa.addEventListener("change", event => {
    dadosUsuario.massa = Number(event.target.value);
});

// Quando o usuário clica no botão que calcula, o IMC é calculado, a situação é averiguada e os resultados são exibidos
botaoQueCalcula.addEventListener("click", event => {
    const paragrafoExibeIMC = document.getElementById("exibeIMC");
    const paragrafoExibeSituacao = document.getElementById("exibeSituacao");
    
    const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
    const situacaoUsuario = testaSituacao(valorIMC);

    paragrafoExibeIMC.innerHTML = `${valorIMC} kg/m².`;
    paragrafoExibeSituacao.innerHTML = `${situacaoUsuario}`;
});

// Averigua a situação do usuário
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