import { sticker } from '../goku/sticker.js'
let handler = async(m, { conn }) => {
if (db.data.chats[m.chat].stickers) { 
let nombre = 'GokuBot-MD'
let nombre2 = 'ByJuan1986' 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: '𝑮𝒐𝒌𝒖𝑩𝒐𝒕-𝑴𝑫', body: `ByJuan1986`, mediaType: 2, sourceUrl: gokuAll, thumbnail: gokuImgs }}}, { quoted: m })
}}
handler.customPrefix = /risa|xd|😂|🤣|🤪/i 
handler.command = new RegExp
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const s = [ //Pon enlaces gif o imagenes.
'',
'',
'',
'',
'',
'',
];  
