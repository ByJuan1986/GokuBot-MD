import { igdl } from 'ruhend-scraper'
const handler = async (m, { text, conn, args, usedPrefix, command }) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando mas un enlace valido de un video de Facebook para descargarlo._'
let espere = '╭❪ ⏳ ›› _Descargando el video, espere un momento..._'
let sinresultado = '╭❪ 📌 ›› _No se ha encontrado resultados en la busqueda, intentalo de nuevo._'
let nocalidad = '╭❪ 📢 ›› _No se ha encontrado una calidad adecuada para el video, intenta con otro enlace._'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
let aquitiene = '╭❪ ✅ ›› _¡¡¡Aqui tiene su video!!!_'
if (!args[0]) {
return conn.reply(m.chat, pontexto, m)}
let res
try {
conn.reply(m.chat, espere, m)
res = await igdl(args[0])
} catch {
return conn.reply(m.chat, sinresultado, m)}
let result = res.data
if (!result || result.length === 0) {
return conn.reply(m.chat, sinresultado, m)}
let data
try {
data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)")
} catch {

return conn.reply(m.chat, sinresultado, m)}
if (!data) {
return conn.reply(m.chat, nocalidad, m)}
let video = data.url
try {
await conn.sendMessage(m.chat, { video: { url: video }, caption: aquitiene, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: fkontak })
} catch {
return conn.reply(m.chat, errorcode, m)}}
handler.command = ['facebook', 'fb']
handler.register = true
export default handler