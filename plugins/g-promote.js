var handler = async (m, { conn, usedPrefix, command, text, groupMetadata, isAdmin }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

let mentionedJid = await m.mentionedJid
let user = mentionedJid && mentionedJid.length ? mentionedJid[0] : m.quoted && await m.quoted.sender ? await m.quoted.sender : null
if (!user) return conn.sendMessage(m.chat, { text: `ᗢ Responda o mencione a un usuario para asignarlo como admin.` }, { quoted: m })
try {
const groupInfo = await conn.groupMetadata(m.chat)
const ownerGroup = groupInfo.owner || m.chat.split('-')[0] + '@s.whatsapp.net'
if (user === ownerGroup || groupInfo.participants.some(p => p.id === user && p.admin))
return conn.sendMessage(m.chat, { text: `El usuario ya es un administrador.` }, { quoted: m })
await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
await conn.sendMessage(m.chat, { text: `✓  Listo.` }, { quoted: m })
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}}


handler.command = ['promote', 'admin+']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
