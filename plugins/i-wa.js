import fetch from 'node-fetch'
const handler = async (m, { conn, command, args, usedPrefix, text }) => {
if (!global.db.data.chats[m.chat].fInformation && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ información ]* estan desactivados...` }, { quoted: m })
}

const user = global.db.data.users[m.sender] || {};
const name = await conn.getName(m.sender);

if (command === "canal" || command === "channel") {
let canalXd = `📍  No hay canal en este plugin.`
await conn.sendMessage(m.chat, { text: infoXd }, { quoted: m })
}

if (command === "grupos" || command === "gruposoficiales") {
let grupos = `📍  No se han agregado grupos todavia.`
await conn.sendMessage(m.chat, { text: grupos }, { quoted: m })
}

if (command === "support" || command === "soporte") {
if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Ingrese su reporte para enviarlo a los desarrolladores.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* El comando #menu esta fallando.` }, { quoted: m })
let teks = `·─┄ · ✦ *Reporte : Support* ✦ ·
\t\t⧡ Numero : wa.me/${m.sender.split`@`[0]}
\t\t⧡ Mensaje : ${text}

> 📍  Use el comando *#respuesta* para opciones.`
conn.reply('5493873655135@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
await conn.sendMessage(m.chat, { text: `✓  Comentario enviado a los desarrolladores.` }, { quoted: m })
};

};

handler.command = ['canal', 'channel', 'grupos', 'gruposoficiales', 'support', 'soporte'];

export default handler;
  
