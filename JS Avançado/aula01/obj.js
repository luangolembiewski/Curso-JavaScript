///criando Objetos


//Forma literal 
const obj = {
    prop1: "Sou uma propriedade que sera acessada usando dot notation",
    metodo: function(){
        return "Sou o retorno de um metodo, uma função dentro de um objeto"
    }
}



//DOT Notation = acessar por meio de ponto
//Declarando uma nova propriedade e depois um novo método: INSERINDO
obj.prop2 = "Sou a propriedade 2 com valor tipo string"
obj.metodo2 = () => "Sou o retorno do método 2"
//imprimir
console.log("======================================")
console.log(obj.prop1)
console.log(obj.metodo())
console.log("======================================")
console.log(obj.prop2)
console.log(obj.metodo2())


//Bracket notation = Atraves de []
//Declarando uma nova propriedade e depois um novo método: INSERINDO
obj['prop3'] = "Sou a propriedade 3 com valor tipo string"
obj['metodo3']= () => "Sou o retorno do método 3"
//imprimir
console.log("======================================")
console.log(obj['metodo3']())
console.log(obj['prop3'])
console.log("======================================")
