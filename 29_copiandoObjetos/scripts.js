let carro = {
    modelo: "BMW",
    portas: 2,
    motor: "400 CV",
    cor: "Azul"


}

console.log(carro);

let carroDeluxe = {
    arcondicionado: "Possui",
    Blindado: true,

}

Object.assign(carro,carroDeluxe);

console.log(carro);
