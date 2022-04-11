function carregar(){
    var body = window.document.body
    var hora = new Date().getHours()
    //hora = 16
    var img = window.document.querySelector('img#imagem')
    var horatxt = window.document.querySelector('p#horatxt')

    horatxt.innerHTML = `Agora são ${hora} Horas`
    if(hora>=0 && hora<12){
        body.style.background = 'rgb(127,176,172)';
        img.src = 'manhã.png'
    }else if(hora<=18){
        body.style.background = 'rgb(214,182,1)';
        img.src = 'tarde.png'
    }else {
        body.style.background = 'rgb(83, 83, 83)';
        img.src = 'noite.png'
    }
}
