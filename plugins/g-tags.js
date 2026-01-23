const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].fGrupos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ grupos ]* estan desactivados...` }, { quoted: m })
}

if (usedPrefix == 'a' || usedPrefix == 'A') return;

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}

const pesan = args.join` `;
const oi = pesan ? `${pesan}` : `Mensionando a todos los participantes.`;
let teks = `\t〨  *M E N T I O N*\n- ${oi}\n\n`;
for (const mem of participants) {
teks += `⚶ @${mem.id.split('@')[0]}\n`;
}
teks += `\n> ${textbot}`;

const imgUrl = global.toruMenu;

await conn.sendMessage(m.chat, { 
image: { url: imgUrl }, 
caption: teks, 
mentions: participants.map((a) => a.id) 
});
};

handler.command = ['todos', 'tags', 'tagall'];
handler.admin = true;
handler.group = true;

export default handler;

  
