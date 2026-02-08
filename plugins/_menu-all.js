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
\tᗢ *${usedPrefix}estado*
\tᗢ *${usedPrefix}ping*
\tᗢ *${usedPrefix}run*
\tᗢ *${usedPrefix}canal*
\tᗢ *${usedPrefix}grupos*
\tᗢ *${usedPrefix}support*  =  text

⚶⭒ \`Descargas\` 
\tᗢ *${usedPrefix}play*  =  link/text
\tᗢ *${usedPrefix}ytmp3*  =  link/text
\tᗢ *${usedPrefix}ytmp4*  =  link/text
\tᗢ *${usedPrefix}github*  =  link
\tᗢ *${usedPrefix}mediafire*  =  link
\tᗢ *${usedPrefix}facebook*  =  link
\tᗢ *${usedPrefix}instagram*  =  link
\tᗢ *${usedPrefix}twitter*  =  link
\tᗢ *${usedPrefix}spotify*  =  link
\tᗢ *${usedPrefix}pinterest*  =  link
\tᗢ *${usedPrefix}tiktok*  =  link
\tᗢ *${usedPrefix}sly*  =  link

⚶⭒ \`Busquedas\` 
\tᗢ *${usedPrefix}fdroids*  =  text
\tᗢ *${usedPrefix}google*  =  text
\tᗢ *${usedPrefix}imagen*  =  text
\tᗢ *${usedPrefix}tiktoks*  =  text
\tᗢ *${usedPrefix}pinimg*  =  text
\tᗢ *${usedPrefix}spotifys*  =  text
\tᗢ *${usedPrefix}slys*  =  text
\tᗢ *${usedPrefix}apk*  =  text
\tᗢ *${usedPrefix}yts*  =  text
\tᗢ *${usedPrefix}apples*  =  text
\tᗢ *${usedPrefix}tenor*  =  text

⚶⭒ \`Grupos\` 
\tᗢ *${usedPrefix}link*
\tᗢ *${usedPrefix}inum*
\tᗢ *${usedPrefix}dnum*
\tᗢ *${usedPrefix}invocar*  =  text
\tᗢ *${usedPrefix}img+*  =  text
\tᗢ *${usedPrefix}name+*  =  text
\tᗢ *${usedPrefix}desc+*  =  text
\tᗢ *${usedPrefix}kick*  =  mention
\tᗢ *${usedPrefix}add*  =  number
\tᗢ *${usedPrefix}admin+*  =  mention
\tᗢ *${usedPrefix}admin-*  =  mention
\tᗢ *${usedPrefix}warn+*  = mention 
\tᗢ *${usedPrefix}warn-*  =  mention
\tᗢ *${usedPrefix}mute+*  =  mention
\tᗢ *${usedPrefix}mute-*  =  mention

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

⚶⭒ \`Menu audios\` 
	ᗢ *Espartaco*




𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .) 
	

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
