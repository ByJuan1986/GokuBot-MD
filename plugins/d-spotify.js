import fetch from 'node-fetch'
const handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione un enlace de Spotify.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://open.spotify.com/xxx` }, { quoted: m })
try {
await m.react("⏰")
const res = await fetch(`https://api.delirius.store/download/spotifydl?url=${text}`)
const json = await res.json()
const toru = json.data
if (!/^(https?:\/\/)?(www\.)?(open\.spotify\.com)\//i.test(text)) return conn.sendMessage(m.chat, { text: `El enlace ingresado no es valido.` }, { quoted: m })

let mensaje = `· ┄ · ⊸ 𔓕 *Spotify  :  Download*

\t＃ *Titulo* : ${toru.title}
\t＃ *Autor/a* : ${toru.author}
\t＃ *Duracion* : ${toruTime(toru.duration)}

> ${textbot}`
const thumb = (await conn.getFile(toru.image))?.data
await conn.sendMessage(m.chat, { text: mensaje, mentions: [m.sender], contextInfo: { externalAdReply: { title: "⧿ Spotify : Download ⧿", body: botname, thumbnail: thumb, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
await conn.sendMessage(m.chat, { audio: { url: toru.download }, mimetype: "audio/mpeg", fileName: toru.title }, { quoted: m })
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}}

handler.command = ['spy', 'spotify']
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function toruTime(seconds) {
seconds = Number(seconds)
const m = Math.floor((seconds % 3600) / 60)
const s = Math.floor(seconds % 60)
const mDisplay = m > 0 ? m + (m == 1 ? 'm:' : 'm:') : ''
const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : ''
return mDisplay + sDisplay
}
