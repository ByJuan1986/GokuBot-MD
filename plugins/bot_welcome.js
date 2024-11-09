import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
    let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => welcome)
    let pp2 = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => adios)
  let img = await (await fetch(`${pp}`)).buffer()
  let img2 = await (await fetch(`${pp2}`)).buffer()
  let listSections = [];
  listSections.push({ title: `¡¡¡BIENVENIDO AL GRUPO!!!`, highlight_label: `Popular YaemoriBot`, rows: [
{ header: "🌎 MENU COMPLETO 🌎", title: "", description: `• Para ver todos los comandos.`, id: `#menu`, },
{ header: "✅ REGISTRARSE ✅", title: "", description: `• Registrarte para usar mas comandos.`, id: `#reg`, },
{ header: "🌐 GRUPOS OFICIALES 🌐", title: "", description: `• Muestra los grupos principales del creador.`, id: `#grupos`, },
{ header: "🎖️ CREADOR PRINCIPAL 🎖️", title: "", description: `• Contacto del principal creador.`, id: `#creador`, },
        ],
    });
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
  let welcom = ''
    let wel = `
╭• ✎ ››› *\`¡¡¡BIENVENIDO!!!\`*
┃⊹ @${m.messageStubParameters[0].split`@`[0]}
╰─────────────────⎔

𔓕 *\`REGLAS:\`*
${groupMetadata.desc}

╭• ✎ ››› ${groupMetadata.subject}
╰• ✎ ››› _Evite ser eliminado..._ 
`
await conn.sendListB(m.chat, welcom, wel, `CLICK⁩`, gokuImgs, listSections, gokutick)
}

  if (chat.welcome && m.messageStubType == 28) {
   let bye = `
╭• ✎ ››› *\`¡¡UNO MENOS!!!\`*
┃⊹ @${m.messageStubParameters[0].split`@`[0]}
╰─────────────────⎔
`
await conn.sendButton(m.chat, bye, wm, gokuImgs, [['MENU ⫶☰', '#menu']], null, null, m)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `
╭• ✎ ››› *\`¡¡¡UNO MENOS!!!\`*
┃⊹ @${m.messageStubParameters[0].split`@`[0]}
╰─────────────────⎔
`
await conn.sendButton(m.chat, kick, wm, gokuImgs, [['MENU ⫶☰', '#menu']], null, null, m)
}}

