import fetch from 'node-fetch'
import yts from 'yt-search'
import axios from 'axios'

const MAX_FILE_SIZE_MB = 80
const CACHE_TIME = 10 * 60 * 1000
let ytCache = {}

function formatNumber(num) {
return num.toLocaleString('en-US')
}

async function getSize(url) {
try {
const res = await axios.head(url)
const len = res.headers['content-length']
return len ? parseInt(len, 10) : 0
} catch {
return 0
}
}

function formatSize(bytes) {
const units = ['B', 'KB', 'MB', 'GB']
let i = 0
while (bytes >= 1024 && i < units.length - 1) {
bytes /= 1024
i++
}
return `${bytes.toFixed(2)} ${units[i]}`
}

async function getshadowa(url) {
try {
const api = `https://api-hasumi.vercel.app/api/youtube/ytmp3v3?url=${encodeURIComponent(url)}`
const res = await fetch(api)
const data = await res.json()

if (data?.status === true && data?.dl_url) {
return {
link: data.dl_url,
format: 'mp3'
}
}
return null
} catch {
return null
}
}

async function getshadowv(url) {
try {
const api = `https://api-hasumi.vercel.app/api/youtube/ytmp4v3?url=${encodeURIComponent(url)}`
const res = await fetch(api)
const data = await res.json()

if (data?.status === true && data?.dl_url) {
return {
link: data.dl_url,
format: 'mp4'
}
}
return null
} catch {
return null
}
}

var handler = async (m, { text, conn, usedPrefix, command }) => {
if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una busqueda en YouTube.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Golden Brown` }, { quoted: m })

try {
await m.react('⏰')
const results = await yts(text)
const videos = results.videos.slice(0, 10)
if (!videos.length) return conn.sendMessage(m.chat, { text: `No se encontraron resultados...` }, { quoted: m })

ytCache[m.sender] = { results: videos, timestamp: Date.now() }

let caption = `· ┄ · ⊸ 𔓕 *YouTube  :  Search*\n\n`
caption += `\t＃ *Busqueda* : ${text}\n`
caption += `\t＃ *Resultados* : *${videos.length}* results\n`
caption += `\t＃ *Fuente* : YouTube\n\n\n`

for (let i = 0; i < videos.length; i++) {
const v = videos[i]
caption += `⧡ *${i + 1}* : ${v.title}\n`
caption += `⧡ *Duración* : ${v.timestamp || '¿?'}\n`
caption += `⧡ *Publicado* : ${v.ago || '¿?'}\n`
caption += `⧡ *Vistas* : ${toNum(v.views)}\n\n\n`
}

caption += `> ${textbot}`

const thumbYoutu = (await conn.getFile(videos[0].thumbnail))?.data
await conn.sendMessage(m.chat, { text: caption, mentions: [m.sender], contextInfo: { externalAdReply: { title: "⧿ YouTube : Search ⧿", body: botname, thumbnail: thumbYoutu, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
//await conn.sendMessage(m.chat, { image: { url: videos[0].thumbnail }, caption }, { quoted: m })

await m.react('✅')
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}
}

handler.before = async (m, { conn }) => {
if (!m.text) return
const match = m.text.trim().match(/^(a|v)(\d{1,2})$/i)
if (!match) return

const type = match[1].toLowerCase() === 'a' ? 'audio' : 'video'
const index = parseInt(match[2]) - 1

const userCache = ytCache[m.sender]
if (!userCache || !userCache.results[index] || Date.now() - userCache.timestamp > CACHE_TIME)
return conn.sendMessage(m.chat, { text: `📍  La lista ha expirado, vuelva a usar el comando.` }, { quoted: m })

const video = userCache.results[index]

try {
await m.react('⏰')

const apiData = type === 'audio'
? await getshadowa(video.url)
: await getshadowv(video.url)

if (!apiData) return conn.sendMessage(m.chat, { text: `error : API` }, { quoted: m })

const size = await getSize(apiData.link)
const mb = size / (1024 * 1024)
const sendAsDoc = mb > MAX_FILE_SIZE_MB

const caption = `${botname}\n> ${textbot}`

if (sendAsDoc) {
await conn.sendMessage(m.chat, { document: { url: apiData.link }, fileName: `${video.title}.${apiData.format}`, mimetype: type === 'audio' ? 'audio/mpeg' : 'video/mp4', caption: `${botname}\n> ${textbot}` }, { quoted: m } )
} else if (type === 'audio') {
await conn.sendMessage( m.chat, { audio: { url: apiData.link }, fileName: `${video.title}.mp3`, mimetype: 'audio/mpeg', ptt: false, caption }, { quoted: m } )
} else {
await conn.sendMessage( m.chat, { video: { url: apiData.link }, fileName: `${video.title}.mp4`, mimetype: 'video/mp4', caption }, { quoted: m })
}

await m.react('✅')
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}
}

handler.command = ['youtube', 'yts']
export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number >= 1000000) { return (number / 1000000).toFixed(1) + 'M' } else if (number <= -1000 && number > -1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number <= -1000000) { return (number / 1000000).toFixed(1) + 'M' } else { return number.toString() }
}

