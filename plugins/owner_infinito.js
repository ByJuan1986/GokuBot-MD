const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `╭❪ ✅ ›› _Listo, ahora tienes los recursos ilimitados..._`, mentions: [m.sender]}, {quoted: fkontak});
      global.db.data.users[m.sender].money = Infinity;
    global.db.data.users[m.sender].limit = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = ['ilimitado', 'infiniy', 'chetar'];
handler.rowner = true;
handler.fail = null;
export default handler;
