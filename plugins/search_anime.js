import fetch from 'node-fetch'

var handler = async (m, { conn, usedPrefix, command, text }) => {

if (!text) return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y escriba el nombre del anime para buscarlo._`, m)
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) return conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m)

let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `*\`INFO - ANIME\`*
- Título: ${title_japanese}
- Capítulo: ${chapters}
- Transmisión: ${type}
- Estado: ${status}
- Volumes: ${volumes}
- Favorito: ${favorites}
- Puntaje: ${score}
- Miembros: ${members}
- Url: ${url}
- Autor: ${author}
- Fondo: ${background}
- Sinopsis: ${synopsis}
 ` 
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'anjime.jpg', '      🚩 *I N F O - A N I M E* 🚩\n\n' + animeingfo, fkontak, m)

} 
handler.help = ['infoanime'] 
handler.tags = ['anime'] 
handler.command = ['infoanime', 'animeinfo'] 

export default handler