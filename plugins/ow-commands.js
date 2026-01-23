import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text}) => {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split('@')[0]}`
let aa = toUser + '@s.whatsapp.net'
let name = await conn.getName(m.sender)
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let opciones = `· ┄ · ⊸ 𔓕 *Ajustes : Settings v2*

\t📍 Activa los comandos exclusivos...

\t＃ *Funciones* : *3* results
\t＃ *Tipo* : admins

\t⚶ Ejemplo de uso:
*${usedPrefix + command}* privado
${readMore}
⧡ *${usedPrefix}true/false* editor
⧡ *${usedPrefix}true/false* menu
⧡ *${usedPrefix}true/false* privado

> ${textbot}`
//await conn.sendMessage(m.chat, { text: opciones }, { quoted: m })
let isAll = false,
isUser = false
switch (type) {
case 'prems':
case 'premium':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.fPremium = isEnable
break

case 'mods':
case 'moderador':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.fModers = isEnable
break

case 'adminbot':
case 'owners':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.fAdminbot = isEnable
break

case 'privado':
case 'priv': {
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.fPrivado = isEnable
break
}

case 'edits':
case 'editor':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.fEdits = isEnable
break

case 'menu':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
}
chat.fMenu = isEnable
break
default:
if (!/[01]/.test(command))
return await conn.sendMessage(m.chat, { text: opciones }, { quoted: m })
throw false
}
await conn.sendMessage(m.chat, { text: `✅  Se ha ${isEnable ? 'activado' : 'desactivado'} la funcion *[ ${type} ]*` }, { quoted: m })
}
handler.command = ["true", "false"]
handler.rowner = true
export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
