let nome = "Ramon Marino";

for(let i = 0; i <= 10; i++){
    if(nome == 3){
        nome = "Laura";
    }

    if(i == 5 && nome == "Laura"){
        console.log("O nome é esse mesmo, pode parar.");
        break;
    }
}

console.log(i)


