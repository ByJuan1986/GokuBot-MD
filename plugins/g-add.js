import moment from 'moment-timezone'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

let usoNumero = `ᗢ Ingrese el numero completo del usuario sin *"+"* para invitarlo al grupo.`
let noMas = `No debe de incluir el *"+"* y el numero debe ser todo junto.`
let faltaNro = `Debe de ingresar el numero todo junto sin incluir el *"+"* para invitar al usuario.`
let porEjemplo = `\t⚶ Por ejemplo:\n*${usedPrefix + command}* 5499999999999`
if (!text) return conn.sendMessage(m.chat, { text: `${usoNumero}\n\n${porEjemplo}` }, { quoted: m })
if (text.includes('+')) return conn.sendMessage(m.chat, { text: `${noMas}\n\n${porEjemplo}` }, { quoted: m })
if (isNaN(text)) return conn.sendMessage(m.chat, { text: `${faltaNro}\n\n${porEjemplo}` }, { quoted: m })
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
let tag = m.sender ? '@' + m.sender.split('@')[0] : 'Usuario'
const chatLabel = m.isGroup ? (await conn.getName(m.chat) || 'Grupal') : 'Privado'
const horario = `${moment.tz('America/Buenos_Aires').format('DD/MM/YYYY hh:mm:ss A')}`
const invite = `· ┄ · ⊸ 𔓕 *Invitación  :  Grupal*

👋🏻  *"Hola, un gusto, alguien te ha invitado a un chat grupal, estamos esperandote."*

¿Quieres unirte?
• ${link}`
await conn.sendMessage(`${text}@s.whatsapp.net`, { text: invite }, { quoted: null })
conn.sendMessage(m.chat, { text: `✓  Invitacion enviada.` }, { quoted: m })
}

handler.command = ['add', 'invitar']
handler.group = true
handler.botAdmin = true

export default handler