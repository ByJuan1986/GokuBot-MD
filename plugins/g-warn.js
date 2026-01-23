import db from '../lib/database.js'
const handler = async (m, { conn, text, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

try {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(() => `${global.toruImg}`)
let mentionedJid = await m.mentionedJid
let who = mentionedJid && mentionedJid.length ? mentionedJid[0] : m.quoted && await m.quoted.sender ? await m.quoted.sender : null
const user = global.db.data.users[m.sender]
const usuario = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
const groupInfo = await conn.groupMetadata(m.chat)
const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net'
const ownerBot = global.owner[0][0] + '@s.whatsapp.net'
switch (command) {
case 'warn+': {
if (!who || typeof who !== 'string' || !who.includes('@')) {
return conn.sendMessage(m.chat, { text: `ᗢ Mencione a un usuario para darle una advertencia.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* @${m.sender.split`@`[0]}`, mentions: [m.sender] }, { quoted: m })
}
const msgtext = text?.trim() || ''
const partes = msgtext.split(/\s+/)
const tieneMencion = partes.some(part => part.startsWith('@'))
const motivo = tieneMencion ? partes.filter(part => !part.startsWith('@')).join(' ').trim() || 'Sin especificar' : msgtext || 'Sin especificar'
if (who === conn.user.jid) return conn.sendMessage(m.chat, { text: `El comando no funciona con el bot.` }, { quoted: m })
if (who === ownerGroup) return conn.sendMessage(m.chat, { text: `El comando no funciona con el propietario del grupo.` }, { quoted: m })
if (who === ownerBot) return conn.sendMessage(m.chat, { text: `El comando no funciona con el propietario del bot.` }, { quoted: m })
user.warn = (user.warn || 0) + 1
await conn.sendMessage(m.chat, { text: `✓  Se ha dado una advertencia al usuario @${who.split`@`[0]}.\n\n• *Motivo:* ${motivo}\n• Advertencias:* ${user.warn} de 5\n\n📍  Si tiene el limite de 5 advertencias, sera eliminado del grupo.`, mentions: [who] }, { quoted: m })
if (user.warn >= 5) {
user.warn = 0
await conn.sendMessage(m.chat, { text: `✓  Se ha eliminado el usuario, alcanzo el limite de 5 advertencias.` }, { quoted: m })
await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
}
break
}
case 'warn-': {
if (!who) return conn.sendMessage(m.chat, { text: `ᗢ Mencione a un usuario advertido para quitar una advertencia.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* @${m.sender.split`@`[0]}`, mentions: [m.sender] }, { quoted: m })
if (mentionedJid.includes(conn.user.jid)) return
if (user.warn === 0) return conn.sendMessage(m.chat, { text: `📍  El usuario que has mencionado no tiene ninguna advertencia.` }, { quoted: m })
user.warn -= 1
await conn.sendMessage(m.chat, { text: `✓  Se ha quitado una advertencia de ${user.warn === 1 ? `@${who.split`@`[0]}` : `@${who.split`@`[0]}`} con exito. Ahora tiene ${user.warn} advertencia.`, mentions: [who] }, { quoted: m })
break
}}} catch (error) {
await conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}}

handler.command = ['warn+', 'warn-']
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler