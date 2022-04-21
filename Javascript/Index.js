/*Aula 1*/

var name = "kaue";
var idade = "28";
var idade2 = "10";
console.log("none");
console.log(idade = idade2);

/*fim*/

/*aula 2*/

var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista[0]);
console.log(lista.toString()[0]);

/*fim*/

/* aula 3*/
var idade = prompt("qual e sua idade");
if (idade > 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};


var count = 5;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};

/*fim */

/*aula 4*/

function soma(n1, n2) {

    return n1 + n2;

}

function setreplace(frase, none, novo_nome) {

    return frase.replace(none, novo_nome)
}

alert(soma(5, 10));
alert(setreplace("vai japao", "japao", "brasil"));

/*validar*/

var validar = 0;

function validaldade(idade) {

    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade");
validaldade(idade);
console.log(validar);

/*fim*/

/*Funçao 1*/
function clicou() {
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por clicar");
}
/*funçao 2*/

function redirecionar() {
    window.open("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjehOrLr6L3AhWBjJUCHSCWAzQQFnoECAQQAQ&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fpt-BR%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Fwhile&usg=AOvVaw1xpMJtIYsoYT4ICLbI3Cc4");

}
/*fim*/