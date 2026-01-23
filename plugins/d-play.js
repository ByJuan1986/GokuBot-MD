import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { ogmp3 } from '../lib/youtubedl.js'
const LimitAud = 725 * 1024 * 1024 
const LimitVid = 425 * 1024 * 1024 
let tempStorage = {}

const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

let usoCorrecto = `ᗢ Proporcione un texto para buscar en YouTube.\n\n\t⚶ Por ejemplo :\n*${usedPrefix + command}* Yo te esperaré.`
if (!text) return conn.sendMessage(m.chat, { text: usoCorrecto }, { quoted: m })
await m.react("⏰")
const yt_play = await search(args.join(' '))
const ytplay2 = await yts(text)
const texto1 = `· ┄ · ⊸ 𔓕 *Play  :  YouTube*

\t＃ *Titulo* : ${yt_play[0].title}
\t＃ *Publicado* : ${yt_play[0].ago}
\t＃ *Duración* : ${secondString(yt_play[0].duration.seconds)}
\t＃ *Vistas* : ${toNum(yt_play[0].views)}
\t＃ *Enlace* : ${yt_play[0].url.replace(/^https?:\/\//, '')}

📍 \`Responda con:\`
Audio
Video

> ${textbot}`.trim()

tempStorage[m.sender] = {url: yt_play[0].url, title: yt_play[0].title}

