import uploadFile from '../goku/uploadFile.js'
import uploadImage from '../goku/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, {conn, usedPrefix, command}) => {
let espere = '╭❪ ⏳ ›› _Convirtiendo el contenido, espere un momento..._'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return conn.reply(m.chat, '╭❪ 💬 ›› _Ingrese el comando y responda a una imagen o un video para convertirlo en un enlace._', m)
  try {
  conn.reply(m.chat, `${espere}`, m)
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let img = await (await fetch(`${link}`)).buffer()
  let txt = `🌐 *\`ENLACE:\`*
- ${link}
`
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, fkontak)
} catch {
await conn.reply(m.chat, `${errorcode}`, m)
}}

handler.command = ['tourl', 'upload']
export default handler
function formatBytes(bytes) {
  if (bytes === 0) {
    return '0 B';
  }
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function shortUrl(url) {
        let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
        return await res.text()
}