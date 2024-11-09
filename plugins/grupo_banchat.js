let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `╭❪ ✅ ›› _El chat fue baneado con exito, nadie podra usar el bot._`, m)

}
handler.help = ['banchat']
handler.tags = ['grupo']
handler.command = ['banchat']

handler.botAdmin = true
handler.admin = true 
handler.group = true

export default handler