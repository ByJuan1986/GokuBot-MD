//Codigo elaborado por MBMD
import yts from 'yt-search'
import axios from 'axios'
let handler = async (m, { conn, text }) => {
if (!text) return m.reply('❪ ✎ › Ingrese el comando y escriba el nombre de la cancion para buscarla.')
try {
let ytsres = await yts(text)
let vid = ytsres.videos[0]
let { url, title, thumbnail, timestamp, ago } = vid
let api = await axios.get(`https://widipe.com/download/ytdl?url=${url}`)
let json = api.data.result
let { mp4 } = json
await conn.sendMessage(m.chat, {video: { url: mp4 },fileName: `mbmd.mp4`,caption: `${title}`,thumbnail: thumbnail,mimetype: 'video/mp4'}, { quoted: m });
} catch (error) {
console.error(error)
}}
handler.command = /^(video|mp4)$/i
export default handler