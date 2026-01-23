let handler = async function (m, { conn, participants, groupMetadata }) {
if (!global.db.data.chats[m.chat].fAjustes && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ herramientas ]* estan desactivados...` }, { quoted: m })
}

const participantList = groupMetadata.participants || []
const mentionedJid = await m.mentionedJid
const userId = mentionedJid.length > 0 ? mentionedJid[0] : (m.quoted ? await m.quoted.sender : m.sender)
const participant = participantList.find(participant => participant.id === userId)
if (participant) {
await conn.sendMessage(m.chat, { text: `ᗢ Usuario : @${userId.split('@')[0]}\n⚶ Lid : ${participant.lid}`, mentions: [userId] }, { quoted: m })
} else {
await conn.sendMessage(m.chat, { text: `error_lid [bot=[participant(userId)_false]` }, { quoted: m })
}}

handler.command = ['lid', 'mylid']

export default handler
