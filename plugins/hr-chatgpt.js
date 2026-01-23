import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return conn.sendMessage(m.chat, { text: `🦈  Ingrese un texto para hablar con ChatGPT.\n\n⌕ Por ejemplo:\n*${usedPrefix + command}* Hola` }, { quoted: m })
await m.react("💧")
try {
let { data } = await axios.get(`https://api-hasumi.vercel.app/api/ai/chatgpt?text=${encodeURIComponent(text)}`)
let respuesta = `${data.texto}`

await conn.sendMessage(m.chat, { text: respuesta }, { quoted: m })
await m.react("🦈")
} catch (error) {
conn.sendMessage(m.chat, { text: `${error.message}` }, { quoted: m })
}}

handler.command = ["chatgpt", "gpt"]
export default handler
