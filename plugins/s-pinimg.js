import fetch from 'node-fetch'
import baileys from '@whiskeysockets/baileys'

async function sendAlbumMessage(jid, medias, options = {}) {
if (typeof jid !== "string") { throw new TypeError(`jid must be string, received: ${jid}`) }
if (!Array.isArray(medias) || medias.length < 2) { throw new RangeError("Minimum 2 media required") }
for (const media of medias) {
if (!media.type || (media.type !== "image" && media.type !== "video")) { throw new TypeError(`Invalid media type: ${media.type}`) }
if (!media.data || (!media.data.url && !Buffer.isBuffer(media.data))) { throw new TypeError(`Invalid media data`) }}
const caption = options.text || options.caption || ""
const delay = !isNaN(options.delay) ? options.delay : 500
delete options.text
delete options.caption
delete options.delay
const album = baileys.generateWAMessageFromContent(jid, {
messageContextInfo: {},
albumMessage: {
expectedImageCount: medias.filter(m => m.type === "image").length,
expectedVideoCount: medias.filter(m => m.type === "video").length,
...(options.quoted ? { contextInfo: { remoteJid: options.quoted.key.remoteJid, fromMe: options.quoted.key.fromMe, stanzaId: options.quoted.key.id, participant: options.quoted.key.participant || options.quoted.key.remoteJid, quotedMessage: options.quoted.message }} : {}),
}}, {})
await conn.relayMessage(album.key.remoteJid, album.message, { messageId: album.key.id })
for (let i = 0; i < medias.length; i++) {
const { type, data } = medias[i]
const mediaMsg = await baileys.generateWAMessage(album.key.remoteJid, { [type]: data, ...(i === 0 ? { caption } : {}) }, { upload: conn.waUploadToServer })
mediaMsg.message.messageContextInfo = { messageAssociation: { associationType: 1, parentMessageKey: album.key }, }
await conn.relayMessage(mediaMsg.key.remoteJid, mediaMsg.message, { messageId: mediaMsg.key.id })
await baileys.delay(delay) }
return album
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fSearch && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ búsquedas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una busqueda de imagenes en Pinterest\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Osos` }, { quoted: m })
try {
await m.react("⏰")
const res = await fetch(`https://api.delirius.store/search/pinterestv2?text=${text}`)
const json = await res.json()
const imgs = json.data
if (!imgs || imgs.length < 2) return conn.sendMessage(m.chat, { text: `No se han encontrado imagenes.` }, { quoted: m })
const maxItems = Math.min(imgs.length, 5)
const medias = imgs.slice(0, maxItems).map(toru => ({ type: 'image', data: { url: toru.image } }))
await sendAlbumMessage(m.chat, medias, { caption: `· ┄ · ⊸ 𔓕 *Pinterest : Search*\n\n\t＃ *Busqueda* : ${text}\n\t＃ *Resultado* : *${maxItems}* imagenes\n\t＃ *Fuente* : Pinterest\n\n> ${textbot}`, quoted: m })
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}}

handler.command = ['pinimg']
export default handler
  
