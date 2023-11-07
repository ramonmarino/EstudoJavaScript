/* O valor default(padrão) vai definir um valor "fixo" para um parâmetro ou
variavel podendo assim executar a aplicação cada seja esquecido algum dado
funciona como uma segurança e caso o valor default ele assume o novo valor */

// Exemplo:

function potencia(base,exp=2){ // no exp estou definindo o default
    return Math.pow(base,exp);

}

console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(5,5));