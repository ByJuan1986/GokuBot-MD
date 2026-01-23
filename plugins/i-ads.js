import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
const thumb = Buffer.from(await (await fetch(`${global.guraImg}`)).arrayBuffer())
let anuncios = `${global.anuncios}`
await conn.sendMessage(m.chat, { text: anuncios, mentions: [m.sender], contextInfo: { externalAdReply: { title: "〩 ANUNCIOS 〩", body: botname, thumbnail: thumb, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
//conn.sendMessage(m.chat, { text: `` }, { quoted: m })
}
handler.command = ['anuncios', 'ads']
export default handler
