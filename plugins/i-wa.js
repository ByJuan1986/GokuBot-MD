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

• 𝗠𝗲𝗺𝗲𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://whatsapp.com/channel/0029Va5xYqaKbYMS2dzwvC2D

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
let grupos = `𝗕𝘂𝘀𝗰𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹 𝗮𝗾𝘂𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝘃𝗮𝗿𝗶𝗼𝘀 𝗴𝗿𝘂𝗽𝗼𝘀 𝗲𝗹𝗶𝗷𝗲 𝗲𝗹 𝘁𝘂𝘆𝗼 𝘆 𝗱𝗶𝗳𝗿𝘂𝘁𝗮 𝗱𝗲𝗹 𝗺𝗲𝗷𝗼𝗿 𝗮𝗻𝗶𝗺𝗲 𝗱𝗲𝗹 𝗺𝘂𝗻𝗱𝗼.

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

📍 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀.
• .grupos telegram
• .grupos facebook 
• .grupos frikis

> *Por ejemplo:* ${usedPrefix + command} facebook

𝐔𝐥𝐭𝐢𝐦𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧 *12/02/26*
`
if (!args[0]) {
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzQ5NTQwMjNf/Goku_whatsApp.jpg" }, caption: grupos }, { quoted: m })
  //conn.sendMessage(m.chat, { text: grupos }, { quoted: m })
} else if (args[0] === "telegram") {
let grupot = `¿𝗕𝘂𝘀𝗰𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹 𝗲𝗻 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺?

🆃︎🅾︎🅳︎🅾︎🆂︎ 🅻︎🅾︎🆂︎ 🅶︎🆁︎🆄︎🅿︎🅾︎🆂︎ 

• 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗲𝗻 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://miniurl.cl/Dragonballgrupo

• 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗲𝗻 𝗰𝗮𝘁𝗮𝗹𝗮𝗻
https://miniurl.cl/GrupBolaDeDracCatala

• 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗚𝗮𝗹𝗹𝗲𝗴𝗼 
https://miniurl.cl/DragonBallGallego

• 𝗘𝗻𝗰𝘂𝗲𝘀𝘁𝗮𝘀 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹
https://miniurl.cl/DragonballEncuestas

• 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗟𝗲𝗴𝗲𝗻𝗱𝘀 
https://miniurl.cl/DragonBallLegens

• 𝗚𝗲𝗻𝗸𝗶𝘀𝗵𝗶𝗻 𝗦𝗾𝘂𝗮𝗱𝗿𝗮
https://miniurl.cl/DragonballGenkishinSquadra

• 𝗗𝗕𝗖𝗣𝗿𝗼𝗷𝗲𝗰𝘁𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹𝗚𝗿𝘂𝗽𝗼
https://miniurl.cl/DBCProjectOfficialGrupo

• 𝗔𝗻𝗶𝗺𝗲 𝗰𝗮𝘁𝗮𝗹𝗮𝗻 
https://miniurl.cl/AnimeCatalan

• 𝗙𝗮𝗻𝘀 𝗔𝗹𝗶𝗲𝗻 𝗩𝗦 𝗽𝗿𝗲𝗱𝗮𝘁𝗼𝗿 🇪🇸
https://miniurl.cl/GrupoAlienvspredatores

• 𝗙𝗮𝗻𝘀 𝗗𝗖 𝗬 𝗠𝗮𝗿𝘃𝗲𝗹 🇪🇸
https://miniurl.cl/GrupoDcMarvel

• 𝗙𝗮𝗻𝘀 𝗦𝘁𝗮𝗿 𝗧𝗿𝗲𝗸 𝗪𝗮𝗿𝘀  🇪🇸 
https://miniurl.cl/GrupoStarTrek

• 𝗡𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗔𝗻𝗶𝗺𝗲
https://miniurl.cl/NoticiasAnime

• 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝘃𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼
https://t.me/boladedracvalencia

• 𝗙𝗮𝗺𝗶𝗹𝗶𝗮 𝗦𝗮𝗶𝘆𝗮𝗻𝘀
https://t.me/FamiliaSaiyan 

📍 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀.
• .grupos
• .grupos facebook 
• .grupos frikis

> *Por ejemplo:* ${usedPrefix + command} facebook

𝐔𝐥𝐭𝐢𝐦𝐚 𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐜𝐢𝐨𝐧 𝟐𝟒/𝟎𝟐/𝟐𝟔`
  return conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzYzODMxMTFf/Goku_telegram.png" }, caption: grupot }, { quoted: m })
//conn.reply(m.chat, grupot, m)
} else if (args[0] === "facebook") {
let grupof = `𝗔𝗾𝘂𝗶 𝘁𝗲 𝗽𝗼𝗻𝗱𝗿𝗲 𝗹𝗼𝘀 𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗱𝗲 𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝗲𝘀 𝗱𝗲 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸, 𝗱𝗲𝗻𝗹𝗲 𝗮 𝘀𝗲𝗴𝘂𝗶𝗿...

➤🄴🄽🄻🄰🄲🄴🅂 🄳🄴 🄵🄰🄲🄴🄱🄾🄾🄺

• 𝗙𝗮𝗻𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹 𝗭 𝗸𝗮𝗶 🇪🇸
https://www.facebook.com/groups/667472657700009/

• 𝗔𝗹𝗶𝗲𝗻 𝗩𝗦 𝗱𝗲𝗽𝗿𝗲𝗱𝗮𝗱𝗼𝗿 🇪🇸
https://www.facebook.com/groups/207704962082606/

• 𝗦𝘁𝗮𝗿𝘁 𝘁𝗿𝗲𝗸 𝘄𝗮𝗿𝘀 🇪🇸
https://www.facebook.com/groups/213867644714527/

• 𝗟𝗼𝘀 𝗰𝗮𝗯𝗮𝗹𝗹𝗲𝗿𝗼𝘀 𝗱𝗲𝗹 𝘇𝗼𝗱𝗶𝗮𝗰𝗼 🇪🇸
https://www.facebook.com/groups/649206827024362/

• 𝗘𝗹 𝘁𝗮𝗸𝗲 𝗱𝗼𝗯𝗹𝗮𝗷𝗲 𝗰𝗮𝘀𝘁𝗲𝗹𝗹𝗮𝗻𝗼 🇪🇸
https://www.facebook.com/groups/5608883022528456/ 

📍 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀.
• .gupos
• .grupos telegram
• .grupos frikis

> *Por ejemplo:* ${usedPrefix + command} facebook

*Actualizado 10/02/2026.*
`
  return conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzYzODI4ODhf/Goku_facebook.png" }, caption: grupof }, { quoted: m })
//conn.reply(m.chat, grupof, m)
} else if (args[0] === "frikis") {
let grupofr = `𝗦𝗶 𝗯𝘂𝘀𝗰𝗮𝘀 𝘂𝗻𝗮 𝗰𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗱𝗲 𝗮𝗻𝗶𝗺𝗲 𝗮𝗾𝘂𝗶 𝘁𝗲 𝗱𝗲𝗷𝗼 𝗹𝗼𝘀 𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗱𝗲 𝗹𝗮 𝗰𝗼𝗺𝘂𝗻𝗶𝗱𝗮𝗱 𝗳𝗿𝗶𝗸𝗶𝗹𝗮𝗻𝗱𝗶𝗮 𝗱𝗲 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽.

➤ 🄲🅾🄼🆄🄽🅸🄳🅰🄳 🄵🆁🄸🅺🄸🅻🄰🅽🄳🅸🄰

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

📍 𝗣𝗮𝗿𝗮 𝘃𝗲𝗿 𝗺𝗮𝘀 𝗴𝗿𝘂𝗽𝗼𝘀.
• .grupos telegram
• .grupos facebook 
• .grupos

> *Por ejemplo:* ${usedPrefix + command} facebook

*Actualizado 12/02/2026.*
`
  return conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfMzYzODM3MTFf/gruposfrikis.jpg" }, caption: grupofr }, { quoted: m })
//conn.reply(m.chat, grupofr, m)
}
}

