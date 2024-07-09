// Crie uma função para verificar se um valor é Truthy
function verificaTruthy() {
    var valor = 10;
    console.log(`O valor é ${!!valor}`)
}
verificaTruthy()

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function verificaPerimetro(lado) {
    var calcula = lado * 4
    console.log(`O perímetro do quadrado mede ${calcula} metros.`)
}
verificaPerimetro(20)


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    nome = 'Wanessa Thaylanny';
    sobrenome = 'Loureiro de Sousa';
    console.log(`Meu nome completo é ${nome} ${sobrenome}.`);
}
nomeCompleto();

// Crie uma função que verifica se um número é par
function parOuImpar(numero) {
    numero = 53;
    if(numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`)
    }
}
parOuImpar();

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function verificaType() {
    var dado = 'Caderno';
    console.log(`O tipo do dado inserido é ${typeof dado}`);
}
verificaType();

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
function mostraNome() {
    var nomeCompleto = 'Wanessa Thaylanny Loureiro de Sousa';
    console.log(nomeCompleto);
}
document.addEventListener('click', mostraNome)

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
  }
  function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
  }
  precisoVisitar(20);
  jaVisitei(20);
  