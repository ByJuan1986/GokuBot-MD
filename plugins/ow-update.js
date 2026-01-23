import { execSync } from 'child_process'

var handler = async (m, { conn, text, isROwner }) => {
if (!global.db.data.chats[m.chat].fOwners && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ owners ]* estan desactivados...` }, { quoted: m })
}

if (!isROwner) return
await m.react("⏰")
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('📍  La actualización de la pagina web ya esta en un estado normal.')) messager = '📍  La actualización del la pagina ya esta completa, no es necesario actualizarla.'
if (messager.includes('⏳  Actualización pendiente...')) messager = '✓  *[ WEB : ACTUALIZADO ]*\n\n' + stdout.toString()
conn.sendMessage(m.chat, { text: `\`\`\`${messager}\`\`\`` }, { quoted: m })
} catch { 
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('database.json') || line.includes('sessions/Principal/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `📍  [ ERROR ]:\n\n${conflictedFiles.join('\n')}.`
await conn.reply(m.chat, errorMessage, m)
}}} catch (error) {
console.error(error)
let errorMessage2 = '📍  [ ERROR ]'
if (error.message) {
errorMessage2 += '\n•> error: ' + error.message
}
await conn.sendMessage(m.chat, { text: errorMessage2 }, { quoted: m })
}}}

handler.help = ['update']
handler.tags = ['owner']
handler.command = ['update', 'fix', 'actualizar']
handler.rowner = true
export default handler
