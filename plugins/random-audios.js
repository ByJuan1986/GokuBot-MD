import util from 'util'
import path from 'path'

let handler = (m) => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) return true
if (chat.isBanned) return
if (m.fromMe) return !0
if (!db.data.chats[m.chat].fAudios) return

const audioMap = [
{regex: /^Bien pensado boddy|bien pensado$/i, url: 'https://files.catbox.moe/cv4969.mp3'},
{regex: /^soy toxico|les saluda el toxico$/i, url: 'https://files.catbox.moe/pxgxpk.mp3'},
]

let matchedAudio = audioMap.find((audio) => audio.regex.test(m.text))

if (matchedAudio) {
try {
this.sendPresenceUpdate('recording', m.chat)
this.sendMessage(m.chat, {audio: {url: matchedAudio.url}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m})
} catch (e) {
console.error(e)
} finally {
}
}

return !0
}
export default handler

/*
let handler = async (m, {conn}) => {
if (!db.data.chats[m.chat].fAudios && m.isGroup) throw 0

let vaudio = 'https://files.catbox.moe/pxgxpk.mp3'
conn.sendFile(m.chat, vaudio, 'a.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
handler.customPrefix = /bien pensado|bien pensado boddy/i
handler.command = new RegExp()
export default handler
*/
