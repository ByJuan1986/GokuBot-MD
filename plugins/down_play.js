//Codigo elaborado por MBMD
import fetch from "node-fetch";
import yts from "yt-search";
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando y escriba el nombre o titulo de una cancion para buscarlo._'
let espere = '╭❪ ⏳ ›› _Buscando resultados, espere un momento..._'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
if (!text) return conn.reply(m.chat, pontexto,  m)
conn.reply(m.chat, espere, m)
try { 
const yt_play = await search(args.join(' '))
let txt = `
𔓕                        𔒝                        𔓕
𒐬 *TITULO:* ${yt_play[0].title}
𒐬 *PUBLICADO EN:* ${yt_play[0].ago}
𒐬 *TIEMPO:* ${secondString(yt_play[0].duration.seconds)}
𒐬 *ENLACE:* ${yt_play[0].url}
𔓕                        𔒝                        𔓕`

let listSections = []
listSections.push({
title: `𔒝 LISTA DE DESCSRGAS 𔒝`, highlight_label: `PlayList`,
rows: [
{
header: "⫶☰ PlayList",
title: "𔓕 Busqueda.",
description: `✎ Buscar mas canciones del cantante.`,
id: `#playlist ${text}`,
},
{
header: "⫹⫺ AUDIO",
title: "𔓕 Descargar.",
description: `✎ Audio en formato normal.`,
id: `#audio ${text}`,
},
{
header: "⫹⫺ VIDEO",
title: "𔓕 Descargar.",
description: `✎ Video en formato normal.`,
id: `#video ${text}`,
},
{
header: "⫹⫺ AUDIO : DOCUMENTO",
title: "𔓕 Descargar.",
description: `✎ Audio en formato de documento.`,
id: `#playdoc ${text}`,
},
{
header: "⫹⫺ VIDEO : DOCUMENTO",
title: "𔓕 Descargar.",
description: `✎ Video en formato de documento.`,
id: `#playdoc2 ${text}`,
},
],
})
let nulo = ''
await conn.sendListB(m.chat, nulo, txt, `⁩OPCIONES ⊏⊐`, yt_play[0].thumbnail, listSections, m)
} catch {
await conn.reply(m.chat, errorcode, m)
}}
handler.command = ['play', 'play2']
handler.register = true;
export default handler;
async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}
function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}
function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}