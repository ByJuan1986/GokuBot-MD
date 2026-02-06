import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args }) => {
let stiker = false
let userId = m.sender
let packstickers = global.db.data.users[userId] || {}
let texto1 = packstickers.text1 || 'Goku'
let texto2 = packstickers.text2 || 'Bot'
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
let txt = args.join(' ')

if (/webp|image|video/g.test(mime) && q.download) {
if (/video/.test(mime) && (q.msg || q).seconds > 11)
return conn.reply(m.chat, 'El video no puede durar mas de 10 segundos...', m)
let buffer = await q.download()
await m.react('⏰')

let marca = txt ? txt.split(/[\u2022|]/).map(part => part.trim()) : [texto1, texto2]
stiker = await sticker(buffer, false, marca[0], marca[1])
} else if (args[0] && isUrl(args[0])) {
let buffer = await sticker(false, args[0], texto1, texto2)
stiker = buffer
} else {
return conn.reply(m.chat, 'ᗢ Responda a una imagen o video para crear un sticker.', m)
}} catch (e) {
await conn.reply(m.chat, e.message, m)
} finally {
if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}}}

handler.command = ['s', 'sticker']

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)(jpe?g|gif|png)/, 'gi'))
}

