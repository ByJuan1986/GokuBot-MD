let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
global.db.data.users[m.sender].exp += 100  //Gana 100 exp por cada reproduccion.

if (chat.audios && m.text.match(/(comando)/gi)) {  //pon el nombre del comando.  
let vn = '' //link del audio.
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })}

return !0 }
export default handler