import {webp2mp4} from '../goku/webp2mp4.js';
import {ffmpeg} from '../goku/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando y responda a un sticker en movimiento para convertirlo en un video._'
let novalido = '╭❪ 📌 ›› _El contenido mensionado no es un sticker en movimiento, responda a un sticker en movimiento._'
let espere = '╭❪ ⏳ ›› _Convirtiendo el sticker en un video, espere un momento..._'
  if (!m.quoted) throw `${pontexto}`;
  const mime = m.quoted.mimetype || '';
  if (!/webp/.test(mime)) throw `${novalido}`;
  const media = await m.quoted.download();
  let out = Buffer.alloc(0);
  conn.reply(m.chat, espere, m)
  if (/webp/.test(mime)) {
    out = await webp2mp4(media);
  } else if (/audio/.test(mime)) {
    out = await ffmpeg(media, [
      '-filter_complex', 'color',
      '-pix_fmt', 'yuv420p',
      '-crf', '51',
      '-c:a', 'copy',
      '-shortest',
    ], 'mp3', 'mp4');
  }
  await conn.sendFile(m.chat, out, 'error.mp4', '╭❪ ✅ ›› _¡¡Aqui tiene su video!!_', m, 0, {thumbnail: out});
};
handler.command = ['tovideo', 'tomp4', 'mp4', 'togif'];
export default handler;