import fetch from 'node-fetch';
import baileys from '@whiskeysockets/baileys';
const { generateWAMessageContent, generateWAMessageFromContent, proto } = baileys;

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fSearch && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ búsquedas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione una busqueda para Sticker.Ly\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Caballo Juan` }, { quoted: m });
await m.react('⏰');
try {
const res = await fetch(`https://api.delirius.store/search/stickerly?query=${encodeURIComponent(text)}`);
const json = await res.json();
if (!json.status || !json.data || json.data.length === 0) return conn.sendMessage(m.chat, { text: `No se han encontrado resultados.` }, { quoted: m });

const results = json.data.slice(0, 10);

async function createImage(url) {
const { imageMessage } = await generateWAMessageContent({ image: { url } }, { upload: conn.waUploadToServer });
return imageMessage;
}

let cards = [];
for (let pack of results) {
let image = await createImage(pack.preview);
let toruBody = `\t\t【  *Stickers  :  Search*  】`
let toruFooter = `\t＃ *Nombre* : ${pack.name}
\t＃ *Autor/a* : @${pack.author} *(${pack.view_count} V)*
\t＃ *Stickers* : *${pack.sticker_count}* stickers
\t＃ *Exports* : *${pack.export_count}* exports`
let toruHeader = ""
cards.push({
body: proto.Message.InteractiveMessage.Body.fromObject({ text: toruBody }),
footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: toruFooter }),
header: proto.Message.InteractiveMessage.Header.fromObject({ title: toruHeader, hasMediaAttachment: true, imageMessage: image }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{name: 'cta_copy', buttonParamsJson: JSON.stringify({ display_text: "Copiar", id: "sly", copy_code: `#sly ${pack.url}` })}
]
})});
}

const torBody = `\t\t【  *Stickers  :  Search*  】`
const torFooter = `- Stickers encontrados segun tu búsqueda.`
const torHeader = ""
const msg = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.create({ text: torBody }),
footer: proto.Message.InteractiveMessage.Footer.create({ text: torFooter }),
header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards })})}}}, { quoted: m });

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
await m.react('✅');

} catch (e) {
console.error(e);
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m });
}
};

handler.command = ['slys'];
export default handler;