// menú audios
if (command === "menuaudio" || command === "menuaudios") {
let random = `*╔══════════════*
*║* \`Menu audios\` 
*║*
*║* • \`𝗩𝗼𝗰𝗲𝘀 𝗗𝗕𝗭\`🇪🇸
*║* 🔊 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀
*║* 🔊 𝗕𝘂𝗲𝗻𝗮𝘀 𝗻𝗼𝗰𝗵𝗲𝘀
*║* 🔊 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗚𝗼𝗸𝘂𝗕𝗼𝘁
*║* 🔊 𝗙𝗶𝗻𝗮𝗹 𝗳𝗹𝗮𝘀𝗵
*║* 🔊 𝗸𝗮𝗺𝗲𝗵𝗮𝗮
*║* 🔊 𝗕𝗮𝗯𝗮 𝗹𝗮 𝗰𝗮𝗻𝘀𝗶𝗻𝗮
*║* 🔊 𝗡𝗼 𝘀𝗼𝘆 𝘂𝗻 𝗵𝗲𝗿𝗼𝗲 𝗱𝗲 𝗹𝗮 𝗷𝘂𝘀𝘁𝗶𝗰𝗶𝗮
*║* 🔊 𝗚𝗼𝗿𝗱𝗶𝘁𝗼
*║* 🔊 𝗟𝗮 𝗰𝗮𝗹𝘃𝗶𝗰𝗶𝗲
*║* 🔊 𝗖𝗮𝗹𝘃𝗶𝘁𝗼
*║*
*║* • \`𝗩𝗼𝗰𝗲𝘀 𝗗𝗕𝗭\`🇲🇽
*║* 🔊 𝗟𝗲𝘃𝗮𝗻𝘁𝗮𝘁𝗲
*║* 🔊 𝗬𝗼 𝘀𝘂𝗽𝗲𝗿𝗮𝗿𝗲
*║* 🔊 𝗚𝗼𝗸𝘂 𝗲𝘁𝗮 𝘃𝗮𝗶𝗻𝗮 𝗲𝘀 𝘀𝗲𝗿𝗶𝗮
*║* 🔊 𝗖𝗮𝗿𝗶𝘁𝗮 𝗲𝗺𝗽𝗮𝗽𝗮𝗱𝗮
*║* 🔊 𝗖𝗲𝗹𝗹 𝘁𝗶𝗲𝗻𝗲 𝗺𝗶𝗲𝗱𝗼
*║* 🔊 𝗜𝗻𝘀𝗲𝗰𝘁𝗼
*║* 🔊 𝗠𝗮𝗹𝗱𝗶𝗰𝗶𝗼𝗻
*║* 🔊 𝗟𝗮 𝗳𝗲 𝗱𝗲 𝗰𝗿𝗶𝘀𝘁𝗼 𝗱𝗲 𝗿𝗲𝘆
*║* 🔊 𝗠𝗮𝗹𝘁𝗶𝘁𝗼
*║* 🔊 𝗠𝗮𝗰𝗵𝗲𝘁𝗲
*║* 🔊 𝗦𝗲 𝘃𝗼𝗹𝘃𝗶𝗼 𝗰𝗮𝗻𝗼𝗻
*║* 🔊 𝗘𝗿𝗲𝘀 𝗳𝘂𝗲𝗿𝘁𝗲
*║* 🔊 𝗬𝗼 𝘀𝗼𝘆 𝗲𝗹 𝗺𝗮𝘀 𝗽𝗲𝗿𝗿𝗼𝗻
*║* 🔊 𝗤𝘂𝗲 𝗹𝗶𝗻𝗱𝗮 𝗾𝘂𝗲 𝗲𝘀𝘁𝗮𝘀
*║* 🔊 𝗩𝗶𝗲𝗷𝗼 𝘀𝗮𝗯𝗿𝗼𝘀𝗼
*║* 🔊 𝗢 𝗺𝘆 𝗴𝗼𝗼𝗱
*║* 🔊 𝗘𝘀𝗽𝗲𝗿𝗮 𝗩𝗲𝗴𝘂𝗲𝘁𝗮
*║* 🔊 𝗡𝗮𝗽𝗮 𝘀𝘂 𝗻𝗶𝘃𝗲𝗹
*║* 🔊 𝗖𝗮𝗱𝗮 𝗱𝗶𝗮 𝗺𝗮𝘀 𝗯𝗮𝘀𝗮𝗱𝗼
*║* 🔊 𝗬 𝗮 𝗺𝗶 𝗾𝘂𝗲
*║* 🔊 𝗬 𝗲𝘀𝘁𝗲 𝗾𝘂𝗶𝗲𝗻 𝗽𝗼𝗿𝗼𝗻𝗴𝗮 𝗲𝘀
*║* 🔊 𝗘𝗿𝗲𝘀 𝘂𝗻 𝗰𝗼𝗯𝗮𝗿𝗱𝗲
*║* 🔊 𝗬𝗮 𝗯𝗮𝘀𝘁𝗮
*║* 🔊 𝗠𝗶 𝗱𝗶𝗻𝗲𝗿𝗼
*║* 🔊 𝗟𝗼𝘀 𝘁𝗲𝗿𝗿𝗲𝗻𝗼𝘀 𝗱𝗲 𝗹𝗮 𝗮𝗯𝘂𝗲𝗹𝗶𝘁𝗮
*║* 🔊 𝗠𝗶 𝗻𝗶𝗻𝗮 𝗯𝗼𝗻𝗶𝘁𝗮
*║* 🔊 𝗧𝗮 𝗯𝗶𝗲𝗻
*║* 🔊 𝗠𝗼𝗻𝗱𝗼𝗻𝗴𝗼
*║* 🔊 𝗘𝗿𝗲𝘀 𝘂𝗻 𝘀𝗲𝗿 𝗶𝗻𝗰𝗿𝗲𝗶𝗯𝗹𝗲
*║* 🔊 𝗽𝗼𝗿 𝗳𝗶𝗻 𝗮𝗽𝗮𝗿𝗲𝗰𝗶𝘀𝘁𝗲
*║* 🔊 𝗠𝗲 𝗲𝘀𝘁𝗮𝗻 𝗺𝗶𝗿𝗮𝗻𝗱𝗼
*║* 🔊 𝗘𝘀𝘁𝗼 𝘃𝗮 𝘀𝗲𝗿 𝗲𝗽𝗶𝗰𝗼
*║* 🔊 𝘆 𝗲𝘀𝘁𝗲 𝗾𝘂𝗶𝗲𝗻 𝗽𝗼𝗿𝗼𝗻𝗴𝗮 𝗲𝘀
*║* 🔊 𝗦𝗮𝗯𝗲𝘀 𝗹𝗼𝗰𝗼 𝗲𝘀𝘁𝗮𝘀 𝗰𝗲𝗹𝗼𝘀𝗼
*║* 🔊 𝗣𝗼𝗿𝗾𝘂𝗲 𝗻𝗼 𝗺𝗲 𝗹𝗮 𝗰𝗵𝘂𝗽𝗮𝘀
*║* 🔊 𝗞𝗮𝗶𝗼𝗸𝗲𝗻
*║*
*║* • \`𝗔𝘂𝗱𝗶𝗼𝘀\`🇲🇽
*║* 🔊 𝗟𝗼𝘀 𝗽𝗶𝗻𝗴𝘂𝗶𝗻𝗼𝘀
*║* 🔊 𝗠𝗮𝗻𝗴𝗲𝗸𝘆𝗼
*║* 🔊 𝗠𝗮𝗿𝘆 𝗝𝗮𝗻𝗲
*║* 🔊 𝗛𝗮𝘆 𝗮𝗹𝗴𝘂𝗶𝗲𝗻 𝗲𝗻 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼
*║* 🔊 𝗤𝘂𝗲 𝗯𝗲𝗻𝗱𝗶𝗰𝗶𝗼𝗻
*║* 🔊 𝗤𝘂𝗲 𝗰𝗮𝗹𝗼𝗿
*║* 🔊 𝗤𝘂𝗲 𝗿𝗶𝗰𝗼
*║* 🔊 𝗦𝗶 𝗹𝗮 𝘃𝗲𝗿𝗱𝗮𝗱 𝗲𝘀 𝗾𝘂𝗲 𝘀𝗶
*║* 🔊 𝗧𝗮 𝗯𝗶𝗲𝗻
*║*
*║* • \`𝗠𝗲𝗹𝗼𝗱𝗶𝗮𝘀\`
*║* 🔊 𝗖𝗮𝗻𝗰𝗶𝗼𝗻 𝗚𝗼𝗸𝘂𝗕𝗼𝘁
*║* 🔊 𝗔𝗹𝗮𝗿𝗺𝗮
*║* 🔊 𝗦𝗶𝗹𝗯𝗮𝗻𝗱𝗼
*║* 🔊 𝗗𝗷 𝗱𝗿𝗮𝗴𝗼𝗻
*║* 🔊 𝗙𝗲𝗹𝗶𝗰𝗶𝗱𝗮𝗱𝗲𝘀 𝗯𝗿𝗼
*║* 🔊 𝗝𝘂𝗺𝗮𝗻𝗷𝗶
*║* 🔊 𝗟𝗼𝗯𝗼
*║* 🔊 𝗣𝘀𝗶𝗰𝗼𝘀𝗶𝘀
*║* 🔊 𝗟𝗮 𝗱𝗲𝗽𝘂𝗿𝗮𝗰𝗶𝗼𝗻
*║* 🔊 𝗦𝗼𝘆 𝘂𝗻 𝗻𝗼𝗺𝗼
*║* 🔊 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗼𝗿
*║* 🔊 𝗦𝗲𝘅𝘂𝗮𝗹 
*║* 🔊 𝗺𝗺𝗺𝗺
*║* 🔊 𝗡𝗶𝗰𝗼
*║* 🔊 𝗠𝗶𝗿𝗮𝗿 𝗽𝗮𝗿𝗮 𝗮𝗱𝗲𝗹𝗮𝗻𝘁𝗲
*║* 🔊 𝗘𝘀𝘁𝗮 𝗹𝗲𝘆𝗲𝗻𝗱𝗼 𝗹𝗮 𝗯𝗶𝗯𝗹𝗶𝗮
*║* 🔊 𝗦𝗲𝘅𝗼
*║* 🔊 𝗢𝘆𝗲 𝗹𝗮 𝗴𝗮𝗹𝗹𝗶𝗻𝗮
*║* 🔊 𝗖𝗮𝗿𝗮𝗺𝗲𝗹𝗼
*║* 🔊 𝗦𝗵𝘂𝗻𝗸𝗮𝗻𝗶𝗱𝗼
*║* 🔊 𝗛𝗲𝗻𝘁𝗮𝗶
*║*
*║* • \`𝗦𝗼𝗻𝗶𝗱𝗼𝘀\`🇪🇸 
*║* 🔊 𝗔𝗯𝗼𝗴𝗮𝗱𝗼
*║* 🔊 𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗰𝗮𝘁𝗲 𝗽𝗼𝗿 𝗰𝗲𝗿𝗼
*║* 🔊 𝗖𝗼𝗯𝗮𝗿𝗱𝗲
*║* 🔊 𝗖𝗮𝗻𝘀𝗶𝗻𝗼
*║* 🔊 𝗘𝗿𝗲𝘀 𝗵𝗶𝗷𝗼 𝗱𝗲 𝗺𝗶𝗹 𝗽𝗮𝗱𝗿𝗲𝘀
*║* 🔊 𝗕𝗼𝗰𝗮𝗱𝗶𝗹𝗹𝗼
*║* 🔊 𝗝𝗼 𝘁𝗶𝗼
*║* 🔊 𝗠𝗼𝘀𝗾𝘂𝗶
*║* 🔊 𝗥𝗼𝗱𝗮𝗿𝗮𝗻
*║* 🔊 𝗟𝗮 𝗰𝗮𝗯𝗿𝗮
*║* 🔊 𝗟𝗮 𝗽𝘂𝗿𝗴𝗮
*║* 🔊 𝗟𝗮 𝘁𝗲𝗰𝗻𝗶𝗰𝗮 𝗱𝗲 𝗣𝗶𝘁𝗲𝗿 𝗽𝗮𝗻
*║* 🔊 𝗟𝗼𝘀 𝗱𝗶𝗼𝘀𝗲𝘀 𝗱𝗲𝗹 𝗢𝗹𝗶𝗺𝗽𝗼
*║* 🔊 𝗟𝗶𝗮𝗻𝗱𝗼 𝗽𝗼𝗿𝗿𝗼𝘀
*║* 🔊 𝗦𝗮𝘆𝗼𝗻𝗮𝗿𝗮 𝗯𝗮𝗯𝘆
*║* 🔊 𝗧𝗼𝗱𝗼 𝗲𝗹 𝗼𝗹𝗶𝗺𝗽𝗼 𝗰𝗮𝗲𝗿𝗮
*║* 🔊 𝗬𝗼 𝘀𝗼𝘆 𝘁𝘂 𝗽𝗮𝗱𝗿𝗲 
*║*
*║* • \`𝗝𝗼𝘀𝗲 𝗠𝗼𝘁𝗮\`🇪🇸
*║* 🔊 𝗘𝗹 𝗰𝗮𝗻𝘀𝗶𝗻𝗼
*║* 🔊 𝗘𝗹 𝘁𝗶𝗼 𝗱𝗲 𝗹𝗮 𝘃𝗮𝗿𝗮
*║* 🔊 𝗘𝗿𝗲𝘀 𝗺𝘂𝘆 𝘁𝗼𝗻𝘁𝗼
*║* 🔊 𝗛𝗼𝘆 𝗻𝗼...
*║* 🔊 𝗘𝘆 𝗷𝘂𝗯𝗶𝗹𝗮𝗱𝗼
*║* 
*║* 🔊 𝗡𝗼 𝗰𝘂𝗲𝗻𝘁𝗲𝘀 𝗻𝗮
*║* 🔊 𝗘𝘀𝘁𝗼 𝗲𝘀 𝗿𝘂𝘀𝘁𝗶𝗰𝗼
*║* 🔊 𝗡𝗮 𝗱𝗲 𝗻𝗮
*║* 🔊 𝗦𝗼𝘆 𝘀𝘂𝗽𝗲𝗿𝘀𝘁𝗮𝗿
*║* 
*║* 🔊 𝗕𝗲𝗿𝗲𝗻𝗴𝗮𝗿𝗶𝗼 𝗲𝗹 𝘁𝗿𝗮𝗰𝘁𝗼𝗿𝗶𝘀𝘁𝗮
*║* 
*║* 🔊 𝗠𝗲 𝗰𝗮𝗴𝗼 𝗲𝗻 𝗲𝗹 𝗮𝗺𝗼𝗿
*║* 🔊 𝗡𝗼 𝗾𝘂𝗶𝗲𝗿𝗼 𝗽𝗲𝗻𝘀𝗮𝗿 𝗲𝗻 𝗲𝗹 𝗮𝗺𝗼𝗿
*║* 
*║* • \`𝗔𝘂𝗱𝗶𝗼𝘀\`🇪🇸
*║* 🔊 𝗘𝘀𝗽𝗮𝗿𝘁𝗮𝗰𝗼
*║* 🔊 𝗠𝗮𝗻𝗱𝗮𝗻𝗴𝗮 𝘃𝗶𝗹𝗹𝗮𝗻𝗰𝗶𝗰𝗼
*║* 🔊 𝗠𝗲𝗿𝗲𝗻𝗴𝘂𝗲
*║* 🔊 𝗣𝗼𝗿𝗾𝘂𝗲 𝘁𝗼𝗰𝗮𝘀
*║* 🔊 𝗤𝘂𝗲 𝘃𝗶𝗻𝗲 
*║* 🔊 𝗦𝗮𝗹𝗮𝗺𝗶
*║* 🔊 𝗧𝗲 𝘃𝗼𝘆 𝗮 𝗽𝗼𝗻𝗲𝗿 𝗳𝗶𝗻𝗮
*║* 🔊 𝗤𝘂𝗲 𝗰𝘂𝗹𝗶𝘁𝗼 𝘁𝗲𝗻𝗴𝗼
*║* 🔊 𝗨𝗻 𝗰𝗮𝗿𝗮𝗰𝗼𝗹
*║* 🔊 𝗥𝗶𝘀𝗮 𝗡𝗲𝗹𝘀𝗼𝗻
*╚══════════════*

𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNDc5NzcxNTNf/Menu%20audios.jpg" }, caption: random }, { quoted: m })
}


// Reglas
if (command === "reglas" || command === "normas") {
let random = ` *\`S𝚒é𝚗𝚝𝚎𝚝𝚎 𝚌𝚘𝚖𝚘 𝚎𝚗 𝚜𝚞 𝚌𝚊𝚜𝚊, 𝚙𝚎𝚛𝚘 𝚊𝚗𝚝𝚎𝚜 𝚕𝚎𝚎 𝚊𝚋𝚊𝚓𝚘 𝚕𝚊𝚜 𝚛𝚎𝚐𝚕𝚊𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 y evita problemas...\`* 👇

📢⚠️ \`𝑹𝑬𝑮𝑳𝑨𝑺\` ⚠️📢

* *1. ⚠️ Mantener un respeto a todos/as de este grupo.*
* *2. ⚠️Si te insultaron o te sentó mal lo que te dijeron, coméntalo al administrador del grupo e intentaremos buscar una solución...*
* *3. ✅ Pueden compartir imágenes, stickers, vídeos de vuestro personajes de dragón ball.*
* *4. ✅ Si desea presentarse en el grupo es opcional.*
* *5. ✅ Se puede hablar de otros temas no relacionados con dragón ball.*
* *6. ✅ Está permitido los enlaces de Facebook, Youtube y Twitter.*
* *7. ⛔ No se puede hablar de política ni de religión, para evitar problemas...*
* *8. ⛔ Prohibido discriminar cualquier idioma, puedes dar tu opinión pero no insultes ni dañes a ese idioma.*
* *9. ⛔ Prohibido hacer stickers en el grupo que no está habilitado para ello...*
* *10. ⛔ Prohibido hablar con el bot, no está permitido y te bloqueará.*
* *11 ⛔ No se permiten enlaces de otros grupos de WhatsApp ni de Telegram, si alguien lo pone el bot lo borrara y lo echara del grupo*
* *12. ⛔ Cualquier clase de insulto o falta al respecto está prohibido.*
* *13. 🔞 Contenido X de cualquier forma, stickers ,imagen, gif, video etc.. en el grupo está prohibido, y serás eliminado de inmediato.*  
* *14. ⛔ Contenido gore de cualquier forma en el grupo está prohibido, stickers, imagen videos gif etc...* 
* *15. ⛔ Cualquier forma de spam, links de forma masía, no está permitido, se avisará y si persigue se eliminará del grupo.*
* *16.⛔ Mensajes en cadena que hay que enviar a varios grupos esta prohibido y será avisado y si persigue se eliminará del grupo.* 
* *17. ⛔ No se puede permitir pedir ser administrador, para ello hay que ganárselo destacando en el grupo y haciendo que la gente escriba, sin usuarios en un grupo.. no hace falta administradores*

*Aqui os dejo el PayPal*
*http://PayPal.me/GokuBotyJuan1986*

`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNDgwNjUwMTJf/reglas.jpeg" }, caption: random }, { quoted: m })
}

