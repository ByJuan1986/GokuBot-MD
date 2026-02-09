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

if (/^baile$/i.test(m.text)) {
let stiker = await sticker(null, baile[Math.floor(Math.random() * baile.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
}

if (/^enfadado$/i.test(m.text)) {
let stiker = await sticker(null, enfadado[Math.floor(Math.random() * enfadado.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
} 

if (/^guantazo$/i.test(m.text)) {
let stiker = await sticker(null, guantazo[Math.floor(Math.random() * guantazo.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
}

if (/^llorar$/i.test(m.text)) {
let stiker = await sticker(null, llorar[Math.floor(Math.random() * llorar.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker)
await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
                       }
 
}}
handler.customPrefix = /hola|enfadado|alegre|guantazo|amor|baile|llorar/i
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
'https://od.lk/s/NTZfMjU0NTgxNTVf/alegre%2005.png',
'https://od.lk/s/NTZfMjU0NTc1NTFf/alegre%2006.jpg',
'https://od.lk/s/NTZfMjU0NTc1NTJf/alegre%2007.jpg',
'https://od.lk/s/NTZfMjU0NTgxMjFf/alegre%2008.png',
'https://od.lk/s/NTZfMjU0NTc1NTRf/Alegre%2009.png',
'https://od.lk/s/NTZfMjU0NTgxMjJf/alegre%2010.png',
'https://od.lk/s/NTZfMjU0NTgxMjlf/alegre%2011.png',
'https://od.lk/s/NTZfMjU0NTgxMzBf/alegre%2012.png',
'https://od.lk/s/NTZfMjU0NTgxMzFf/alegre%2013.png',
'https://od.lk/s/NTZfMjU0NTgxMzJf/alegre%2014.png',
'https://od.lk/s/NTZfMjU0NTgxMzNf/alegre%2015.png',
'https://od.lk/s/NTZfMjU0NTgxMzRf/alegre%2016.png',
'https://od.lk/s/NTZfMjU0NTgxMzVf/alegre%2017.png',
'https://od.lk/s/NTZfMjU0NTgxMzZf/alegre%2018.png',
'https://od.lk/s/NTZfMjU0NTgxMzdf/alegre%2019.png',
'https://od.lk/s/NTZfMjU0NTgxMzhf/alegre%2020.png'
]

const amor = [
'https://od.lk/s/NTZfMjczNDA0ODdf/amor%2001.jpg',
'https://od.lk/s/NTZfMjczNDA0ODhf/amor%2002.jpg',
'https://od.lk/s/NTZfMjczNDA0ODlf/amor%2003.jpg'
]

const baile = [
'https://od.lk/s/NTZfMjUwNjcxMjdf/Baile%201.gif',
'https://od.lk/s/NTZfMjUwNjcxMTlf/Baile%202.gif',
'https://od.lk/s/NTZfMjUwNjcxMjBf/Baile%203.gif'
]

const enfadado = [
'https://od.lk/s/NTZfMjUwOTU1MDlf/enfadado%2001.png',
'https://od.lk/s/NTZfMjUwOTU1MTBf/enfadado%2002.jpeg',
'https://od.lk/s/NTZfMjUwOTU1MTJf/enfadado%2003.jpeg'
]

const guantazo = [
'https://od.lk/s/NTZfMjUwMDMwNzJf/Bofetada%201.gif',
'https://od.lk/s/NTZfMjUwNjcwMTNf/Bofetada%202.jpg',
'https://od.lk/s/NTZfMjUwMDU0Mzhf/Bofetada%203.jpeg'
]

const hola = [
'https://files.catbox.moe/1stgzp.jpg',
'https://files.catbox.moe/ucdo6i.jpg',
'https://files.catbox.moe/b3rhjz.jpg'
]

const llorar = [
'https://files.catbox.moe/1stgzp.jpg',
'https://files.catbox.moe/ucdo6i.jpg',
'https://files.catbox.moe/b3rhjz.jpg'
]




//Agrega comas cada nuevo url que agregues pero no agregues coma al ultimo url.
