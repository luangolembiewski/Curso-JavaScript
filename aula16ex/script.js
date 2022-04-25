var num = document.querySelector('input#num')
var lista = document.querySelector('select#lista')
var resultado = document.querySelector('div#resultado')
var vetor=[]


function adicionar(){
    numVal = Number(num.value)
    if(numVal>=1 && numVal <=100){
        if(vetor.indexOf(numVal) == -1){
            vetor.push(numVal)
            vetor.sort()
            adicionarTela();
        }else{
            alert('Este numero já existe')
        }
    }else{
        alert("Numero inválido")
    }
}
function finalizar(){
    if(vetor.length != 0){
        resultado.innerHTML = (`Ao todo, temos ${vetor.length} números cadastrados <br>
        O maior valor informado foi ${vetor[(vetor.length-1)]} <br>
        O menor valor informado foi ${vetor[0]} <br>
        Somando todos os valores, temos ${soma()} <br>
        A média dos valores digitados é ${media(soma())}`)
    }
    else{
        alert("Lista vazia!")
    }
}
function soma(){
    let resSoma=0
    for(let x in vetor){
        resSoma += vetor[x]
    }
    return resSoma
}
function media(soma){
    let resMedia=(soma/vetor.length)
    return resMedia
}

function adicionarTela(){
    let item = document.createElement('option')
    item.text = `Valor ${numVal} adicionado`
    item.value = `tab${vetor.length}`
    lista.appendChild(item)
}