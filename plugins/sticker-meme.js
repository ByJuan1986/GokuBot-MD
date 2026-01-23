import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, {conn, text, usedPrefix, command}) => {
let user = global.db.data.users[m.sender]
let f = user.packsticker || global.packsticker2
let g = user.packsticker && user.packsticker2 ? user.packsticker : user.packsticker2 && !user.packsticker ? '' : global.packsticker2
let [atas, bawah] = text.split`,`
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return conn.sendMessage(m.chat, { text: `🦈  Responda a una imagen mas un texto para agregar al sticker.\n\n⌕ Por ejemplo:\n*${usedPrefix + command}* Hola, XD` }, { quoted: m })
if (!/image\/(jpe?g|png)/.test(mime)) return conn.sendMessage(m.chat, { text: `Solo puedes responder imagenes.` }, { quoted: m })
await m.react("💧")
let img = await q.download()
let url = await uploadImage(img)
let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
let stiker = await sticker(false, meme, f, g)
if (stiker) await conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
await m.react("🦈")
}

handler.command = ["stext", "st"]


export default handler
  
