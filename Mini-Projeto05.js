//Receber uma quantidade de valores para avaliar 
// Função exibe se cada valor é par ou ímpar

exibirTipo(10);

function exibirTipo(quantidade){
    for(let i = 0; i < quantidade; i++){
        if(i % 2 === 0){
            console.log(i,'é par!');
        }
        else{
            console.log(i,'é ímpar!');
        }
    }

}
