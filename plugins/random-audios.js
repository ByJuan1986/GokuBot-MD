import util from 'util'
import path from 'path'
let handler = async (m, {conn}) => {
if (!db.data.chats[m.chat].fAudios && m.isGroup) throw 0

let vaudio = './src/bien-pensado-boddy.mp3'
conn.sendFile(m.chat, vaudio, 'a.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
handler.customPrefix = /bien pensado|bien pensado boddy/
handler.command = /^(bien pensado|bien pensado boddy?$)/
export default handler
