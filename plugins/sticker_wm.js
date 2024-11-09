import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
  if (!m.quoted) return m.reply('╭❪ 💬 ›› _Responda a un sticker para usar este comando._')
  let stiker = false
  try {
   await m.react(rwait)
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return m.reply('╭❪ 💬 ›› _Responda a un sticker para usar este comando._')
    let img = await m.quoted.download()
    if (!img) return m.reply('╭❪ 💬 ›› _Responda a un sticker para usar este comando._')
    stiker = await addExif(img, packname || '', author || '')
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
  // await conn.reply(m.chat, global.wait, m)
     if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `GokuBot-MD`, body: `WhatsApp - Bot`, mediaType: 2, sourceUrl: gokuAll, thumbnail: gokuImgs}}}, { quoted: m })
     throw `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
  }
}
handler.help = ['take *<nombre>|<autor>*']
handler.tags = ['sticker']
handler.command = ['take', 'robar', 'wm'] 

export default handler