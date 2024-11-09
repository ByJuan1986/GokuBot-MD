let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) await m.reply(`╭❪ 💬 ›› _Ingrese el comando y escriba el numero de la persona para invitarlo._\n\n- \`Por ejemplo:\`\n#invitar 5493873655135`)
if (text.includes('+')) await m.reply('╭❪ 📌 ›› _Debe de ingresar el numero completo sin el *+*._')
if (isNaN(text)) await m.reply('╭❪ 📌 ›› _Ingrese el numero completo sin *+* y sin espacios._')
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.reply(text+'@s.whatsapp.net', `\`INVITACION AL GRUPO\`\n\nUn usuario te invitó a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
await m.reply(`╭❪ ✅ ›› __ Se envió un enlace de invitación al usuario.`) 

}
handler.command = ['invite', 'invitar'] 
handler.group = true
//handler.admin = true
handler.botAdmin = true

export default handler