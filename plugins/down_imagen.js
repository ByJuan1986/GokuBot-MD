import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando y escriba un texto para buscarlo en Google._'
let espere = '╭❪ ⏳ ›› _Buscando imagenes, espere un momento..._'
if (!text) return conn.reply(m.chat, pontexto, m);
conn.reply(m.chat, espere, m)
const res = await googleImage(text);
const image = await res.getRandom();
const link = image;
const messages = [
['Google', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], 
['Google', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], 
['Google', wm, await res.getRandom(), [[]], [[]], [[]], [[]]], 
['Google', wm, await res.getRandom(), [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `Google`, 'GokuBot-MD', null, messages, m);
};
handler.command = ['image', 'imagen'];
handler.register = true;
export default handler;
