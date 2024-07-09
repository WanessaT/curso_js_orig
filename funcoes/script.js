function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}

var total = 5 * pi();
console.log(total.toFixed(2));

function imc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
  }
  
console.log(imc(80, 1.80));
console.log(imc(60, 1.70)); 
  
function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto de azul';
    } else if(cor === 'verde') {
        return 'Eu gosto de verde';
    } else {
        return 'Eu não gosto de nenhuma cor';
    }
}
console.log(corFavorita());

addEventListener('click', function() {alert('Clicou!')});

function imc2(peso, altura) {
    const imc = peso / (altura **2);
    console.log(imc.toFixed(2));
}
imc2(85, 1.57);

function terceiraIdade(idade) {
    if(typeof idade != 'number') {
        return 'Informe a sua idade:';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(50));

var profissao = 'Designer';

function dados() {
    var nome = 'João';
    var idade = 35;
    function outrosDados() {
        var endereco = 'Salvador';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados())