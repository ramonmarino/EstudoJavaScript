function rG(nome,numero){
    if(nome === undefined){
        console.log("Por favor você precisa passar o seu nome!");
    }else{
        console.log("O seu nome é: " + nome + " e RG é: " + numero);
    }

}

rG(); // sempre nas ordem dos parâmetros
rG("Ramon",5678902);

function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Você precisa colocar os dois parâmentros por favor.");
    }else{
        return a + b;
    }
}

soma(1);
soma();
console.log(soma(5,5));