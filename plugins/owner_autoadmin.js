const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('╭❪ ✅ ›› _Ya eres un admin._');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
   m.reply('╭❪ ✅ ›› _¡Ahora eres un admin en este grupo!_');
    let nn = conn.getName(m.sender);
  } catch {
    m.reply('╭❪ ❌ ›› _Ocurrio un error al procesar el autoadmin, intentalo de nuevo..._');
  }
};
handler.tags = ['owner'];
handler.help = ['autoadmin'];
handler.command = ['autoadmin'];
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
