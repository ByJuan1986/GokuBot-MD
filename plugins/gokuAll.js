import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
global.fotoperfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg')
let user = global.db.data.users[who]
let pushname = m.pushName || 'Sin nombre'

//• ⟢ › Contactos.
global.creador = 'wa.me/'
global.asistencia = 'wa.me/'
global.ofcbot = `${conn.user.jid.split('@')[0]}`

//• ⟢ › Fecha
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})


//• ⟢ › Mensajes en espera.
global.wait = '• ⏳ › _Cargando 23%_'
global.waitt = '• ⏳ › _Cargando 46%_'
global.waittt = '• ⏳ › _Cargando 76%_'
global.waitttt = '• ⏳ › _Cargando 93%_'
global.waittttt = '• ⏳ › _Cargando 100%_'

//• ⟢ › Enlaces
//Puedes quitar los // si comienzas a usarlo.
global.grupo1 = 'https://chat.whatsapp.com/L2vpoClRqYC6wsmGC0gFqS'
global.grupo2 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K'
global.grupo3 = 'https://chat.whatsapp.com/LmDvJZWd0eQCzhR8lwJ5B4'
global.grupo4 = 'https://chat.whatsapp.com/LddDN9xDXcg15IuOirylqZ'
global.grupo5 = 'https://chat.whatsapp.com/EaTmnGSAX3pH06Dl7MRzmV'
global.canal = 'https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w'
global.md = 'https://github.com/ByJuan1986/GokuBot-MD' 
//global.paypal = ''
//global.canal2 = 'https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V'
//global.canal3 = 'https://whatsapp.com/channel/0029VaQkf7T0rGiORXhKqR0R'
global.mbmd = 'https://github.com/MBMD-OFC'
//global.instagram = ''
//global.facebook = ''
//global.discord = ''
//global.atombio = ''


//• ⟢ › Formatos aleatorios.
global.gokuAll = [grupo1, mb, canal].getRandom() //Solo redes sociales o similares.
global.gokuImgs = [img1, img2, img3, img4, img5].getRandom() //Solo imagenes cuadradas.
global.gokuImagens = [imagen1, imagen2, imagen3, imagen4, imagen5].getRandom() //Imagenes de cualquier forma.
//global.gokuVideo = [video1, video2, video3, video4, video5].getRandom() //Videos para menus.

//• ⟢ › Imagenes cuadradas.
global.img1 = 'https://i.postimg.cc/vH61KxqM/Goku-Bot-01.jpg'
global.img2 = 'https://i.postimg.cc/zDQbpFk0/Goku-Bot-02.jpg'
global.img3 = 'https://i.postimg.cc/HnrJdrTw/Goku-Bot-03.jpg'
global.img4 = 'https://i.postimg.cc/fy1VLMb6/Goku-Bot-04.jpg'
global.img5 = 'https://i.postimg.cc/mgfcWZJ9/Goku-Bot-05.jpg'


//• ⟢ › Imagenes
global.imagen1 = 'https://i.postimg.cc/vmJ2C93F/Goku-06.jpg'
global.imagen2 = 'https://i.postimg.cc/KztpbzHK/goku-07.jpg'
global.imagen3 = 'https://i.postimg.cc/fRgrj1db/goku-08.jpg'
global.imagen4 = 'https://i.postimg.cc/jjwk8v64/Goku-09.jpg'
global.imagen5 = 'https://i.postimg.cc/Twz8q1KQ/Goku-10.jpg'


//• ⟢ › Videos
//Puedes quitar los // si empiezas a utilizarlo.
//global.video1 = ''
//global.video2 = ''
//global.video3 = ''
//global.video4 = ''
//global.video5 = ''


//• ⟢ › Tiempo
var ase = new Date(); 
var hour = ase.getHours(); switch(hour){ 
case 0:  hour = 'Buenas noches'; break; 
case 1: hour = 'Buenas noches'; break; 
case 2: hour = 'Buenas noches'; break; 
case 3: hour = 'Buenos dias'; break; 
case 4: hour = 'Buenos dias'; break; 
case 5: hour = 'Buenos dias'; break; 
case 6: hour = 'Buenos dias'; break; 
case 7: hour = 'Buenos dias'; break; 
case 8: hour = 'Buenos dias'; break; 
case 9: hour = 'Buenos dias'; break; 
case 10: hour = 'Buenas tardes'; break; 
case 11: hour = 'Buenas tardes'; break; 
case 12: hour = 'Buenas tardes'; break; 
case 13: hour = 'Buenas tardes'; break; 
case 14: hour = 'Buenas tardes'; break; 
case 15: hour = 'Buenas tardes'; break; 
case 16: hour = 'Buenas tardes'; break; 
case 17: hour = 'Buenas tardes'; break; 
case 18: hour = 'Buenas noches'; break; 
case 19: hour = 'Buenas noches'; break; 
case 20: hour = 'Buenas noches'; break; 
case 21: hour = 'Buenas noches'; break; 
case 22: hour = 'Buenas noches'; break; 
case 23: hour = 'Buenas noches'; break;}
global.saludo = hour;

//• ⟢ › Mensionados
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//• ⟢ › Diseños en textos
global.fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}}
}
export default handler
