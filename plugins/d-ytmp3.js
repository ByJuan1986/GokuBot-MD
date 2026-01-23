import fetch from 'node-fetch'
import yts from 'yt-search'
let handler = async (m, { conn, usedPrefix, command, args, text }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

await conn.sendMessage(m.chat, {
text: `Comando en mantenimiento...` 
}, {
quoted: m 
})
}

handler.command = ["audio", "ytmp3"]
export default handler
