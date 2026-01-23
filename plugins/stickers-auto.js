import { sticker } from '../lib/sticker.js'
let handler = async (m, {conn}) => {

if (db.data.chats[m.chat].fAutoStick) {
let nombre = sk_pack //nombre del sticker en config.js
let nombre2 = sk_pack2 //nombre del sticker en config.js

//Sticker de hola
if (/^hola|hello|holi|oli|ola$/i.test(m.text)) {
let stiker = await sticker(null, hola[Math.floor(Math.random() * hola.length)], nombre, nombre2) //Cambia "hola" por otro constante si copias este.
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
}

//Copia y pega.


}}
handler.customPrefix = /hola|hello|holi|oli|ola/i
handler.command = new RegExp()
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

//Agrega mas consonantes y define su argumento.
//Constante hola
const hola = [
'https://files.catbox.moe/m48dwb.jpg',
'https://files.catbox.moe/ce5bek.jpg',
'https://files.catbox.moe/69ukdx.jpg'
]

/* //copiar
const = [
'',
'',
''
]
*/ 

//Agrega comas cada nuevo url que agregues pero no agregues coma al ultimo url.