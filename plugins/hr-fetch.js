import fetch from 'node-fetch'
import { format } from 'util'

let handler = async (m, { conn, usedPrefix, text }) => {
if (!global.db.data.chats[m.chat].fAjustes && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ herramientas ]* estan desactivados...` }, { quoted: m })
}

if (m.fromMe) return
if (!/^https?:\/\//.test(text)) return conn.sendMessage(m.chat, { text: `Proporcione un enlace de cualquier pagina.` }, { quoted: m })
let url = text
await m.react('⏰')
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
return conn.sendMessage(m.chat, { text: `Content-Length: ${res.headers.get('content-length')}` }, { quoted: m })
}
if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m)
let txt = await res.buffer()
try {
txt = format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
conn.sendMessage(m.chat, { text: txt.slice(0, 65536) + '' }, { quoted: m })
await m.react('✅')
}}

handler.help = ['get']
handler.tags = ['tools']
handler.command = ['fetch', 'get']

export default handler
