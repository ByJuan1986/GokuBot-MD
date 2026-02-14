import fetch from 'node-fetch'
const handler = async (m, { conn, command, args, usedPrefix, text }) => {
if (!global.db.data.chats[m.chat].fInformation && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ información ]* estan desactivados...` }, { quoted: m })
}

const user = global.db.data.users[m.sender] || {};
const name = await conn.getName(m.sender);

  //------------------
  //Comando de canales
  //------------------
if (command === "canal" || command === "canales") {
let canalXd = `𝗔𝗾𝘂𝗶 𝘁𝗲𝗻𝗲𝗶𝘀 𝗹𝗼𝘀 𝗰𝗮𝗻𝗮𝗹𝗲𝘀 𝗱𝗲 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗱𝗲 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 😁

*➤ 🄲🄰🄽🄰🄻🄴🅂 🅆🄷🄰🅃🅂🄰🄿🄿 🄳🄴 🄳🅁🄰🄶🄾🄽 🄱🄰🄻🄻*

• 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗪𝗼𝗿𝗹𝗱
https://whatsapp.com/channel/0029Vb6FZFa9WtC05USddp3e

• 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗩𝗶𝗱𝗲𝗼𝘀 𝗘𝗱𝗶𝘁
https://whatsapp.com/channel/0029Vb7QSaIDZ4LjPAPogb2V

• 𝗖𝘂𝗿𝗶𝗼𝘀𝗶𝗱𝗮𝗱𝗲𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V

• 𝗡𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w

• 𝗡𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗟𝗲𝗴𝗲𝗻𝗱𝘀
https://whatsapp.com/channel/0029VaQkf7T0rGiORXhKqR0R

• 𝗡𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗔𝗻𝗶𝗺𝗲
https://whatsapp.com/channel/0029Va9HjoqICVfqKkhmYD1e

• 𝗕𝗼𝗹𝗮 𝗱𝗲 𝗗𝗿𝗮𝗰 - 𝗙𝗮𝗻𝗱𝘂𝗯 𝗩𝗮𝗹𝗲𝗻𝗰𝗶𝗮
https://whatsapp.com/channel/0029VbB3I3T8kyyEIAyjJe1S

📍  Usa *${usedPrefix + command} telegram* para ver los canales de telegram.`
if (!args[0]) {
  await conn.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/bcqc8j.jpg" }, caption: canalXd }, { quoted: m })
//await conn.sendMessage(m.chat, { text: canalXd }, { quoted: m })
} else if (args[0] === "telegram") {
let canalt = `📍 Nada agregado...`
  return conn.sendMessage(m.chat, { image: { url: "https://files.catbox.moe/bcqc8j.jpg" }, caption: canalt }, { quoted: m })
//conn.reply(m.chat, canalt, m)
}
}

  //-------------------------
  //Comando de grupos.
  //-------------------------
if (command === "grupos" || command === "gruposoficiales") {
let grupos = `Buscas grupos de dragon ball aqui tienes varios grupos elije el tuyo y difruta del mejor anime del mundo.

◜🐉 🅳🆁🅰🅶🅾🅽 🅱🅰🅻🅻 🐉◞

🌍📱🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤 🐉 🎮📱🌍
https://chat.whatsapp.com/L2vpoClRqYC6wsmGC0gFqS

🌍🐉👨‍👩‍👧‍👧 𝔽𝕒𝕞𝕚𝕝𝕚𝕒 𝕊𝕒𝕚𝕪𝕒𝕟 👨‍👩‍👧‍👧🐉🌍
https://chat.whatsapp.com/LmDvJZWd0eQCzhR8lwJ5B4

🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔽𝕠𝕣𝕥𝕟𝕚𝕥𝕖 🐉
https://chat.whatsapp.com/KJcE87Yb8ZP7WDiww8UDkY

🌍🐉🐲 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℝ𝕠𝕝 🐲🐉🌍
https://chat.whatsapp.com/JXVf0iaQhuvE7uQCE8QSym

🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕤𝕡𝕒𝕣𝕜𝕚𝕟𝕘 𝕫𝕖𝕣𝕠 🐉🎮🌍
https://chat.whatsapp.com/EJFl28xgwLeEhIQxriWiuZ

🌍🐉🦹‍♂️ 𝕍𝕚𝕝𝕝𝕒𝕟𝕠𝕤 𝕕𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🐉🦹‍♂️🌍
https://chat.whatsapp.com/LCF5v7bb9dN8lGOrY9OlFR

🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕏𝕖𝕟𝕠𝕧𝕖𝕣𝕤𝕖 🐉
https://chat.whatsapp.com/Hq0VCaXqGaU40P89HmPuni

🌍🐉📹 𝕍𝕚𝕕𝕖𝕠𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 📹🐉🌍
https://chat.whatsapp.com/EaTmnGSAX3pH06Dl7MRzmV

🌍🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕊𝕥𝕚𝕔𝕜𝕖𝕣𝕤🐉🐲🌍
https://chat.whatsapp.com/K1FSWdgwuzTL1z08NVYJNw

🌍🐉🎨 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤 🎨🐉🌍
https://chat.whatsapp.com/LddDN9xDXcg15IuOirylqZ

🌍🐉 𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔾𝔼ℕ𝕂𝕀𝕊ℍ𝕀ℕ 𝕊ℚ𝕌𝔸𝔻ℝ𝔸 🐉🌍
https://chat.whatsapp.com/F3MXKGiRbkACoOEnzFon8Y

🌍📊🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕖𝕟𝕔𝕦𝕖𝕤𝕥𝕒𝕤 🐉📊🌍
https://chat.whatsapp.com/GX6QQjlGEcYAGz823ZUpfI

🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝕓𝕒𝕝𝕝 𝕜𝕒𝕜𝕒𝕣𝕠𝕥 🐉🎮🌍
https://chat.whatsapp.com/JbIgLHQuvue7hItxhng9nN

🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝔻𝕠𝕜𝕜𝕒𝕟 𝕓𝕒𝕥𝕥𝕝𝕖 🐉🎮🌍
https://chat.whatsapp.com/JA6sNw3DQbE7OaBvt7AM2u

🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔹𝕦𝕕𝕠𝕜𝕒𝕚 𝕋𝕖𝕟𝕜𝕒𝕚𝕔𝕙𝕚 🐉 🎮🌍
https://chat.whatsapp.com/KljiSB549Xc7HXXIzVPFat

🌍🐉🐲 𝔽𝕒𝕟𝕤 𝔻𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝕂𝕒𝕚 🐲🐉🌍
https://chat.whatsapp.com/BhXwjZVP0Ae9VU4pHqXATS

🐉🎮𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔽𝕀𝔾𝕋ℍ𝔼ℝℤ🎮🐉
https://chat.whatsapp.com/LUKhODoKfqrC0uVKqMdfu4

𝐔𝐥𝐭𝐢𝐦𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧 *12/02/26*

📍 Para ver otros grupos.
- grupos telegram
- grupos facebook 
- grupos frikis

> *Por ejemplo:* ${usedPrefix + command} facebook`
if (!args[0]) {
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzQ5NTQwMjNf/Goku_whatsApp.jpg" }, caption: grupos }, { quoted: m })
  //conn.sendMessage(m.chat, { text: grupos }, { quoted: m })
} else if (args[0] === "telegram") {
let grupot = ` 𝗧𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗴𝗿𝘂𝗽𝗼𝘀 𝗱𝗲 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺.

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

📍 Para ver otros grupos.
- grupos
- grupos facebook 
- grupos frikis

𝐔𝐥𝐭𝐢𝐦𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧 𝟎𝟓/𝟎𝟓/𝟐𝟓`
  return conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzYzODMxMTFf/Goku_telegram.png" }, caption: grupot }, { quoted: m })
//conn.reply(m.chat, grupot, m)
} else if (args[0] === "facebook") {
let grupof = `*Aqui te pondre los enlaces de Facebook, para ver los enlaces de Telegram y WhatsApp poner:*

🄴🄽🄻🄰🄲🄴🅂 🄳🄴 🄵🄰🄲🄴🄱🄾🄾🄺

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 de Facebook:*

*Fans de dragón ball Z kai castellano de España*
https://www.facebook.com/groups/667472657700009/

*Alíen VS depredador español castellano*
https://www.facebook.com/groups/207704962082606/

*Start trek wars Español castellano*
https://www.facebook.com/groups/213867644714527/

*Los caballeros del zodiaco Español castellano*
https://www.facebook.com/groups/649206827024362/

*El take doblaje castellano de España*
https://www.facebook.com/groups/5608883022528456/ 

📍 Para ver otros grupos.
- grupos
- grupos telegram
- grupos frikis

*Actualizado 10/02/2026.*

> *Por ejemplo:* ${usedPrefix + command} facebook`
  return conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzYzODI4ODhf/Goku_facebook.png" }, caption: grupof }, { quoted: m })
//conn.reply(m.chat, grupof, m)
} else if (args[0] === "frikis") {
let grupofr = `*Buscas una comunidad de anime? aqui tienes los enlaces de la comunidad frikilandia de WhatsApp, si queréis ver los grupos de Facebook y Telegram pon:*

*➤ Comunidad frikilandia*

*亀🇪🇸 𝔽𝕒𝕟𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🇪🇸亀*
https://chat.whatsapp.com/ChQubdKdYav2XpohU8Vs3R

*🌍🐉🐲 𝘽𝙤𝙡𝙖 𝙙𝙚 𝘿𝙧𝙖𝙘 𝙚𝙣 𝙑𝙖𝙡𝙚𝙣𝙘𝙞𝙖 🐲🐉🌍*
https://chat.whatsapp.com/IhWTZM7Wu36AiiXE7mfXak

*🌍🐉🐲 𝗕𝗼𝗹𝗮 𝗱𝗲 𝗗𝗿𝗮𝗰 𝗲𝗻 𝗰𝗮𝘁𝗮𝗹𝗮 🐲🐉🌍*
https://chat.whatsapp.com/Jl57mUSc0Nr0DxdqcB74hI

*🌍🐉🐲 𝗕𝗼𝗹𝗮 𝗱𝗼 𝗱𝗿𝗮𝗴𝗼𝗻 🐲🐉🌍*
https://chat.whatsapp.com/J644aEYo8BXITv6ZOLyYpi

*🌍🐉🐲 𝗗𝗿𝗮𝗴𝗼𝗶 𝗯𝗼𝗹𝗮 🐲🐉🌍*
https://chat.whatsapp.com/LE7qPMXoSMH5Rh40R8aPlE

*🌍😺🐼 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑹𝒂𝒏𝒎𝒂 ½ 🐼😺🌍*
https://chat.whatsapp.com/CRYP316MujxKFYiIHe9ZEx

*🌍🃏♣️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑲𝒂𝒌𝒆𝒈𝒖𝒓𝒖𝒊 ♣️🃏🌍*
https://chat.whatsapp.com/By1GlKQ5yLQAYYxhTR8t9N

*🌍⚔️🗡️ 𝑲𝒊𝒍𝒍 𝒍𝒂 𝒌𝒊𝒍𝒍 🗡️⚔️🌍*
https://chat.whatsapp.com/IIH75WjAuzhBSrd05wFsgV

*🌍🎭🐻 𝑩𝒍𝒆𝒂𝒄𝒉 🐻🎭🌍*
https://chat.whatsapp.com/J0vzttZbKXqKeUZPj0fUYa

*💥💣ARCANE💣💥*
https://chat.whatsapp.com/HHqnpkNB3pRCpekFTzQTne

*🌍🍥🍜 𝑭𝒂𝒏𝒔 𝒅𝒆 𝑵𝒂𝒓𝒖𝒕𝒐 🍜🍥🌍*
https://chat.whatsapp.com/GDbQsR94lxuIhwggOCPtqA

*🌍⚔️🛡️ 𝑭𝒂𝒏𝒔 𝒅𝒆 𝒂𝒕𝒂𝒒𝒖𝒆 𝒂 𝒍𝒐𝒔 𝒕𝒊𝒕𝒂𝒏𝒆𝒔 ⚔️🛡️🌍*
https://chat.whatsapp.com/Bjf43ZD8ZlZBCWE0Yv3jIX

*🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍*
https://chat.whatsapp.com/EGR7UJ4mvjMD0hc0ZoAxwI

*2️⃣🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍2️⃣*
https://chat.whatsapp.com/LZbQBENMeIjEv7HE1DM32v

*3️⃣🌍🤖 𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂 𝒃𝒐𝒕𝒔 - 𝑹𝒆𝒅𝒆𝒔 𝒔𝒐𝒄𝒊𝒂𝒍𝒆𝒔 🤖🌍3️⃣*
https://chat.whatsapp.com/FVHgtUt6URSJ5MjVWas829

*Actualizado 12/02/2026.*

📍 Para ver otros grupos.
- grupos telegram
- grupos facebook 
- grupos

> *Por ejemplo:* ${usedPrefix + command} facebook`
  return conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzYzODM3MTFf/gruposfrikis.jpg" }, caption: grupofr }, { quoted: m })
//conn.reply(m.chat, grupofr, m)
}
}

  //----------------------
  //Comando de soporte
  //----------------------
if (command === "support" || command === "soporte") {
if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Ingrese su reporte para enviarlo a los desarrolladores.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* El comando #menu esta fallando.` }, { quoted: m })
let teks = `·─┄ · ✦ *Reporte : Support* ✦ ·
\t\t⧡ Numero : wa.me/${m.sender.split`@`[0]}
\t\t⧡ Mensaje : ${text}

> 📍  Use el comando *#respuesta* para opciones.`
conn.reply('5493873655135@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
await conn.sendMessage(m.chat, { text: `✓  Comentario enviado a los desarrolladores.` }, { quoted: m })
};


  //-----------------------
  //Comando para enviar numero o alguna cuenta.
  //-----------------------
