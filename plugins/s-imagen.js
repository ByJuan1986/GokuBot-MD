import axios from 'axios'
import baileys from '@whiskeysockets/baileys'
const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fSearch && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ búsquedas ]* estan desactivados...` }, { quoted: m })
}

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

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione un texto para buscar imágenes.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Arboles` }, { quoted: m })
try {
await m.react('⏰')
const res = await getGoogleImageSearch(text)
const urls = await res.getAll()
if (urls.length < 2) return conn.sendMessage(m.chat, { text: `No hay suficientes imagenes.` }, { quoted: m })
const medias = urls.slice(0, 10).map(url => ({ type: 'image', data: { url } }))
const respuesta = `· ┄ · ⊸ 𔓕 *Images  :  Search*

\t＃ *Busqueda* : ${text}
\t＃ *Imagenes* : *10* imagenes
\t＃ *Fuente* : Google

> ${textbot}`
await sendAlbumMessage(m.chat, medias, { caption: respuesta, quoted: m })
await m.react('✅')
} catch (error) {
conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}}

handler.command = ['imagen', 'image']

export default handler

function getGoogleImageSearch(query) {
const apis = [`https://api.delirius.store/search/gimage?query=${encodeURIComponent(query)}`, `https://api.siputzx.my.id/api/images?query=${encodeURIComponent(query)}`]
return { getAll: async () => {
for (const url of apis) {
try {
const res = await axios.get(url)
const data = res.data
if (Array.isArray(data?.data)) {
const urls = data.data.map(d => d.url).filter(u => typeof u === 'string' && u.startsWith('http'))
if (urls.length) return urls
}} catch {}
}
return []
},
getRandom: async () => {
const all = await this.getAll()
return all[Math.floor(Math.random() * all.length)] || null
}}}