// funcion de reglas alex
if (command === "reglamento") {
let random = `𒊐⃢⃝🍿█̻̻͓ ⃪⃘⵿᷒〬ᰰ𝅲𒋮🅑🅘🅔🅝🅥🅔🅝🅘🅓🅞🅢 𒊐⃢⃝🍿█̻̻͓ ⃪⃘⵿᷒〬ᰰ𝅲𒋮
️🅰🅻 🅶🆁🆄️🅿️🅾
𝗗𝗘 𝗔𝗣𝗢𝗥𝗧𝗘𝗦
𝗣𝗘𝗟𝗜𝗖𝗨𝗟𝗔𝗦 𝗦𝗘𝗥𝗜𝗘𝗦

𝗦𝗶𝗲𝗻𝘁𝗮𝘁𝗲 𝗰𝗼𝗺𝗼 𝗲𝗻 𝘁𝘂 𝗖𝗮𝘀𝗮 𝗽𝗲𝗿𝗼 𝗮𝗻𝘁𝗲𝘀 𝗹𝗲𝗮𝗻 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 𝗽𝗮𝗿𝗮 𝗻𝗼 𝘀𝗲𝗿 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼 𝗿𝗲𝗰𝘂𝗲𝗿𝗱𝗲𝗻 𝗔𝗹 𝗲𝗻𝘁𝗿𝗮𝗿 𝗱𝗲𝘃𝗲𝗻 𝗮𝗽𝗼𝗿𝘁𝗮𝗿 𝗾𝘂𝗶𝗲𝗻 𝗽𝗶𝗱𝗮 𝘀𝗶𝗻 𝗮𝗽𝗼𝗿𝘁𝗮𝗿 𝘀𝗲 𝗲𝗹𝗶𝗺𝗶𝗻𝗮 
𝗡𝗼 𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘁𝗲 𝗰𝗵𝗮𝘁 𝗱𝗲 𝗮𝘂𝗱𝗶𝗼 𝗺𝗲𝗻𝗰𝗶𝗻𝗮𝗿 𝗰𝗼𝗻 𝗲𝘀𝘁𝗮𝗱𝗼𝘀 𝗻𝗶 𝗺𝗮𝗿𝗰𝗮𝗿 𝗹𝗼𝘀 𝗮𝗽𝗼𝗿𝘁𝗲𝘀 𝗰𝗼𝗻 𝗽𝘂𝗻𝘁𝗶𝘁𝗼𝘀 𝗮𝗹 𝗾𝘂𝗲 𝗹𝗼 𝗮𝗴𝗮 𝘀𝗲 𝗲𝗹𝗶𝗺𝗶𝗻𝗮 𝘀𝗶𝗻 𝗮𝗯𝗶𝘀𝗼

𝗔𝗣𝗢𝗥𝗧𝗘𝗡 𝗔𝗟 𝗚𝗥𝗨𝗣𝗢

𝗣𝗘𝗥𝗠𝗜𝗧𝗜𝗗𝗢𝗦 🔰
✅𝗽𝗲𝗹𝗶́𝗰𝘂𝗹𝗮𝘀
✅𝗮𝗻𝗶𝗺𝗲𝘀 𝘆 𝗱𝗼𝗿𝗮𝗺𝗮𝘀
✅𝘀𝗲𝗿𝗶𝗲𝘀 
✅𝗺𝘂́𝘀𝗶𝗰𝗮𝘀 
✅𝗮𝗽𝗽 
✅𝟭𝟬𝟬𝗽𝗿𝗲 𝗮𝗰𝘁𝗶𝘃𝗼𝘀 
✅𝗟𝗶𝗯𝗿𝗼𝘀
✅𝗔𝗽𝗳
*𝗟𝗲𝗲𝗿 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀*👁

𝗣𝗥𝗢𝗛𝗜𝗕𝗜𝗗𝗢𝗦 
🚫𝗦𝗧𝗜𝗞𝗘𝗥𝗦 
🚫𝘅𝘅𝘅,𝗡𝗼 𝘀𝘁𝗶𝗸𝗲𝗿𝘀 𝗱𝗲 𝘅𝘅𝘅😤
🚫𝗶𝗻𝘀𝘂𝗹𝘁𝗼𝘀 
🚫𝗺𝗼𝗹𝗲𝘀𝘁𝗮𝗿 𝗮𝗹 𝗽𝗿𝗶𝘃𝗮𝗱𝗼
🚫𝘁𝗲𝗻𝗲𝗿 𝗰𝗼𝗻𝘁𝗮𝗱𝗼𝗿 𝗲𝗻 𝟬
🚫𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗱𝗲 𝗼𝘁𝗿𝗼𝘀 𝗴𝗿𝘂𝗽𝗼𝘀, 𝗰𝗮𝗱𝗲𝗻𝗮𝘀
🚫𝗣𝗲𝗱𝗶𝗿 𝘀𝗶𝗻 𝗮𝗽𝗼𝗿𝘁𝗮𝗿 
🚫𝘃𝗶́𝗱𝗲𝗼𝘀 𝗰𝗼𝗻 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼 𝘃𝗶𝗼𝗹𝗲𝗻𝘁𝗼
🚫𝗡𝗼 𝗽𝘂𝗻𝘁𝗶𝘁𝗼𝘀 
🚫𝗻𝗼 𝗺𝗶𝗿𝗼𝗻𝗲𝘀 𝗻𝗶 𝗳𝗮𝗻𝘁𝗮𝘀𝗺𝗼𝗻𝗲𝘀
🚫 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗰𝗶𝗼́𝗻 𝗹𝗮𝘀 𝘃𝗲𝗰𝗲𝘀 𝗾𝘂𝗲 𝘀𝗲𝗮 𝗻𝗲𝗰𝗲𝘀𝗮𝗿𝗶𝗼 
𝗥𝗲𝘀𝗽𝗲𝘁𝗲 𝗹𝗮𝘀 𝗱𝗲𝗰𝗶𝘀𝗶𝗼𝗻𝗲𝘀 𝗱𝗲 𝗹𝗼𝘀 𝗮𝗱𝗺
🔰🅢🅔🅐🅝 🅑🅘🅔🅝🅥🅔🅝🅘🅓🅞🅢`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNDkxNDI2NzFf/Reglamento%20Alex.jpg" }, caption: random }, { quoted: m })
}


