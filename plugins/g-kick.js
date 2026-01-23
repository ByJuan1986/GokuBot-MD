var handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}
let mentionedJid = await m.mentionedJid
let user = mentionedJid && mentionedJid.length ? mentionedJid[0] : m.quoted && await m.quoted.sender ? await m.quoted.sender : null
if (!user) return conn.sendMessage(m.chat, { text: `ᗢ Responda o mencione a un usuario para eliminarlo.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* @${m.sender.split`@`[0]}`, mentions: [m.sender] }, { quoted: m })
try {
const groupInfo = await conn.groupMetadata(m.chat)
const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
const ownerBot = global.owner[0][0] + '@s.whatsapp.net'
if (user === conn.user.jid) return conn.sendMessage(m.chat, { text: `Solo puedes responder a usuarios, no al bot.` }, { quoted: m });
if (user === ownerGroup) return conn.sendMessage(m.chat, { text: `No puedes eliminar al propietario del grupo.` }, { quoted: m });
if (user === ownerBot) return conn.sendMessage(m.chat, { text: `El comando no funciona con el propietario del bot.` }, { quoted: m });
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
conn.sendMessage(m.chat, { text: `✓  Listo.` }, { quoted: m });
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m });
}}


handler.command = ['kick', 'ban']
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler