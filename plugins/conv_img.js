import { webp2png } from '../goku/webp2mp4.js'
var handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `╭❪ 💬 ›› _Ingrese el comando y responda a un sticker sin movimiento para convertirlo en una imagen._`
if (!m.quoted) throw notStickerMessage 
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
conn.reply(m.chat, `╭❪ ⏳ ›› _Convirtiendo sticker a imagen, espere un momento..._`, m)
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m, m)}
handler.command = ['toimg', 'jpg', 'jpge', 'png']
export default handler