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
\t㊙ *${usedPrefix}canal*
\t㊙ *${usedPrefix}estado*
\t㊙ *${usedPrefix}ping*
\t㊙ *${usedPrefix}run*
\t㊙ *${usedPrefix}support*  =  text

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


⚶⭒ \`Menu audios\` 

• \`𝗩𝗼𝗰𝗲𝘀 𝗗𝗕𝗭\`🇪🇸
🔊 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀
🔊 𝗕𝘂𝗲𝗻𝗮𝘀 𝗻𝗼𝗰𝗵𝗲𝘀
🔊 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗚𝗼𝗸𝘂𝗕𝗼𝘁
🔊 𝗙𝗶𝗻𝗮𝗹 𝗳𝗹𝗮𝘀𝗵
🔊 𝗸𝗮𝗺𝗲𝗵𝗮𝗮
🔊 𝗕𝗮𝗯𝗮 𝗹𝗮 𝗰𝗮𝗻𝘀𝗶𝗻𝗮
🔊 𝗡𝗼 𝘀𝗼𝘆 𝘂𝗻 𝗵𝗲𝗿𝗼𝗲 𝗱𝗲 𝗹𝗮 𝗷𝘂𝘀𝘁𝗶𝗰𝗶𝗮
🔊 𝗚𝗼𝗿𝗱𝗶𝘁𝗼
🔊 𝗟𝗮 𝗰𝗮𝗹𝘃𝗶𝗰𝗶𝗲
🔊 𝗖𝗮𝗹𝘃𝗶𝘁𝗼

• \`𝗩𝗼𝗰𝗲𝘀 𝗗𝗕𝗭\`🇲🇽
🔊 𝗟𝗲𝘃𝗮𝗻𝘁𝗮𝘁𝗲
🔊 𝗬𝗼 𝘀𝘂𝗽𝗲𝗿𝗮𝗿𝗲
🔊 𝗚𝗼𝗸𝘂 𝗲𝘁𝗮 𝘃𝗮𝗶𝗻𝗮 𝗲𝘀 𝘀𝗲𝗿𝗶𝗮
🔊 𝗖𝗮𝗿𝗶𝘁𝗮 𝗲𝗺𝗽𝗮𝗽𝗮𝗱𝗮
🔊 𝗖𝗲𝗹𝗹 𝘁𝗶𝗲𝗻𝗲 𝗺𝗶𝗲𝗱𝗼
🔊 𝗜𝗻𝘀𝗲𝗰𝘁𝗼
🔊 𝗠𝗮𝗹𝗱𝗶𝗰𝗶𝗼𝗻
🔊 𝗟𝗮 𝗳𝗲 𝗱𝗲 𝗰𝗿𝗶𝘀𝘁𝗼 𝗱𝗲 𝗿𝗲𝘆
🔊 𝗠𝗮𝗹𝘁𝗶𝘁𝗼
🔊 𝗠𝗮𝗰𝗵𝗲𝘁𝗲
🔊 𝗦𝗲 𝘃𝗼𝗹𝘃𝗶𝗼 𝗰𝗮𝗻𝗼𝗻
🔊 𝗘𝗿𝗲𝘀 𝗳𝘂𝗲𝗿𝘁𝗲
🔊 𝗬𝗼 𝘀𝗼𝘆 𝗲𝗹 𝗺𝗮𝘀 𝗽𝗲𝗿𝗿𝗼𝗻
🔊 𝗤𝘂𝗲 𝗹𝗶𝗻𝗱𝗮 𝗾𝘂𝗲 𝗲𝘀𝘁𝗮𝘀
🔊 𝗩𝗶𝗲𝗷𝗼 𝘀𝗮𝗯𝗿𝗼𝘀𝗼
🔊 𝗢 𝗺𝘆 𝗴𝗼𝗼𝗱
🔊 𝗘𝘀𝗽𝗲𝗿𝗮 𝗩𝗲𝗴𝘂𝗲𝘁𝗮
🔊 𝗡𝗮𝗽𝗮 𝘀𝘂 𝗻𝗶𝘃𝗲𝗹
🔊 𝗖𝗮𝗱𝗮 𝗱𝗶𝗮 𝗺𝗮𝘀 𝗯𝗮𝘀𝗮𝗱𝗼
🔊 𝗬 𝗮 𝗺𝗶 𝗾𝘂𝗲
🔊 𝗬 𝗲𝘀𝘁𝗲 𝗾𝘂𝗶𝗲𝗻 𝗽𝗼𝗿𝗼𝗻𝗴𝗮 𝗲𝘀
🔊 𝗘𝗿𝗲𝘀 𝘂𝗻 𝗰𝗼𝗯𝗮𝗿𝗱𝗲
🔊 𝗬𝗮 𝗯𝗮𝘀𝘁𝗮
🔊 𝗠𝗶 𝗱𝗶𝗻𝗲𝗿𝗼
🔊 𝗟𝗼𝘀 𝘁𝗲𝗿𝗿𝗲𝗻𝗼𝘀 𝗱𝗲 𝗹𝗮 𝗮𝗯𝘂𝗲𝗹𝗶𝘁𝗮
🔊 𝗠𝗶 𝗻𝗶𝗻𝗮 𝗯𝗼𝗻𝗶𝘁𝗮
🔊 𝗧𝗮 𝗯𝗶𝗲𝗻
🔊 𝗠𝗼𝗻𝗱𝗼𝗻𝗴𝗼
🔊 𝗘𝗿𝗲𝘀 𝘂𝗻 𝘀𝗲𝗿 𝗶𝗻𝗰𝗿𝗲𝗶𝗯𝗹𝗲
🔊 𝗽𝗼𝗿 𝗳𝗶𝗻 𝗮𝗽𝗮𝗿𝗲𝗰𝗶𝘀𝘁𝗲
🔊 𝗠𝗲 𝗲𝘀𝘁𝗮𝗻 𝗺𝗶𝗿𝗮𝗻𝗱𝗼

• \`𝗔𝘂𝗱𝗶𝗼𝘀\`🇲🇽
🔊 𝗟𝗼𝘀 𝗽𝗶𝗻𝗴𝘂𝗶𝗻𝗼𝘀
🔊 𝗠𝗮𝗻𝗴𝗲𝗸𝘆𝗼
🔊 𝗠𝗮𝗿𝘆 𝗝𝗮𝗻𝗲
🔊 𝗛𝗮𝘆 𝗮𝗹𝗴𝘂𝗶𝗲𝗻 𝗲𝗻 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼
🔊 𝗤𝘂𝗲 𝗯𝗲𝗻𝗱𝗶𝗰𝗶𝗼𝗻
🔊 𝗤𝘂𝗲 𝗰𝗮𝗹𝗼𝗿
🔊 𝗤𝘂𝗲 𝗿𝗶𝗰𝗼
🔊 𝗦𝗶 𝗹𝗮 𝘃𝗲𝗿𝗱𝗮𝗱 𝗲𝘀 𝗾𝘂𝗲 𝘀𝗶
🔊 𝗧𝗮 𝗯𝗶𝗲𝗻

• \`𝗠𝗲𝗹𝗼𝗱𝗶𝗮𝘀\`
🔊 𝗖𝗮𝗻𝗰𝗶𝗼𝗻 𝗚𝗼𝗸𝘂𝗕𝗼𝘁
🔊 𝗔𝗹𝗮𝗿𝗺𝗮
🔊 𝗦𝗶𝗹𝗯𝗮𝗻𝗱𝗼
🔊 𝗗𝗷 𝗱𝗿𝗮𝗴𝗼𝗻
🔊 𝗙𝗲𝗹𝗶𝗰𝗶𝗱𝗮𝗱𝗲𝘀 𝗯𝗿𝗼
🔊 𝗝𝘂𝗺𝗮𝗻𝗷𝗶
🔊 𝗟𝗼𝗯𝗼
🔊 𝗣𝘀𝗶𝗰𝗼𝘀𝗶𝘀
🔊 𝗟𝗮 𝗱𝗲𝗽𝘂𝗿𝗮𝗰𝗶𝗼𝗻
🔊 𝗦𝗼𝘆 𝘂𝗻 𝗻𝗼𝗺𝗼
🔊 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗼𝗿
🔊 𝗦𝗲𝘅𝘂𝗮𝗹 
🔊 𝗺𝗺𝗺𝗺
🔊 𝗡𝗶𝗰𝗼
🔊 𝗠𝗶𝗿𝗮𝗿 𝗽𝗮𝗿𝗮 𝗮𝗱𝗲𝗹𝗮𝗻𝘁𝗲
🔊 𝗘𝘀𝘁𝗮 𝗹𝗲𝘆𝗲𝗻𝗱𝗼 𝗹𝗮 𝗯𝗶𝗯𝗹𝗶𝗮
🔊 𝗦𝗲𝘅𝗼
🔊 𝗢𝘆𝗲 𝗹𝗮 𝗴𝗮𝗹𝗹𝗶𝗻𝗮
🔊 𝗖𝗮𝗿𝗮𝗺𝗲𝗹𝗼
🔊 𝗦𝗵𝘂𝗻𝗸𝗮𝗻𝗶𝗱𝗼
🔊 𝗛𝗲𝗻𝘁𝗮𝗶

• \`𝗔𝘂𝗱𝗶𝗼𝘀\`🇪🇸
🔊 𝗘𝘀𝗽𝗮𝗿𝘁𝗮𝗰𝗼
🔊 𝗠𝗮𝗻𝗱𝗮𝗻𝗴𝗮 𝘃𝗶𝗹𝗹𝗮𝗻𝗰𝗶𝗰𝗼
🔊 𝗠𝗲𝗿𝗲𝗻𝗴𝘂𝗲
🔊 𝗣𝗼𝗿𝗾𝘂𝗲 𝘁𝗼𝗰𝗮𝘀
🔊 𝗤𝘂𝗲 𝘃𝗶𝗻𝗲 
🔊 𝗦𝗮𝗹𝗮𝗺𝗶
🔊 𝗧𝗲 𝘃𝗼𝘆 𝗮 𝗽𝗼𝗻𝗲𝗿 𝗳𝗶𝗻𝗮
🔊 𝗤𝘂𝗲 𝗰𝘂𝗹𝗶𝘁𝗼 𝘁𝗲𝗻𝗴𝗼
🔊 𝗨𝗻 𝗰𝗮𝗿𝗮𝗰𝗼𝗹
🔊 𝗥𝗶𝘀𝗮 𝗡𝗲𝗹𝘀𝗼𝗻

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
