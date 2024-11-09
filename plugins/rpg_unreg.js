let handler = async (m, { conn, text }) => {
let user = global.db.data.users[m.sender]
user.registered = false
return conn.reply(m.chat, `╭❪ ✅ ›› _Ya no estas registrado en el bot._`, m)}
handler.help = ['unreg']
handler.tags = ['rg']
handler.command = ['unreg', 'unregister']
handler.register = true
export default handler
