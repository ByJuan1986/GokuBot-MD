import { canLevelUp, xpRange } from '../goku/levelling.js'
import { levelup } from '../goku/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0

let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
if (before !== user.level) {
m.reply(`*𔓕   ── \`NUEVO NIVEL\` ──   𔓕*

- *Nivel actual:* ${user.level}
- *Rango:* ${user.role}
`.trim())
    }
} 