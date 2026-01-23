import { readdirSync, readFileSync, existsSync } from 'fs'
import path from 'path'
let handler = async (m, { text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fOwners && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ owners ]* estan desactivados...` }, { quoted: m })
}

try {
if (!text) {
const folders = ['plugins', 'database', 'lib', 'src'].filter(folder => 
existsSync('./' + folder)
)
let message = `📍  *[ ARCHIVO ]*\n\n`
folders.forEach(folder => {
const files = readdirSync('./' + folder, { withFileTypes: true }).filter(file => file.isFile()).map(file => `⧡ ${file.name}`).join('\n')
message += `*${folder}/:*\n${files || '```No files found.```'}\n\n`
})
return conn.sendMessage(m.chat, { text: `ᗢ Proporciona la ruta para ver los archivos.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* lib` }, { quoted: m })
}
const filePath = text.startsWith('./') ? text : './' + text

if (!existsSync(filePath)) {
return conn.sendMessage(m.chat, { text: `Not present = \`\`\`${fileParh}\`\`\`` }, { quoted: m })
}

const content = readFileSync(filePath, 'utf8')
const stats = existsSync(filePath)
let contenido = `📍  *[ ARCHIVO ]*\n- ${text}\n\n\`\`\`${content.substring(0, 9000)}\`\`\``
await conn.sendMessage(m.chat, { text: contenido }, { quoted: m })
} catch (error) {
await conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}
}


handler.command = ['wx-']
handler.rowner = true
export default handler
//${content.length > 1000 ? '...' : ''}
