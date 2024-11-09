let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '╭❪ ❌ ›› _El chat no se encuentra registrado._', m)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '╭❪ 💬 ›› _El bot no esta baneado en este grupo._', m)
chat.isBanned = false
await conn.reply(m.chat, '╭❪ 💬 ›› _El bot ya fue baneado en este grupo._', m)
}
handler.help = ['unbanchat'];
handler.tags = ['grupo'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.admin = true 
handler.botAdmin = true
handler.group = true

export default handler