let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y responda a un video para convertirlo en un formato gif._`, m)
conn.reply(m.chat, `╭❪⏳ ›› _Convirtiendo contenido, espere un momento..._`, m)
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y responda a un video para convertirlo en un formato gif._`, m)
let media = await q.download()
let listo = '╭❪ ✅ ›› _¡¡Aqui tiene su gif!!_'
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: listo }, { quoted: fkontak })
}
handler.command = ['togif']
export default handler