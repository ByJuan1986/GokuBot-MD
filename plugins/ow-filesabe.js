import fs from 'fs'
import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
import { unlinkSync, existsSync } from 'fs'

const exec = promisify(_exec).bind(cp)
const handler = async (m, { conn, text, command, usedPrefix, isROwner }) => {
if (!global.db.data.chats[m.chat].fOwners && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ owners ]* estan desactivados...` }, { quoted: m })
}

if (!isROwner) return
try {
const ar = Object.keys(plugins)
const ar1 = ar.map(v => v.replace('.js', ''))
switch (command) {
case 'gplugin': case 'gplug': {
if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba el nombre del nuevo plugin respondiendo un mensaje programado.` }, { quoted: m })
if (!m.quoted || !m.quoted.text) return conn.sendMessage(m.chat, { text: `📍  Debe de responder el mensaje con el contenido programado para guardarlo.` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `Guardando plugin, espere un momento...` }, { quoted: m })
const ruta = `plugins/${text}.js`
await fs.writeFileSync(ruta, m.quoted.text)
await conn.sendMessage(m.chat, { text: `✓  Se ha guardado el plugin en la ruta ../mx-files/FILES/JavaScript/${text}.js` }, { quoted: m })
break
}
case 'file+': {
if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba la ruta donde se guardara el archivo.\n- Recuerde responder al mensaje con un codigo específico.` }, { quoted: m })
if (!m.quoted?.text) return conn.sendMessage(m.chat, { text: `📍  Debe de escribir la ruta de guardado y responder a un mensaje con el programa para guardarlo.` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `Guardando contenido, espere un momento...` }, { quoted: m });
const path = `${text}.js`
await fs.writeFileSync(path, m.quoted.text)
await conn.sendMessage(m.chat, { text: `✓  El contenido se ha guardado con exito.` }, { quoted: m })
break
}
case 'file-': {
if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando mas el nombre de la ruta de un archivo para eliminarlo.` }, { quoted: m })
const file = text.trim()
if (!existsSync(file)) return conn.sendMessage(m.chat, { text: `📍  No se ha encontrado el archivo solicitado.\n- Verifique si esta bien escrito y vuelva a intentarlo.` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `Eliminando *${file}*, espere un momento...` }, { quoted: m })
unlinkSync(file)
conn.sendMessage(m.chat, { text: `✓  El archivo *${file}* se ha eliminado con exito.` }, { quoted: m })
break
}
case 'vplug': case 'vplugin': {
if (!text) return conn.sendMessage(m.chat, { text: `Ingrese el comando y escriba el nombre del plugin que desea ver el código.\n\n• Por ejemplo:\n*#${command}* menu` }, { quoted: m })
if (!ar1.includes(text)) return conn.sendMessage(m.chat, { text: `📍  No se ha encontrado el plugin solicitado.\n- Aqui te dejo una lista de plugins con nombre incluído.\n\n·─┄ · ✦ *Files : Plugins* ✦ ·\n- ${ar1.map(v => v).join`\n- `}` }, { quoted: m })
await conn.sendMessage(m.chat, { text: `Enviando codigo del plugin, espere un momento...` }, { quoted: m })
const filePath = `./plugins/${text}.js`
await conn.sendMessage(m.chat, { document: fs.readFileSync(filePath), mimetype: 'application/javascript', fileName: `${text}.js` }, { quoted: m })
break
}}} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}}

handler.command = ['gplugin', 'gplug', 'file+', 'file-', 'vplug', 'vplugin']
handler.rowner = true

export default handler