const thumbXd = (await conn.getFile(yt_play[0].thumbnail))?.data
await conn.sendMessage(m.chat, { text: texto1, mentions: [m.sender], contextInfo: { externalAdReply: { title: botname, body: "YouTube : Download.", thumbnail: thumbXd, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
}

handler.before = async (m, {conn}) => {
const text = m.text.trim().toLowerCase()
if (!['👍', 'audio', '❤️', 'video'].includes(text)) return
const userVideoData = tempStorage[m.sender]
if (!userVideoData || !userVideoData.url) return
const [input, qualityInput = text === '👍' || text === 'audio' ? '320' : '720'] = userVideoData.title.split(' ')
const audioQualities = ['64', '96', '128', '192', '256', '320']
const videoQualities = ['240', '360', '480', '720', '1080']
const isAudio = text === '👍' || text === 'audio'
const selectedQuality = (isAudio ? audioQualities : videoQualities).includes(qualityInput) ? qualityInput : isAudio ? '320' : '720'

const audioApis = [
{ url: () => ogmp3.download(userVideoData.url, selectedQuality, 'audio'), extract: (data) => ({data: data.result.download, isDirect: false})},
{ url: () => ytmp3(userVideoData.url), extract: (data) => ({data, isDirect: true})},
{ url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=audio&quality=128kbps&apikey=GataDios`).then((res) => res.json()), extract: (data) => ({data: data.data.url, isDirect: false}) },
{ url: () => fetch(`https://api-shadowxyz.vercel.app/download/ytmp3V2?url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data?.result?.download_url, isDirect: false}) },
{ url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data.dl, isDirect: false}) },
{ url: () => fetch(`https://api-hasumi.vercel.app/api/youtube/ytmp3v3?url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data.status ? data.dl_url : null, isDirect: false}) },
{ url: () => fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data.result.download.url, isDirect: false}) }
]

const videoApis = [
{ url: () => ogmp3.download(userVideoData.url, selectedQuality, 'video'), extract: (data) => ({data: data.result.download, isDirect: false})},
{ url: () => ytmp4(userVideoData.url), extract: (data) => ({data, isDirect: false})},
{ url: () => fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data.dl, isDirect: false}) },
{ url: () => fetch(`https://api.neoxr.eu/api/youtube?url=${userVideoData.url}&type=video&quality=720p&apikey=GataDios`).then((res) => res.json()), extract: (data) => ({data: data.data.url, isDirect: false}) },
{ url: () => fetch(`https://api-hasumi.vercel.app/api/youtube/ytmp4v3?url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data.status ? data.dl_url : null, isDirect: false}) },
{ url: () => fetch(`https://exonity.tech/api/ytdlp2-faster?apikey=adminsepuh&url=${userVideoData.url}`).then((res) => res.json()), extract: (data) => ({data: data.result.media.mp4, isDirect: false}) }
]

const download = async (apis) => {
let mediaData = null
let isDirect = false
for (const api of apis) {
try {
const data = await api.url()
const {data: extractedData, isDirect: direct} = api.extract(data)
if (extractedData) {
const size = await getFileSize(extractedData)
if (size >= 1024) {
mediaData = extractedData
isDirect = direct
break
}
}
} catch (e) {
console.log(`Error con API: ${e}`)
continue
}
}
return {mediaData, isDirect}
}
try {
if (text === '👍' || text === 'audio') {
await m.react("⏰")
const {mediaData, isDirect} = await download(audioApis)
if (mediaData) {
const fileSize = await getFileSize(mediaData)
if (fileSize > LimitAud) {
await conn.sendMessage(m.chat, {document: isDirect ? mediaData : {url: mediaData}, mimetype: 'audio/mpeg', fileName: `${userVideoData.title}.mp3`}, {quoted: m || null})
await m.react("✅")
} else {
await conn.sendMessage(m.chat, {audio: isDirect ? mediaData : {url: mediaData}, mimetype: 'audio/mpeg'}, {quoted: m || null})
await m.react("✅")
}
} else {
await conn.sendMessage(m.chat, { text: `No se ha podido descargar el audio.` }, { quoted: m || null })
}
} else if (text === '❤️' || text === 'video') {
await m.react("⏰")
const {mediaData, isDirect} = await download(videoApis)
if (mediaData) {
const fileSize = await getFileSize(mediaData)
const messageOptions = {fileName: `${userVideoData.title}.mp4`, caption: `${botname}\n> ${textbot}`, mimetype: 'video/mp4'}
if (fileSize > LimitVid) {
await conn.sendMessage(m.chat, {document: isDirect ? mediaData : {url: mediaData}, ...messageOptions}, {quoted: m || null})
await m.react("✅")
} else {
await conn.sendMessage(m.chat, {video: isDirect ? mediaData : {url: mediaData}, ...messageOptions}, {quoted: m || null})
await m.react("✅")
}
} else {
conn.sendMessage(m.chat, { text: `No se ha podido descargar el video.` }, { quoted: m || null })
}
}
} catch (error) {
console.error(error)
} finally {
delete tempStorage[m.sender]
}
}
handler.command = ["play"]

export default handler

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options})
return search.videos
}

function toNum(number) {
if (number >= 1000 && number < 1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number >= 1000000) { return (number / 1000000).toFixed(1) + 'M' } else if (number <= -1000 && number > -1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number <= -1000000) { return (number / 1000000).toFixed(1) + 'M' } else { return number.toString() }
}

function secondString(seconds) {
seconds = Number(seconds)
const d = Math.floor(seconds / (3600 * 24))
const h = Math.floor((seconds % (3600 * 24)) / 3600)
const m = Math.floor((seconds % 3600) / 60)
const s = Math.floor(seconds % 60)
const dDisplay = d > 0 ? d + (d == 1 ? 'd:' : 'd:') : ''
const hDisplay = h > 0 ? h + (h == 1 ? 'h:' : 'h:') : ''
const mDisplay = m > 0 ? m + (m == 1 ? 'm:' : 'm:') : ''
const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : ''
return dDisplay + hDisplay + mDisplay + sDisplay
}

const getBuffer = async (url) => {
try {
const response = await fetch(url)
const buffer = await response.arrayBuffer()
return Buffer.from(buffer)
} catch (error) {
console.error('Error al obtener el buffer', error)
throw new Error('Error al obtener el buffer')
}
}

async function getFileSize(url) {
try {
const response = await fetch(url, {method: 'HEAD'})
return parseInt(response.headers.get('content-length') || 0)
} catch {
return 0
}
}

async function fetchInvidious(url) {
const apiUrl = 'https://invidious.io/api/v1/get_video_info'
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(url)}`)
const data = await response.json()
if (data && data.video) {
const videoInfo = data.video
return videoInfo
} else {
throw new Error('No se pudo obtener información del video desde Invidious')
}
}

function getBestVideoQuality(videoData) {
const preferredQualities = ['720p', '360p', 'auto']
const availableQualities = Object.keys(videoData.video)
for (let quality of preferredQualities) {
if (availableQualities.includes(quality)) {
return videoData.video[quality].quality
}
}
return '360p'
}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl
.getInfo(url)
.then(async (getUrl) => {
let result = []
for (let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i]
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let {contentLength} = item
let bytes = await bytesToSize(contentLength)
result[i] = {audio: item.url, size: bytes}
}
}
let resultFix = result.filter((x) => x.audio != undefined && x.size != undefined)
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`)
let tinyUrl = tiny.data
let title = getUrl.videoDetails.title
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
resolve({title, result: tinyUrl, result2: resultFix, thumb})
})
.catch(reject)
})
}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl
.getInfo(url)
.then(async (getUrl) => {
let result = []
for (let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i]
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let {qualityLabel, contentLength} = item
let bytes = await bytesToSize(contentLength)
result[i] = {video: item.url, quality: qualityLabel, size: bytes}
}
}
let resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined)
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`)
let tinyUrl = tiny.data
let title = getUrl.videoDetails.title
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb})
})
.catch(reject)
})
                  }
  

