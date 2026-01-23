export async function before(m, { conn, isAdmin, isBotAdmin, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.sender === conn.user?.jid) return
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('code') || m.text.includes('qr')) return !0
const chat = global.db.data.chats[m.chat]
const bot = global.db.data.settings[conn.user.jid] || {}
let mensajito = `📍  Hola usuario @${m.sender.split`@`[0]}
- No puedes hablar individualmente con el bot.

💪🏻 Te sugerimos que uses el bot en un chat grupal, sea alojado o principal.

Gracias por leer.`
if (m.chat === '120363402356085997@newsletter') return !0
if (bot.fPrivado && !isROwner) {
await conn.sendMessage(m.chat, { text: mensajito, mentions: await conn.parseMention(mensajito) }, { quoted: m })
await this.updateBlockStatus(m.chat, 'block')
}
return !1
}
