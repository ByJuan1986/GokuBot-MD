import fetch from 'node-fetch';
import axios from 'axios';
let handler = async (m, { text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fSearch && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ búsquedas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una petición para buscar en Google.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Arboles` }, { quoted: m });
const apiUrl = `https://api.delirius.store/search/googlesearch?query=${encodeURIComponent(text)}`;
try {
await m.react("⏰");
const response = await fetch(apiUrl);
const result = await response.json();
if (!result.status) return conn.sendMessage(m.chat, { text: `No se han encontrado resultados.` }, { quoted: m });
let replyMessage = `· ┄ · ⊸ 𔓕 *Google  :  Search*\n\n\t＃ *Busqueda* : ${text}\n\t＃ *Resultados* : *5* results\n\t＃ *Fuente* : Google\n\n\n`;
result.data.slice(0, 5).forEach((item, index) => {
replyMessage += `⧡ *Titulo* : ${item.title}\n`;
replyMessage += `⧡ *Desc* : ${item.description}\n`;
replyMessage += `⧡ *URL* : ${item.url}\n\n\n`;
});
replyMessage += `> ${textbot}`;
const thumb = Buffer.from(await (await fetch(`https://files.catbox.moe/zdwlml.jpg`)).arrayBuffer())
await conn.sendMessage(m.chat, { text: replyMessage, mentions: [m.sender], contextInfo: { externalAdReply: { title: "⧿ Google : Search ⧿", body: botname, thumbnail: thumb, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m });
await m.react("✅");
} catch (error) {
conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m });
}};

handler.command = ['google'];
export default handler;
