import { tmpdir } from 'os'
import path, {join} from 'path'
import { existsSync, readdirSync, readFileSync, statSync, unlinkSync, watch } from 'fs'
let handler = async (m, {conn, usedPrefix: _p, __dirname, command, args}) => {
if (!global.db.data.chats[m.chat].fOwners && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ owners ]* estan desactivados...` }, { quoted: m })
}

await conn.sendMessage(m.chat, { text: `Limpieza de la carpeta tmp realizado...` }, { quoted: m })
await m.react("📍")

const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))))
return filename.map((file) => {
const stats = statSync(file)
unlinkSync(file)
})
} 

handler.command = ["tmp_d"]
handler.owner = true
export default handler

