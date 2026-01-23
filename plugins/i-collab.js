import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let titulo = `\t\t〩 *Colaboración* 〩

🦈 "Colaboración con *@T O R U*, un bot de *WhatsApp/Business* con multi funciones y que ofrece un uso util y facil."

\t＃ Detalles
● *Bot* : @T O R U
● *RUN* : Activo.
● *Modo* : Privado.
● *Numero* : wa.me/5493873634786
● *Anti-Private* : Activo.

> 📍  Se recomienda entrar a la comunidad de *@mx-community* para usar el bot en su principal chat grupal.`
await conn.sendMessage(m.chat, { text: titulo }, { quoted: m })
}
handler.command = ["collab"]
export default handler



