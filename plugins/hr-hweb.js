import fetch from 'node-fetch';
let handler = async(m, { conn, args, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fAjustes && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ herramientas ]* estan desactivados...` }, { quoted: m })
}

if (!args[0]) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione un enlace de HTML para sacar su codigo.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* https://web_ejemplo.com` }, { quoted: m });
m.react('⏰');
let api = `https://delirius-apiofc.vercel.app/tools/htmlextract?url=${args[0]}`;
let titan = await fetch(api);
let json = await titan.json();
let data = json.html;

const thumb = Buffer.from(await (await fetch(`${global.toruImg}`)).arrayBuffer());
let infoHtml = `· ┄ · ⊸ 𔓕 *Codigo  :  HTML*
> Se ha extraido la pagina web con exito.

⊹ Pagina : ${args[0]}

\`\`\`${data}\`\`\``
//let paginaHtml = `${data}`
m.react('✅');
await conn.sendMessage(m.chat, { text: infoHtml.trim(), contextInfo: { externalAdReply: { 
title: botname, 
body: textbot, 
thumbnail: thumb, 
sourceUrl: null, 
mediaType: 1, renderLargerThumbnail: false }}}, { quoted: m });
};

handler.command = ['htmlweb', 'hweb'];

export default handler;
                          