if (command === "dar") {
let lolXd = `📍  Usa *(${usedPrefix + command} numero)*`
if (!args[0]) {
conn.reply(m.chat, lolXd, m)
} else if (args[0] === "número" || args[0] === "numero") {
let t = `📍 No hay numero...`
  conn.reply(m.chat, t, m)
}
}

// noticias dragon ball
if (command === "noticiasdragonball") {
let tuto = `Texto por aqui`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDc1MzI5ODFf/Noticias%20dragon%20ball.mp4" }, caption: tuto }, { quoted: m })
}
  
// video tutorial curiosidades dragon ball
if (command === "curiosidadesdragonball") {
let tuto = `*Buscas estar informado de las curiosidades de dragón ball? En el vídeo de arriba te dejo lo que puedes encontrar.. Un canal echo por un fan para otros fans de dragón ball...*

*Pulsen a seguir para estar informados de las novedades 👇👇*
*https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V*

*Esto a sido posible gracias a By Juan1986*`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDc1MzI5ODJf/Curiosidades%20dragon%20ball.mp4" }, caption: tuto }, { quoted: m })
}

// video tutorial añadir usuarios
if (command === "añadirusuario") {
let tuto = `*Tus amigos le gusta dragón ball, WhatsApp tiene  de la opción, puedes añadir usuarios de desde tu agenda.. Arriba te dejo el video tutorial y te explicó como se hace, funciona en todos los grupos de esta comunidad*

*Esto a sido posible gracias a By Juan1986*`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDc1MzI5ODBf/A%C3%B1adirUsuariosAlGrupo.mp4" }, caption: tuto }, { quoted: m })
}

  
  //----------------------
  //Prueba de video.
  //----------------------
  if (command === "appstickers" || command === "appsticker") { 
  let ssXd = `*¿Te gustaría descargar todos los stickers de dragón ball y de otros animes? En este video tutorial te explicamos de una app llamada Sticker ly, aparte de los stickers que mostramos en el video hay muchos mas... descarga la app de tu tienda y danos a seguir nos ayudaras a seguir subiendo mas stickers*

_*PlayStore*_
*https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android*

_*AppStore*_
*https://apps.apple.com/es/app/sticker-ly-sticker-maker/id1458740001*

*_Descargate la app desde mediafire_ https://www.mediafire.com/file/ioed5yg1601knnd/Sticker.ly+-+Sticker+Maker.apk/file*

*Nota: esta app que subimos a MediaFire, es de la tienda oficial, para poder descargarla pon lo siguiente:*

*.mediafire https://www.mediafire.com/file/ioed5yg1601knnd/Sticker.ly+-+Sticker+Maker.apk/file*

*_Para mas información consulte con el administrador By Juan1986_*

*Esto a sido posible By Juan1986*`
    await //conn.sendMessage(m.chat, { document: { url: "https://od.lk/s/NTZfMzUzODMxODhf/Tutorial.mp4" }, fileName: `tutorial-appstickers.mp4`, mimetype: 'video/mp4', caption: `Video Tutorial :3\n> ${textbot}` }, { quoted: m } )
    conn.sendMessage(m.chat, { video: { url: 'https://od.lk/s/NTZfMzUzODMxODhf/Tutorial.mp4' }, caption: ssXd }, { quoted: m }) //el url esta dentro de este codigo.
  }

};

handler.command = ["noticiasdragonball", "curiosidadesdragonball", "añadirusuario", 'appstickers', 'appsticker', 'canal', 'canales', 'dar', 'grupos', 'gruposoficiales', 'support', 'soporte'];

export default handler;
  
