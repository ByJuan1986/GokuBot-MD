import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
if (!args[0]) return conn.reply(m.chat, '╭❪ 💬 ›› _Imgrese el comando mas un enlace de cualquier pagina para hacer una captura._', m)
try {
await m.react(rwait)
conn.reply(m.chat, '╭❪ ⏳ ›› _Entrando a la pagina, espere un momento..._', m)
let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer()
conn.sendFile(m.chat, ss, 'error.png', args[0], fkontak)
await m.react(done)
} catch {
return conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m)
await m.react(error)}}
handler.help = ['ssweb', 'ss']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss', 'captura']
export default handler