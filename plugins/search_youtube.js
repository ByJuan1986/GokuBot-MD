import yts from 'yt-search'

var handler = async (m, { text, conn, args, command, usedPrefix }) => {

if (!text) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y escriba el titulo de alguna cancion para buscarlo en YouTube._`, m, )

conn.reply(m.chat, '╭❪ ⏳ ›› _Buscando resultados, espere un momento..._', m)

let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
- ✎ *Título:* ${v.title}
- ✎ *Enlace:* ${v.url}
- ✎ *Duración:* ${v.timestamp}
- ✎ *Subido:* ${v.ago}
- ✎ *Vistas:* ${v.views}`}}).filter(v => v).join('\n\n•────────────────•\n\n')

conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, fkontak, m)

}
handler.help = ['ytsearch']
handler.tags = ['buscador']
handler.command = ['playlist', 'ytbuscar', 'yts', 'ytsearch']

handler.register = true
handler.estrellas = 1

export default handler