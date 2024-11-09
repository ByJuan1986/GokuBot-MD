let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, usedPrefix, command }) => {

if (!text) return m.reply(`╭❪ 💬 ›› _Ingrese el comando mas un enlace de invitacion a su grupo para que yo entre._`)
try {
let [_, code] = text.match(linkRegex) || []
if (!code) return m.reply('╭❪ ❌ ›› _El enlace ingresado es invalido._')
let res = await conn.groupAcceptInvite(code)
m.reply(`╭❪ ✅ ›› _¡¡¡Ya me uni al grupo, estoy ahi para ayudarlos!!!_`)
} catch {
return m.reply(`╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`)}}

handler.help = ['join <link>']
handler.tags = ['owner']
handler.command = ['join', 'entrar'] 
handler.rowner = true

export default handler