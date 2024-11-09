const handler = async (m, {isPrems, conn}) => {
  const time = global.db.data.users[m.sender].lastcofre + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `🎁 Ya Reclamastes Tu Cofre\n⏰️Regresa En: *${msToTime(time - new Date())}* Para Volver A Reclamar`;

  const img = gokuImgs;
  global.db.data.users[m.sender].limit += 30;
  global.db.data.users[m.sender].money += 2300;
  global.db.data.users[m.sender].joincount += 10;
  global.db.data.users[m.sender].exp += 5000;

  const texto = `
*\`COFRE ABIERTO\`*

- 30 *Diamantes* 💎
- 10 *Tokens* 🧧
- 2300 *Monedas* 🪙
- 5000 *Exp*⚡
`;

  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };

  await conn.sendFile(m.chat, img, 'goku.jpg', texto, fkontak);
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'];
handler.level = 5;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}