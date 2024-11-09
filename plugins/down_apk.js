import { search, download } from 'aptoide-scraper'
var handler = async (m, {conn, usedPrefix, command, text}) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando y escriba el nombre de la aplicacion para buscarlo._'
let espere = '╭❪ ⏳ ›› _Descargando aplicacion, espere un momento..._'
let pesado = '╭❪ 📌 ›› _La aplicacion pesa demasiado, no se podra enviar, intentalo con otro nombre._'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
if (!text) return conn.reply(m.chat, pontexto, m)
try {
conn.reply(m.chat, espere, m)
let searchA = await search(text)
let data5 = await download(searchA[0].id)
let txt = `
⌬ *NOMBRE:* ${data5.name}
⌬ *PAQUETE:* ${data5.package}
⌬ *ULTIMA ACTUALIZACION:* ${data5.lastup}
⌬ *PESO:* ${data5.size}`
await conn.sendFile(m.chat, data5.icon, 'thumbnail.jpg', txt, m, null) 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.reply(m.chat, pesado, m )}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: fkontak})
} catch {
return conn.reply(m.chat, errorcode, m )}}
handler.command = ['apk', 'modapk', 'aptoide']
handler.register = true
export default handler
