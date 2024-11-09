import { canLevelUp, xpRange } from '../goku/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let img = gokuImgs
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
if (!canLevelUp(user.level, user.exp, global.multiplier)) {
let { min, xp, max } = xpRange(user.level, global.multiplier)
let txt = `
*𔓕   ────   𔒝   ────   𔓕*

- *Nombre:* ${name}
- *Nivel:* ${user.level}
- *EXP:* ${user.exp - min} / ${xp}
- *META:* ${max - user.exp} EXP
`
await conn.sendButton(m.chat, txt, wm, [['MENU ⫶☰', '#menu']], null, null, m)
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
let txt = `
*𔓕   ── \`NUEVO NIVEL\` ──   𔓕*

- *Nivel anterior:* ${before}
- *Nivel actual:* ${user.level}
- *Rango:* ${user.role}`

await conn.sendButton(m.chat, txt, wm, [['MENU ⫶☰', '#menu']], null, null, m)
handler.help = ['levelup']
handler.tags = ['rpg']
handler.command = ['nivel', 'lvl', 'levelup', 'level'] 
handler.register = true 
export default handler