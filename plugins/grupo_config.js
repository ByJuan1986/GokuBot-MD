var handler = async (m, {conn, args, usedPrefix, command}) => {
const isClose = { 'open': 'not_announcement', 'close': 'announcement', 'abierto': 'not_announcement', 'cerrado': 'announcement', 'abrir': 'not_announcement', 'cerrar': 'announcement', 'desbloquear': 'unlocked', 'bloquear': 'locked' }[(args[0] || '')]
if (isClose === undefined) { return conn.sendButton(m.chat, `╭❪ 💬 ›› _Para usar esta opcion, presione un boton._`, 'Por favor, seleccione una opcion.', null, [['ABRIR', '#grupo abrir'], ['CERRAR', '#grupo cerrar']], null, null, m)}
await conn.groupSettingUpdate(m.chat, isClose)
{ 
conn.reply(m.chat, '╭❪ ✅ ›› _Se ha configurado el grupo correctamente._', m )
await m.react(done)
}}
handler.help = ['group abrir / cerrar']
handler.tags = ['grupo']
handler.command = ['group', 'grupo']
handler.admin = true
handler.botAdmin = true

export default handler