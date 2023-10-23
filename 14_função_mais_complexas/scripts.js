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

function variosNumeros(contagem){
    console.log("Vamos contar os números: " + contagem);

}

variosNumeros(5);
variosNumeros(10);
variosNumeros(100);
variosNumeros(1000);

function create(criar){
    console.log("Você está criando: " + criar );

}

create("sistema");

function update(atualizando){
    console.log("Você está atualizando: " + atualizando);
}

update("Sistema!");

function apagando(deletar){
    console.log("você está apagando: " + deletar);

}

apagando("dados");