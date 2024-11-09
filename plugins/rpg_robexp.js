const ro = 3000;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) {
  conn.reply(m.chat, `╭❪ ⏳ ›› _Espere ${msToTime(time - new Date())} para volver a usar el comando._`, m);
  return;
  }
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) {
  conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y mensione a una persona para robarle exp._`, m)
  return;
    };
  if (!(who in global.db.data.users)) { 
  conn.reply(m.chat, `╭❪ ❌ ›› _El participante no se encuentra en mi base datos, esto se debe a que no se ha registrado._`, m)
return;
  }
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.exp < rob) return conn.reply(m.chat, `- El participante: @${who.split`@`[0]} fue asaltado y le robaron ${ro} de exp.`, m, {mentions: [who]});
  global.db.data.users[m.sender].exp += rob;
  global.db.data.users[who].exp -= rob;
  conn.reply(m.chat, `╭❪ 💬 ›› _Acabas de robar ${rob} exp a @${who.split`@`[0]}`, m, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['rpg'];
handler.command = ['robar', 'rob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}