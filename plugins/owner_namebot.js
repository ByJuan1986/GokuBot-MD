let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y escriba el texto para cambia el nombre de usuario del bot._`, m)
  try {
    await conn.updateProfileName(text)
    return conn.reply(m.chat, '╭❪ ✅ ›› _Nombre de usuario del bot cambiado con exito._', m)
 } catch (e) {
    console.log(e)
    return conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m)
  }
}
handler.help = ['nuevonombrebot <teks>']
handler.tags = ['owner']
handler.command = ['nuevonombrebot', 'setbotname', 'namebot']

handler.owner = true
export default handler
