import fs from 'fs'
import path from 'path'

var handler = async (m, { usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fOwners && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ owners ]* estan desactivados...` }, { quoted: m })
}
try {
await m.react("⏰")
conn.sendPresenceUpdate('composing', m.chat)
const pluginsDir = './plugins'
const files = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'))
let response = `📍  *[ COMPLEMENTOS ]*\n\n`
let hasErrors = false
for (const file of files) {
try {
await import(path.resolve(pluginsDir, file))
} catch (error) {
hasErrors = true
response += `[ ${file} ] = ERROR:\n> ${error.message}\n\n`
}}
if (!hasErrors) {
response += '```No errors have been found...```'
}
await conn.sendMessage(m.chat, { text: response }, { quoted: m })
await m.react("📍")
} catch (err) {
await conn.sendMessage(m.chat, { text: `${err.message}` }, { quoted: m })
}}

handler.command = ['err']
handler.rowner = true

export default handler
