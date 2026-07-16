import fetch from 'node-fetch'
const handler = async (m, { conn, command, args, usedPrefix, text }) => {
if (!global.db.data.chats[m.chat].fInformation && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ información ]* estan desactivados...` }, { quoted: m })
}

const user = global.db.data.users[m.sender] || {};
const name = await conn.getName(m.sender);


//------------------
//Menu auxiliar 
//------------------
if (command === "menu2"  || command === "menucompleto" || command === "menuauxiliar") {
let random = `𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼 𝗮𝗹 𝗺𝗲𝗻𝘂 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗼 𝗱𝗲 𝗚𝗼𝗸𝘂𝗕𝗼𝘁, 𝗲𝘀𝘁𝗮𝘀 𝘀𝗶𝗻 𝗺𝗶𝘀 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗲𝘀, 𝘂𝘀𝗮𝗺𝗲 𝗰𝗼𝗻 𝗺𝗼𝗱𝗲𝗿𝗮𝗰𝗶𝗼𝗻

⚶⭒ \`Informacion\` 
㊙ .reglas
㊙ .administradores 
㊙ .run
㊙ .support  =  text
㊙ .menubiografia 
㊙ .menuopening
㊙ .menuaudio
㊙ .grupos
㊙ .grupos frikis
㊙ .grupos telegram
㊙ .grupos facebook

⚶⭒ \`Grupos\` 
🐲 .link
🐲 .invocar  =  text
🐲 .kick  =  mention
🐲 .admin+  =  mention
🐲 .admin-  =  mention
🐲 .warn+  = mention 
🐲 .warn-  =  mention
	
⚶⭒ \`Tutoriales\`
㊙ .noticiasdragonball
㊙ .curiosidadesdragonball
㊙ .dar numero
㊙ .encuesta
㊙ .canal
㊙ .añadirusuario
㊙ .dragonballencuestas
㊙ .dragonballtelegram
㊙ .appsticker

⚶⭒ \`Descargas\`
⬇️ .tiktok  = link
⬇️ .twitter = link
⬇️ .spotify = link


*𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 CON 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

> *By Juan1986*
Muy pronto estara disponible este menu con todas las funciones, Estamos en construcción!!!
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNDc2MzMwOTdf/menu_GokuBot.jpg" }, caption: random }, { quoted: m })
}


  
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

⚔️🔥 𝗔𝘁𝘁𝗮𝗰𝗸 𝗼𝗻 𝗧𝗶𝘁𝗮𝗻 🔥⚔️
https://chat.whatsapp.com/Gli5q589qhp3NSFnClSPTC

⚔️🤕 𝗕𝗹𝗮𝗰𝗸 𝗧𝗼𝗿𝗰𝗵 🤕⚔️
https://chat.whatsapp.com/K1MM4UnFvnDHQ05VjFGlR0

💪🧌𝗙𝘂𝗹𝗹𝗺𝗲𝘁𝗮𝗹 𝗔𝗹𝗰𝗵𝗲𝗺𝗶𝘀𝘁: 𝗕𝗿𝗼𝘁𝗵𝗲𝗿𝗵𝗼𝗼𝗱🧌💪
https://chat.whatsapp.com/Jpl3P5te0Rk4SzVKMFN8SZ

🌍⚔️🤺 𝗗𝗲𝗮𝘁𝗵 𝗡𝗼𝘁𝗲🤺⚔️ 🌍
https://chat.whatsapp.com/LvPGDAvKI6R4j35u167sCx

*💥💣ARCANE💣💥*
https://chat.whatsapp.com/HHqnpkNB3pRCpekFTzQTne

⛴️👒𝗢𝗻𝗲 𝗣𝗶𝗲𝗰𝗲👒⛴️
https://chat.whatsapp.com/Dc2hF9RBvtOGpSISBvIIzh

🔫💪 𝗛𝘂𝗻𝘁𝗲𝗿 𝘅 𝗛𝘂𝗻𝘁𝗲𝗿 💪🔫
https://chat.whatsapp.com/Las2GpuILnS7DSWtXecZHu

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

*Actualizado 04/07/2026.*
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

//menu opening
if (command === "menuopening"  || command === "openingmenu") {
let random = `*╔══════════════*
*║* \`𝗠𝗲𝗻𝘂 𝗢𝗽𝗲𝗻𝗶𝗻𝗴𝘀\` 
*║*
*║* • \`𝗢𝗽𝗲𝗻𝗶𝗻𝗴 𝗰𝗮𝘀𝘁𝗲𝗹𝗹𝗮𝗻𝗼\`
*║* 🔊 𝗗𝗕 𝗼𝗽𝗲𝗻𝗶𝗻𝗴 𝗰𝗮𝘀𝘁𝗲𝗹𝗹𝗮𝗻𝗼
*║* 🔊 𝗗𝗕 𝗲𝗻𝗱𝗶𝗻𝗴 𝗰𝗮𝘀𝘁𝗲𝗹𝗹𝗮𝗻𝗼
*║* 🔊 
*║* 🔊 
*║* 🔊 
*║* 🔊
*║* 🔊
*║* • \`𝗢𝗽𝗲𝗻𝗶𝗻𝗴 𝗹𝗮𝘁𝗶𝗻𝗼\`  
*║* 🔊 𝗗𝗕 𝗼𝗽𝗲𝗻𝗶𝗻𝗴 𝗹𝗮𝘁𝗶𝗻𝗼
*║* 🔊 𝗗𝗕 𝗲𝗻𝗱𝗶𝗻𝗴 𝗹𝗮𝘁𝗶𝗻𝗼
*║* 🔊 
*║* 🔊 
*║* 🔊 
*║* 🔊
*║* 🔊
*║* • \`𝗢𝗽𝗲𝗻𝗶𝗻𝗴 𝗩𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼\`
*║* 🔊 𝗗𝗕 𝗼𝗽𝗲𝗻𝗶𝗻𝗴 𝘃𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼
*║* 🔊 𝗗𝗕 𝗲𝗻𝗱𝗶𝗻𝗴 𝘃𝗮𝗹𝗲𝗻𝗰𝗶𝗮𝗻𝗼
*║* 🔊 
*║* 🔊 
*║* 🔊
*║* 🔊
*║* 🔊 
*║* • \`𝗢𝗽𝗲𝗻𝗶𝗻𝗴 𝗖𝗮𝘁𝗮𝗹𝗮𝗻\`
*║* 🔊 𝗗𝗕 𝗼𝗽𝗲𝗻𝗶𝗻𝗴 𝗰𝗮𝘁𝗮𝗹𝗮𝗻
*║* 🔊 𝗗𝗕 𝗲𝗻𝗱𝗶𝗻𝗴 𝗰𝗮𝘁𝗮𝗹𝗮𝗻
*║* 🔊 
*║* 🔊
*║* 🔊
*║* 🔊
*║* 🔊
*║* • \`𝗢𝗽𝗲𝗻𝗶𝗻𝗴 𝗝𝗮𝗽𝗼𝗻𝗲𝘀\`
*║* 🔊 𝗗𝗕 𝗼𝗽𝗲𝗻𝗶𝗻𝗴 𝗷𝗮𝗽𝗼𝗻𝗲𝘀 
*║* 🔊 𝗗𝗕 𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗮𝗽𝗼𝗻𝗲𝘀
*║* 🔊 
*║* 🔊
*║* 🔊
*║* 🔊
*║* 🔊
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
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗿𝗼𝗹𝘆
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘇𝗲𝗻𝗼
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗿𝗮𝗻𝘀𝗮𝗰𝗲𝗿𝗱𝗼𝘁𝗲 
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗼𝗸𝘂𝗯𝗹𝗮𝗰𝗸 
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗺𝗮𝗷𝗶𝗻𝗯𝘂𝘂
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗽𝗶𝗰𝗰𝗼𝗹𝗼
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗿𝗮
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗩𝗶𝗱𝗲𝗹
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗿𝗲𝘆𝘃𝗲𝗴𝗲𝘁𝗮 
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗱𝗿𝗴𝗲𝗿𝗼
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗮𝗯𝘆
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗷𝗮𝗻𝗲𝗺𝗯𝗮
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗶𝗿𝘂
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗰𝗼𝗼𝗹𝗲𝗿
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘁𝘂𝗿𝗹𝗲𝘀
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗮𝗿𝗱𝗼𝗰𝗸
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘀𝗹𝘂𝗴
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘇𝗮𝗺𝗮𝘀
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗶𝗯𝗶𝗱𝗶
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗯𝗮𝗯𝗶𝗱𝗶
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘀𝘆𝗻𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗻𝘂𝗼𝘃𝗮𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗵𝗮𝘇𝗲𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗻𝗮𝘁𝘂𝗿𝗼𝗻𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗿𝗮𝗴𝗲𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗼𝗰𝗲𝗮𝗻𝘂𝘀𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗲𝗶𝘀𝘀𝗵𝗲𝗻𝗿𝗼𝗻
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝘂𝘂𝗯
• .𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮𝗴𝗶𝗻𝗲

> 𝗣𝗼𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼: *.biografíagoku*
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNjIxMDc5Mjhf/Biografia%20dragon%20ball.jpg" }, caption: random }, { quoted: m })
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
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝘂𝗹𝗺𝗮

Bulma es una de las protagonistas principales de Dragon Ball y la hija del fundador de Capsule Corp. Nació el 18 de agosto del año 733 y es considerada una de las científicas más inteligentes del universo. En Dragon Ball Super tiene alrededor de 47 años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Bulma fue la primera amiga de Goku y quien inició la búsqueda de las Esferas del Dragón. Gracias a su inteligencia creó inventos como el Radar del Dragón, naves espaciales y la máquina del tiempo, ayudando en numerosas ocasiones a salvar la Tierra.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Se casó con Vegeta y tuvo dos hijos: Trunks y Bulla.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello azul (lila en algunas versiones del anime), ojos azules y una personalidad inteligente, valiente, divertida y un poco mandona.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gustan la ciencia, la tecnología, la moda y crear nuevos inventos. No le gusta que destruyan sus proyectos ni que la subestimen.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Inteligencia científica
* Creación de inventos avanzados
* Manejo de tecnología y naves espaciales

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque no es una guerrera, Bulma ha sido una de las personas más importantes para proteger la Tierra gracias a su enorme inteligencia y sus inventos. 🧠✨
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExMTE3ODZf/Bulma.mp4" }, caption: random }, { quoted: m })
}

//Biografia Chichi
if (command === "chichi"  || command === "biografíachichi" || command === "biografiachichi") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗰𝗵𝗶𝗰𝗵𝗶

Chi-Chi, conocida como Milk en el doblaje latino, es la esposa de Goku e hija del Rey Ox. Nació el 12 de mayo del año 737 y en Dragon Ball Super tiene alrededor de 43 años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Conoció a Goku cuando ambos eran niños y años después cumplieron la promesa de casarse. Desde entonces se ha dedicado a cuidar de su familia y a apoyar a sus hijos, aunque siempre intenta que prioricen los estudios antes que las peleas.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Está casada con Goku y es madre de Gohan y Goten.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro, ojos oscuros y una personalidad fuerte, protectora, responsable y muy cariñosa con su familia. Aunque suele enojarse con Goku, siempre se preocupa por él.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta cuidar a su familia, cocinar y que sus hijos estudien. No le gusta que Goku pase todo el tiempo entrenando o arriesgando su vida en combates.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Artes marciales
* Gran fuerza física
* Excelente cocinera

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

Antes de convertirse en ama de casa, Chi-Chi fue una talentosa luchadora y participó en el Torneo Mundial de Artes Marciales, donde volvió a encontrarse con Goku y finalmente se casó con él. ❤️
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExMTE3ODVf/Chichi.mp4" }, caption: random }, { quoted: m })
}
  
//Biografia Goten
if (command === "goten"  || command === "biografíagoten" || command === "biografiagoten") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗚𝗼𝘁𝗲𝗻
 
Goten es el hijo menor de Goku y Chi-Chi. Nació el 26 de agosto del año 767 y es un híbrido entre humano y Saiyajin. En Dragon Ball Super tiene alrededor de 13 años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Goten nació después del sacrificio de Goku contra Cell, por lo que pasó varios años sin conocer a su padre. Desde muy pequeño demostró un gran talento para el coe y aprendió a convertirse en Super Saiyajin con mucha facilidad. Entrenó junto a su mejor amigo, Trunks, y ambos realizaron la Fusión Metamoru para formar a Gotenks.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro puntiagudo muy parecido al de Goku cuando era niño, ojos negros y una personalidad alegre, amable, inocente y muy divertida.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, jugar con Trunks, pelear amistosamente y pasar tiempo con su familia. No le gusta ver sufrir a las personas ni las injusticias.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Kamehameha
* Danza de la Fusión (Metamoru)
* Super Saiyajin

* Gotenks (al fusionarse con Trunks) 💥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

Goten es el Saiyajin más joven en alcanzar el estado de Super Saiyajin, logrando transformarse con solo 7 años. ⚡😎
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTExNjg5MTNf/Goten.mp4" }, caption: random }, { quoted: m })
}

//Biografia Krilin 
if (command === "krilin"  || command === "biografíakrilin" || command === "biografiakrilin") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗞𝗿𝗶𝗹𝗶𝗻

* Krilin es el mejor amigo de Goku y uno de los guerreros humanos más fuertes de Dragon Ball. Nació el 29 de octubre del año 736 y en Dragon Ball Super tiene alrededor de 44 años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Krilin conoció a Goku cuando ambos entrenaban con el Maestro Roshi. Desde entonces se convirtió en uno de los Guerreros Z más importantes, participando en batallas contra enemigos como Vegeta, Freezer, Cell y Majin Buu. Más adelante se casó con Android 18 y formó una familia.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Está casado con Android 18 y es padre de Marron.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es de baja estatura, no tiene cabello durante gran parte de la serie y posee seis puntos de incienso en la frente. Es valiente, leal, inteligente y siempre está dispuesto a ayudar a sus amigos.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, proteger a su familia y pasar tiempo con sus amigos. No le gusta que las personas inocentes sufran ni enfrentarse a enemigos que amenacen la Tierra.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Kienzan (Disco Destructor)
* Kamehameha
* Taiyōken (Destello Solar)
* Bukūjutsu (Vuelo)
* Manipulación de ki

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque es humano, Krilin es considerado uno de los guerreros humanos más fuertes de Dragon Ball y ha acompañado a Goku desde el inicio de la historia. 🥋🔥
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

Whis es el ángel y maestro de Beerus. Tiene millones de años y es uno de los seres más poderosos del universo.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Entrena a Goku y Vegeta para mejorar sus habilidades divinas.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es calmado, elegante, amable y muy inteligente.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Ultra Instinto
* Retroceder el tiempo
* Bastón angelical

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Puede regresar el tiempo tres minutos ⏰✨
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc0ODA5Njdf/Whis.mp4" }, caption: random }, { quoted: m })
}

//Biografia Broly
if (command === "broly"  || command === "biografíabroly" || command === "biografiabroly") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗿𝗼𝗹𝘆 

Broly es un Saiyajin legendario con un poder monstruoso. Nació el mismo día que Goku.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Fue exiliado junto a su padre Paragus y sobrevivió en un planeta peligroso hasta enfrentarse a Goku y Vegeta.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es tranquilo y noble, pero pierde el control cuando se enfurece.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Eraser Cannon
* Poder Saiyajin Legendario
* Explosiones masivas

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Su poder aumenta constantemente mientras pelea 🔥💚
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc0ODY4ODJf/Broly.mp4" }, caption: random }, { quoted: m })
}  

//Biografia Zeno
if (command === "zeno"  || command === "biografíazeno" || command === "biografiazeno") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗭𝗲𝗻𝗼 

Zeno Sama es el rey de todos los universos y el ser más poderoso de Dragon Ball.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Gobierna todos los universos junto a su versión del futuro.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es infantil, curioso y amable, pero extremadamente peligroso.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱

* Puede borrar universos completos instantáneamente 💥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Todos los dioses le tienen miedo 😨
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc1Nzg4NjFf/zeno%20sama.mp4" }, caption: random }, { quoted: m })
}  
  
//Biografia Gran Sacerdote
if (command === "gransacerdote"  || command === "biografíagransacerdote" || command === "biografiagransacerdote") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝐆𝐫𝐚𝐧 𝐒𝐚𝐜𝐞𝐫𝐝𝐨𝐭𝐞 
 
El Gran Sacerdote, llamado Daishinkan, es el padre de los ángeles y asistente principal de Zeno Sama.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Organiza eventos importantes como el Torneo del Poder.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es educado, calmado y muy serio.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Poder angelical
* Teletransportación
* Control del cosmos

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Es uno de los cinco seres más poderosos de todo Dragon Ball 🌌✨
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc1ODIwMTVf/Gran%20Sacerdote.mp4" }, caption: random }, { quoted: m })
}

//Biografia Goku Black
if (command === "gokublack"  || command === "biografíagokublack" || command === "biografiagokublack") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗚𝗼𝗸𝘂 𝗕𝗹𝗮𝗰𝗸 
 
Goku Black es en realidad Zamasu usando el cuerpo de Goku.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Robó el cuerpo de Goku usando las Super Esferas del Dragón y destruyó gran parte del futuro de Trunks.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es arrogante, cruel y cree que los mortales deben desaparecer.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Kamehameha Oscuro
* Espada de Ki
* Guadaña de energía

🔹 𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻

* Super Saiyajin Rosé 🌸
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTc2MzA5MjFf/gokublack.mp4" }, caption: random }, { quoted: m })
}  

//Biografia Majin Buu 
if (command === "majinbuu"  || command === "biografíamajinbuu" || command === "biografiamajinbuu") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗠𝗮𝗷𝗶𝗻 𝗕𝘂𝘂 

Majin Buu es una criatura mágica creada por Bibidi hace millones de años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Ha tenido varias formas y fue uno de los enemigos más peligrosos de los Guerreros Z.

🔹 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Depende de la forma: puede ser inocente, divertida o extremadamente malvada.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀

* Absorción
* Regeneración
* Rayo de chocolate

🔹 𝗧𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Buu Gordo
* Evil Buu
* Super Buu
* Kid Buu 💗
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

//biografia Bra
if (command === "bra"  || command === "biografíabra" || command === "biografiabra") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗿𝗮

Bra, conocida originalmente como bulla, es la hija menor de Vegeta y Bulma. Nació en el año 780 y es una híbrida entre humana y Saiyajin. En Dragon Ball Super tiene alrededor de 1 año.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Bra nació poco antes del Torneo del Poder. Desde su nacimiento fue muy querida por su familia, especialmente por Vegeta, quien mostró un lado más cariñoso y protector gracias a ella.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello azul claro, ojos azules y una personalidad alegre, tranquila y muy cariñosa. Aunque aún es una bebé en Dragon Ball Super, demuestra ser muy expresiva.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta estar con su familia, recibir atención y jugar. Como cualquier bebé, no le gusta quedarse sola o sentirse incómoda.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Hasta el momento no ha mostrado técnicas ni transformaciones, pero al ser hija de un Saiyajin y una humana posee un enorme potencial para convertirse en una poderosa guerrera.

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Vegeta dejó de entrenar por un tiempo para estar presente en el nacimiento de Bra, demostrando cuánto había cambiado desde sus primeros días como guerrero. 💙👶 
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTgyOTMwMTVf/Bra.mp4" }, caption: random }, { quoted: m })
}

//Biografia Videl
if (command === "videl"  || command === "biografíavidel" || command === "biografiavidel") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗩𝗶𝗱𝗲𝗹 

Videl es la hija de Mr. Satan y una de las guerreras humanas más destacadas de Dragon Ball. Nació en el año 756 y en Dragon Ball Super tiene alrededor de 24 años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Videl conoció a Gohan durante la preparatoria. Al descubrir que era el Gran Saiyaman, le pidió que le enseñara a volar y a controlar su ki. Con el tiempo ambos se enamoraron y se casaron.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Está casada con Gohan y es madre de Pan. También es hija del famoso campeón mundial Mr. Satan.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro (corto o largo según la etapa de la serie), ojos oscuros y una personalidad valiente, decidida, amable y muy protectora con su familia.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, ayudar a los demás y pasar tiempo con su familia. No le gustan las injusticias ni que las personas inocentes sufran.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Vuelo
* Control del ki
* Artes marciales
* Gran resistencia física

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Durante el ritual del Super Saiyajin Dios, Videl estaba embarazada de Pan y la energía de su hija ayudó a completar el ritual. ❤️✨
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTgzMDI3NTVf/videl.mp4" }, caption: random }, { quoted: m })
}

//Biografia Rey Vegeta 
if (command === "reyvegeta"  || command === "biografíareyvegeta" || command === "biografiareyvegeta") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗥𝗲𝘆 𝗩𝗲𝗴𝗲𝘁𝗮 

El Rey Vegeta fue el gobernante del Planeta Vegeta y el padre de Vegeta. Su fecha de nacimiento es desconocida y fue uno de los Saiyajin más poderosos de su época.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Como rey de los Saiyajin, lideró a su pueblo mientras trabajaban bajo el dominio de Freezer. Siempre desconfió de él y temía que destruyera a los Saiyajin. Cuando Freezer decidió acabar con el Planeta Vegeta, el Rey Vegeta intentó enfrentarlo, pero fue derrotado y asesinado.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Fue el padre del príncipe Vegeta y esposo de una reina Saiyajin cuyo nombre nunca fue revelado.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tenía cabello negro puntiagudo, una gran estatura y una musculatura imponente. Era orgulloso, valiente, autoritario y muy protector con su raza.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gustaba el honor de los Saiyajin, entrenar y defender a su pueblo. No le gustaba obedecer a Freezer ni ver a su raza humillada.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Vuelo
* Manipulación de ki
* Explosiones de energía
* Combate cuerpo a cuerpo
* Gran fuerza y velocidad

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque era muy poderoso, el Rey Vegeta nunca pudo superar el enorme poder de Freezer, quien terminó destruyendo el Planeta Vegeta y casi toda la raza Saiyajin. 👑🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTgzMDI3Njdf/Rey%20Vegeta.mp4" }, caption: random }, { quoted: m })
}
  
//Biografia Dr. Gero 
if (command === "drgero"  || command === "biografíadrgero" || command === "biografiadrgero") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗗𝗿. 𝗚𝗲𝗿𝗼 

El Dr. Gero fue un brillante científico y antiguo miembro del Ejército de la Red Ribbon. Su fecha de nacimiento es desconocida y es el creador de los androides y de Cell.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Después de que Goku derrotara al Ejército Red Ribbon, el Dr. Gero juró vengarse. Durante años creó poderosos androides como los Androides 16, 17, 18, 19 y diseñó a Cell utilizando células de los guerreros más fuertes.

* Más tarde transfirió su cerebro al cuerpo del Androide 20 para prolongar su vida y continuar con sus experimentos.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello y barba blancos, usa lentes y un sombrero con el símbolo de la Red Ribbon. Es un hombre muy inteligente, frío, calculador y obsesionado con la venganza.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta crear androides, experimentar con la tecnología y planear estrategias. No le gusta Goku ni que sus creaciones desobedezcan sus órdenes.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Absorción de energía
* Inteligencia científica
* Creación de androides
* Amplios conocimientos en robótica y biotecnología

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* El Dr. Gero convirtió su propio cuerpo en el Androide 20, logrando seguir con vida gracias a la tecnología que él mismo creó. 🤖🧪
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTgzMDgzMjZf/dr-gero-C20.mp4" }, caption: random }, { quoted: m })
}

//Biografia Baby
if (command === "baby"  || command === "biografíababy" || command === "biografiababy") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗮𝗯𝘆 

Baby es el principal villano de Dragon Ball GT y el último sobreviviente de la raza Tsufur. Su edad exacta es desconocida y fue creado por el Dr. Myuu para vengar la destrucción de su pueblo.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Baby viajó por el universo buscando un cuerpo fuerte para cumplir su venganza contra los Saiyajin. Finalmente tomó el control del cuerpo de Vegeta, convirtiéndose en Baby Vegeta y dominando gran parte de la Tierra.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel blanca, cabello plateado y ojos rojos. Es frío, inteligente, manipulador y extremadamente vengativo.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta controlar a las personas, aumentar su poder y vengarse de los Saiyajin. No le gusta fracasar ni que alguien se oponga a sus planes.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Baby Vegeta
* Super Baby 1
* Super Baby 2
* Golden Great Ape (Ozaru Dorado)
* Revenge Death Ball
* Control mental mediante parásitos

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Baby es el único villano principal de Dragon Ball GT que logra controlar completamente el cuerpo de Vegeta durante gran parte de la historia. 👑🦠
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTgzMDgzMDlf/baby.mp4" }, caption: random }, { quoted: m })
}

//Biografia Janemba 
if (command === "janemba"  || command === "biografíajanemba" || command === "biografiajanemba") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗝𝗮𝗻𝗲𝗺𝗯𝗮 

Janemba es uno de los villanos más poderosos de las películas de Dragon Ball Z. Nació a partir de la acumulación de energía maligna en el Otro Mundo, por lo que no tiene una edad conocida.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Después de un accidente en la estación purificadora del Otro Mundo, un joven ogro fue transformado en Janemba por la energía negativa acumulada. Su enorme poder alteró la realidad y puso en peligro tanto el mundo de los vivos como el de los muertos. Finalmente fue derrotado por Gogeta.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene dos formas principales: una pequeña de color rojo y una forma final más alta, musculosa y con detalles morados. Es un ser silencioso, caótico y extremadamente peligroso.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta destruir todo a su paso y sembrar el caos. No le gusta que interfieran con sus ataques ni ser enfrentado por guerreros más fuertes.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Teletransportación
* Manipulación de la realidad
* Espada de energía
* Portales dimensionales
* Forma Final de Janemba

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Janemba es uno de los pocos enemigos que obligó a Goku y Vegeta a fusionarse para crear a Gogeta y así poder derrotarlo. 🔥👹
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTgzMDgyNDJf/janemba.mp4" }, caption: random }, { quoted: m })
}

//Biografia Giru
if (command === "giru"  || command === "biografíagiru" || command === "biografiagiru") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗚𝗶𝗿𝘂 

Giru es un pequeño robot que aparece en Dragon Ball GT. Fue construido con tecnología avanzada y se convierte en un gran compañero de viaje de Goku, Pan y Trunks. Su fecha de creación es desconocida.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Giru conoció al grupo cuando se comió el Radar del Dragón, integrándolo a su sistema. Desde ese momento los ayudó a localizar las Esferas del Dragón de Estrellas Negras durante su viaje por el universo.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es un pequeño robot de color amarillo con detalles negros. Tiene una personalidad leal, curiosa, inteligente y muy valiente.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta ayudar a sus amigos, explorar nuevos lugares y buscar las Esferas del Dragón. No le gusta que sus amigos estén en peligro.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Localización de las Esferas del Dragón
* Vuelo
* Análisis de información
* Transformación de herramientas
* Gran resistencia mecánica

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Su frase más famosa es "¡Giru, Giru!", la cual repite constantemente y terminó convirtiéndose en una de sus características más recordadas. 🤖⭐
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0Mzk0NjRf/giru.mp4" }, caption: random }, { quoted: m })
}

//Biografia Cooler
if (command === "cooler"  || command === "biografíacooler" || command === "biografiacooler") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗖𝗼𝗼𝗹𝗲𝗿  

Cooler es el hermano mayor de Freezer e hijo del King Cold. Es uno de los villanos más poderosos de las películas de Dragon Ball Z. Su edad exacta es desconocida.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Después de enterarse de la muerte de Freezer a manos de Goku, Cooler viajó a la Tierra para vengar a su hermano. Más tarde regresó convertido en Metal Cooler, con un cuerpo mecánico controlado por la Estrella Big Gete.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel blanca con detalles morados y una forma final exclusiva con una armadura biológica. Es frío, inteligente, orgulloso y muy estratégico.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta conquistar planetas, aumentar su poder y demostrar que es superior a Freezer. No le gusta perder ni que desafíen su autoridad.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀 

* Death Beam
* Supernova
* Nova Chariot
* Forma Final de Cooler
* Metal Cooler 🤖

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Cooler posee una transformación exclusiva que Freezer nunca tuvo en Dragon Ball Z, lo que hizo que muchos fans lo consideraran incluso más fuerte que su hermano. ❄️🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0Mzk0NDRf/Cooler.mp4" }, caption: random }, { quoted: m })
}

//Biografia Turles
if (command === "turles"  || command === "biografíaturles" || command === "biografiaturles") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗧𝘂𝗿𝗹𝗲𝘀  

Turles es un Saiyajin de élite y el principal villano de la película Dragon Ball Z: El árbol del poder. Su edad exacta es desconocida, pero pertenece a la misma generación que Goku.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Turles sobrevivió a la destrucción del Planeta Vegeta y formó una banda de piratas espaciales. Viajaba por distintos planetas plantando el Árbol del Poder para consumir sus frutos y aumentar su fuerza. Llegó a la Tierra con ese objetivo, donde se enfrentó a Goku y los Guerreros Z.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene un aspecto casi idéntico al de Goku, con cabello negro puntiagudo y ojos oscuros. Es frío, despiadado, arrogante y ambicioso.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta conquistar planetas, obtener más poder y dominar a sus enemigos. No le gusta que alguien se interponga en sus planes ni perder una batalla.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Kill Driver
* Meteor Burst
* Explosive Wave
* Poder aumentado por el Fruto del Árbol del Poder

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Muchos fans creen que Turles es el "Goku malvado", pero en realidad solo se parece físicamente porque los Saiyajin de clase baja suelen tener rasgos muy similares. 🌳🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0Mzk0NDNf/Turles.mp4" }, caption: random }, { quoted: m })
}

//Biografia Bardock 
if (command === "bardock"  || command === "biografíabardock" || command === "biografiabardock") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗮𝗿𝗱𝗼𝗰𝗸  

Bardock es un guerrero Saiyajin de clase baja y el padre de Goku y Raditz. Nació en el año 720 en el Planeta Vegeta y fue uno de los guerreros más valientes de su raza.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Bardock lideraba un equipo de guerreros Saiyajin que conquistaban planetas para el Imperio de Freezer. Cuando descubrió que Freezer planeaba destruir el Planeta Vegeta, intentó detenerlo él solo. Antes del ataque envió a su hijo Kakarotto (Goku) a la Tierra para salvarle la vida, pero fue derrotado por Freezer junto con casi toda la raza Saiyajin.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro puntiagudo, una cicatriz en la mejilla izquierda y lleva la armadura clásica Saiyajin. Es valiente, decidido, orgulloso y muy protector con su familia.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, luchar y proteger a sus compañeros. No le gusta la traición, la injusticia ni obedecer ciegamente a Freezer.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Explosión Final (Final Spirit Cannon)
* Onda de energía
* Vuelo
* Combate cuerpo a cuerpo
* Gran fuerza y velocidad Saiyajin

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Bardock fue el único Saiyajin que intentó enfrentarse a Freezer para salvar a su planeta, convirtiéndose en uno de los personajes más admirados de Dragon Ball. 🔥💪
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0MzkxNTFf/Bardock.mp4" }, caption: random }, { quoted: m })
}

//Biografia Slug 
if (command === "slug"  || command === "biografíaslug" || command === "biografiaslug") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗟𝗼𝗿𝗱 𝗦𝗹𝘂𝗴 

Lord Slug es un Namekiano maligno y el principal villano de la película Dragon Ball Z: El Super Saiyajin Son Goku. Su edad exacta es desconocida, pero tiene varios siglos de vida.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Slug conquistó numerosos planetas antes de llegar a la Tierra con el objetivo de convertirla en un nuevo planeta para gobernar. Gracias a las Esferas del Dragón recuperó su juventud y aumentó enormemente su poder, enfrentándose a Goku y los Guerreros Z.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel verde, antenas, una gran estatura y una musculatura imponente. Es cruel, orgulloso, ambicioso y despiadado.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta conquistar planetas, gobernar con poder absoluto y demostrar su superioridad. No le gusta ser desafiado ni perder el control de una batalla.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Gigantificación
* Regeneración
* Explosiones de energía
* Telequinesis
* Forma rejuvenecida

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Lord Slug es uno de los pocos Namekianos capaces de transformarse en un gigante durante el combate, aumentando considerablemente su fuerza. 🟢👑
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0NDkyODRf/slug.mp4" }, caption: random }, { quoted: m })
}

//Biografia Zamas
if (command === "zamas"  || command === "biografíazamas" || command === "biografiazamas") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗭𝗮𝗺𝗮𝘀

Zamas es un Kaio Supremo aprendiz del Universo 10 y uno de los principales villanos de Dragon Ball Super. Su fecha de nacimiento es desconocida y pertenece a la raza de los Shinjin.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Zamasu creía que los mortales solo traían violencia y caos al universo. Usó las Super Esferas del Dragón para intercambiar su cuerpo con el de Goku, convirtiéndose en Goku Black, y junto a una versión inmortal de sí mismo inició el llamado "Plan Cero Mortales". Finalmente fue eliminado por Zeno.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel verde, cabello blanco y ojos grises. Su personalidad es tranquila, orgullosa, inteligente y extremadamente fanática de la justicia.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta el orden, la paz y la justicia según su propia visión. Odia a los mortales y considera que no merecen existir.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Kai Kai (teletransportación)
* Espadas de Ki
* Manipulación de energía divina
* Vuelo
* Inmortalidad (en una de sus versiones)
* Fusión con Goku Black (Zamasu Fusionado)

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Zamasu es uno de los pocos villanos que consiguió la inmortalidad gracias a las Super Esferas del Dragón, obligando a Zeno a borrar toda una línea temporal para detenerlo. 🌌⚡
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0NTA0NTZf/Zamas.mp4" }, caption: random }, { quoted: m })
}  

//Biografia Bibidi
if (command === "bibidi"  || command === "biografíabibidi" || command === "biografiabibidi") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗶𝗯𝗶𝗱𝗶 

Bibidi fue un poderoso hechicero y el creador de Majin Buu. Su edad exacta es desconocida y vivió hace millones de años.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Bibidi creó a Majin Buu con poderosa magia para destruir planetas y sembrar el caos por el universo. Sin embargo, el monstruo se volvió imposible de controlar. Tiempo después, Bibidi fue asesinado por el Kaio Supremo del Este, poniendo fin a sus planes.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es un pequeño hechicero de piel rosada que viste una túnica mágica. Su personalidad es malvada, manipuladora, ambiciosa y muy inteligente.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta usar la magia, controlar seres poderosos y conquistar el universo. No le gusta que desobedezcan sus órdenes ni que sus planes fracasen.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Magia oscura
* Creación de Majin Buu
* Sellado mágico
* Manipulación de energía
* Control mental

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Durante muchos años se creyó que Bibidi había creado a Majin Buu, aunque más adelante la historia reveló que Buu existía desde tiempos muy antiguos y Bibidi simplemente logró controlarlo temporalmente. 🪄💜
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTg0NDY2MTdf/Bibidi.jpg" }, caption: random }, { quoted: m })
}
  
//Biografia Babidi
if (command === "babidi"  || command === "biografíababidi" || command === "biografiababidi") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗕𝗮𝗯𝗶𝗱𝗶 

Babidi es un poderoso hechicero y el hijo de Bibidi. Su edad exacta es desconocida y heredó los conocimientos mágicos de su padre.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Después de la muerte de Bibidi, Babidi dedicó su vida a revivir a Majin Buu. Reunió energía de poderosos guerreros para despertar a Buu y utilizó su magia para controlar a varios luchadores, entre ellos a Vegeta, convirtiéndolo en Majin Vegeta. Finalmente fue eliminado por Majin Buu.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Es un pequeño hechicero de piel amarilla y cabeza alargada. Tiene una personalidad cruel, manipuladora, cobarde y muy ambiciosa.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta usar la magia, controlar a otros y sembrar el caos. No le gusta que desobedezcan sus órdenes ni enfrentarse directamente a enemigos más fuertes.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Magia oscura
* Control mental
* Teletransportación
* Sellado mágico
* Manipulación de energía

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque Babidi no era un gran guerrero, logró poner en serios problemas a los Guerreros Z únicamente gracias a su poderosa magia y su capacidad para manipular a otros. 🪄😈
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg0NDY2MThf/babidi.mp4" }, caption: random }, { quoted: m })
}

//Biografia SynShenron
if (command === "synshenron"  || command === "biografíasynshenron" || command === "biografiasynshenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗦𝘆𝗻𝗦𝗵𝗲𝗻𝗿𝗼𝗻 

Qi Xing Long, conocido como Syn Shenron, es el Dragón Maligno de la Esfera del Dragón de Una Estrella y el líder de los Dragones Malignos en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Syn Shenron apareció como el más poderoso de los Dragones Malignos. Durante su batalla contra Goku absorbió las demás Esferas del Dragón y se transformó en Omega Shenron, aumentando su poder hasta convertirse en el enemigo más fuerte de Dragon Ball GT. Finalmente fue derrotado por la Genkidama Universal de Goku.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel blanca con detalles azules y una apariencia intimidante. Es frío, arrogante, despiadado y se considera el ser perfecto.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta demostrar su poder, dominar a sus enemigos y destruir todo a su paso. No le gusta ser desafiado ni perder una batalla.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Explosiones de energía
* Regeneración
* Vuelo
* Manipulación de energía negativa
* Omega Shenron 🐉💥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Al convertirse en Omega Shenron, obtuvo los poderes de los siete Dragones Malignos, siendo considerado el villano más poderoso de Dragon Ball GT. 🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTg1ODA3MDFf/syn-shenron-sparking-zero.mp4" }, caption: random }, { quoted: m })
}  

//Biografia Nuova shenron
if (command === "nuovashenron"  || command === "biografíanuovashenron" || command === "biografianuovashenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗡𝘂𝗼𝘃𝗮𝘀𝗵𝗲𝗻𝗿𝗼𝗻 

San Xing Long, conocido como Nuova Shenron, es el Dragón Maligno de la Esfera del Dragón de Cuatro Estrellas en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Apareció junto a los demás Dragones Malignos tras la creación de las Esferas Oscuras. Aunque al principio luchó contra Goku, demostró tener honor y un fuerte sentido de la justicia, llegando incluso a ayudarlo contra enemigos más peligrosos.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene apariencia humana con cabello rojo, piel clara y una armadura roja. Es serio, honorable, valiente y respetuoso con sus rivales.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta luchar con honor y respetar a los guerreros fuertes. No le gustan las trampas ni las peleas injustas.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Control del fuego
* Nova Strike
* Explosiones de energía
* Vuelo
* Gran velocidad

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque es un Dragón Maligno, Nuova Shenron fue uno de los pocos que decidió ayudar a Goku, convirtiéndose en uno de los personajes más nobles de Dragon Ball GT. 🔥🐉
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTg1NzkyMzRf/Nuova%20Shenron.jpg" }, caption: random }, { quoted: m })
}

//Biografia Haze Shenron
if (command === "hazeshenron"  || command === "biografíahazeshenron" || command === "biografiahazeshenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗛𝗮𝘇𝗲 𝗦𝗵𝗲𝗻𝗿𝗼𝗻

Er Xing Long, conocido como Haze Shenron, es el Dragón Maligno de la Esfera del Dragón de Dos Estrellas en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Haze Shenron apareció para enfrentarse a Goku utilizando una niebla venenosa que debilitaba a sus enemigos. Confiaba más en su inteligencia y en sus trampas que en la fuerza bruta, pero finalmente fue derrotado por Goku.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel verde, un cuerpo delgado y una apariencia similar a un dragón. Es astuto, tramposo, cobarde y muy inteligente.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta engañar a sus enemigos, usar venenos y obtener ventaja en el combate. No le gustan las peleas directas ni los rivales más fuertes que él.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Niebla venenosa
* Explosiones de energía
* Vuelo
* Manipulación de gases tóxicos

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Haze Shenron es el único Dragón Maligno que basa casi todo su poder en el uso de venenos y ataques químicos en lugar de la fuerza física. ☠️🐉
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTg1Nzg5ODFf/Haze%20Shenron.jpeg" }, caption: random }, { quoted: m })
}

//Biografia Naturon Shenron
if (command === "naturonshenron"  || command === "biografíanaturonshenron" || command === "biografianaturonshenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗡𝗮𝘁𝘂𝗿𝗼𝗻 𝗦𝗵𝗲𝗻𝗿𝗼𝗻 

Si Xing Long, conocido como Naturon Shenron, es el Dragón Maligno de la Esfera del Dragón de Tres Estrellas en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Naturon Shenron se enfrentó a Goku utilizando una habilidad especial que le permitía absorber y controlar el cuerpo de otras personas. Durante la batalla tomó el cuerpo de Pan para intentar derrotar a Goku, pero finalmente fue vencido.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene un cuerpo verde con apariencia de dragón y puede cambiar de forma al absorber a otros seres. Es manipulador, astuto y muy tramposo.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta engañar a sus enemigos y aprovecharse de sus debilidades. No le gustan los combates justos ni enfrentarse a rivales más fuertes.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Absorción de cuerpos
* Cambio de forma
* Explosiones de energía
* Vuelo
* Regeneración parcial

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Naturon Shenron es el único Dragón Maligno capaz de aumentar su poder absorbiendo el cuerpo de otros seres vivos. 🐉🌿
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTg1ODE4NDBf/Naturon%20Shenron.jpeg" }, caption: random }, { quoted: m })
}

//Rage Shenron desde aquí 
if (command === "rageshenron"  || command === "biografírageshenron" || command === "biografiarageshenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗥𝗮𝗴𝗲 𝗦𝗵𝗲𝗻𝗿𝗼𝗻

Liu Xing Long, conocido como Rage Shenron, es el Dragón Maligno de la Esfera del Dragón de Seis Estrellas en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Rage Shenron apareció para enfrentarse a Goku utilizando el poder del rayo y las tormentas. Aunque parecía un enemigo muy poderoso, fue derrotado después de que Goku descubriera el punto débil de sus ataques eléctricos.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene un cuerpo azul con detalles amarillos y una apariencia robusta. Es agresivo, impulsivo, arrogante y le encanta demostrar su fuerza.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta crear tormentas, usar rayos para atacar y dominar a sus enemigos. No le gusta que resistan sus ataques eléctricos.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Control de rayos
* Manipulación del clima
* Explosiones eléctricas
* Vuelo
* Gran resistencia

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Rage Shenron puede generar enormes tormentas eléctricas y lanzar rayos capaces de destruir grandes áreas del campo de batalla. ⚡🐉
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTkyMTY1Nzlf/Rage-Shenron.mp4" }, caption: random }, { quoted: m })
}
  
//Biografia Oceanus Shenron
if (command === "oceanusshenron"  || command === "biografíaoceanusshenron" || command === "biografiaoceanusshenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗢𝗰𝗲𝗮𝗻𝘂𝘀 𝗦𝗵𝗲𝗻𝗿𝗼𝗻

Wu Xing Long, conocida como Oceanus Shenron, es la Dragón Maligna de la Esfera del Dragón de Cinco Estrellas en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Oceanus Shenron se enfrentó a Goku utilizando el poder del agua y el viento. Al principio aparentaba ser amable y elegante para engañar a sus enemigos, pero luego mostró su verdadera personalidad durante el combate. Finalmente fue derrotada por Goku.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene apariencia femenina, cabello azul y una vestimenta elegante. Es orgullosa, astuta, vanidosa y muy inteligente.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta su belleza, manipular a los demás y demostrar su poder. No le gusta ser humillada ni que destruyan su apariencia.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Control del agua
* Manipulación del viento
* Explosiones de energía
* Vuelo
* Ilusiones

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Oceanus Shenron es la única mujer entre los siete Dragones Malignos y destaca por usar la inteligencia y el engaño en lugar de la fuerza bruta. 🌊🐉
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTkyMjk5OTdf/Oceanus-Shenron.mp4" }, caption: random }, { quoted: m })
}
  
//Biografia Eis Shenron
if (command === "eisshenron"  || command === "biografíaeisshenron" || command === "biografiaeisshenron") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗘𝗶𝘀 𝗦𝗵𝗲𝗻𝗿𝗼𝗻

Yi Xing Long, conocido como Eis Shenron, es el Dragón Maligno de la Esfera del Dragón de Tres Estrellas en Dragon Ball GT. Nació de la energía negativa acumulada por el uso excesivo de las Esferas del Dragón.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Eis Shenron apareció como uno de los dragones más fuertes y se enfrentó a Goku utilizando sus poderes de hielo. Durante la batalla intentó derrotarlo con ataques sorpresa y trampas. Más tarde fue derrotado por su propio hermano, Nuova Shenron, tras traicionar el código de honor de los dragones.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel azul claro, cuernos largos y una apariencia elegante. Es frío, arrogante, tramposo y muy calculador.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta demostrar su superioridad, utilizar el hielo para combatir y engañar a sus rivales. No le gusta perder ni luchar de forma justa.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝗵𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Control del hielo
* Congelación instantánea
* Explosiones de energía
* Vuelo
* Ice Ray (Rayo de Hielo)

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Eis Shenron es el hermano de Nuova Shenron. Mientras Nuova lucha con honor, Eis prefiere usar trampas y engaños para ganar, lo que provoca el enfrentamiento entre ambos. ❄️🐉
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTkyMzEwNzNf/Eis-Shenron.mp4" }, caption: random }, { quoted: m })
}

//Biografia Uub
if (command === "uub"  || command === "biografíauub" || command === "biografiauub") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗨𝘂𝗯

Uub, conocido por algunos fans como Super Uub tras fusionarse con Majin Buu en Dragon Ball GT, es la reencarnación humana del malvado Kid Buu. Nació en una aldea pobre de la Tierra y su fecha de nacimiento exacta es desconocida.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* Después de derrotar a Kid Buu, Goku pidió que renaciera como una buena persona. Años más tarde conoció a Uub en el Torneo Mundial de Artes Marciales y decidió entrenarlo. En Dragon Ball GT, Uub se fusionó con Majin Buu, convirtiéndose en Super Uub para proteger la Tierra.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene piel morena, cabello negro y una personalidad humilde, respetuosa y valiente. Siempre busca hacerse más fuerte para proteger a los demás.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta entrenar, ayudar a su familia y proteger la Tierra. No le gusta la maldad ni que las personas inocentes sufran.

🔹 𝗧𝗲𝗰𝗻𝗶𝗰𝗮𝘀 𝘆 𝘁𝗿𝗮𝗻𝘀𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻𝗲𝘀

* Kamehameha
* Explosiones de energía
* Combate cuerpo a cuerpo
* Super Uub (fusión con Majin Buu) 💥

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Aunque nació como un humano, Uub heredó el enorme poder de Kid Buu, convirtiéndose en uno de los discípulos más prometedores de Goku. 🔥
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTk1Nzk3MzBf/Uub.mp4" }, caption: random }, { quoted: m })
}

//Biografia Gine
if (command === "gine"  || command === "biografíagine" || command === "biografiagine") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 𝗚𝗶𝗻𝗲

Gine es una Saiyajin de clase baja y la madre de Goku y Raditz. Nació en el Planeta Vegeta y su fecha de nacimiento exacta es desconocida.

🔹 𝗛𝗶𝘀𝘁𝗼𝗿𝗶𝗮

* A diferencia de la mayoría de los Saiyajin, Gine tenía un carácter amable y no disfrutaba pelear. Formó parte del equipo de Bardock, pero dejó de combatir para trabajar en un centro de distribución de carne. Antes de la destrucción del Planeta Vegeta, ayudó a Bardock a enviar a su hijo Kakarotto (Goku) a la Tierra para salvar su vida.

🔹 𝗙𝗮𝗺𝗶𝗹𝗶𝗮

* Estuvo casada con Bardock y fue madre de Goku y Raditz.

🔹 𝗔𝗽𝗮𝗿𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱

* Tiene cabello negro puntiagudo, ojos oscuros y una personalidad amable, cariñosa, tranquila y muy protectora con su familia.

🔹 𝗚𝘂𝘀𝘁𝗼𝘀 𝘆 𝗱𝗶𝘀𝗴𝘂𝘀𝘁𝗼𝘀

* Le gusta cuidar de su familia, trabajar y vivir en paz. No le gusta la violencia innecesaria ni ver sufrir a sus seres queridos.

🔹 𝗛𝗮𝗯𝗶𝗹𝗶𝗱𝗮𝗱𝗲𝘀

* Vuelo
* Manipulación de ki
* Combate Saiyajin
* Gran resistencia física

🔹 𝗗𝗮𝘁𝗼 𝗰𝘂𝗿𝗶𝗼𝘀𝗼

* Gine es una de las pocas Saiyajin conocidas que tenía un carácter bondadoso y compasivo, una personalidad que más tarde heredaría su hijo Goku. ❤️🐉
`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNjM0Mjk3Mzdf/Gine.mp4" }, caption: random }, { quoted: m })
	}

  

  
