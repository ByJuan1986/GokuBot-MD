import { sticker } from '../lib/sticker.js'
let handler = async (m, {conn}) => {

if (db.data.chats[m.chat].fAutoStick) {
let nombre = "Goku" //nombre del sticker en config.js
let nombre2 = "Bot" //nombre del sticker en config.js

//Sticker de hola
if (/^hola|hello|holi|oli|ola$/i.test(m.text)) {
let stiker = await sticker(null, hola[Math.floor(Math.random() * hola.length)], nombre, nombre2) //Cambia "hola" por otro constante si copias este.
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
}

//Copia y pega.
if (/^alegre$/i.test(m.text)) {
let stiker = await sticker(null, alegre[Math.floor(Math.random() * alegre.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
 }

if (/^amor$/i.test(m.text)) {
let stiker = await sticker(null, amor[Math.floor(Math.random() * amor.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
 }

}}
handler.customPrefix = /hola|hello|alegre|holi|amor|ola/i
handler.command = new RegExp()
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

//Agrega mas consonantes y define su argumento.
//Constante hola

//copiar
const alegre = [
'https://od.lk/s/NTZfMjU0NTgxMjhf/alegre%2001.png',
'https://od.lk/s/NTZfMjU3OTM0MzBf/Alegre%2002.png',
'https://od.lk/s/NTZfMjU0NTgxMjdf/alegre%2003.png',
'https://od.lk/s/NTZfMjU0NTgxMjdf/alegre%2003.png',
'https://od.lk/s/NTZfMjU0NTc1NDlf/alegre%2004.png',
'https://od.lk/s/NTZfMjU0NTgxNTVf/alegre%2005.png'
]

const hola = [
'https://files.catbox.moe/1stgzp.jpg',
'https://files.catbox.moe/ucdo6i.jpg',
'https://files.catbox.moe/b3rhjz.jpg'
]

const amor = [
'https://files.catbox.moe/pl62mt.jpg',
'https://files.catbox.moe/pl62mt.jpg',
'https://files.catbox.moe/pl62mt.jpg'
]


//Agrega comas cada nuevo url que agregues pero no agregues coma al ultimo url.
