//For, While, Do While, For... IN, For...of
/*
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i);
    }
}
*/
//While 
/*
let j = 5;

while(j >= 1)
{
    console.log(j);
    j--;
}

//Do .... while
i = 0;
do{
    console.log('digitando!', i);
    i++;
}while(i < 10);

*/

//For ... IN

const pessoa = {
    nome: 'Jhonathan',
    idade: 25

};

for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho', 'Azul', 'Verde', 'Roxo', 'Branco'];

for (let indice in cores){
    console.log(indice);
}

//For- of
//interação com array

for(let cor of cores){
    console.log(cor);
}
