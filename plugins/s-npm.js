import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fSearch && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ búsquedas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una busqueda en npmjs.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* yt-search` }, { quoted: m })
try {
await m.react("⏰")
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
let toru = objects.slice(0, 10)
if (!toru.length) return conn.sendMessage(m.chat, { text: `No se han encontrado resultados...` }, { quoted: m })
let inicio = `· ┄ · ⊸ 𔓕 *NPM  :  Search*

\t＃ *Búsqueda* : ${text}
\t＃ *Resultados* : *10* results
\t＃ *Fuente* : npmjs\n\n\n`
let txt = toru.map(({ package: pkg }) => {
return `⧡ *Titulo* : ${pkg.name}
⧡ *Version* : v${pkg.version}
⧡ *Descripción* : ${pkg.description}
⧡ *Enlace* : ${pkg.links.npm}`}).join`\n\n\n`
const thumb = Buffer.from(await (await fetch(`https://files.catbox.moe/nixtl0.jpg`)).arrayBuffer())
await conn.sendMessage(m.chat, { text: inicio + txt + `\n\n> ${textbot}`, mentions: [m.sender], contextInfo: { externalAdReply: { title: "⧿ NPM - Search ⧿", body: botname, thumbnail: thumb, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
await m.react("✅")
} catch {
await conn.sendMessage(m.chat, { text: `[ error ] undefined...` }, { quoted: m })
}}

handler.command = ['npms']
export default handler
