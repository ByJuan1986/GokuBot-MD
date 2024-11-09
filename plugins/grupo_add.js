var handler = async (m, { conn, args, text, usedPrefix, command }) => {

let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)        
let user = global.db.data.users[who]
let nom = conn.getName(m.sender)
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `╭❪ ❌ ›› _No puedo realizar este comando si las restricciones estan desactivadas._`, m) 
if (!text) await m.reply(`╭❪ 💬 ›› _Ingrese el comando y el numero de la persona todo junto y sin el codigo (+)_\n\n- *\`Por ejemplo:\`*\n${usedPrefix + command} 549383736272`)
if (text.includes('+')) await m.reply(`╭❪ ❌ ›› _Ingrese el numero completo sin el (+)..._`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)

await conn.reply(text+'@s.whatsapp.net', `Holaa!!!\n- Soy un bot de WhatsApp, echo para entretener o realizar diversas cosas.\n\n- Vine aqui para decirte que alguien te ha invitado en un grupo.\n¿Quiere venir? entra al grupo en este link 😁\n\n- ${link}`, m, {mentions: [m.sender]})
await m.reply(`╭❪ ✅ ›› _La invitacion fue enviada con exito._`) 

}
handler.help = ['add']
handler.tags = ['grupo']
handler.command = ['add', 'agregar', 'añadir']
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null

export default handler