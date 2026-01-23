var handler = async (m, { conn, usedPrefix, command, text, groupMetadata }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

let mentionedJid = await m.mentionedJid
let user = mentionedJid && mentionedJid.length ? mentionedJid[0] : m.quoted && await m.quoted.sender ? await m.quoted.sender : null
if (!user) return conn.sendMessage(m.chat, { text: `ᗢ Responda o mencione a un usuario administrador.` }, { quoted: m })
try {
const groupInfo = await conn.groupMetadata(m.chat)
const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
const ownerBot = global.owner[0][0] + '@s.whatsapp.net'
if (user === conn.user.jid) return conn.sendMessage(m.chat, { text: `Debe de mencionar a un usuario administrador, no al bot.` }, { quoted: m })
if (user === ownerGroup) return conn.sendMessage(m.chat, { text: `El comando solo es para los sub administradores, no para el propietario del grupo.` }, { quoted: m })
if (user === ownerBot) return conn.sendMessage(m.chat, { text: `No puedes usar el comando con el propietario del bot.` }, { quoted: m })
await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.sendMessage(m.chat, { text: `✓  Listo.` }, { quoted: m })
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}}

handler.command = ['demote', 'admin-']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
