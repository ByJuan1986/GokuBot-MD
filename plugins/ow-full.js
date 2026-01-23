let handler = async (m, { conn, usedPrefix, command, args }) => {
let users = global.db.data.users;
let userId = m.sender;
users[userId].torullave += 999;
users[userId].torupiesa += 999;
users[userId].toruvela += 999;
users[userId].tawbot += 999;
users[userId].torucora += 999;
users[userId].puntos += 999;
users[userId].torucoin += 999;
users[userId].toruexp += 999;
users[userId].toruregal += 999;
users[userId].torupiesa += 999;
users[userId].torupesc += 999;
users[userId].cupones += 999;
users[userId].boletos += 999;
await conn.sendMessage(m.chat, { text: 'Success' }, { quoted: m });
};

handler.command = ['full!'];
handler.rowner = true;
export default handler;

