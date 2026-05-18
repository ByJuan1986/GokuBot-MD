import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import fs from 'fs'
import moment from 'moment-timezone'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix, args, command, __dirname, participants }) => {
try {
const user = global.db.data.users[m.sender] || {}
const name = await conn.getName(m.sender)
const thumbBot = Buffer.from(await (await fetch(`${global.gokuMenu}`)).arrayBuffer())
const thumbBot2 = Buffer.from(await (await fetch(`${global.gokuImg}`)).arrayBuffer())
const premium = user.premium ? '✓' : '✘'
const torucoin = user.torucoin || 0
const totalreg = Object.keys(global.db.data.users).length
const groupUserCount = m.isGroup ? participants.length : '-'
const groupsCount = Object.values(conn.chats).filter(v => v.id.endsWith('@g.us')).length
const uptime = clockString(process.uptime() * 1000)
const dFormato = new Date(new Date + 3600000)
const fecha = new Date(Date.now())
const locale = 'es-AR'
const dia = fecha.toLocaleDateString(locale, { weekday: 'long' })
const fechaTxt = fecha.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const hora = `${moment.tz('America/Buenos_Aires').format('HH:mm:ss')}`
const totalCommands = Object.keys(global.plugins).length
const userId = m.sender.split('@')[0]
const phone = PhoneNumber('+' + userId)
const pais = phone.getRegionCode() || 'Desconocido'
const perfil = await conn.profilePictureUrl(conn.user.jid, 'image').catch(() => `${ifoto}`)
let menuAll = `▢ *Prefix* : (/ # - . ,)
▢ *Usuario* : @${name}
▢ *Version* : ${vs}_mx-ls
▢ *Modo* : Privado.
${readMore}
⚶⭒ \`Informacion\` 
\t㊙ *${usedPrefix}menuaudio*
\t㊙ *${usedPrefix}grupos*
\t㊙ *${usedPrefix}grupos frikis*
\t㊙ *${usedPrefix}grupos telegram*
\t㊙ *${usedPrefix}grupos facebook*
\t㊙ *${usedPrefix}appsticker*
\t㊙ *${usedPrefix}dar numero*
\t㊙ *${usedPrefix}canal*
\t㊙ *${usedPrefix}noticiasdragonball*
\t㊙ *${usedPrefix}curiosidadesdragonball*
\t㊙ *${usedPrefix}añadirusuario*
\t㊙ *${usedPrefix}dragonballencuestas*
\t㊙ *${usedPrefix}dragonballtelegram*
\t㊙ *${usedPrefix}estado*
\t㊙ *${usedPrefix}ping*
\t㊙ *${usedPrefix}run*
\t㊙ *${usedPrefix}support*  =  text

⚶⭒ \`Biografia DB\`
\t📖 *${usedPrefix}biografíagoku*
\t📖 *${usedPrefix}biografíavegeta*
\t📖 *${usedPrefix}biografíagohan*
\t📖 *${usedPrefix}biografíacelula*
\t📖 *${usedPrefix}biografíafreezer*
\t📖 *${usedPrefix}biografíatrunks*
\t📖 *${usedPrefix}biografíajiren*


⚶⭒ \`Descargas\` 
\t⬇️ *${usedPrefix}play*  =  link/text
\t⬇️​ *${usedPrefix}ytmp3*  =  link/text
\t⬇️​ *${usedPrefix}ytmp4*  =  link/text
\t⬇️​ *${usedPrefix}github*  =  link
\t⬇️​ *${usedPrefix}mediafire*  =  link
\t⬇️​ *${usedPrefix}facebook*  =  link
\t⬇️ *${usedPrefix}instagram*  =  link
\t⬇️ *${usedPrefix}twitter*  =  link
\t⬇️ *${usedPrefix}spotify*  =  link
\t⬇️ *${usedPrefix}pinterest*  =  link
\t⬇️ *${usedPrefix}tiktok*  =  link
\t⬇️ *${usedPrefix}sly*  =  link

⚶⭒ \`Busquedas\` 
\t🔍 *${usedPrefix}fdroids*  =  text
\t🔍 *${usedPrefix}google*  =  text
\t🔍 *${usedPrefix}imagen*  =  text
\t🔍 *${usedPrefix}tiktoks*  =  text
\t🔍 *${usedPrefix}pinimg*  =  text
\t🔍 *${usedPrefix}spotifys*  =  text
\t🔍 *${usedPrefix}slys*  =  text
\t🔍 *${usedPrefix}apk*  =  text
\t🔍 *${usedPrefix}yts*  =  text
\t🔍 *${usedPrefix}apples*  =  text
\t🔍 *${usedPrefix}tenor*  =  text

⚶⭒ \`Grupos\` 
\t🐲 *${usedPrefix}link*
\t🐲 *${usedPrefix}inum*
\t🐲 *${usedPrefix}dnum*
\t🐲 *${usedPrefix}invocar*  =  text
\t🐲 *${usedPrefix}img+*  =  text
\t🐲 *${usedPrefix}name+*  =  text
\t🐲 *${usedPrefix}desc+*  =  text
\t🐲 *${usedPrefix}kick*  =  mention
\t🐲 *${usedPrefix}add*  =  number
\t🐲 *${usedPrefix}admin+*  =  mention
\t🐲 *${usedPrefix}admin-*  =  mention
\t🐲 *${usedPrefix}warn+*  = mention 
\t🐲 *${usedPrefix}warn-*  =  mention
\t🐲 *${usedPrefix}mute+*  =  mention
\t🐲 *${usedPrefix}mute-*  =  mention

⚶⭒ \`Convertidor\` 
\tᗢ *${usedPrefix}hd*  =  reply
\tᗢ *${usedPrefix}turl*  =  reply
\tᗢ *${usedPrefix}catbox*  =  reply
\tᗢ *${usedPrefix}togif*  =  reply
\tᗢ *${usedPrefix}jpg*  =  reply
\tᗢ *${usedPrefix}sticker*  =  reply

⚶⭒ \`Utilidad\` 
\tᗢ *${usedPrefix}lid*
\tᗢ *${usedPrefix}cid*  =  link
\tᗢ *${usedPrefix}pais*  =  text
\tᗢ *${usedPrefix}lids*  =  count

⚶⭒ \`Inteligencia\` 
\tᗢ *${usedPrefix}chatgpt*  =  text
\tᗢ *${usedPrefix}dolphin*  =  text
\tᗢ *${usedPrefix}claude*  =  text
\tᗢ *${usedPrefix}imagina*  =  text

⚶⭒ \`Random\` 
\tᗢ *${usedPrefix}wallp*
\tᗢ *${usedPrefix}rd messi*
\tᗢ *${usedPrefix}rd cr7*
\tᗢ *${usedPrefix}rd itzy*
\tᗢ *${usedPrefix}rd hallowwen*
\tᗢ *${usedPrefix}rd navidad*
\tᗢ *${usedPrefix}rd bts*
\tᗢ *${usedPrefix}rd universo*

⚶⭒ \`Juegos RPG\` 
\tᗢ *${usedPrefix}minar*
\tᗢ *${usedPrefix}talar*
\tᗢ *${usedPrefix}cazar*
\tᗢ *${usedPrefix}work*
\tᗢ *${usedPrefix}aventura*
\tᗢ *${usedPrefix}robar*
\tᗢ *${usedPrefix}coins*
\tᗢ *${usedPrefix}nivel*


⚶⭒ \`Owner\` 
\tᗢ *${usedPrefix}err*
\tᗢ *${usedPrefix}wx-*
\tᗢ *${usedPrefix}fix*
\tᗢ *${usedPrefix}++admin*
\tᗢ *${usedPrefix}full!*  ⧾  
\tᗢ *${usedPrefix}notch*  ⧾  text
\tᗢ *${usedPrefix}file+*  ⧾  query
\tᗢ *${usedPrefix}file-*  ⧾  query

> ${textbot}`
await conn.sendMessage(m.chat, { text: menuAll, contextInfo: { forwardingScore: 1, isForwarded: false, externalAdReply: { showAdAttribution: false, renderLargerThumbnail: true, title: botname, body: textbot, containsAutoReply: true, mediaType: 1, thumbnailUrl: global.gokuMenu, sourceUrl: null }}}, { quoted: m })
//conn.sendMessage(m.chat, { text: menuAll, mentions: [m.sender], contextInfo: { externalAdReply: { title: botname, body: textbot, thumbnail: thumbBot, sourceUrl: null, mediaType: 1, renderLargerThumbnail: true }}}, { quoted: m })
} catch (e) {
console.error(e)
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m })
}
}

handler.command = ['menu', 'help', 'menú']


export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

 function clockString(ms) {
const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
  }
