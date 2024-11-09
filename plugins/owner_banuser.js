let handler = async (m, { conn, text}) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando y mensione a un usuario para banearlo._'
let pontexto2 = '╭❪ 📌 ›› _Debe de mensionar a una persona para banearlo._'
let listo = `╭❪ ✅ ›› _El usuario:_ @${who.split('@')[0]}\n- _Fue baneado del bot, no podra usar los comandos..._`
if (!text) return m.reply(pontexto)
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return m.reply(pontexto2)
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, listo, fkontak, { mentions: [who]})
}
handler.help = ['banuser <@tag> <razón>']
handler.command = ['banuser']
handler.tags = ['owner']
handler.rowner = true
export default handler