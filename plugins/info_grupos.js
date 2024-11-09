import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix, command }) => {
let grupos = `
*\`GRUPOS PRINCIPALES:\`*


${grupo1}

${grupo2}

${grupo3}

${grupo4}

${grupo5}

`

await conn.sendFile(m.chat, imagen3, "goku.jpg", grupos, fkontak, m)
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'gokugrupos', 'gruposgoku']
export default handler