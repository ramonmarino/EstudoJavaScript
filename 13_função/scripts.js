const nome = "Ramon";
console.log("Ramon" + " " + "Marino");
console.log("PROGRAMADOR: " + nome);


function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(10, 100));

// sem parametros;

function ola() {
    console.log("Olá");

}

ola();

const nomeCompleto = function qualSeuNome(nome) {
    if (nome == "Ramon") {
         return "Olá Ramon muito prazer!";

    }else{
        return"Sinto muito estou esperando o Ramon!";
    }

}
// Chamar função no escopo global// ou aplicação principal
console.log(nomeCompleto("Pedro"));



const nomeCompleto2 = function qualSeuNome2(nome) {
    if (nome == "Ramon") {
         return "Olá Ramon muito prazer!";

    }else{
        return"Sinto muito estou esperando o Ramon!";
    }

}
// Chamar função no escopo global// ou aplicação principal
console.log(nomeCompleto2("Ramon"));


const arrayOriginal = [10, 20, 30, 40];
const arrayMultiplicado = arrayOriginal.map(numero => numero * 5);

console.log(arrayMultiplicado);