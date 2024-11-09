var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '╭❪ 💬 ›› _Ingrese el comando y responda a una persona para eliminarlo del grupo._', m );
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';
    //const nn = conn.getName(m.sender);

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '╭❪ ❌ ›› _No me puedo eliminar solo._', m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '╭❪ ❌ ›› _No puedo eliminar al creador del grupo._', m );
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '╭❪ ❌ ›› _No puedo eliminar al creador del bot._', m);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick', 'ban']
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;