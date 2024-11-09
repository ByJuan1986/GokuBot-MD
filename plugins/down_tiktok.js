import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando mas un enlace valido de un video de TikTok para descargarlo._'
let espere = '╭❪ ⏳ ›› _Descargando el video, espere un momento..._'
let aquitiene = '╭❪ ✅ ›› _¡¡Aqui tiene su video!!_'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
  if (!text) return m.reply(pontexto);
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) if (!text) return m.reply(`✧ Te falto el enlace de algun video de tiktok`);
  const texto = espere;
  try {

    const aa = {quoted: m, userJid: conn.user.jid};
    const prep = generateWAMessageFromContent(m.chat, {extendedTextMessage: {text: texto, contextInfo: {externalAdReply: {title: packname, body: wm, thumbnail: img2, sourceUrl: grupo1}, mentionedJid: [m.sender]}}}, aa);
    await conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id, mentions: [m.sender]});
    const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${args[0]}`);
    const desc1n = aquitiene;
    await conn.sendMessage(m.chat, {video: dataFn.data, caption: desc1n}, {quoted: fkontak});
  } catch (ee1) {
  try {
    const dataF = await tiktok.v1(args[0]);
    const desc1 = aquitiene;
    await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: desc1}, {quoted: fkontak});
  } catch (e1) {
    try {
      const tTiktok = await tiktokdlF(args[0]);
     const desc2 = aquitiene;
      await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: desc2}, {quoted: fkontak});
    } catch (e2) {
      try {
        const p = await fg.tiktok(args[0]);
    const te = aquitiene;
        await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: te}, {quoted: fkontak});
      } catch (e3) {
        try {
          const {author: {nickname}, video, description} = await tiktokdl(args[0]);
          const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
       const cap = aquitiene;
          await conn.sendMessage(m.chat, {video: {url: url}, caption: cap}, {quoted: fkontak});
        } catch {
          throw errorcode;
          }
        }
      }
    }
  }
};
handler.command = ['tiktok', 'ttk', 'tt'];
handler.register = true;
export default handler;

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return m.reply(pontexto);
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr( 'value' );
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
}
