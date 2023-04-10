function verificar(){
    var anoAtual = new Date().getFullYear()
    var anotxt = document.querySelector('input#anotxt')
    var ano = anotxt.value
    var res = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex')
    var idade = anoAtual-ano 
    var divimg = document.querySelector('div#img')
    
    if(ano.length == 0 || ano > anoAtual){
        alert('Ano inválido!')
    }else{
        var genero=''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.borderRadius = '50%'
        img.style.width ='200px'
        img.style.height ='200px'
        divimg.style.textAlign = 'center'
        if(fsex[1].checked){
            genero='Mulher'
        }else if(fsex[0].checked){
            genero='Homem'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        switch(genero){
            case 'Mulher':
                if(idade>=0 && idade<=10){
                    img.setAttribute('src', './imagens/bebe-f.png')
                }else if(idade>10 && idade<18){
                    img.setAttribute('src', './imagens/jovem-f.png')
                }else if(idade>=18 && idade<60){
                    img.setAttribute('src', './imagens/adulto-f.png')
                }else{
                    img.setAttribute('src', './imagens/idoso-f.png')
                } 
                break
            case 'Homem':
                if(idade>=0 && idade<=10){
                    img.setAttribute('src', './imagens/bebe-m.png')
                }else if(idade>10 && idade<18){
                    img.setAttribute('src', './imagens/jovem-m.png')
                }else if(idade>=18 && idade<60){
                    img.setAttribute('src', './imagens/adulto-m.png')
                }else{
                    img.setAttribute('src', './imagens/idoso-m.png')
                }
                break
        }
        divimg.appendChild(img)

    }

    
}