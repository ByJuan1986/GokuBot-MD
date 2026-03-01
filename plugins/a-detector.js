import chalk from 'chalk'
import fetch from 'node-fetch'
import ws from 'ws'
let WAMessageStubType = (await import('@whiskeysockets/baileys')).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

let handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || global.gokuImg

if (!m.messageStubParameters || !Array.isArray(m.messageStubParameters)) {
  return
}

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = `*[ ${usuario} ]* Ha cambiado el nombre grupal a *[ ${m.messageStubParameters[0] || 'Undefined'} ]*.`
foto = `*[ ${usuario} ]* Ha cambiado el perfil grupal recientemente.`
edit = `*[ ${usuario} ]* Ha permitido que ${m.messageStubParameters[0] == 'on' ? 'solo administradores' : 'todos'} puedan configurar el equipo.`
newlink = `*[ ${usuario} ]* Ha restablecido el enlace grupal recientemente.`
status = `*[ ${usuario} ]* Ha permitido que ${m.messageStubParameters[0] == 'on' ? 'se cierre' : 'se abra'}`
admingp = `*[ @${m.messageStubParameters[0] && m.messageStubParameters[0].split ? m.messageStubParameters[0].split`@`[0] : '@user_toru'} ]* Ahora es administrador de este grupo.`
noadmingp = `*[ @${m.messageStubParameters[0] && m.messageStubParameters[0].split ? m.messageStubParameters[0].split`@`[0] : '@user_toru'} ]* Fue descartado como administrador grupal.`

if (chat.detect && m.messageStubType == 2) {
const uniqid = (m.isGroup ? m.chat : m.sender)
const sessionPath = './Sessions/'
for (const file of await fs.readdir(sessionPath)) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file))
console.log(`${chalk.yellow.bold('[ Archivo Eliminado ]')} ${chalk.greenBright(`'${file}'`)}\n` +
`${chalk.blue('(Session PreKey)')} ${chalk.redBright('que provoca el "undefined" en el chat')}`
)}}

} else if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, m)  
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, m)
} else if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, m)
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, m)  
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: status, mentions: [m.sender] }, m)  
} else if (chat.detect && m.messageStubType == 29) {
if (m.messageStubParameters[0]) {
await this.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, m)
}
} else if (chat.detect && m.messageStubType == 30) {
if (m.messageStubParameters[0]) {
await this.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, m)
}
} else {
if (m.messageStubType == 2) return
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})
}}
export default handler



/*
let WAMessageStubType = (await import('@whiskeysockets/baileys')).default
import chalk from 'chalk'
import fs from 'fs'
import axios from 'axios'
import path from 'path'
import fetch from 'node-fetch'

const groupMetadataCache = new Map()
const lidCache = new Map()
const handler = m => m
handler.before = async function (m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const primaryBot = global.db.data.chats[m.chat].primaryBot
if (primaryBot && conn.user.jid !== primaryBot) throw !1
const chat = global.db.data.chats[m.chat]
const users = m.messageStubParameters[0]
const usuario = await resolveLidToRealJid(m?.sender, conn, m?.chat)
const groupAdmins = participants.filter(p => p.admin)

const getThumbnail = async () => {
const res = await axios.get("https://files.catbox.moe/3labkc.jpg", { responseType: "arraybuffer" })
return Buffer.from(res.data, "binary")
}

const thumbnail = await getThumbnail()

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || global.xMages
const nombre = `📍  El usuario @${usuario.split('@')[0]}, ha configurado el nombre del grupo recientemente.\n\n✦ *Nuevo nombre:*\n• ✎ ${m.messageStubParameters[0]}`
const foto = `📍  Se ha configurado la foto grupal recientemente.\n\n✦ *Realizado por:*\n• ✎ @${usuario.split('@')[0]}`
const edit = `📍  Se ha configurado el grupo para que ${m.messageStubParameters[0] == 'on' ? 'solo los administradores puedan enviar mensajes.' : 'todos pudieran enviar mensajes.'}\n\n✦ *Realizado por:*\n• ✎ @${usuario.split('@')[0]}`
const newlink = `📍  Se ha restablecido el enlace grupal recientemente.\n\n✦ *Realizado por:*\n• ✎ @${usuario.split('@')[0]}`
const status = `📍  El grupo ahora esta ${m.messageStubParameters[0] == 'on' ? 'cerrado, solo los administradores pueden enviar mensajes.' : 'abierto, ahora todos pueden enviar mensajes.'}\n\n✦ *Realizado por:*\n• ✎ @${usuario.split('@')[0]}`
const admingp = `📍  El participante @${users.split('@')[0]} ahora es un administrador grupal.\n\n✦ *Realizado por:*\n• ✎ @${usuario.split('@')[0]}`
const noadmingp = `📍  El administrador @${users.split('@')[0]} ahora ya no es un administrador grupal.\n\n✦ *Realizado por:*\n• ✎ @${usuario.split('@')[0]}`

if (chat.detect && m.messageStubType == 2) {
const uniqid = (m.isGroup ? m.chat : m.sender).split('@')[0]
const sessionPath = `./${sessions}/`
for (const file of await fs.promises.readdir(sessionPath)) {
if (file.includes(uniqid)) {
await fs.promises.unlink(path.join(sessionPath, file))
console.log(`Elimina el archivo ${chalk.greenBright(`'${file}'`)}\nQue provoca el "undefined" en el chat.`)
}}} if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: nombre, mentionedJid: [usuario, ...groupAdmins.map(v => v.id)] }, m)
} if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentionedJid: [usuario, ...groupAdmins.map(v => v.id)] }, m)
} if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(m.chat, { text: newlink, mentionedJid: [usuario, ...groupAdmins.map(v => v.id)] }, m)
} if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: edit, mentionedJid: [usuario, ...groupAdmins.map(v => v.id)] }, m)
} if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: status, mentionedJid: [usuario, ...groupAdmins.map(v => v.id)] }, m)
} if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: admingp, mentionedJid: [usuario, users, ...groupAdmins.map(v => v.id)].filter(Boolean) }, m)
return
} if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: noadmingp, mentionedJid: [usuario, users, ...groupAdmins.map(v => v.id)].filter(Boolean) }, m)
} else { 
if (m.messageStubType == 2) return
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}

export default handler

async function resolveLidToRealJid(lid, conn, groupChatId, maxRetries = 3, retryDelay = 60000) {
const inputJid = lid.toString()
if (!inputJid.endsWith("@lid") || !groupChatId?.endsWith("@g.us")) { return inputJid.includes("@") ? inputJid : `${inputJid}@s.whatsapp.net` }
if (lidCache.has(inputJid)) { return lidCache.get(inputJid) }
const lidToFind = inputJid.split("@")[0]
let attempts = 0
while (attempts < maxRetries) {
try {
const metadata = await conn?.groupMetadata(groupChatId)
if (!metadata?.participants) { throw new Error("No se obtuvieron participantes") }
for (const participant of metadata.participants) {
try {
if (!participant?.jid) continue
const contactDetails = await conn?.onWhatsApp(participant.jid)
if (!contactDetails?.[0]?.lid) continue
const possibleLid = contactDetails[0].lid.split("@")[0]
if (possibleLid === lidToFind) {
lidCache.set(inputJid, participant.jid)
return participant.jid
}} catch (e) { continue }}
lidCache.set(inputJid, inputJid)
return inputJid
} catch (e) {
if (++attempts >= maxRetries) {
lidCache.set(inputJid, inputJid)
return inputJid
}
await new Promise((resolve) => setTimeout(resolve, retryDelay))
}}
return inputJid
}

*/