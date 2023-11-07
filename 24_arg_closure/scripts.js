// Closure sempre retorna uma função.

function lembrarSoma(x){
    return function(y){
        return x + y;

    }
}

let soma1 = lembrarSoma(5);
console.log(soma1(10));

let soma2 = lembrarSoma(10);
console.log(soma2(20));

