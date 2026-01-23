import fetch from 'node-fetch'
const handler = async (m, { conn, usedPrefix, command }) => {
const name = await conn.getName(m.sender)
const thumb = Buffer.from(await (await fetch(`${global.gokuImg}`)).arrayBuffer())
let xd = `📍  No se ha agregado nada en este plugin.`
await conn.sendMessage(m.chat, { text: xd, mentions: conn.parseMention(xd), contextInfo: { externalAdReply: { 
title: botname, 
body: textbot, 
thumbnail: thumb, 
sourceUrl: null, 
mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m })
};

handler.command = ['creador', 'creator'];
export default handler;