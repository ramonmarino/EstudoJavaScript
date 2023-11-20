let numero = 10;
let numero2 = 20;
let numero3 = 30;
let numero4 = 40;
let numero5 = 50;

function mostrandoNumeros(...args){
    for(let i = 0 ; i < args.length; i++){
      console.log(args[i]);  
    }

}// permite receber quantidade qualquer de parametros no chamar da função. "generaliza a condição"
mostrandoNumeros(numero);
console.log("Pausa");
mostrandoNumeros(10,20,40,50,60,70,80,90,100,80,90,200,500);


