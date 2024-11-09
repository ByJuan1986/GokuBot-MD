import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y escriba el texto para hablar con Bard._`, m)
try {
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await conn.reply(m.chat, res.result, m)
} catch (error) {
console.error(error)
return conn.reply(m.chat, '╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._', m)
}}

handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']
handler.premium = false
export default handler