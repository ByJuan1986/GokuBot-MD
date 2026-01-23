let handler = async (m, { conn, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fConvert && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ convertidor ]* estan desactivados...` }, { quoted: m })
}

if (!m.quoted) {
return conn.sendMessage(m.chat, { text: `ᗢ Responda a un sticker sin movimiento para convertirlo en imagen.` }, { quoted: m })
}
await m.react('⏰')
let xx = m.quoted
let imgBuffer = await xx.download()   
if (!imgBuffer) {
return conn.sendMessage(m.chat, { text: `No se ha podido convertir el sticker a imagen.` }, { quoted: m })
}
await conn.sendMessage(m.chat, { image: imgBuffer, caption: null}, { quoted: m })
await m.react('✅')
}

handler.command = ['timg'] 

export default handler
