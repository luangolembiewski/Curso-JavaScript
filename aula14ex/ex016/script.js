
function Contar(){
    inicio = document.querySelector('input#inicio')
    fim = document.querySelector('input#fim')
    passo = document.querySelector('input#passo')
    res = document.querySelector('p#res')

    inicioVal = Number(inicio.value)
    fimVal = Number(fim.value)
    passoVal = Number(passo.value)

    if(inicioVal!=0 && fimVal!=0 && passoVal!=0){
        x = inicioVal;
        res.innerHTML = 'Contando: <br>'
        while(x<=fimVal){
            if(x!=fimVal){
                res.innerHTML += (x +'&#128073')
            }else{
                res.innerHTML += (x +'&#127937')
            }
            x+=Number(passoVal)
        }
    }else{
        alert("Todos os campos devem ser preenchidos!!")
    }
}
