const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }
  const pesan = args.join` `;
  const mensaje = `- ${pesan}`;
  let teks = `⟣─⎔ *\`INVOCACION\`* ⎔──⟢\n${mensaje}\n\n`;
  for (const mem of participants) {
    teks += `𔓕 @${mem.id.split('@')[0]}\n`;
    teks += `\n> 𝑮𝒐𝒌𝒖𝑩𝒐𝒕-𝑴𝑫 𝑩𝒚 𝑷𝒖𝒏𝒊𝒔𝒉𝒆𝒓.\n`;
      }
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.command = ['tagall', 'invocar'];
handler.admin = true;
handler.group = true;
export default handler;