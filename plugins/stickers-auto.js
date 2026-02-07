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


}}
handler.customPrefix = /hola|hello|holi|oli|ola/i
handler.command = new RegExp()
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

//Agrega mas consonantes y define su argumento.
//Constante hola
const hola = [
'https://files.catbox.moe/1stgzp.jpg',
'https://files.catbox.moe/ucdo6i.jpg',
'https://files.catbox.moe/b3rhjz.jpg'
]

 //copiar
const alegre = [
'https://files.catbox.moe/4j22kf.jpg',
'https://files.catbox.moe/4j22kf.jpg',
'https://files.catbox.moe/4j22kf.jpg'
]


//Agrega comas cada nuevo url que agregues pero no agregues coma al ultimo url.
