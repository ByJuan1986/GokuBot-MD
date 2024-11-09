import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const d = new Date(new Date + 3600000);
  const locale = 'es-ES';
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const rtotal = Object.entries(global.db.data.users).length || '0'
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(850);
  const user = global.db.data.users[m.sender];
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': [img1,img2,img3,img4,img5].getRandom(), thumbnail: [img1,img2, img3, img4, img5].getRandom() ,sendEphemeral: true}}};
const descargas = `╭───• *\`DESCARGAS\`*\n│𝅦𔓕› _*${usedPrefix}apk*_\n│𝅦𔓕› _*${usedPrefix}play*_\n│𝅦𔓕› _*${usedPrefix}video*_\n│𝅦𔓕› _*${usedPrefix}audio*_\n│𝅦𔓕› _*${usedPrefix}playdoc*_\n│𝅦𔓕› _*${usedPrefix}playdoc2*_\n│𝅦𔓕› _*${usedPrefix}fb*_\n│𝅦𔓕› _*${usedPrefix}ig*_\n│𝅦𔓕› _*${usedPrefix}gitclone*_\n│𝅦𔓕› _*${usedPrefix}twitter*_\n│𝅦𔓕› _*${usedPrefix}imagen*_\n│𝅦𔓕› _*${usedPrefix}pinterest*_\n│𝅦𔓕› _*${usedPrefix}tiktok*_\n│𝅦𔓕› _*${usedPrefix}playlist*_\n│𝅦𔓕› _*${usedPrefix}mediafire*_\n│𝅦𔓕› _*${usedPrefix}spotify*_\n╰───────────────•`
const converidor = `╭───• *\`CONVERTIDORES\`*\n│𝅦𔓕› _*${usedPrefix}togif*_\n│𝅦𔓕› _*${usedPrefix}toanime*_\n│𝅦𔓕› _*${usedPrefix}toimg*_\n│𝅦𔓕› _*${usedPrefix}tourl*_\n│𝅦𔓕› _*${usedPrefix}tts*_\n│𝅦𔓕› _*${usedPrefix}tovideo*_\n│𝅦𔓕› _*${usedPrefix}tomp3*_\n╰───────────────•`
const stickers = `╭───• *\`STICKERS\`*\n│𝅦𔓕› _*${usedPrefix}sticker*_\n│𝅦𔓕› _*${usedPrefix}wm*_\n╰───────────────•`
const ajustes = `╭───• *\`HERRAMIENTAS\`*\n│𝅦𔓕› _*${usedPrefix}chatgpt*_\n│𝅦𔓕› _*${usedPrefix}gemini*_\n│𝅦𔓕› _*${usedPrefix}dalle*_\n│𝅦𔓕› _*${usedPrefix}bard*_\n│𝅦𔓕› _*${usedPrefix}hd*_\n│𝅦𔓕› _*${usedPrefix}quemusica*_\n│𝅦𔓕› _*${usedPrefix}captura*_\n│𝅦𔓕› _*${usedPrefix}traducir*_\n╰───────────────•`
const busqueda = `│𝅦𔓕› _*${usedPrefix}ytsearch*_\n│𝅦𔓕› _*${usedPrefix}google*_\n│𝅦𔓕› _*${usedPrefix}animeinfo*_\n╰───────────────•`
const infos = `╭───• *\`INFORMACION\`*\n│𝅦𔓕› _*${usedPrefix}creador*_\n│𝅦𔓕› _*${usedPrefix}velocidad*_\n│𝅦𔓕› _*${usedPrefix}estado*_\n│𝅦𔓕› _*${usedPrefix}actividad*_\n│𝅦𔓕› _*${usedPrefix}grupos*_\n│𝅦𔓕› _*${usedPrefix}infobot*_\n╰───────────────•`
const rpgs = `╭───• *\`RPG\`*\n│𝅦𔓕› _*${usedPrefix}verificar*_\n│𝅦𔓕› _*${usedPrefix}robar*_\n│𝅦𔓕› _*${usedPrefix}cofre*_\n│𝅦𔓕› _*${usedPrefix}unreg*_\n│𝅦𔓕› _*${usedPrefix}work*_\n│𝅦𔓕› _*${usedPrefix}levelup*_\n╰───────────────•`
const grupos = `╭───• *\`GRUPOS\`*\n│𝅦𔓕› _*${usedPrefix}tagall*_\n│𝅦𔓕› _*${usedPrefix}kick*_\n│𝅦𔓕› _*${usedPrefix}promote*_\n│𝅦𔓕› _*${usedPrefix}demote*_\n│𝅦𔓕› _*${usedPrefix}banchat*_\n│𝅦𔓕› _*${usedPrefix}unbanchat*_\n│𝅦𔓕› _*${usedPrefix}link*_\n│𝅦𔓕› _*${usedPrefix}grupo abrir*_\n│𝅦𔓕› _*${usedPrefix}grupo cerrar*_\n│𝅦𔓕› _*${usedPrefix}*_\n│𝅦𔓕› _*${usedPrefix}inactivos*_\n│𝅦𔓕› _*${usedPrefix}kickinactivos*_\n│𝅦𔓕› _*${usedPrefix}invitar*_\n│𝅦𔓕› _*${usedPrefix}agregar*_\n│𝅦𔓕› _*${usedPrefix}*_\n│𝅦𔓕› _*${usedPrefix}infogroup*_\n│𝅦𔓕› _*${usedPrefix}hidetag*_\n╰───────────────•`
const propietario = `╭───• *\`PROPIETARIO\`*│𝅦𔓕› _*${usedPrefix}autoadmin*_\n│𝅦𔓕› _*${usedPrefix}update*_\n│𝅦𔓕› _*${usedPrefix}update2*_\n│𝅦𔓕› _*${usedPrefix}*_\n│𝅦𔓕› _*${usedPrefix}banuser*_\n│𝅦𔓕› _*${usedPrefix}unbanuser*_\n│𝅦𔓕› _*${usedPrefix}reporte*_\n│𝅦𔓕› _*${usedPrefix}restart*_\n│𝅦𔓕› _*${usedPrefix}salir*_\n│𝅦𔓕› _*${usedPrefix}join*_\n│𝅦𔓕› _*${usedPrefix}namebot*_\n│𝅦𔓕› _*${usedPrefix}fotobot*_\n│𝅦𔓕› _*${usedPrefix}descbot*_\n│𝅦𔓕› _*${usedPrefix}newgroup*_\n│𝅦𔓕› _*${usedPrefix}infinito*_\n│𝅦𔓕› _*${usedPrefix}get*_\n│𝅦𔓕› _*${usedPrefix}ip*_\n╰───────────────•`
let txt = `
${fecha} : ${dia}
╭───────────────•
│⩽⩾ *Usuario:* ${taguser}
│⫹⫺ *Usuarios:* ${rtotal}
│⧉ *Registrados:* ${rtotalreg}
│⊏⊐ *Actividad:* ${uptime}
│⏍ *Creador:* _Punisher_
│𔒝 *Edited by:* _MBMD_
╰───────────────•

╭───────────────•
│💎 *Diamantes:* ${limit}
│⚡ *Exp:* ${exp}
│🪙 *Monedas:* ${money}
│👑 *Nivel:* ${level}
│🥇 *Rango:* ${role}
╰───────────────•

${readMore}

${infos}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${descargas}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${convertidor}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${stickers}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${ajustes}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${rpgs}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${grupos}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${busqueda}
⊹ · · · · · · · · · · · · · · · · · · · · · ⊹
${propietario}
`;
   //await conn.sendButton(m.chat, txt, txt2, [imagen1,imagen2,imagen3,imagen4,imagen5].getRandom(), null, null, [['MD', md]], fkontak, m)
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "body": packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen1,imagen2,imagen3,imagen4,imagen5].getRandom(), "mediaUrl": [global.canal, global.grupo1].getRandom(), "sourceUrl": [global.canal, global.grupo1].getRandom()}}}, {quoted: fkon});
  } catch {
    conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m);
  }
};
handler.command = /^(menu|allmenu|menú|help|ayuda)$/i;
handler.register = true;
export default handler;