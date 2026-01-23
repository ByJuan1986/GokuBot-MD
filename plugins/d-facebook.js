import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

try {
if (!args[0]) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione un enlace de Facebook.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://www.facebook.com/xxx` }, { quoted: m })
const url = args[0]
if (!url.match(/facebook\.com|fb\.watch/)) return conn.sendMessage(m.chat, { text: `El enlace ingresado no es valido.` }, { quoted: m })
await m.react("⏰")
const apiUrl = `https://mayapi.ooguy.com/facebook?url=${encodeURIComponent(url)}&apikey=may-f53d1d49`
const response = await fetch(apiUrl, {
timeout: 30000
})
if (!response.ok) {
throw new Error(`Error en la API: ${response.status} - ${response.statusText}`)
}
const data = await response.json()
if (!data.status) {
throw new Error('📍  La API no respondió correctamente')
}

let videoUrl, videoTitle

if (data.result && data.result.url) {
videoUrl = data.result.url
videoTitle = data.result.title || 'Video de Facebook'
} else if (data.url) {
videoUrl = data.url
videoTitle = data.title || 'Video de Facebook'
} else if (data.data && data.data.url) {
videoUrl = data.data.url
videoTitle = data.data.title || 'Video de Facebook'
} else {
throw new Error('📍  No se encontró URL del video en la respuesta')
}

await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: `${botname}\n> ${textbot}` }, { quoted: m })
await m.react('✅')
} catch (error) {
await conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}
}

handler.command = ['fb', 'facebook']
export default handler
  
