let handler = async (m, { text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fStickers && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ stickers ]* estan desactivados...` }, { quoted: m })
}
const userId = m.sender
if (command === 'exif+') {
const packParts = text.split(/[\u2022|]/).map(part => part.trim())
if (packParts.length < 2) {
return conn.sendMessage(m.chat, { text: `ᗢ Ingrese el comando y escriba el nombre y descripción de un sticker.\n\n• Por ejemplo:\n*${usedPrefix + command}* Mx | Mx` }, { quoted: m })
}
const packText1 = packParts[0]
const packText2 = packParts[1]
if (!global.db.data.users[userId]) {
global.db.data.users[userId] = {}
}
const packstickers = global.db.data.users[userId]
packstickers.text1 = packText1
packstickers.text2 = packText2
await global.db.write()
return conn.sendMessage(m.chat, { text: `✓  Se ha configurado el titulo y descripción de los stickers, cada sticker creado su titulo y descripción sera modificada.` }, { quoted: m })
}
if (command === 'exif-') {
if (!global.db.data.users[userId] || (!global.db.data.users[userId].text1 && !global.db.data.users[userId].text2)) {
return conn.sendMessage(m.chat, { text: `📍  No tienes ningun titulo y descripción establecido en los stickers.` }, { quoted: m })
}
const packstickers = global.db.data.users[userId]
delete packstickers.text1
delete packstickers.text2
await global.db.write()
return conn.sendMessage(m.chat, { text: `✓  Se ha configurado el titulo y descripción de los stickers por defecto.` }, { quoted: m })
}}

handler.command = ['exif+', 'exif-']
export default handler