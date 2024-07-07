// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var exp1 = '2s' / 5;
console.log(exp1);
var exp2 = +'280 anos' * 9;
console.log(exp2); 

// Somar a string '200' com o número 50 e retornar 250
var somar = +'200' + 50;
console.log(somar);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
incremento++;
console.log(incremento);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = +numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)
console.log(pesoPorDois + unidade);

