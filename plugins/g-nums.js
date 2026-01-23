import { areJidsSameUser } from '@whiskeysockets/baileys'

var handler = async (m, { conn, text, participants, args, command }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for (let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if (global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time))

switch (command) {

case 'inum': 
if (total == 0) return conn.sendMessage(m.chat, { text: `📍  There are no inactive members in the group.` }, { quoted: m })
let memListos = `· ┄ · ⊸ 𔓕 *Inactive  :  Members*

\t 📍  \`\`\`Se han encontrado usuarios inactivos.\`\`\`

${sider.map(v => '• @' + v.replace(/@.+/, '')).join('\n')}

> Usa *${usedPrefix}dnum* para eliminarlos.`
conn.sendMessage(m.chat, { text: memListos, mentions: sider }, { quoted: m })
break

case 'dnum':  
if (total == 0) return conn.sendMessage(m.chat, { text: `📍  There are no inactive members in the group.` }, { quoted: m })
let eliminadosXd = `· ┄ · ⊸ 𔓕 *Kick  :  Members*

📍 Se eliminaran los siguientes comandos por cada 10 segundos...

${sider.map(v => '• @' + v.replace(/@.+/, '')).join('\n')}

> ${textbot}`
await conn.sendMessage(m.chat, { text: eliminadosXd, mentions: sider }, { quoted: m })
await delay(1 * 10000)
let chat = global.db.data.chats[m.chat]
chat.welcome = false
try {
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
{
let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedGhost.concat(res)
await delay(1 * 10000)
}} finally {
chat.welcome = true
}
break            
}
}

handler.command = ['inum', 'dnum']
handler.group = true
handler.botAdmin = true
handler.admin = true
handler.fail = null

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
