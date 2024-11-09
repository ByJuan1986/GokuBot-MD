let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw '⚠ *_️Ingrese el error ue desea reportar._*'
    if (text.length < 10) throw '⚠️ *_Especifique bien el error, mínimo 10 caracteres._*'
    if (text.length > 1000) throw '⚠️ *_Máximo 1000 caracteres para enviar el error._*'
    const teks = `
⎔ ── ⎔ *\`REPORTE\`* ⎔ ── ⎔
- *USUARIO:*
• wa.me/${m.sender.split`@`[0]}

- *TEXTO:*
• ${text}
`
await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, m, { mentions: conn.parseMention(teks) })
m.reply('╭❪ ✅ ›› _El reporte fue enviado a los creadores del bot._')
}
handler.help = ['reportar']
handler.tags = ['info']
handler.command = ['reporte', 'report', 'reportar', 'bug', 'error']

export default handler