//Biografia Plantilla
if (command === "plantilla"  || command === "biografíaplantilla" || command === "biografiaplantilla") {
let random = `𝗕𝗶𝗼𝗴𝗿𝗮𝗳𝗶𝗮 𝗱𝗲 ??? 

En construcción!!!

`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNTcwNDU2NTZf/beerus.mp4" }, caption: random }, { quoted: m })
}


// funcion de administradores en el grupo 
if (command === "administradores") {
let random = `𝗔𝗾𝘂𝗶 𝗺𝗼𝘀𝘁𝗿𝗮𝗿𝗲𝗺𝗼𝘀 𝘂𝗻𝗮 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿𝗲𝘀 𝗱𝗲 𝗰𝗮𝗱𝗮 𝗴𝗿𝘂𝗽𝗼, 𝗽𝗼𝗿 𝘀𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝗱𝘂𝗱𝗮𝘀 𝗽𝗮𝗿𝗮 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗮𝗿 𝗰𝗼𝗻 𝗲𝗹𝗹𝗼𝘀...

*╔══════════════*
*║* 🌍📱🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕃𝕖𝕘𝕖𝕟𝕕𝕤 🐉 🎮📱🌍
*║* • *𝗝𝘂𝗮𝗻1986*
*║* 🟢 wa.me/+34636445091
*║*
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*║* • *𝗔𝗻𝗱𝗿𝗲𝘀𝘀𝘀21*
*║* 🟢 wa.me/+573244430266
*║*
*║* • 𝗔𝗻𝗱𝗲𝗿𝘀𝗼𝗻
*║* 🟢 wa.me/+51987840645
*║*
*║* • 𝗠𝗮𝘅𝗶𝗺𝘂𝘀
*║* 🟢 wa.me/+51924171191
*║*  
*╚══════════════*

*╔══════════════*
*║* 🌍🐉👨‍👩‍👧‍👧 𝔽𝕒𝕞𝕚𝕝𝕚𝕒 𝕊𝕒𝕚𝕪𝕒𝕟 👨‍👩‍👧‍👧🐉🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*║* • 𝗔𝗻𝗱𝗿𝗲𝘀 
*║* 🟢 wa.me/+573125544346
*║* 
*╚══════════════*

*╔══════════════*
*║* 🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔽𝕠𝕣𝕥𝕟𝕚𝕥𝕖 🐉
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║* 
*╚══════════════*

*╔══════════════*
*║* 🌍🐉🐲 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℝ𝕠𝕝 🐲🐉🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║* 
*╚══════════════*

*╔══════════════*
*║* 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕤𝕡𝕒𝕣𝕜𝕚𝕟𝕘 𝕫𝕖𝕣𝕠 🐉🎮🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║* 
*╚══════════════*

*╔══════════════*
*║* 🌍🐉🦹‍♂️ 𝕍𝕚𝕝𝕝𝕒𝕟𝕠𝕤 𝕕𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 🐉🦹‍♂️🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║* 
*╚══════════════*

*╔══════════════*
*║* 🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕏𝕖𝕟𝕠𝕧𝕖𝕣𝕤𝕖 🐉
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║* 
*╚══════════════*

*╔══════════════*
*║* 🌍🐉📹 𝕍𝕚𝕕𝕖𝕠𝕤 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 📹🐉🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*║* • 𝗔𝗻𝗱𝗿𝗲𝘀 
*║* 🟢 wa.me/+573125544346
*║*
*║* • 𝗗𝗲𝗮𝘁𝗵 𝗪𝗵𝗶𝘁𝗲
*║* 🟢 wa.me/+595985678831
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🐲🐉𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕊𝕥𝕚𝕔𝕜𝕖𝕣𝕤🐉🐲🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*║* • 𝗔𝗻𝗱𝗿𝗲𝘀 
*║* 🟢 wa.me/+573125544346
*║*
*║* • 𝗩𝗶𝗿𝘂𝘀𝗗𝗷
*║* 🟢 wa.me/+34690242348
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🐉🎨 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕕𝕚𝕓𝕦𝕛𝕠𝕤 🎨🐉🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🐉 𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔾𝔼ℕ𝕂𝕀𝕊ℍ𝕀ℕ 𝕊ℚ𝕌𝔸𝔻ℝ𝔸 🐉🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║* 
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍📊🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝕖𝕟𝕔𝕦𝕖𝕤𝕥𝕒𝕤 🐉📊🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║*
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝕓𝕒𝕝𝕝 𝕜𝕒𝕜𝕒𝕣𝕠𝕥 🐉🎮🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║*
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝔻𝕠𝕜𝕜𝕒𝕟 𝕓𝕒𝕥𝕥𝕝𝕖 🐉🎮🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🎮🐉 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 𝔹𝕦𝕕𝕠𝕜𝕒𝕚 𝕋𝕖𝕟𝕜𝕒𝕚𝕔𝕙𝕚 🐉 🎮🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║*
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*╚══════════════*

*╔══════════════*
*║* 🌍🐉🐲 𝔽𝕒𝕟𝕤 𝔻𝕖 𝔻𝕣𝕒𝕘𝕠𝕟 𝔹𝕒𝕝𝕝 ℤ 𝕂𝕒𝕚 🐲🐉🌍
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║*
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*║* • 𝗠𝗮𝘅𝗶𝗺𝘂𝘀
*║* 🟢 wa.me/+51924171191
*║*
*╚══════════════*

*╔══════════════*
*║* 🐉🎮𝔻ℝ𝔸𝔾𝕆ℕ 𝔹𝔸𝕃𝕃 𝔽𝕀𝔾𝕋ℍ𝔼ℝℤ🎮🐉
*║* • *Juan1986*
*║* 🟢 wa.me/+34636445091
*║*
*║* • 𝗚𝗼𝗸𝘂
*║* 🟢 wa.me/+34686630246
*║*
*╚══════════════*
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTgyNzQ1MjBf/administradores.j pg" }, caption: random }, { quoted: m })
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
conn.reply('34636445091@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
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
let tuto = `𝗕𝘂𝘀𝗰𝗮𝘀 𝗲𝘀𝘁𝗮𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗱𝗼
𝗱𝗲 𝗹𝗮𝘀 𝗻𝗼𝘃𝗲𝗱𝗮𝗱𝗲𝘀 𝘆 𝗻𝗼𝘁𝗶𝗰𝗶𝗮𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹? 𝗘𝗻 𝗲𝗹 𝘃𝗶𝗱𝗲𝗼 𝗱𝗲 𝗮𝗿𝗿𝗶𝗯𝗮 𝘁𝗲 𝗱𝗲𝗷𝗼 𝗹𝗼 𝗾𝘂𝗲 𝗽𝘂𝗲𝗱𝗲𝘀 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗿.. 𝗨𝗻 𝗰𝗮𝗻𝗮𝗹 𝗲𝗰𝗵𝗼 𝗽𝗼𝗿 𝘂𝗻 𝗳𝗮𝗻 𝗽𝗮𝗿𝗮 𝗼𝘁𝗿𝗼𝘀 𝗳𝗮𝗻𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹...

𝗣𝘂𝗹𝘀𝗲𝗻 𝗮 𝘀𝗲𝗴𝘂𝗶𝗿 𝗽𝗮𝗿𝗮 𝗲𝘀𝘁𝗮𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗱𝗼𝘀 𝗱𝗲 𝗹𝗮𝘀 𝗻𝗼𝘃𝗲𝗱𝗮𝗱𝗲𝘀 👇👇
*https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w*

𝗦𝗶 𝘁𝗲𝗻𝗲𝗶𝘀 𝗱𝘂𝗱𝗮𝘀 𝗲𝘀𝗰𝗿𝗶𝗯𝗶𝗿 𝗮𝗹 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿
* • *Juan1986*
* 🟢 wa.me/+34636445091

𝗘𝘀𝘁𝗼 𝗮 𝘀𝗶𝗱𝗼 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗴𝗿𝗮𝗰𝗶𝗮𝘀 𝗮 𝗕𝘆 Juan𝟏𝟗𝟖𝟔

`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDc1MzI5ODFf/Noticias%20dragon%20ball.mp4" }, caption: tuto }, { quoted: m })
}
  
// video tutorial curiosidades dragon ball
if (command === "curiosidadesdragonball") {
let tuto = `𝗕𝘂𝘀𝗰𝗮𝘀 𝗲𝘀𝘁𝗮𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗱𝗼
𝗱𝗲 𝗹𝗮𝘀 𝗰𝘂𝗿𝗶𝗼𝘀𝗶𝗱𝗮𝗱𝗲𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹? 𝗘𝗻 𝗲𝗹 𝘃𝗶𝗱𝗲𝗼 𝗱𝗲 𝗮𝗿𝗿𝗶𝗯𝗮 𝘁𝗲 𝗱𝗲𝗷𝗼 𝗹𝗼 𝗾𝘂𝗲 𝗽𝘂𝗲𝗱𝗲𝘀 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗮𝗿.. 𝗨𝗻 𝗰𝗮𝗻𝗮𝗹 𝗲𝗰𝗵𝗼 𝗽𝗼𝗿 𝘂𝗻 𝗳𝗮𝗻 𝗽𝗮𝗿𝗮 𝗼𝘁𝗿𝗼𝘀 𝗳𝗮𝗻𝘀 𝗱𝗲 𝗱𝗿𝗮𝗴𝗼𝗻 𝗯𝗮𝗹𝗹...

𝗣𝘂𝗹𝘀𝗲𝗻 𝗮 𝘀𝗲𝗴𝘂𝗶𝗿 𝗽𝗮𝗿𝗮 𝗲𝘀𝘁𝗮𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝗱𝗼𝘀 𝗱𝗲 𝗹𝗮𝘀 𝗻𝗼𝘃𝗲𝗱𝗮𝗱𝗲𝘀 👇👇
*https://whatsapp.com/channel/0029VaQghZyAInPcWuTHOR3V*

𝗘𝘀𝘁𝗼 𝗮 𝘀𝗶𝗱𝗼 𝗽𝗼𝘀𝗶𝗯𝗹𝗲 𝗴𝗿𝗮𝗰𝗶𝗮𝘀 𝗮 𝗕𝘆 Juan𝟏𝟗𝟖𝟔

`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDc1MzI5ODJf/Curiosidades%20dragon%20ball.mp4" }, caption: tuto }, { quoted: m })
}

// video tutorial añadir usuarios
if (command === "añadirusuario") {
let tuto = `*Tus amigos le gusta dragón ball, WhatsApp tiene  de la opción, puedes añadir usuarios de desde tu agenda.. Arriba te dejo el video tutorial y te explicó como se hace, funciona en todos los grupos de esta comunidad*

*Esto a sido posible gracias a By Juan1986*`
await conn.sendMessage(m.chat, { video: { url: "https://od.lk/s/NTZfNDc1MzI5ODBf/A%C3%B1adirUsuariosAlGrupo.mp4" }, caption: tuto }, { quoted: m })
}


//grupos nuevos de anime, sugerencia
if (command === "anime"  || command === "animesnuevos" || command === "nuevoanime") {
let random = `¿𝑻𝒊𝒆𝒏𝒆𝒔 𝒖𝒏𝒂 𝒊𝒅𝒆𝒂 𝒑𝒂𝒓𝒂 𝒖𝒏 𝒈𝒓𝒖𝒑𝒐 𝒅𝒆 𝒂𝒏𝒊𝒎𝒆? 𝑩𝒖𝒔𝒄𝒂𝒎𝒐𝒔 𝒏𝒖𝒆𝒗𝒐𝒔 𝒈𝒓𝒖𝒑𝒐𝒔 𝒅𝒆 𝒂𝒏𝒊𝒎𝒆𝒔 𝒑𝒂𝒓𝒂 𝒍𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅, 𝒕𝒆𝒏𝒆𝒎𝒐𝒔 𝒍𝒂 𝒔𝒐𝒍𝒖𝒄𝒊𝒐𝒏, 𝒉𝒂𝒚 𝒖𝒏𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒆 𝒕𝒆𝒏𝒆𝒓 𝒆𝒍 𝒂𝒏𝒊𝒎𝒆 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔...  𝑪𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅:

https://chat.whatsapp.com/DggMS1eGWZpGlMayylSpoQ

  𝑯𝒂𝒃𝒍𝒂 𝒄𝒐𝒏 𝒆𝒍 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓:   

• *Juan1986*
🟢 wa.me/+34636445091 
`
await conn.sendMessage(m.chat, { image: { url: "https://od.lk/s/NTZfNTgyODY4NjBf/Anime%20fans.jpg" }, caption: random }, { quoted: m })
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

handler.command = ["menu2", "menucompleto", "menuauxiliar", "noticiasdragonball", "menubiografia", "biografias","menubiografias", "goku", "biografíagoku", "biografiagoku", "goten", "biografíagoten", "biografiagoten", "krilin", "biografíakrilin", "biografiakrilin", "bulma", "biografíabulma", "biografiabulma", "chichi", "biografíachichi", "biografiachichi", "freezer", "biografíafreezer", "biografiafreezer", "Celula", "celula", "biografíacelula", "biografiacelula", "Jiren", "biografíajiren", "biografiajiren", "Gohan", "biografíagohan", "biografiagohan", "trunks", "biografíatrunks", "biografiatrunks", "vegeta", "biografíavegeta", "biografiavegeta", "hit", "biografíahit", "biografiahit", "beerus", "biografíabeerus", "biografiabeerus", "whis", "biografíawhis", "biografiawhis", "broly", "biografíabroly", "biografiabroly", "zeno", "biografíazeno", "biografiazeno", "gransacerdote", "biografíagransacerdote", "biografiagransacerdote", "gokublack", "biografíagokublack", "biografiagokublack", "majinbuu", "biografíamajinbuu", "biografiamajinbuu", "piccolo", "biografíapiccolo", "biografiapiccolo", "bra", "biografíabra", "biografiabra", "curiosidadesdragonball", "videl", "biografíavidel", "biografiavidel", "reyvegeta", "biografíareyvegeta", "biografiareyvegeta", "baby", "biografíababy", "biografiababy", "drgero", "biografíadrgero", "biografiadrgero", "janemba", "biografíajanemba", "biografiajanemba", "giru", "biografíagiru", "biografiagiru", "cooler", "biografíacooler", "biografiacooler", "turles", "biografíaturles", "biografiaturles", "bardock", "biografíabardock", "biografiabardock", "slug", "biografíaslug", "biografiaslug", "zamas", "biografíazamas", "biografiazamas", "bibidi", "biografíabibidi", "biografiabibidi", "babidi", "biografíababidi", "biografiababidi", "synshenron", "biografíasynshenron", "biografiasynshenron", "nuovashenron", "biografíanuovashenron", "biografianuovashenron", "hazeshenron", "biografíahazeshenron", "biografiahazeshenron", "naturonshenron", "biografíanaturonshenron", "biografianaturonshenron", "rageshenron", "biografíarageshenron", "biografiarageshenron", "oceanusshenron", "biografíaoceanusshenron", "biografiaoceanusshenron", "eisshenron", "biografíaeisshenron", "biografiaeisshenron", "uub", "biografíauub", "biografiauub", "añadirusuario", "gine", "biografíagine", "biografiagine", 'appstickers', 'menuaudio', 'menuaudios', "openingmenu", "menuopening", 'appsticker', 'canal', 'canales', 'dar', 'grupos', 'gruposoficiales', 'support', 'reglas', 'normas', "anime", "animesnuevos", "nuevoanime", 'soporte', 'reglamento', 'encuesta',  'encuestas', 'dragónballencuestas', 'dragonballencuestas', 'canaldb',  'dragónballtelegram',  'dragonballtelegram', 'administradores'];

export default handler;
  
