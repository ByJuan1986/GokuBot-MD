import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

if (!args[0]) return conn.sendMessage(m.chat, { text: `ᗢ Proporciona un enlace de Twitter.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://x.com/xxx/xxx/xxx` }, { quoted: m })
if (!/^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\//i.test(args[0])) return conn.sendMessage(m.chat, { text: `El enlace ingresado no es valido.` }, { quoted: m })
try {
await m.react("⏰")
let data = await vxtwitter(args[0])
let { metadata, download } = data
let uploadedDate = new Date(metadata.uploaded);
let formattedDate = uploadedDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric',month: 'long', day: 'numeric' })

for (let media of download) {
if (media.tipo === "image/jpg") {
await conn.sendMessage(m.chat, { image: { url: media.dl_url }, caption: `${botname}\n> ${textbot}` }, { quoted: m })
await m.react("✅")
} else if (media.tipo === "video/mp4") {
await conn.sendMessage(m.chat, { video: { url: media.dl_url }, caption: `${botname}\n> ${textbot}` }, { quoted: m })
await m.react("✅")
}}} catch (error) {
console.error(error)
conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}}

handler.command = ['tw', 'twitter', 'x']
export default handler

async function vxtwitter(url) {
if (/x.com/.test(url)) {
url = url.replace("x.com", "twitter.com");
}

let { data } = await axios.get(url.replace("twitter.com", "api.vxtwitter.com")).catch(e => e.response);

return {
metadata: {
title: data.text,
id: data.tweetID,
likes: data.likes.toLocaleString(),
replies: data.replies.toLocaleString(),
retweets: data.retweets.toLocaleString(),
uploaded: new Date(data.date),
author: data.user_name
},
download: data.media_extended.map((a) => ({
tipo: a.type === "image" ? "image/jpg" : "video/mp4", 
dl_url: a.url 
}))
}
}

function toNum(number) {
if (number >= 1000 && number < 1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number >= 1000000) { return (number / 1000000).toFixed(1) + 'M' } else if (number <= -1000 && number > -1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number <= -1000000) { return (number / 1000000).toFixed(1) + 'M' } else { return number.toString() }
}
