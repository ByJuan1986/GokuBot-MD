let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagenRB
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
Desarrollo
`
await conn.sendButton(m.chat, estado, wm, pp, [
['𝙈𝙞 𝙞𝙣𝙛𝙤', '.minfo'], ['𝙄𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪', '/allmenu']], null, null, m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^eatado|status$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
