import { igdl } from "ruhend-scraper"
let handler = async (m, { args, conn }) => { 
let pontexto = '╭❪ 💬 ›› _Ingrese el comando mas un enlace valido de un video de Instagram para descargarlo._'
let espere = '╭❪ ⏳ ›› _Descargando el video, espere un momento..._'
let aquitiene = '╭❪ ✅ ›› _¡¡Aqui tiene su video!!_'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
if (!args[0]) {
return conn.reply(m.chat, pontexto, m)}
try {
conn.reply(m.chat, espere, m)      
let res = await igdl(args[0])
let data = res.data       
for (let media of data) {
await new Promise(resolve => setTimeout(resolve, 2000))           
await conn.sendFile(m.chat, media.url, 'instagram.mp4', aquitiene, fkontak)
}} catch {
conn.reply(m.chat, errorcode, m)}}

handler.command = ['instagram', 'ig']
export default handler