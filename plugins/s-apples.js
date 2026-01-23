import fetch from "node-fetch";

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fSearch && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ búsquedas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una búsqueda en Apple Music.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Golden Brown.` }, { quoted: m });
await m.react("⏰");
try {
let res, json;
try {
res = await fetch(`https://api.delirius.store/search/applemusic?text=${encodeURIComponent(text)}`);
json = await res.json();
if (!Array.isArray(json) || json.length === 0) throw new Error("Sin resultados API 1");
} catch (e) {
res = await fetch(`https://api.delirius.store/search/applemusicv2?query=${encodeURIComponent(text)}`);
let alt = await res.json();
if (!alt?.data || alt.data.length === 0) throw new Error("Sin resultados API 2");
json = alt.data.map(v => ({ title: v.title, type: "Canción", artists: v.artist, url: v.url, image: v.image }));
}
let result = json.slice(0, 10); 
let textMsg = `· ┄ · ⊸ 𔓕 *Apple  :  Search*\n\n\t＃ *Busqueda* : ${text}\n\t＃ *Resultados* : *${result.length}* results\n\t＃ *Fuente* : AppleMusic\n\n\n`;
result.forEach((item, i) => {
textMsg += `⧡ *${i + 1}* : ${item.title}
⧡ *Artista* : ${item.artists}
⧡ *Tipo* : ${item.type || "Desconocido"}
⧡ *Enlace* : ${item.url}\n\n`;
});
textMsg += `> ${textbot}`;
const thumb = Buffer.from(await (await fetch(`https://files.catbox.moe/e3065p.jpg`)).arrayBuffer());
await conn.sendMessage(m.chat, { text: textMsg, mentions: [m.sender], contextInfo: { externalAdReply: { title: "⧿ AppleMusic : Search ⧿", body: botname, thumbnail: thumb, sourceUrl: null, mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m });
await m.react("✅");
} catch (err) {
console.error(err);
conn.sendMessage(m.chat, { text: `${err.message}` }, { quoted: m });
}
};

handler.command = ['apples'];
handler.group = false;
export default handler;

