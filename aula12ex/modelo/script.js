var body = window.document.body
var hora = new Date().getHours()
var imagem = window.document.querySelector('img#imagem')
var horatxt = window.document.querySelector('p#horatxt')
horatxt.innerHTML = `Agora são ${hora} Horas`
if(hora<12){
    body.style.background = '#f8f68e';
}else if(hora<=18){
    body.style.background = 'aqua';
}else {
    body.style.background = 'rgb(83, 83, 83)';
}