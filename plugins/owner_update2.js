import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'ByJuan1986';
const repo = 'GokuBot-MD';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `╭❪ ✅ ›› _¡¡El repositorio fue actualizado con exito!!_` }, { quoted: m })
   } 
  } catch (error) {
    await m.reply(`╭❪ ❌ ›› _Ocurrio un error al administrar el repositorio._\n- *Mensaje de error:*\n`, error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(update2|actualizacion)/i
handler.rowner = true
export default handler
