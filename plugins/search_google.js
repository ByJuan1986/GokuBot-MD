import {googleIt} from '@bochilteam/scraper'
import google from 'google-it'
import axios from 'axios'
let handler = async (m, { conn, command, args, usedPrefix }) => {
const fetch = (await import('node-fetch')).default;
const text = args.join` `
if (!text) return conn.reply(m.chat, '╭❪ 💬 ›› _Ingrese el comando y escriba el texto que quiera buscar en google._', m)
conn.reply(m.chat, `╭❪ ⏳ ›› _Buscando resultados, espere un momento..._`, m)
const url = 'https://google.com/search?q=' + encodeURIComponent(text)
google({'query': text}).then(res => {
let teks = `*\`GOOGLE : GOKUBOT\`*\n\n`
for (let g of res) {
teks += `- ${g.title}\n- ${g.snippet}\n- ${g.link}\n\n`
}
conn.reply(m.chat, teks, m)
})
}
handler.help = ['google <búsqueda>']
handler.tags = ['buscador']
handler.command = ['google']
handler.register = true 
export default handler