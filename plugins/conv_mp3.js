import {toAudio} from '../goku/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
const q = m.quoted ? m.quoted : m;
let pontexto = `╭❪ 💬 ›› _Ingrese el comando y responda a un video o nota de voz para convertirlo en un audio/mp3._`
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
const mime = (q || q.msg).mimetype || q.mediaType || '';
if (!/video|audio/.test(mime)) throw `${pontexto}`;
const media = await q.download();
if (!media) throw `${errorcode}`;
const audio = await toAudio(media, 'mp4');
if (!audio.data) throw `${errorcode}`;
conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.command = ['tomp3', 'toaudio'];
export default handler;