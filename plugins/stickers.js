import { sticker, addExif } from '../lib/sticker.js'
import axios from 'axios'
import fetch from 'node-fetch'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const fetchSticker = async (text, attempt = 1) => {
try {
const response = await axios.get(`https://skyzxu-brat.hf.space/brat`, { params: { text }, responseType: 'arraybuffer' })
return response.data
} catch (error) {
if (error.response?.status === 429 && attempt <= 3) {
const retryAfter = error.response.headers['retry-after'] || 5
await delay(retryAfter * 1000)
return fetchSticker(text, attempt + 1)
}
throw error
}}
const fetchStickerVideo = async (text) => {
const response = await axios.get(`https://skyzxu-brat.hf.space/brat-animated`, { params: { text }, responseType: 'arraybuffer' })
if (!response.data) throw new Error('Error al obtener el video de la API.')
return response.data
}
const fetchJson = (url, options) =>
new Promise((resolve, reject) => { fetch(url, options).then(res => res.json()).then(json => resolve(json)).catch(err => reject(err)) })
const handler = async (m, { conn, text, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].fStickers && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ stickers ]* estan desactivados...` }, { quoted: m })
}

try {
let userId = m.sender
let packstickers = global.db.data.users[userId] || {}
let texto1 = packstickers.text1 || global.packsticker
let texto2 = packstickers.text2 || global.packsticker2
switch (command) {
case 'brat': {
text = m.quoted?.text || text
if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba cualquier texto para crear un sticker brat.\n\n• Ppr ejemplo:\n*#${command}* Hola` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `Creando sticker, espere un momento...` }, { quoted: m })
const buffer = await fetchSticker(text)
const stiker = await sticker(buffer, false, texto1, texto2)
if (!stiker) throw new Error('📍  No se pudo generar el sticker.')
await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
break
}
case 'bratv': {
text = m.quoted?.text || text
if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba cualquier texto para crear un sticker brat animado.\n\n• Por ejemplo:\n*#${command}* Hola` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `Creando sticker, espere un momento...` }, { quoted: m })
const videoBuffer = await fetchStickerVideo(text)
const stickerBuffer = await sticker(videoBuffer, null, texto1, texto2)
await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m })
break
}
case 'emojix': {
if (!args[0]) return conn.sendMessage(m.chat, { text: `Ingrese el comando y ponga dos emojis y un simbolo + para combinarlos.\n\n• Por ejemplo:\n*#${command}* 😘+😂` }, { quoted: m })
let [emoji1, emoji2] = text.split`+`
await conn.sendMessage(m.chat, { text: `Creando sticker, espere un momento...` }, { quoted: m })
const res = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
if (!res.results || res.results.length === 0) throw new Error('📍  No se encontraron stickers para esos emojis.')
for (let result of res.results) {
let stiker = await sticker(false, result.url, texto1, texto2)
await conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}
break
}
case 'qc': {
let textFinal = args.join(' ') || m.quoted?.text
if (!textFinal) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba cualquier texto para crear un sticker.\n\n• Por ejemplo:\n*#${command}* Hola.` }, { quoted: m })
let target = m.quoted ? await m.quoted.sender : m.sender
const pp = await conn.profilePictureUrl(target).catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
const nombre = await (async () => global.db.data.users[target].name || (async () => { try { const n = await conn.getName(target); return typeof n === 'string' && n.trim() ? n : target.split('@')[0] } catch { return target.split('@')[0] } })())()
const mentionRegex = new RegExp(`@${target.split('@')[0]}`, 'g')
let frase = textFinal.replace(mentionRegex, '')
if (frase.length > 30) return conn.sendMessage(m.chat, { text: `📍  El texto no debe de tener mas de 30 caracteres, inténtalo de nuevo.` }, { quoted: m })
const quoteObj = { type: 'quote', format: 'png', backgroundColor: '#000000', width: 512, height: 768, scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name: nombre, photo: { url: pp } }, text: frase, replyMessage: {} }]}
const json = await axios.post('https://bot.lyo.su/quote/generate', quoteObj, { headers: { 'Content-Type': 'application/json' }})
const buffer = Buffer.from(json.data.result.image, 'base64')
const stiker = await sticker(buffer, false, texto1, texto2)
if (stiker) {
await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
break
}
case 'take': case 'wm': {
if (!m.quoted) return conn.sendMessage(m.chat, { text: `Ingrese el comando y responda a un sticker para cambiar el nombre.` }, { quoted: m })
const stickerData = await m.quoted.download()
if (!stickerData) return conn.sendMessage(m.chat, { text: `📍  No se ha podido realizar la conversión.` }, { quoted: m })
const parts = text.split(/[\u2022|]/).map(p => p.trim())
const nuevoPack = parts[0] || texto1
const nuevoAutor = parts[1] || texto2
const exif = await addExif(stickerData, nuevoPack, nuevoAutor)
await conn.sendMessage(m.chat, { sticker: exif }, { quoted: m })
break
}}} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}}

handler.tags = ['sticker']
handler.help = ['brat', 'bratv', 'emojimix', 'qc', 'take', 'robar', 'wm']
handler.command = ['brat', 'bratv', 'emojix', 'qc', 'take', 'wm']

export default handler
