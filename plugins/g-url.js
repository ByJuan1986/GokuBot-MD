import fetch from 'node-fetch'
import baileys from '@whiskeysockets/baileys'
const { generateWAMessageFromContent, proto } = baileys
let handler = async (m, { conn }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

try {
const group = m.chat
const metadata = await conn.groupMetadata(group)
const invite = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
const owner = metadata.owner ? '@' + metadata.owner.split('@')[0] : 'No disponible'
const desc = metadata.desc || "sin descripción."
const info = `· ┄ · ⊸ 𔓕 *Link  :  Grupal*

\t＃ *Nombre* : ${metadata.subject}
\t＃ *ID* : ${metadata.id}
\t＃ *Link* : ${invite}

> ${textbot}`.trim()
conn.sendMessage(m.chat, { text: info }, { quoted: m })
} catch (e) {
console.error(e)
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}
}

handler.command = ['link', 'enlace']
handler.group = true
handler.botAdmin = true

export default handler