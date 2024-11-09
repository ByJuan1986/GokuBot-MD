import { sticker } from '../goku/sticker.js'
import uploadFile from '../goku/uploadFile.js'
import uploadImage from '../goku/uploadImage.js'
import { webp2png } from '../goku/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let name = conn.getName(m.sender);
let text1 = `Bot:\nSolicitud:\nCreado en:\nDia:`
let text2 = `GokuBot-MD\n${name}\n${fecha}\n${dia}`
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply(`╭❪ 📌 ›› _El video no debe durar mas de 10 segundos, recortelo y intentelo de nuevo._`)
let img = await q.download?.()

if (!img) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y responda a una imagen, gif o video para convertirlo en sticker._`, m)

let out
try {
stiker = await sticker(img, false, text1, text2)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, text1, text2)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], text1, text2)

else return m.reply(`╭❪ ❌ ›› _El enlace ingresado es invalido, ingrese un enlace con el formato jpg, jpeg o png._`)

}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `GokuBot-MD`, body: `WhatsApp - Bot`, mediaType: 2, sourceUrl: gokuAll, thumbnail: gokuImgs}}}, { quoted: m })

else return conn.reply(m.chat, '╭❪ 💬 ›› _Ingrese el comando y responda a una imagen, gif o video para convertirlo en sticker._', m)


}}
handler.help = ['stiker <img>', 'sticker <url>']
handler.tags = ['sticker']
handler.command = ['s', 'sticker', 'stiker']

export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}