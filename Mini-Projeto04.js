/*
    Mini - Projeto  - MEDIDOR DE VELOCIDADE
*/

//Velocidade máxima de 70 KM/h
//a cada 5 km/h do limite você ganha 1 ponto
//MAth.floor()
//Caso os pontos sejam maior que 12 a carteira é suspendida

verificarVelocidade(80);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const quantidaDeMaximadePontos = 12;
    const kmPorPonto = 5;

    if (velocidade <= velocidadeMaxima){
        console.log('Velocidade Permitida');
    }

    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        console.log('Você terá ' + pontos + ' pontos na sua carteira');

        if (pontos > quantidaDeMaximadePontos){
            console.log('Sua carteira está suspensa');
        }
    }
    }