// Biografías
if (command === "menubiografia" || command === "biografias" || command === "menubiografias") {
let random = `𝗧𝗲 𝗺𝗼𝘀𝘁𝗿𝗮𝗺𝗼𝘀 𝘂𝗻 𝗹𝗶𝘀𝘁𝗮𝗱𝗼 𝗱𝗲 𝗹𝗼𝘀 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗷𝗲𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀...

📢\`𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘀\`📢

• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗼𝗸𝘂
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗳𝗿𝗲𝗲𝘇𝗲𝗿
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗰𝗲𝗹𝘂𝗹𝗮
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗷𝗶𝗿𝗲𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝘂𝗹𝗺𝗮
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗰𝗵𝗶𝗰𝗵𝗶
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗼𝘁𝗲𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗸𝗿𝗶𝗹𝗶𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗼𝗵𝗮𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘁𝗿𝘂𝗻𝗸𝘀
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘃𝗲𝗴𝗲𝘁𝗮
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗵𝗶𝘁
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗲𝗲𝗿𝘂𝘀
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘄𝗵𝗶𝘀
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 
• 

> 𝗣𝗼𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼: *.biografíagoku*
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTcwMjUwMTBf/Menubiograf%C3%ADa.jpg" }, caption: random }, { quoted: m })
}


// biografía Goku
if (command === "goku" || command === "biografíagoku" || command === "biografiagoku") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗚𝗼𝗸𝘂

Goku es el protagonista principal de Dragon Ball. Su verdadero nombre Saiyajin es Kakarotto. Nació en el año 737 en el Planeta Vegeta y fue enviado a la Tierra cuando era un bebé. En Dragon Ball Super tiene alrededor de 49 años.

🔹 𝗜𝗻𝗳𝗮𝗻𝗰𝗶𝗮

* Fue encontrado y criado por el abuelo Gohan, quien le enseñó artes marciales. De pequeño era agresivo, pero después de golpearse la cabeza se volvió amable y alegre.

🔹 𝗔𝘃𝗲𝗻𝘁𝘂𝗿𝗮𝘀 𝘆 𝗽𝗲𝗹𝗲𝗮𝘀

* A lo largo de la serie ha protegido la Tierra enfrentándose a enemigos como Freezer, Cell, Majin Buu y muchos más. Su mayor rival y amigo es Vegeta.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Goku se casó con Chi-Chi y tuvo dos hijos: Gohan y Goten.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro puntiagudo, ojos negros y gran musculatura. Su personalidad es alegre, inocente, valiente y muy competitiva.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, comer mucho y pelear contra rivales fuertes. No le gusta la injusticia ni que lastimen a sus amigos.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

𝗦𝘂𝘀 𝘁𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝗺𝗮𝘀 𝗳𝗮𝗺𝗼𝘀𝗮𝘀 𝘀𝗼𝗻:

* Kamehameha
* Genkidama
* Kaioken
* Teletransportación

𝗦𝘂𝘀 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹𝗲𝘀 𝘀𝗼𝗻:

* Super Saiyajin
* Super Saiyajin 2
* Super Saiyajin 3
* Super Saiyajin Dios
* Super Saiyajin Blue
* Ultra Instinto 🔥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Goku es considerado uno de los personajes de anime más famosos y queridos de toda la historia 😎🐉
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTcxMjM1MzFf/Goku.mp4" }, caption: random }, { quoted: m })
}

// biografía Freezer 
if (command === "freezer"  || command === "biografíafreezer" || command === "biografiafreezer") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗙𝗿𝗲𝗲𝘇𝗲𝗿

Freezer es uno de los villanos más famosos y peligrosos de Dragon Ball. Es el emperador del universo y líder del Imperio Freezer. Su edad exacta es desconocida, pero es mucho mayor que la mayoría de personajes de la serie.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Freezer conquistaba planetas y eliminaba razas enteras para vender mundos. Fue quien destruyó el Planeta Vegeta por miedo al poder de los Saiyajin.
* Tiempo después viajó a Namekusei buscando las Esferas del Dragón para obtener la inmortalidad, donde se enfrentó a Goku y despertó por primera vez el Super Saiyajin.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel blanca con partes moradas y varias formas físicas. Su personalidad es fría, cruel, arrogante y muy inteligente.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta dominar, controlar y demostrar su poder. No le gusta perder, ser humillado ni que alguien sea más fuerte que él.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

𝗦𝘂𝘀 𝘁𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝗺𝗮𝘀 𝗳𝗮𝗺𝗼𝘀𝗮𝘀 𝘀𝗼𝗻:

* Death Beam
* Death Ball
* Supernova
* Telequinesis

𝗦𝘂𝘀 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹𝗲𝘀 𝘀𝗼𝗻:

* Primera Forma
* Segunda Forma
* Tercera Forma
* Forma Final
* Golden Freezer ✨
* Black Freezer 🖤

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque empezó como villano, Freezer terminó ayudando a los Guerreros Z durante el Torneo del Poder para salvar su universo 😎🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTEwNjEyODFf/Freezer.mp4" }, caption: random }, { quoted: m })
}  
  
//Biografia celula
if (command === "celula"  || command === "biografíacelula" || command === "biografiacelula") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗖𝗲𝗹𝗹

Cell es uno de los villanos más poderosos de Dragon Ball Z. Fue creado por el Dr. Gero usando células de grandes guerreros como Goku, Vegeta, Piccolo y Freezer.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Cell llegó del futuro usando una máquina del tiempo para absorber a los androides 17 y 18 y alcanzar su forma perfecta. Después organizó el Torneo de Cell para demostrar su poder y desafiar a los Guerreros Z.
* Su mayor pelea fue contra Gohan, quien logró derrotarlo usando el Super Saiyajin 2.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene un cuerpo verde con manchas negras, cola larga y alas pequeñas. Su personalidad es arrogante, inteligente, cruel y muy confiada.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta demostrar su perfección, pelear contra rivales fuertes y humillar a sus enemigos. No le gusta perder ni ser superado.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

𝗦𝘂𝘀 𝘁𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝗺𝗮𝘀 𝗳𝗮𝗺𝗼𝘀𝗮𝘀 𝘀𝗼𝗻:

* Kamehameha
* Solar Kamehameha
* Regeneración
* Absorción

𝗦𝘂𝘀 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹𝗲𝘀 𝘀𝗼𝗻:

* Cell Imperfecto
* Semi-Perfect Cell
* Perfect Cell 💥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Gracias a las células de varios guerreros, Cell podía usar técnicas de muchos personajes diferentes 😮‍💨🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTEwNjEyODRf/Celula.mp4" }, caption: random }, { quoted: m })
}

//Biografia Jiren
if (command === "jiren"  || command === "biografíajiren" || command === "biografiajiren") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗝𝗶𝗿𝗲𝗻

Jiren es uno de los guerreros más poderosos de Dragon Ball Super y miembro de las Tropas del Orgullo del Universo 11. Su edad exacta es desconocida, pero es considerado un luchador extremadamente experimentado.

🔹 𝗜𝗻𝗳𝗮𝗻𝗰𝗶𝗮

* Cuando era niño, su familia y maestro fueron asesinados por un enemigo muy poderoso. Después de esa tragedia, Jiren decidió entrenar sin descanso para nunca volver a sentirse débil.

🔹 𝗧𝗼𝗿𝗻𝗲𝗼 𝗱𝗲𝗹 𝗣𝗼𝗱𝗲𝗿

* Jiren participó en el Torneo del Poder representando al Universo 11. Durante el torneo demostró una fuerza increíble, superando incluso el poder de muchos dioses.
* Su mayor enfrentamiento fue contra Goku, quien despertó el Ultra Instinto peleando contra él.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel gris, ojos negros grandes y una musculatura enorme. Su personalidad es seria, tranquila y muy disciplinada. Casi nunca muestra emociones.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, la justicia y hacerse más fuerte. No le gusta confiar demasiado en otros ni mostrar debilidad.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

𝗦𝘂𝘀 𝘁𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝗺𝗮𝘀 𝗳𝗮𝗺𝗼𝘀𝗮𝘀 𝘀𝗼𝗻:

* Power Impact
* Omegaheat Magnetron
* Eye Blast
* Colossal Slash

𝗦𝘂𝘀 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝘀𝗼𝗻:

* Jiren no tiene transformaciones oficiales, pero puede aumentar su poder liberando toda su energía 🔥.

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Jiren llegó a ser tan fuerte que muchos dioses de la destrucción reconocieron su enorme poder 😮‍💨💥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTEwNjEyOTZf/Jiren.mp4" }, caption: random }, { quoted: m })
}
  

//Biografia Bulma
if (command === "bulma"  || command === "biografíabulma" || command === "biografiabulma") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 bulma

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExMTE3ODZf/Bulma.mp4" }, caption: random }, { quoted: m })
}

//Biografia Bulma
if (command === "chichi"  || command === "biografíachichi" || command === "biografiachichi") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 chichi

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExMTE3ODVf/Chichi.mp4" }, caption: random }, { quoted: m })
}
  
//Biografia Goten
if (command === "goten"  || command === "biografíagoten" || command === "biografiagoten") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 Goten

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExNjg5MTNf/Goten.mp4" }, caption: random }, { quoted: m })
}

//Biografia Krilin 
if (command === "krilin"  || command === "biografíakrilin" || command === "biografiakrilin") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 Krilin 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExNjg5MTRf/Krilin.mp4" }, caption: random }, { quoted: m })
  }

//Biografia Gohan
if (command === "gohan"  || command === "biografíagohan" || command === "biografiagohan") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗚𝗼𝗵𝗮𝗻 

Gohan es el hijo mayor de Goku y Chi-Chi. Nació el 18 de mayo del año 757 y es uno de los personajes con más potencial de Dragon Ball.

🔹 𝗜𝗻𝗳𝗮𝗻𝗰𝗶𝗮

* Desde pequeño mostró un enorme poder oculto. Fue entrenado por Piccolo, quien se convirtió en su maestro y figura importante. Aunque era muy fuerte, nunca le gustó pelear demasiado.

🔹 𝗕𝗮𝘁𝗮𝗹𝗹𝗮𝘀 𝗶𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁𝗲𝘀

* Gohan participó en grandes peleas contra enemigos como Freezer, Cell y Majin Buu. Su momento más importante fue cuando derrotó a Cell usando el Super Saiyajin 2.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Se casó con Videl y tuvo una hija llamada Pan.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro, ojos oscuros y una personalidad amable, inteligente y tranquila. Siempre busca proteger a los demás.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta estudiar, pasar tiempo con su familia y entrenar ocasionalmente. No le gusta la violencia innecesaria ni lastimar personas inocentes.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲

𝗦𝘂𝘀 𝘁𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝗺𝗮𝘀 𝗳𝗮𝗺𝗼𝘀𝗮𝘀 𝘀𝗼𝗻:

* Masenko
* Kamehameha
* Special Beam Cannon

𝗦𝘂𝘀 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹𝗲𝘀 𝘀𝗼𝗻:

* Super Saiyajin
* Super Saiyajin 2
* Estado Definitivo
* Beast Gohan 🔥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Muchos fans consideran que Gohan tiene más potencial oculto que incluso Goku y Vegeta 😮‍💨⚡
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTA4NTI3MjJf/Gohan.mp4" }, caption: random }, { quoted: m })
}

//Biografia Trunks
if (command === "trunks"  || command === "biografíatrunks" || command === "biografiatrunks") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗧𝗿𝘂𝗻𝗸𝘀 

Trunks es el hijo de Vegeta y Bulma. Es un híbrido Saiyajin y humano. Nació el 1 de junio del año 766.

Existen dos versiones del personaje:

🔹 𝗧𝗿𝘂𝗻𝗸𝘀 𝗱𝗲𝗹 𝗣𝗿𝗲𝘀𝗲𝗻𝘁𝗲:

* Es el niño que vive en paz junto a su familia y mejor amigo Goten. En Dragon Ball Super tiene alrededor de 14 años.

🔹 𝗧𝗿𝘂𝗻𝗸𝘀 𝗱𝗲𝗹 𝗙𝘂𝘁𝘂𝗿𝗼:

* Viene de una línea temporal donde los androides destruyeron casi toda la Tierra. Viajó al pasado usando la máquina del tiempo de Bulma para salvar el futuro. En Dragon Ball Super tiene aproximadamente 30 años.

* Trunks tiene cabello lila, ojos azules y gran habilidad para pelear. Su personalidad cambia según la versión: el del presente es alegre y travieso, mientras que el del futuro es serio, maduro y valiente.
* Le gusta entrenar, ayudar a los demás y pasar tiempo con Goten. No le gusta la injusticia ni perder personas importantes.
* Sus técnicas más famosas son Burning Attack, Finish Buster y Shining Sword Attack. Sus transformaciones principales son Super Saiyajin, Super Saiyajin 2 y Super Saiyajin Rage.
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTA4MzI4OTNf/Trunks.mp4" }, caption: random }, { quoted: m })
}
  
//Biografia Vegeta
if (command === "vegeta"  || command === "biografíavegeta" || command === "biografiavegeta") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗩𝗲𝗴𝗲𝘁𝗮 

Vegeta es el príncipe de los Saiyajin e hijo del Rey Vegeta. Nació en el año 732 en el Planeta Vegeta. En Dragon Ball Super tiene alrededor de 50 años.

🔹 𝗜𝗻𝗳𝗮𝗻𝗰𝗶𝗮

* Desde pequeño fue un guerrero de élite con un enorme poder y mucho orgullo Saiyajin. Después de que Freezer destruyera el Planeta Vegeta, sobrevivió y trabajó para él conquistando planetas.

🔹 𝗟𝗹𝗲𝗴𝗮𝗱𝗮 𝗮 𝗹𝗮 𝗧𝗶𝗲𝗿𝗿𝗮

* Tiempo después llegó a la Tierra buscando las Esferas del Dragón y se enfrentó a Goku, quien terminó convirtiéndose en su mayor rival y motivación para hacerse más fuerte.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Vegeta se casó con Bulma y tuvo dos hijos: Trunks y Bra.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro puntiagudo, ojos negros y mide aproximadamente 1.64 m. Su personalidad es orgullosa, seria, inteligente y muy competitiva.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, superar sus límites y proteger a su familia. No le gusta perder, depender de otros ni mostrar debilidad.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

𝗦𝘂𝘀 𝘁𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝗺𝗮𝘀 𝗳𝗮𝗺𝗼𝘀𝗮𝘀 𝘀𝗼𝗻:

* Galick Gun, Big Bang Attack y Final Flash.

𝗦𝘂𝘀 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹𝗲𝘀 𝘀𝗼𝗻:

* Super Saiyajin
* Super Saiyajin 2
* Majin Vegeta
* Super Saiyajin Blue
* Ultra Ego 💜
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTA4NDA2MTFf/Vegeta.mp4" }, caption: random }, { quoted: m })
}

//Biografia Hit
if (command === "hit"  || command === "biografíahit" || command === "biografiahit") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗛𝗶𝘁 

Hit es el asesino más poderoso del Universo 6. Tiene más de 1000 años y es conocido por su gran experiencia en combate.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Participó en el Torneo entre los Universos 6 y 7 y más adelante en el Torneo del Poder. Se volvió rival y aliado de Goku.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es serio, tranquilo, inteligente y muy profesional.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Salto Temporal, Jaula del Tiempo, Golpes de alta velocidad.

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Puede detener el tiempo por unos instantes.
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTcwNDQ5Njlf/Hit.mp4" }, caption: random }, { quoted: m })
}

//Biografia Beerus
if (command === "beerus"  || command === "biografíabeerus" || command === "biografiabeerus") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗲𝗲𝗿𝘂𝘀 

Bills, conocido realmente como Beerus, es el Dios de la Destrucción del Universo 7. Tiene millones de años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Despierta después de un largo sueño buscando al Super Saiyajin Dios y conoce a Goku.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es tranquilo, arrogante y ama dormir y comer 😹

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Hakai, Energía de destrucción, Ultra velocidad

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Su comida favorita es la comida terrestre 🍜🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTcwNDU2NTZf/beerus.mp4" }, caption: random }, { quoted: m })
}

//Biografia Whis
if (command === "whis"  || command === "biografíawhis" || command === "biografiawhis") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗪𝗵𝗶𝘀 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc0ODA5Njdf/Whis.mp4" }, caption: random }, { quoted: m })
}

//Biografia Broly
if (command === "broly"  || command === "biografíabroly" || command === "biografiabroly") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗿𝗼𝗹𝘆 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc0ODY4ODJf/Broly.mp4" }, caption: random }, { quoted: m })
}  

//Biografia Zeno
if (command === "zeno"  || command === "biografíazeno" || command === "biografiazeno") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗭𝗲𝗻𝗼 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc1Nzg4NjFf/zeno%20sama.mp4" }, caption: random }, { quoted: m })
}  
  
//Biografia Gran Sacerdote
if (command === "gransacerdote"  || command === "biografíagransacerdote" || command === "biografiagransacerdote") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝐆𝐫𝐚𝐧 𝐒𝐚𝐜𝐞𝐫𝐝𝐨𝐭𝐞 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc1ODIwMTVf/Gran%20Sacerdote.mp4" }, caption: random }, { quoted: m })
}

//Biografia Goku Black
if (command === "gokublack"  || command === "biografíagokublack" || command === "biografiagokublack") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 ??? 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc2MzA5MjFf/gokublack.mp4" }, caption: random }, { quoted: m })
}  

//Biografia Majin Buu 
if (command === "majinbuu"  || command === "biografíamajinbuu" || command === "biografiamajinbuu") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 Majin Buu 

Muy pronto!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc2MzYwMDlf/majinbuu.mp4" }, caption: random }, { quoted: m })
}

//Biografia Piccolo
if (command === "piccolo"  || command === "biografíapiccolo" || command === "biografiapiccolo") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗣𝗶𝗰𝗰𝗼𝗹𝗼

Picoro, conocido realmente como Piccolo, es un guerrero Namekiano y antiguo rival de Goku.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Al principio fue enemigo de Goku, pero después se convirtió en uno de sus mayores aliados y maestro de Gohan.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es serio, sabio, tranquilo y protector.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Makankosappo
* Regeneración
* Gigantificación

🔹 𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Piccolo Fusionado
* Orange Piccolo 🟠
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc2MzkzMDFf/piccolo.mp4" }, caption: random }, { quoted: m })
}






  
  
  
//Biografia Plantilla
if (command === "plantilla"  || command === "biografíaplantilla" || command === "biografiaplantilla") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 ??? 

en contracción!!!
 
 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTcwNDU2NTZf/beerus.mp4" }, caption: random }, { quoted: m })
}


// funcion de pruebas
if (command === "administradores") {
let random = `Xd`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTEwNjEyOTZf/Jiren.mp4" }, caption: random }, { quoted: m })
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
let t = `📢 *¿Tienes un número de WhatsApp y no lo usas? o te gustaría ayudar? 📢*

*🤔 ¿Para que solicitan un numero de WhatsApp? 🤔*
*👉 El bot llamo GokuBot que esta en esta comunidad funciona con un numero de teléfono de cualquier pais... por eso si tienes un numero que no usas o quieres comprar uno nuevo puedes ayudar dándolo por una buena causa.*
🤔 *¿Que benificios tengo por dar un número de WhatsApp? 🤔*
*👉 Puedes bajar videos de las redes sociales, hacer stickers y todo el mundo puede disfrutar de GokuBot...⚡*
*📲 Escribenle al privado de Juan1986, den un numero y difruten de GokuBot.*`
  conn.reply(m.chat, t, m)
}
}

// funcion tutorial encuestas DB Telegram 
if (command === "encuesta" || command === "encuestas" || command === "dragónballencuestas" || command === "dragonballencuestas") {
let random = `𝗦𝗶 𝗯𝘂𝘀𝗰𝗮𝘀 𝘂𝗻 𝗴𝗿𝘂𝗽𝗼 𝗱𝗼𝗻𝗱𝗲
𝗽𝗼𝗱𝗲𝗿 𝘃𝗼𝘁𝗮𝗿 𝘆 𝗼𝗽𝗶𝗻𝗮𝗿 𝗮𝗹 𝗺𝗶𝘀𝗺𝗼 𝘁𝗶𝗲𝗺𝗽𝗼, 𝘁𝗲 𝗱𝗲𝗷𝗼 𝘂𝗻 𝘃𝗶𝗱𝗲𝗼 𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝗱𝗲 𝗰𝗼𝗺𝗼 𝘀𝗲 𝗵𝗮𝗰𝗲, 𝗲 𝗶𝗻𝗰𝗹𝘂𝘀𝗼 𝘀𝗶 𝘁𝗲 𝗲𝗾𝘂𝗶𝘃𝗼𝗰𝗮𝘀 𝘃𝗼𝘁𝗮𝗻𝗱𝗼 𝗽𝘂𝗲𝗱𝗲𝘀 𝗿𝗲𝘁𝗶𝗿𝗮𝗿 𝗲𝘀𝗲 𝘃𝗼𝘁𝗼 𝘆 𝘃𝗼𝗹𝘃𝗲𝗿 𝗮 𝘃𝗼𝘁𝗮𝗿 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼, 𝗮𝗿𝗿𝗶𝗯𝗮 𝘁𝗶𝗲𝗻𝗲𝘀 𝗲𝗹 𝘃𝗶𝗱𝗲𝗼 𝗱𝗲 𝗰𝗼𝗺𝗼 𝘀𝗲 𝗵𝗮𝗰𝗲.

𝗢𝘀 𝗱𝗲𝗷𝗼 𝗲𝗹 𝗲𝗻𝗹𝗮𝗰𝗲 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 𝗱𝗲 𝗲𝗻𝗰𝘂𝗲𝘀𝘁𝗮 𝗽𝗮𝗿𝗮 𝗾𝘂𝗲 𝗲𝗻𝘁𝗿𝗲𝗻...

𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗮𝗹𝗹 𝗲𝗻𝗰𝘂𝗲𝘀𝘁𝗮𝘀
https://t.me/+PZwugKsv2x5hMGVk

`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDgzMjAzNzhf/Encuestas%20dragon%20ball%20en%20Telegram.mp4" }, caption: random }, { quoted: m })
}

  
// funcion como entrar al canal de db donde estan la serie entera 
if (command === "canaldb" || command === "dragonballtelegram" || command === "dragónballtelegram") {
let random = `𝗡𝗼 𝘀𝗮𝗯𝗲𝘀 𝗰𝗼𝗺𝗼 𝗯𝗮𝗷𝗮𝗿 𝗹𝗮
𝘀𝗲𝗿𝗶𝗲 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹 𝗱𝗲𝘀𝗱𝗲 𝗲𝗹 𝗰𝗮𝗻𝗮𝗹 𝗱𝗲 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺, 𝗲𝗻 𝗲𝘀𝘁𝗲 𝘃𝗶𝗱𝗲𝗼 𝘁𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝘁𝗲 𝗲𝘅𝗽𝗹𝗶𝗰𝗮𝗺𝗼𝘀 𝗰𝗼𝗺𝗼 𝘀𝗲 𝗲𝗻𝘁𝗿𝗮 𝗮𝗹 𝗰𝗮𝗻𝗮𝗹 𝘆 𝗰𝗼𝗺𝗼 𝗻𝗮𝘃𝗲𝗴𝗮𝗿 𝗲𝗻 𝗲𝗹 𝗰𝗮𝗻𝗮𝗹...
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDgzMjAzNzdf/Como%20bajar%20del%20canal%20dragon%20ball%20los%20videos.mp4" }, caption: random }, { quoted: m })
}

  
// noticias dragon ball
if (command === "noticiasdragonball") {
let tuto = `*Buscas estar informado de las novedades y noticias de dragón ball? En el vídeo de arriba te dejo lo que puedes encontrar.. Un canal echo por un fan para otros fans de dragón ball...*

*Pulsen a seguir para estar informados de las novedades 👇👇*
*https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w*

*Si tenéis dudas escribir a By Juan1986*

*Esto a sido posible gracias a By Juan𝟏𝟗𝟖𝟔*

`
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

handler.command = ["noticiasdragonball", "menubiografia", "biografias","menubiografias", "goku", "biografíagoku", "biografiagoku", "Goten", "biografíagoten", "biografiagoten", "Krilin", "biografíakrilin", "biografiakrilin", "Bulma", "biografíabulma", "biografiabulma", "Chichi", "biografíachichi", "biografiachichi", "freezer", "biografíafreezer", "biografiafreezer", "Celula", "celula", "biografíacelula", "biografiacelula", "Jiren", "biografíajiren", "biografiajiren", "Gohan", "biografíagohan", "biografiagohan", "trunks", "biografíatrunks", "biografiatrunks", "vegeta", "biografíavegeta", "biografiavegeta", "hit", "biografíahit", "biografiahit", "beerus", "biografíabeerus", "biografiabeerus", "whis", "biografíawhis", "biografiawhis", "broly", "biografíabroly", "biografiabroly", "zeno", "biografíazeno", "biografiazeno", "gransacerdote", "biografíagransacerdote", "biografiagransacerdote", "gokublack", "biografíagokublack", "biografiagokublack", "majinbuu", "biografíamajinbuu", "biografiamajinbuu", "piccolo", "biografíapiccolo", "biografiapiccolo", "curiosidadesdragonball", "añadirusuario", 'appstickers', 'menuaudio', 'menuaudios', 'appsticker', 'canal', 'canales', 'dar', 'grupos', 'gruposoficiales', 'support', 'reglas', 'normas', 'soporte', 'reglamento', 'encuesta',  'encuestas', 'dragónballencuestas', 'dragonballencuestas', 'canaldb',  'dragónballtelegram',  'dragonballtelegram', 'administradores'];

export default handler;
  
