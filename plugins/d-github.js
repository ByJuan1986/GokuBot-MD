import fetch from 'node-fetch'
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command, text }) => {
if (!global.db.data.chats[m.chat].fDescargas && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ descargas ]* estan desactivados...` }, { quoted: m })
}

let pruebaXd = `ᗢ Proporcione un enlace de un repositorio de GitHub.\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://github.com/xxxx/xxxx`
if (!args[0]) return conn.sendMessage(m.chat, { text: pruebaXd }, { quoted: m })
if (!regex.test(args[0])) return conn.sendMessage(m.chat, { text: `El enlace ingresado no es valido.`}, { quoted: m })
let [_, user, repo] = args[0].match(regex) || []
let sanitizedRepo = repo.replace(/.git$/, '')
let repoUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}`
let zipUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}/zipball`
await m.react("⏰")
const thumb = Buffer.from(await (await fetch(`${global.toruImg}`)).arrayBuffer())
try {
let [repoResponse, zipResponse] = await Promise.all([
fetch(repoUrl),
fetch(zipUrl),
])
let repoData = await repoResponse.json()
let filename = zipResponse.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
let type = zipResponse.headers.get('content-type')
let txt = `· ┄ · ⊸ 𔓕 *GitHub  :  Download*

\t＃ Usuario  :  *${user}*
\t＃ Repositorio  :  ${sanitizedRepo}
\t＃ Enlace  :  ${args[0]}

📍  *Descripcion:* ${repoData.description || 'No tiene descripcion.'}

> ${textbot}`
await await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender], contextInfo: { externalAdReply: { 
title: "⧿ GitHub : Download ⧿", 
body: botname, 
thumbnail: thumb, 
sourceUrl: null, 
mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
conn.sendFile(m.chat, await zipResponse.buffer(), filename, `${botname}\n> ${textbot}`, m)
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}
}
handler.command = ["git", "github"]
export default handler


