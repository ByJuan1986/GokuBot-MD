import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {

if (!process.send) throw '*Reiniciar: node sunlight.js*\n*Reiniciar: node index.js*'

if (conn.user.jid == conn.user.jid) {

const { key } = await conn.sendMessage(m.chat, {text: `╭❪ 💬 ›› _Iniciando reinicio completo._`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await conn.sendMessage(m.chat, {text: `╭❪ ✅ ›› _Reinicio completo._\n\n- *Vuelva a la consola y use el codigo:* npm start`, edit: key})

process.send('reset')
} else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart', 'reiniciar'] 
handler.rowner = true

export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))