let WAMessageStubType = (await import('@whiskeysockets/baileys')).default;
import fetch from 'node-fetch';
import PhoneValidator from '../lib/PhoneValidator.js';
const phoneValidator = new PhoneValidator();
function resolveLidToJid(rawId) {
if (!rawId) return null;
if (rawId.endsWith('@s.whatsapp.net')) return rawId;
if (rawId.endsWith('@lid')) {
const lidKey = rawId.replace('@lid', '');
const detection = phoneValidator.detectPhoneInLid(lidKey);
if (detection.isPhone && detection.jid) {
return detection.jid;
}
return rawId;
}
if (/^\d+$/.test(rawId)) {
return `${rawId}@s.whatsapp.net`;
}

return rawId;
}

async function getUserName(conn, jid) {
try {
const user = global.db.data.users[jid];
if (user && typeof user.name === 'string' && user.name.trim() && !/undef|undefined|null|nan/i.test(user.name)) {
return user.name.trim();
}

const contactName = await conn.getName(jid);
if (contactName) return contactName;

return jid.split('@')[0];
} catch {
return jid.split('@')[0];
}
}

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return true;

let imgWelcome = 'https://od.lk/s/NTZfNDg0OTg3Mzlf/GokuBotWelcome.jpg';
let imgBye = 'https://od.lk/s/NTZfNDc2MzMxMDJf/menu2_GokuBot.jpg';

let chat = global.db.data.chats[m.chat];
const getMentionedJid = () => {
return m.messageStubParameters.map(param => resolveLidToJid(param));
};

let whoRaw = m.messageStubParameters[0];
let who = resolveLidToJid(whoRaw);
let userName = await getUserName(conn, who);

let total = groupMetadata.participants.length;

if (chat.welcome && m.messageStubType === 27) {
await conn.sendMessage(m.chat, {
image: { url: imgWelcome },
caption: `
*╔══════════════*
*║  Bienvenido/a saiyan* 
*║  @${userName} 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘,*
*║  𝚜𝚒𝚎𝚗𝚝𝚎𝚝𝚎 𝚌𝚘𝚖𝚘 𝚎𝚗 𝚜𝚞 𝚌𝚊𝚜𝚊,*
*║  𝚙𝚎𝚛𝚘 𝚊𝚗𝚝𝚎𝚜 𝚕𝚎𝚎 𝚕𝚊𝚜 𝚛𝚎𝚐𝚕𝚊𝚜*
*║  𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘...*
*║  𝚙𝚘𝚗𝚒𝚎𝚗𝚍𝚘 /𝚛𝚎𝚐𝚕𝚊𝚜,*
*║  𝚙𝚘𝚛 𝚌𝚒𝚎𝚛𝚝𝚘 𝚝𝚎𝚗𝚎𝚖𝚘𝚜*
*║  𝚞𝚗 𝚋𝚘𝚝 𝚗𝚘 𝚝𝚎 𝚊𝚜𝚞𝚜𝚝𝚎𝚜 𝚇𝙳*
*╚══════════════*

\t＃ *Usuario* : @${userName}
\t＃ *Participantes* : *${total}* en total.

> ${textbot}`.trim(),
mentions: getMentionedJid()
}, { quoted: fkontak });
}

if (chat.welcome && (m.messageStubType === 28 || m.messageStubType === 32)) {
await conn.sendMessage(m.chat, {
image: { url: imgBye },
caption: `
*╔══════════════*
*║   Se fue el saiyan* 
*║   @${userName} un saiyan*
*║   de clase baja, no* 
*║   pudisteis con* 
*║   nosotros,* 
*║   un placer haberle* 
*║   tenido en*
*║   el grupo, si*
*║   vuelves entrena*
*║   antes, para estar a*
*║   la altura, insecto*
*║*
*║ hasta la vista Saiyan* 
*║ 👋🏻🐲* 
*╚══════════════*

\t＃ *Usuario* : @${userName}
\t＃ *Participantes* : *${total}* en total

> ${textbot}`.trim(),
mentions: getMentionedJid()
}, { quoted: fkontak });
}
}
