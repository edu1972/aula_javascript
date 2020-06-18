/*var nome = "Luis Eduardo";
//alert("Bem Vindo " + nome + "idade");
var idade = 48;
var idade2 = 10;
var frase = "Japão é o melhor pais do mundo!";
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Canadá"));
alert(frase.replace("Japão", "Canadá"));  */ //comentado até este pontp

//Observação o Javascript reconhece como string quando o valor da variável está entre aspas duplas "" //

/* var lista = ["maçã", "pera", "banana", "melancia"];
console.log(lista);
lista.push("uva")
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - ")); */

/* var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "banana", cor: "amarela" }];
console.log(frutas);
alert(frutas[1].nome); */


/*
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

/* var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1; // ou count++;
}
*/

/*
var count = 0;
for (count = 1; count <= 5; count++) {
    alert(count);
}
*/

/*
var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
*/
/*
function soma(n1, n2) {
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(soma(5, 10));
alert(setReplace("vai Japão", "Japão", "Canadá"));
*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validaIdade(idade));
*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}