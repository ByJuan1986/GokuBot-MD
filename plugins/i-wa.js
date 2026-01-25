import fetch from 'node-fetch'
const handler = async (m, { conn, command, args, usedPrefix, text }) => {
if (!global.db.data.chats[m.chat].fInformation && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ información ]* estan desactivados...` }, { quoted: m })
}

const user = global.db.data.users[m.sender] || {};
const name = await conn.getName(m.sender);

if (command === "canal" || command === "canales") {
let canalXd = `𝗔𝗾𝘂𝗶 𝘁𝗲𝗻𝗲𝗶𝘀 𝗹𝗼𝘀 𝗰𝗮𝗻𝗮𝗹𝗲𝘀 𝗱𝗲 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗱𝗲 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 😁

*➤ 🄲🄰🄽🄰🄻🄴🅂 🅆🄷🄰🅃🅂🄰🄿🄿 🄳🄴 🄳🅁🄰🄶🄾🄽 🄱🄰🄻🄻*

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗪𝗼𝗿𝗹𝗱
https://whatsapp.com/channel/0029Vb6FZFa9WtC05USddp3e

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗩𝗶𝗱𝗲𝗼𝘀 𝗘𝗱𝗶𝘁
https://whatsapp.com/channel/0029Vb7QSaIDZ4LjPAPogb2V

𝗖𝘂𝗿𝗶𝗼𝘀𝗶𝗱𝗮𝗱𝗲𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V

𝗡𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w

𝗡𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗟𝗲𝗴𝗲𝗻𝗱𝘀
https://whatsapp.com/channel/0029VaQkf7T0rGiORXhKqR0R

📍  Usa *${usedPrefix + command} telegram* para ver los canales de telegram.`
if (!args[0]) {
await conn.sendMessage(m.chat, { text: canalXd }, { quoted: m })
} else if (args[0] === "telegram") {
let canalt = `📍 Nada agregado...`
conn.reply(m.chat, canalt, m)
}
}

if (command === "grupos" || command === "gruposoficiales") {
let grupos = `📍  No se han agregado grupos todavia.

📍  Usa categorias para ver otros grupos.
- telegram
- facebook 
- frikis

> *Por ejemplo:* ${usedPrefix + command} facebook`
if (!args[0]) {
  conn.sendMessage(m.chat, { text: grupos }, { quoted: m })
} else if (args[0] === "telegram") {
let grupot = `📍 Nada agregado...
𝗧𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗴𝗿𝘂𝗽𝗼𝘀 𝗱𝗲 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺.

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗰𝗮𝘀𝘁𝗲𝗹𝗹𝗮𝗻𝗼
- https://t.me/+KtSUCeZ7-0Y3ZWI0

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗲𝗻 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽
- https://miniurl.cl/DragonBallEnWhatsApp

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗚𝗮𝗹𝗹𝗲𝗴𝗼 
- https://miniurl.cl/DragonBallGallego

𝗘𝗻𝗰𝘂𝗲𝘀𝘁𝗮𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 
- https://t.me/+AhjEkyliMt8xOTVk

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗰𝗮𝘁𝗮𝗹𝗮𝗻
- https://miniurl.cl/GrupBolaDeDracCatala

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝘃𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼
- https://t.me/boladedracvalencia

𝗙𝗮𝗺𝗶𝗹𝗶𝗮 𝗦𝗮𝗶𝘆𝗮𝗻𝘀
- https://t.me/FamiliaSaiyan

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗟𝗲𝗴𝗲𝗻𝗱𝘀
- https://t.me/+yfN-w0E3V0kxNGQ0

𝗔𝗻𝗶𝗺𝗲 𝗲𝗻 𝗰𝗮𝘁𝗮𝗹𝗮𝗻
- https://bit.ly/AnimeEnCatala

 🇪🇸 𝗔𝗹𝗶𝗲𝗻 𝗩𝗦 𝗗𝗲𝗽𝗿𝗲𝗱𝗮𝗱𝗼𝗿 🇪🇸 
- https://t.me/ComunidadAlienVsPredator

 🇪🇸 𝗦𝘁𝗮𝗿 𝗧𝗿𝗲𝗸 𝗪𝗮𝗿𝘀 🇪🇸 
- https://t.me/ComunidadStarWarsWars

🇪🇸 𝗗𝗖 𝘆 𝗠𝗮𝗿𝘃𝗲𝗹 🇪🇸
- https://t.me/ComunidadDCMarvel

𝐔𝐥𝐭𝐢𝐦𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧 𝟎𝟓/𝟎𝟓/𝟐𝟓
`
conn.reply(m.chat, grupot, m)
} else if (args[0] === "facebook") {
let grupof = `📍 Nada agregado...`
conn.reply(m.chat, grupof, m)
} else if (args[0] === "frikis") {
let grupofr = `📍 Nada agregado...`
conn.reply(m.chat, grupofr, m)
}
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

if (command === "test") {
let xd = `Unete al grupo con estos enlaces:

> Grupo 1
https://ejemplo.com

> Grupo 2
https://ejemplo.com

📍 Usa *${usedPrefix + command} telegram* para ver los grupos de telegram.`
if (!args[0]) {
conn.reply(m.chat, xd, m)
} else if (args[0] === "telegram") {
let t = `Grupo de telegram:

https://ejemplo.com`
  conn.reply(m.chat, t, m)
}
}

  
};

handler.command = ['canal', 'canales', 'test', 'grupos', 'gruposoficiales', 'support', 'soporte'];

export default handler;
  
