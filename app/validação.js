function verificaChute(chute){
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
    }

    if (numeroMaiorouMenor(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisar estar entre ${menorValor}
        e ${maiorValor}</div>`
    }
    
    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor</div>`
    }
    else{
        elementoChute.innerHTML += `<div>O número secreto é maior</div>`
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorouMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id =='jogar-novamente'){
        window.location.reload()
    }
})