import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y escriba el texto para hablar con gemini._`, m)
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://apis-starlights-team.koyeb.app/starlight/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch {
await m.react(error)
await conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m)
}}
handler.command = ['gemini']
export default handler