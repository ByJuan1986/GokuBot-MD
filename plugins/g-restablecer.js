var handler = async (m, { conn }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

try {
let res = await conn.groupRevokeInvite(m.chat)
let gruf = m.chat
let url = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gruf)
await conn.sendMessage(m.chat, { text: `ᗢ Nuevo Link  :  ${url}` }, { quoted: m })
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
 }
}

handler.command = ['revoke', 'revok']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler