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

//Manipulação de Strings:
let text = "retangulo";
function inverterTexo(text){

    console.log(text.split("").reverse().join(""))
   
}

// Contagem de Caracteres em uma String:
let texto;
function contarCaracteres(texto) {
    console.log( texto.length);
}

//Acessando Propriedades de Objetos:
let carro = {
    modelo: "show de bola",
    nome:"McMaqueen",
    ano: 2008

}
console.log (carro);

// Função com Parâmetros Opcionais:
let name;
const mensagem = "Olá!";

function  mensagemPersonalizada(name,mensagem){

    console.log(mensagem + name);
}
// Calculadora de Média:
let num1 ;
let num2 ;
let num3 ;
let media;

function mediaAritimetrica(num1,num2,num3,media){
    media = (num1 + num2 + num3)/3;
    console.log(media);
}
// Laço for com Condição:
function multiplos(){
    for (let i = 0; i < 21 ; i++){
        console.log(i);
        if(i%3 == 0){
            console.log("multiplo de 3")
        }else{
            console.log("não multiplo de 3")
        }
    }
}

// Verificação de Palavra Palíndroma:
let palavra ;
function verificarPalindromo(palavra){

    invertida = palavra.split("").reverse().join("");

    if (invertida == palavra){
        console.log("palíndromo")
    }else{
        console.log("not palíndromo")
    }
   
}