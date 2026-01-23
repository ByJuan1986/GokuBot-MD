 let handler = async (m, { conn, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fAjustes && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ herramientas ]* estan desactivados...` }, { quoted: m })
}

let mentionedJid = await m.mentionedJid
let who = await m.quoted?.sender || mentionedJid?.[0]
if (!who) return conn.sendMessage(m.chat, { text: `ᗢ Mencione a un usuario para sacar su foto de perfil.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* @${m.sender.split(`@`)[0]}`, mentions: [m.sender] }, { quoted: m })
let name = await (async () => global.db.data.users[who].name || (async () => { try { const n = await conn.getName(who); return typeof n === 'string' && n.trim() ? n : who.split('@')[0] } catch { return who.split('@')[0] } })())()
let pp = await conn.profilePictureUrl(who, 'image').catch(() => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')
await m.react("⏰")
await conn.sendMessage(m.chat, { image: { url: pp }, caption: `✓  Foto de *${name}*` }, { quoted: m })
await m.react("✅")
}
handler.help = ['getpic  <text>']
handler.tags = ['herramientas']
handler.command = ['pfp', 'getpic']
export default handler
  
