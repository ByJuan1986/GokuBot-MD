export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
let pp = './Menu2.jpg'

await m.reply(`Adios a todos, me voy del grupo, mi tiempo se termino aqui.`)
await this.groupLeave(m.chat)
chats.expired = null
}}

