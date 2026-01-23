import fetch from 'node-fetch';

const handler = async (m, { conn, command, text, isAdmin }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

try {
if (!isAdmin) return conn.sendMessage(m.chat, { text: `ᗢ Solo los administradores pueden usar este comando.` }, { quoted: m });
const ownerId = (global.owner && global.owner[0] && global.owner[0][0]) ? `${global.owner[0][0]}@s.whatsapp.net` : null;

let target = m.mentionedJid?.[0] || m.quoted?.sender || text || '';
target = typeof target === 'object' ? (target[0] || '') : target;

if (target && !target.includes('@')) target = target.replace(/\D/g, '') + '@s.whatsapp.net';
if (!target) return conn.sendMessage(m.chat, { text: `${itoru} Responda a un usuario para mutearlo.` }, { quoted: m });
if (ownerId && target === ownerId) return conn.sendMessage(m.chat, { text: `El comando no sirve con admins y el propietario del grupo.` }, { quoted: m });
if (target === conn.user?.jid) return conn.sendMessage(m.chat, { text: `Solo puedes responder a los demas, no al bot.` }, { quoted: m });

if (!global.db) global.db = { data: { users: {} } };
if (!global.db.data) global.db.data = { users: {} };
if (!global.db.data.users) global.db.data.users = {};
if (!global.db.data.users[target]) global.db.data.users[target] = { mute: false };

const userData = global.db.data.users[target];

if (command === 'mute+') {
if (userData.mute === true) return conn.sendMessage(m.chat, { text: `ᗢ El usuario ya esta muteado.\n- Use *${usedPrefix}unmute* para desmutearlo.` }, { quoted: m });
userData.mute = true;
await conn.sendMessage(m.chat, { text: `✓  Usuario muteado con exito.` }, { quoted: m });
await m.react("✅")
return;
}

if (command === 'mute-') {
if (userData.mute === false) return conn.sendMessage(m.chat, { text: `ᗢ El usuario no esta muteado.\n- Use *${usedPrefix}mute* para mutearlo.` }, { quoted: m });
userData.mute = false;
await conn.sendMessage(m.chat, { text: `✓  Usuario desmuteado con exito.` }, { quoted: m });
await m.react("✅")
return;
}

return conn.sendMessage(m.chat, { text: `ᗢ Recuerde responder a un usuario para ejecutar el comando.` }, { quoted: m });
} catch (err) {
const e = typeof err === 'string' ? err : (err?.message || String(err));
try { await conn.reply(m.chat, `${e.message}`, m); } catch (__) { }
}
};

handler.command = ['mute-', 'mute+'];
handler.admin = true;
handler.botAdmin = true;


handler.before = async (m, { conn, isAdmin, isBotAdmin }) => {
try {
if (!m.isGroup) return;
if (!global.db?.data?.users[m.sender]) return;
if (!global.db.data.users[m.sender].mute) return;
if (!isBotAdmin) return;
if (isAdmin) return;

await conn.sendMessage(m.chat, { delete: m.key });
} catch {}
};

export default handler;
