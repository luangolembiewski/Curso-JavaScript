let num = [6,2,5,8]
console.log(`Nosso vetor tem ${num.length} posições, valores: ${num}`)

//passar por todas posições
for (let x=0;x<num.length;x++){
    console.log(`Posição: ${x} Valor: ${num[x]}`)
}

//adicionar
num.push(9)

//Outra maneira
for(let x in num){
    console.log(num[x])
}

//buscar por valor
let posi = num.indexOf(9)
console.log(`Valor 9, Posição: ${posi}`)

//posição não encontrada
posi = num.indexOf(4)
if (posi == -1){
    console.log(`Valor não encontrado`)
}