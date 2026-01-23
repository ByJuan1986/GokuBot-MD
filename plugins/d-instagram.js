
import axios from 'axios'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

if (!args[0]) return conn.sendMessage(m.chat, { text: `ᗢ Proporciona un enlace de Instagram.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://www.instagram.com/xxxx/xxxx/xxxx` }, { quoted: m })
if (!args[0].match(/instagram/gi)) return conn.sendMessage(m.chat, { text: `El enlace ingresado no es valido.` }, { quoted: m })
try {
await m.react("⏰")
let res = await igdl(args[0])
if (res.type === 'video') {
conn.sendMessage(m.chat, { video: { url: res.video_url }, caption: `${botname}\n> ${textbot}` }, { quoted: m })
await m.react("✅")
} else {
for (let img of res.images) {
return conn.sendMessage(m.chat, { image: { url: img }, caption: `${botname}\n> ${textbot}` }, { quoted: m })
}
await m.react("✅")
}
} catch (error) {
console.log(error)
conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}}

handler.command = ['instagram', 'ig']

export default handler


async function ig(url) {
try {
let e = 'https://igram.website/content.php?url=' + encodeURIComponent(url)
let { data } = await axios.post(e, '', {
headers: {
authority: 'igram.website',
accept: '*/*',
'accept-language': 'id-ID,id;q=0.9',
'content-type': 'application/x-www-form-urlencoded',
cookie: '',
referer: 'https://igram.website/',
'sec-ch-ua': '"Chromium";v="139", "Not;A=Brand";v="99"',
'sec-ch-ua-mobile': '?1',
'sec-ch-ua-platform': '"Android"',
'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
}
})
return data
} catch (e) {
return { error: e.message }
}}

function parse(html) {
let clean = html.replace(/\n|\t/g, '')
let videoMatch = [...clean.matchAll(/<source src="([^"]+)/g)].map(x => x[1])
let imageMatch = [...clean.matchAll(/<img src="([^"]+)/g)].map(x => x[1])
if (imageMatch.length > 0) imageMatch = imageMatch.slice(1)
let captionRaw = clean.match(/<p class="text-sm"[^>]*>(.*?)<\/p>/)
let caption = captionRaw ? captionRaw[1].replace(/<br ?\/?>/g, '\n') : ''
let likes = clean.match(/far fa-heart"[^>]*><\/i>\s*([^<]+)/)
let comments = clean.match(/far fa-comment"[^>]*><\/i>\s*([^<]+)/)
let time = clean.match(/far fa-clock"[^>]*><\/i>\s*([^<]+)/)

return {
is_video: videoMatch.length > 0,
videos: videoMatch,
images: imageMatch,
caption,
likes: likes ? likes[1] : null,
comments: comments ? comments[1] : null,
time: time ? time[1] : null
}
}

async function igdl(url) {
let raw = await ig(url)
if (!raw || !raw.html) return { error: 'error' }
let parsed = parse(raw.html)

return {
status: raw.status,
username: raw.username,
type: parsed.is_video ? 'video' : 'image',
video_url: parsed.is_video && parsed.videos.length > 0 ? parsed.videos[0] : null,
images: parsed.is_video ? [] : parsed.images,
caption: parsed.caption,
likes: parsed.likes,
comments: parsed.comments,
time: parsed.time
}
}



/*
import fetch from 'node-fetch'
import axios from 'axios'
const handler = async (m, {conn, args, command, usedPrefix}) => {
let ponloXd = `\t〤*I N S T A G R A M*

\t⸭ 📌 \`\`\`Proporcione un enlace de Instagram.\`\`\`

\t⚶ Por ejemplo:
*${usedPrefix + command}* https://www.instagram.com/xxxx/xxxx/xxxx`
if (!args[0]) conn.sendMessage(m.chat, { text: ponloXd }, { quoted: m })
let videoToru = `🎬*download-instagram_video.mp4*`
let imageToru = `🖼️*donwload-instagram_image.jpg*`
let conToru = `📥*donwload-instagram_file*`
await m.react("⏰")
try {
const res = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${args}`)
const data = await res.json()
const fileType = data.data[0].url.includes('.webp') ? 'image' : 'video'
const downloadUrl = data.data[0].url
if (fileType === 'image') {
await conn.sendFile(m.chat, downloadUrl, 'ig.jpg', imageToru, m, null)
} else if (fileType === 'video') {
await conn.sendFile(m.chat, downloadUrl, 'ig.mp4', videoToru, m, null)
}
} catch {
try {
const apiUrl = `${apis}/download/instagram?url=${encodeURIComponent(args[0])}`
const apiResponse = await fetch(apiUrl)
const delius = await apiResponse.json()
if (!delius || !delius.data || delius.data.length === 0) return m.react('❌')
const downloadUrl = delius.data[0].url
const fileType = delius.data[0].type
if (!downloadUrl) return m.react('❌')
if (fileType === 'image') {
await conn.sendFile(m.chat, downloadUrl, 'ig.jpg', imageToru, m, null)
} else if (fileType === 'video') {
await conn.sendFile(m.chat, downloadUrl, 'ig.mp4', videoToru, m, null)
} else {
return m.react('❌')
}
} catch (e) {
await conn.reply(m.chat, `📍 ${e.message}`, m)
console.log(e)
}
}
}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command = ["instagram", "ig"]
export default handler
 
*/
