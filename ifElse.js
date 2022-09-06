let hora = prompt();

if(hora > 6 && hora <= 12)
{
    alert("Bom dia");
    console.log("Bom dia!")
}

else if(hora > 12 && hora <= 18){
    alert("Boa Tarde");
    console.log("Boa Tarde!");
}

else{
    alert("Boa Noite"); 
    console.log("Boa Noite!");
}