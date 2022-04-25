var amigo = {
    nome:'Luan',
    idade:21,
    sexo: 'M', 
    envelhecer(e=0){
        this.idade +=e
    }
}

amigo.envelhecer(3)
console.log(`${amigo.nome} tem ${amigo.idade} anos`)