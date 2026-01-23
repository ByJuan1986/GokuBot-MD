import axios from 'axios'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fAis && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ inteligencia artificial ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporciona un texto para crear una imagen.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Un Caballo blanco.` }, { quoted: m })
await m.react('⏰')
const res = await global.sendOptishield({ type: "text2img", text: "imagina" + text})
await conn.sendMessage(m.chat, { image: { url: res.result.img }, caption: `${botname}\n> ${textbot}` }, { quoted: m })
await m.react('✅')
}
handler.command = ['imagina']
export default handler
