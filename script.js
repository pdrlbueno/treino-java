console.log("hello ,wold")

let nome = "joao";
const idade = 25;

function sindicato(){
    console.log("ola", + nome);
}

//par ou impar
let numero;

function verificarPar(numero){
    if(numero%2 === 0){
        console.log("par");
    }else{
        console.log("impar");
    }
    
}

//Operações Matemáticas Simples:
let a;
let b;

function calcular(a,b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

// Laço While para Contagem Regressiva:
let x = 10;
function Contagem(){
    while(x > 0 ){
        console.log(x);
        x = x - 1;
       
    }
}