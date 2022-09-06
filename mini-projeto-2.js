function maiorNumero(num1, num2){
    if(num1 > num2)
    {
        return num1;
    }
    else{
        return num2;
    }
}

let num1, num2;

console.log("O maior numero sera: ");
let max = maiorNumero(25,15);
console.log(max);