
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))
import '../ajuste.js'
//import '../src/apis.js'

let handler = m => m
handler.all = async function (m) {
global.key = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let imgbot = await this.profilePictureUrl(who, 'image').catch(_ => gokuImgs)

global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//global.canalfalso = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: canalwa, serverMessageId: 100, newsletterName: 'MBMD' }, externalAdReply: { title: 'MBMD', body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: imgs, thumbnail: imgc2, sourceUrl: allmbmd }}}, { quoted: m }
//global.falsedad = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: , serverMessageId: '', newsletterName: 'NOTIFY' }, externalAdReply: { title: 'GokuBot', body: wm, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gokuImgs, sourceUrl: gokuAll }}}

const mb_style = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'GokuBot', orderTitle: 'Bang', thumbnail: gokuImgs, sellerJid: '0@s.whatsapp.net' }}}
const audio_style = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}

let falso_trol = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
//let falso_gif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': imgs)}}}

let link_bot = { contextInfo: { externalAdReply: {title: 'Siguenos.', body: 'Canal de WhatsApp.' , sourceUrl: gokuAll, thumbnail: await(await fetch(gokuImgs)).buffer() }}}
let link_bot2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: gokuAll, mediaType: 'VIDEO', description: '', title: wm, body: 'AI', thumbnailUrl: gokuImagens, sourceUrl: gokuAll }}}
let linkbot = [link_bot, link_bot2]  

global.wait = "Cargando..."
global.waitt = "Cargando.."
global.waittt = "Cargando."
global.waitttt = "Cargando"
global.waittttt = "Cargando..."

}
export default handler

global.gokuAll = [grupo1, canal][Math.floor(Math.random() * 2)] //Solo redes sociales o similares.
global.gokuImgs = [img1, img2, img3, img4, img5][Math.floor(Math.random() * 5)] //Solo imagenes cuadradas.
global.gokuImagens = [imagen1, imagen2, imagen3, imagen4, imagen5][Math.floor(Math.random() * 5)] //Imagenes de cualquier forma.

global.img1 = 'https://i.postimg.cc/vH61KxqM/Goku-Bot-01.jpg'
global.img2 = 'https://i.postimg.cc/zDQbpFk0/Goku-Bot-02.jpg'
global.img3 = 'https://i.postimg.cc/HnrJdrTw/Goku-Bot-03.jpg'
global.img4 = 'https://i.postimg.cc/fy1VLMb6/Goku-Bot-04.jpg'
global.img5 = 'https://i.postimg.cc/mgfcWZJ9/Goku-Bot-05.jpg'

global.imagen1 = 'https://i.postimg.cc/vmJ2C93F/Goku-06.jpg'
global.imagen2 = 'https://i.postimg.cc/KztpbzHK/goku-07.jpg'
global.imagen3 = 'https://i.postimg.cc/fRgrj1db/goku-08.jpg'
global.imagen4 = 'https://i.postimg.cc/jjwk8v64/Goku-09.jpg'
global.imagen5 = 'https://i.postimg.cc/Twz8q1KQ/Goku-10.jpg'

global.grupo1 = 'https://chat.whatsapp.com/L2vpoClRqYC6wsmGC0gFqS'
global.grupo2 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K'
global.grupo3 = 'https://chat.whatsapp.com/LmDvJZWd0eQCzhR8lwJ5B4'
global.grupo4 = 'https://chat.whatsapp.com/LddDN9xDXcg15IuOirylqZ'
global.grupo5 = 'https://chat.whatsapp.com/EaTmnGSAX3pH06Dl7MRzmV'
global.canal = 'https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w'
global.md = 'https://github.com/ByJuan1986/GokuBot-MD' 
//global.paypal = 'https://www.paypal.com/paypalme/juann1986'
//global.canal2 = 'https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V'
//global.canal3 = 'https://whatsapp.com/channel/0029VaQkf7T0rGiORXhKqR0R'
//global.instagram = ''
//global.facebook = 'https://www.facebook.com/groups/992399634839160/'
//global.discord = ''
//global.atombio = ''

global.creador = 'wa.me/573108625104'
global.asistencia = 'wa.me/573108625104'
global.ofcbot = `${conn.user.jid.split('@')[0]}`

global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
