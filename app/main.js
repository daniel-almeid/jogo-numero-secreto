const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número secreto:', numeroSecreto)

const elementomenorValor = document.getElementById('menor-valor')
elementomenorValor.innerHTML = menorValor

const elementomaiorValor = document.getElementById('maior-valor')
elementomaiorValor.innerHTML = maiorValor