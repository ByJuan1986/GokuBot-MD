import JavaScriptObfuscator from 'javascript-obfuscator'
let handler = async (m, {conn, text, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].fAjustes && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ herramientas ]* estan desactivados...` }, { quoted: m })
}


if (!text) return conn.sendMessage(m.chat, { text: `Proporcione un codigo JavaScript para ofuscarlo.` }, { quoted: m })
try {
await m.react("⏰")
function obfuscateCode(code) {
return JavaScriptObfuscator.obfuscate(code, {
compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true
}).getObfuscatedCode()
}
let obfuscatedCode = await obfuscateCode(text)
conn.sendMessage(m.chat, { text: obfuscatedCode }, { quoted: m })
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
 }
}
handler.command = ["ofuscar", "cript+", "encript"]
export default handler
  
