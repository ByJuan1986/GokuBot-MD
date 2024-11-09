let handler = async (m, { conn, text }) => {
if (!text) return m.reply('╭❪ 💬 ›› _Ingrese el comando y escriba el nombre para ponerlo en el grupo creado._')
try{
m.reply('╭❪ ⏳ ›› _Creando el grupo, espere un momento..._')
let group = await conn.groupCreate(text, [m.sender])
let link = await conn.groupInviteCode(group.gid)
m.reply('https://chat.whatsapp.com/' + url)
} catch (e) {
m.reply(`╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`)
}
}
handler.help = ['grupocrear <nombre>']
handler.tags = ['owner']
handler.command = ['creargc', 'newgc', 'creargrupo', 'grupocrear']
handler.rowner = true
handler.register = true
export default handler