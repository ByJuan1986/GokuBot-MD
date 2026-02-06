let handler = (m) => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) return true
if (chat.isBanned) return
if (m.fromMe) return !0
if (!db.data.chats[m.chat].fAudios) return

const audioMap = [
{regex: /^A Bueno master|Bueno master|Bueno Máster|🫂$/i, url: 'https://qu.ax/xynz.mp3'},
{regex: /^ara ara$/i, url: 'https://qu.ax/PPgt.mp3'},
{regex: /(bienvenido|bienvenid@)/gi, url: 'https://qu.ax/cUYg.mp3'}
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
