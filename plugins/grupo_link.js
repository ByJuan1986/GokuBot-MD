var handler = async (m, { conn, args }) => {

let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
conn.reply(m.chat, `- *LINK GRUPAL:*\n${link}`, m, { detectLink: true })

}

handler.command = ['link']

handler.group = true
handler.botAdmin = true

export default handler