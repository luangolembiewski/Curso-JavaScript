function gerar(){
    num = document.querySelector('input#num')
    lista = document.querySelector('select#lista')
    if (num.value.length == 0){
        alert('Por favor, Digite um número!')
    }else{
        numVal = Number(num.value)
        lista.innerHTML = ''
        for(x=0;x<=10;x++){
            let item = document.createElement('option')
            item.text = `${numVal}X${x}=${numVal*x}`
            item.value=`tab${x}`
            lista.appendChild(item)
        }
    }

    
}