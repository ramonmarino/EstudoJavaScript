// função sem parametro

function imprimirNoConsole(){
    console.log("Olá mundo, muito prazer!");

}
imprimirNoConsole();

// função com parâmetros 

function escolhaUmNumero(numero){
    console.log("O número escolhido foi: " + numero);

}

escolhaUmNumero(10);


// variavel assume o nome da função virando uma função anônima.

const numeroSorteo = function(){
    console.log(Math.random());

}

numeroSorteo();