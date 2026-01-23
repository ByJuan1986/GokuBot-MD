import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!global.db.data.chats[m.chat].fAis && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ inteligencia artificial ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una petición para hablar con Dolphin AI.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Hola` }, { quoted: m })
await m.react("⏰")
try {
let { data } = await axios.get(`https://api-hasumi.vercel.app/api/ai/dolphinai?text=${encodeURIComponent(text)}`)
let respuesta = `${data.texto}`
await conn.sendMessage(m.chat, { text: respuesta, 
contextInfo: { forwardingScore: 1, isForwarded: false, 
externalAdReply: { showAdAttribution: false, renderLargerThumbnail: false, title: "Dolphin AI", body: botname, containsAutoReply: true, mediaType: 1, thumbnailUrl: "https://files.catbox.moe/1cotdr.jpg", sourceUrl: null }}}, { quoted: m })
await m.react("✅")
} catch (error) {
conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}}

handler.command = ["dolphin"]
export default handler
