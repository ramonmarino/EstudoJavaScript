/* O escopo de uma função é diferente do escopo global
posso colocar o mesmo nome de variavel e valores diferentes estando em escopos
diferentes*/

let numero = 10;



function numeroNaFuncao(){
     let numero = 30;
    console.log("O número da função é: " + numero);

}

numeroNaFuncao();

console.log(numero);

let x = 40;

if(x > 5){
    let x = 20;
    x++;
    console.log(x);
}

console.log(x);



