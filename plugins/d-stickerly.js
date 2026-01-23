import fetch from "node-fetch"
import fs from "fs"
import path from "path"
import { sticker } from "../lib/sticker.js"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

if (!args[0]) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione un enlace de Sticker.Ly\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://sticker.ly/x/xxxx` }, { quoted: m })

await m.react("⏰")
try {
const res = await fetch(`https://api.delirius.store/download/stickerly?url=${encodeURIComponent(args[0])}`)
if (!res.ok) throw new Error(`Error al conectar con la API (${res.status})`)
const json = await res.json()
if (!json.status || !json.data || !json.data.stickers?.length)
throw new Error("No se pudo obtener el pack. Verifica el enlace.")
const data = json.data
const info = `· ┄ · ⊸ 𔓕 *StickerLy  :  Download*

⚶ *PROPIEDAD*
\t＃ Pack : *${data.name}*
\t＃ Autor/a : *${data.author}* (@${data.username})
\t＃ Seguidores : *${toNum(data.followers)}* seguidores

⚶ *DETALLES*
\t＃ Stickers : *${data.total}* stickers
\t＃ Vistas : *${toNum(data.viewCount)}* vistas
\t＃ Exports : *${toNum(data.exportCount)}* exportados
\t＃ Animados : *${data.isAnimated ? "Sí" : "No"}*

> ${textbot}`.trim()
await conn.sendMessage(m.chat, { text: info, contextInfo: { externalAdReply: { title: `${data.name}`, body: botname, thumbnailUrl: data.preview, sourceUrl: data.url, mediaType: 1, renderLargerThumbnail: false, },},}, { quoted: m })

let success = 0
let failed = 0

for (const stick of data.stickers) {
try {
const imgRes = await fetch(stick)
if (!imgRes.ok) throw new Error("No se pudo descargar el sticker")

const imgBuffer = Buffer.from(await imgRes.arrayBuffer())
const stickerBuf = await sticker(imgBuffer, false, data.name, data.author)
await conn.sendMessage(m.chat, { sticker: stickerBuf }, m )
success++
await new Promise((resolve) => setTimeout(resolve, 600)) 
} catch (err) {
failed++
console.log("Error con un sticker:", err.message)
}
}
await m.react("✅")
//conn.sendMessage(m.chat, { text: `✅  Se han enviado *${success}* correctamente y *${failed}* fallos.` }, { quoted: m })

} catch (e) {
conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}
}

handler.command = ["sly", "stickerly"]

export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number >= 1000000) { return (number / 1000000).toFixed(1) + 'M' } else if (number <= -1000 && number > -1000000) { return (number / 1000).toFixed(1) + 'k' } else if (number <= -1000000) { return (number / 1000000).toFixed(1) + 'M' } else { return number.toString() }}

