let handler = async (m, { conn, text }) => {
   if (!text) return conn.reply(m.chat, '╭❪ 💬 ›› _Ingrese el comando y escriba el texto para cambiar la biografia del bot._', m)
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `╭❪ ✅ ›› _La biografia fue cambiada con exito._`, m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['nuevabiobot <teks>']
handler.tags = ['owner']
handler.command = ['nuevabiobot', 'descbot']
handler.owner = true

export default handler