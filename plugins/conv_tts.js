import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
const defaultLang = 'es';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  let pontexto = '╭❪ 💬 ›› _Ingrese el comando y escriba un texto para convertirlo en un audio._'
  let lang = args[0];
  let text = args.slice(1).join(' ');
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted?.text) text = m.quoted.text;
  let res;
  try {
    res = await tts(text, lang);
  } catch (e) {
    m.reply(e + '');
    text = args.join(' ');
    if (!text) return conn.reply(m.chat, `${pontexto}`, m);
    res = await tts(text, defaultLang);
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true);
  }};
handler.command = ['tts', 'gtts'];
export default handler;
function tts(text, lang = 'es') {
  console.log(lang, text);
  return new Promise((resolve, reject) => {
    try {
      const tts = gtts(lang);
      const filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav');
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath));
        unlinkSync(filePath);
      });
    } catch (e) {
      reject(e);
    }
  });
}