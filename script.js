console.log("hello, World!")

let nome = "joao";
const idade = 25;

function sindicato() {
    console.log("ola", + nome);
}

//par ou impar 1
let numero;

function verificarPar(numero) {
    if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }

}

//Operações Matemáticas Simples: 2
let a;
let b;

function calcular(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
}

// Laço While para Contagem Regressiva: 3
let x = 10;
function Contagem() {
    while (x > 0) {
        console.log(x);
        x = x - 1;

    }
}

//Manipulação de Strings: 4
let text = "retangulo";
function inverterTexo(text) {

    console.log(text.split("").reverse().join(""))

}

// Contagem de Caracteres em uma String: 5
let texto;
function contarCaracteres(texto) {
    console.log(texto.length);
}

//Acessando Propriedades de Objetos: 6
let carro = {
    modelo: "show de bola",
    nome: "McMaqueen",
    ano: 2008

}

function mostrarCarro() {
    console.log(carro);
}


// Função com Parâmetros Opcionais: 7
let name;
const mensagem = "Olá!";

function mensagemPersonalizada(name, mensagem) {

    console.log(mensagem + name);
}
// Calculadora de Média: 8
let num1;
let num2;
let num3;
let media;

function mediaAritimetrica(num1, num2, num3, media) {
    media = (num1 + num2 + num3) / 3;
    console.log(media);
}
// Laço for com Condição: 9
function multiplos() {
    for (let i = 0; i < 21; i++) {
        console.log(i);
        if (i % 3 == 0) {
            console.log("multiplo de 3")
        } else {
            console.log("não multiplo de 3")
        }
    }
}

// Verificação de Palavra Palíndroma: 10
let palavra;
function verificarPalindromo(palavra) {

    invertida = palavra.split("").reverse().join("");

    if (invertida == palavra) {
        console.log("palíndromo")
    } else {
        console.log("not palíndromo")
    }


}

//11. Verificação de Número Positivo ou Negativo:
//Crie uma função chamada verificarSinal que receba um número como parâmetro e imprima "Positivo", "Negativo" ou "Zero" conforme o caso.

//12. Função para Converter Celsius em Fahrenheit:
///Crie uma função chamada converterTemperatura que receba uma temperatura em Celsius e retorne o valor convertido para Fahrenheit.

//13. Laço While para Somatório:
//Crie um laço while que some os números de 1 até 100 e imprima o resultado final.

//14. Substituição de Palavras em String:

function substituirPalavra(texto) {
    console.log(texto.replace(/azul/g,"vemelho"));
}

//15. Verificação de Tamanho de String:
//Crie uma função chamada verificarTamanho que receba uma string e informe se ela tem mais de 10 caracteres ou não.

//16. Criando e Acessando Array:

//Crie um array chamado frutas com pelo menos 5 frutas diferentes.Imprima no console a terceira fruta da lista.

//17. Função com Valor Padrão em Dois Parâmetros:
//Crie uma função chamada saudacao que tenha dois parâmetros, nome e saudacao, sendo saudacao padrão "Bem-vindo(a)".A função deve retornar a frase completa.

//18. Verificação de Nota:
//Crie uma função chamada verificarAprovacao que receba uma nota e retorne "Aprovado" se for maior ou igual a 6, e "Reprovado" se for menor que 6.

//19. Laço for para Contagem de Pares:
//Crie um laço for que percorra os números de 0 a 30 e imprima apenas os números pares.

//20. Contagem de Vogais:
function contarVogais(palavra){
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of palavra){
        if(vogais.includes(letra)){
            contador++;
        }
    }

    console.log(contador);
}
//21. Soma dos Elementos de um Array:


//22. Função para Dobrar Números:

///rie uma função chamada dobrarNumero que receba um número e retorne o dobro desse número.

//23. Laço While para Contagem de Pares:
//Crie um laço while que imprima todos os números pares de 2 até 20.

//24. Capitalizar Primeira Letra:
//Crie uma função chamada capitalizar que receba uma string e retorne a mesma string com a primeira letra maiúscula.Exemplo: "javascript" → "Javascript".

//25. Verificação de Ano Bissexto:
//Crie uma função chamada anoBissexto que receba um ano e retorne true se for bissexto, ou false se não for.
