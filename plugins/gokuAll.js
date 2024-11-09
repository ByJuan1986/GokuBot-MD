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
global.grupo1 = ''
global.grupo2 = ''
global.grupo3 = ''
global.grupo4 = ''
global.grupo5 = ''
global.canal = ''
global.md = 'https://github.com/ByJuan1986/GokuBot-MD' 
//global.paypal = ''
//global.canal2 = ''
//global.canal3 = ''
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
global.img1 = ''
global.img2 = ''
global.img3 = ''
global.img4 = ''
global.img5 = ''


//• ⟢ › Imagenes
global.imagen1 = ''
global.imagen2 = ''
global.imagen3 = ''
global.imagen4 = ''
global.imagen5 = ''


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
