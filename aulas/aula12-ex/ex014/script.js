function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'foto-manha.jpg'
    document.body.style.background = '#daa520'
} else if (hora >+ 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'foto-tarde.jpg'
    document.body.style.background = '#00bfff'
} else {
    //BOA NOITE!
    img.src = 'foto-noite.jpg'
    document.body.style.background = '#215a60'
}
}