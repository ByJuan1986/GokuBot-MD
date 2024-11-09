import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
const username = `${conn.getName(m.sender)}`
const basePrompt = `Tu nombre es GokuBot y parece haber sido creado por ByJuan1986. Tu versión actual es 1.9.9, Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertido, y te encanta aprender. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`
if (isQuotedImage) {
const q = m.quoted
const img = await q.download?.()
if (!img) {
console.error('Error: No image buffer available')
return conn.reply(m.chat, '╭❪ ❌ ›› _No se ha podido descargar la imagen._', m)}
const content = '╭❪ 💬 ›› _¿Que detalles contiene la imagen?_'
try {
const imageAnalysis = await fetchImageBuffer(content, img)
const query = '_Describete xd_'
const prompt = `${basePrompt}. La imagen es ${imageAnalysis.result}`
const description = await luminsesi(query, username, prompt)
await conn.reply(m.chat, description, m, fake)
} catch (error) {
console.error('Error al analizar la imagen:', error)
await conn.reply(m.chat, '╭❪ ❌ ›› _Ocurrio un error al procesar la imagen..._', m)}
} else {
if (!text) { return conn.reply(m.chat, `╭❪ 💬 ›› _Ingrese el comando y escriba un texto para hablar con chatgpt._`, m)}
try {
const query = text
const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
const response = await luminsesi(query, username, prompt)
await conn.reply(m.chat, response, m, fake)
} catch (error) {
console.error('Error al obtener la respuesta:', error)
await conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m)}}}

handler.help = ['chatgpt <texto>', 'ia <texto>']
handler.tags = ['ai']
handler.register = true
// handler.cookies = 1
handler.command = ['ia', 'chatgpt']

export default handler

// Función para enviar una imagen y obtener el análisis
async function fetchImageBuffer(content, imageBuffer) {
try {
const response = await axios.post('https://luminai.my.id', {
content: content,
imageBuffer: imageBuffer 
}, {
headers: {
'Content-Type': 'application/json' 
}})
return response.data
} catch (error) {
console.error('Error:', error)
throw error }}
// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: false
})
return response.data.result
} catch (error) {
console.error('Error al obtener:', error)
throw error }}

