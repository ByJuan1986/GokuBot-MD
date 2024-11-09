import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import {mediafiredl} from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando mas un enlace valido de un archivo de Mediafire para descargarlo._'
let novalido = '╭❪ 📌 ›› _El enlace ingresado no es un enlace valido de un archivo de Mediafire._'
let espere = '╭❪ ✅ ›› _Descargando el archivo, espere un momento..._\n\n- _Si el archivo no se envia, es por que pesa demasiado._'
let errorcode = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`
if (!args[0]) return conn.reply(m.chat, pontexto, m)
if (!args[0].match(/mediafire/gi)) return conn.reply(m.chat, novalido, m)
try {
let { title, ext, aploud, size, dl_url } = await mediafiredl(args[0])
let txt = `⌬ *TITULO:* ${title}
⌬ *PESO:* ${size}
⌬ *PAQUETE:* ${ext}`
let img = await (await fetch('https://i.ibb.co/wLQFn7q/logo-mediafire.jpg')).buffer()
await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, fkontak, m)
await conn.reply(m.chat, espere, m)
await conn.sendFile(m.chat, dl_url, title, null, fkontak, null, { mimetype: ext, asDocument: true })
} catch {
await conn.reply(m.chat, errorcode, m)
}}
handler.command = ['mediafire', 'mdfire', 'mf']
export default handler