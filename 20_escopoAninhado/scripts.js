/* O escopo de uma função é diferente do escopo global
posso colocar o mesmo nome de variavel e valores diferentes estando em escopos
diferentes*/

let x = 10; // global

function Multiplicacao(a,b){ //local da função
    let x = a * b; 
    console.log(x);

    if(x > 10){ // escopo local da minha condição if
        let x = 20;
        x++;
        console.log(x);

    }

}

console.log(x);
Multiplicacao(5,5)


