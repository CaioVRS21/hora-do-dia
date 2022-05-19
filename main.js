function carregar(){
let msg = document.getElementById('msg')
let img = document.getElementById('img')
let data = new Date()
let hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    img.src = './media/manha-att.png'
    document.body.style.background = '#e9e7ea'
    return;
    //BOM DIA
}
if (hora >= 12 && hora < 18){
    img.src = './media/tarde-att.png'
    document.body.style.background = '#fdc7a3'
    return;
    //BOA TARDE
} else {
    img.src = './media/noite-att.png'
    document.body.style.background = '#044a9a'
    //BOA NOITE
}
}