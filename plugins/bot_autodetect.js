import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
const groupName = (await conn.groupMetadata(m.chat)).subject
const groupAdmins = participants.filter((p) => p.admin)

let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => imagen1)
const img = await (await fetch(pp)).buffer()
const chat = global.db.data.chats[m.chat]
const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]
const mentionsContentM = [m.sender, m.messageStubParameters[0]]

if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha configurado el nombre del grupo recientemente._`, mentions: [m.sender], mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id) }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha configurado la imagen del grupo recientemente._`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 

} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha configurado la descripcion del grupo recientemente._\n\n- *NUEVA DESCRIPCION:*\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fliveLoc, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha ajustado la configuracion del grupo recientemente._\n\n- *Ahora ${m.messageStubParameters[0] == 'on' ? 'solo los administradores' : 'todos'} pueden editar la información del grupo.*_`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha ajustado la configuracion del grupo recientemente._\n\n- *Ahora el grupo esta ${m.messageStubParameters[0] == 'on' ? 'cerrado' : 'abierto'}.*\n\n- ${m.messageStubParameters[0] == 'on' ? 'solo los administradores' : 'todos'} pueden enviar mensajes.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 29) {
let txt1 = `╭❪ 🌐 ›› \`_¡¡NUEVO ADMIN!!_\`

⌬ *NOMBRE:* @${m.messageStubParameters[0].split`@`[0]}\n
- _Otorgado por:_ @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt1, mentions: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt1.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "body": dev, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": channel, "sourceUrl": channel}}})

} else if (chat.detect && m.messageStubType == 30) {
let txt2 = `╭❪ 🌐 ›› \`_¡¡ADMIN MENOS!!_\`

⌬ *NOMBRE:* @${m.messageStubParameters[0].split`@`[0]}
- _Descartado por:* @${m.sender.split`@`[0]}`

await conn.sendMessage(m.chat, {text: txt2, mentions: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: { mentionedJid: [...txt2.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "body": dev, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "mediaUrl": channel, "sourceUrl": channel}}})

} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha ajustado las duraciones temporales del grupo recientemente._\n\n- *DURACION APLICADA:*\n@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})

} else if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `╭❪ 🌎 ›› _Se ha ajustado las duraciones temporales del grupo recientemente._\n\n- *DURACION APLICADA:*\n\`Desactivado.\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}