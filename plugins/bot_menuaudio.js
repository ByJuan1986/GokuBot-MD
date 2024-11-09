import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const d = new Date(new Date + 3600000);
  const locale = 'es-ES';
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const rtotal = Object.entries(global.db.data.users).length || '0'
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(850);
  const user = global.db.data.users[m.sender];
  const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': author, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': [img1,img2,img3,img4,img5].getRandom(), thumbnail: [img1,img2, img3, img4, img5].getRandom() ,sendEphemeral: true}}};

let txt = `
${fecha} : ${dia}
╭───────────────•
│⩽⩾ *Usuario:* ${taguser}
│⫹⫺ *Usuarios:* ${rtotal}
│⧉ *Registrados:* ${rtotalreg}
│⊏⊐ *Actividad:* ${uptime}
│⏍ *Creador:* _Punisher_
╰───────────────•

╭───────────────•
│💎 *Diamantes:* ${limit}
│⚡ *Exp:* ${exp}
│🪙 *Monedas:* ${money}
│🧧 *Tokens:* ${joincount}
│👑 *Nivel:* ${level}
│🥇 *Rango:* ${role}
╰───────────────•
${readMore}
> Escribe el comando sin prefijo.
╭───• *\`AUDIOS BOT\`*
│𝅦𔓕› __
╰───────────────•
`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "body": packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen1,imagen2,imagen3,imagen4,imagen5].getRandom(), "mediaUrl": [global.canal, global.grupo1].getRandom(), "sourceUrl": [global.canal, global.grupo1].getRandom()}}}, {quoted: fkon});
  } catch {
    conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m);
  }
};
handler.command = /^(menuaudio|menuaudios)$/i;
handler.register = true;
export default handler;