let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `╭❪ 😉 ›› _¡¡¡Me voy del grupo, buena suerte a todos!!!_`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`) 
return console.log(e)
}}
handler.command = ['leave', 'leavegc', 'salir']
handler.group = true
handler.rowner = true
export default handler