import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''

    if (!/image|video|webp/.test(mime))
      return m.reply('Responde a una imagen, video o sticker')

    if (/video/.test(mime)) {
      let dur = (q.msg || q).seconds || 0
      if (dur > 7) return m.reply('Duración máxima 7 segundos')
    }

    await conn.sendMessage(m.chat, {
      react: { text: '🕒', key: m.key }
    })

    let media = await q.download()
    if (!media) throw 'No se pudo obtener el archivo'

    let stiker = await sticker(
      media,
      global.packsticker || '',
      global.packsticker2 || ''
    )

    await conn.sendMessage(
      m.chat,
      { sticker: stiker },
      { quoted: m }
    )

    await conn.sendMessage(m.chat, {
      react: { text: '✅', key: m.key }
    })

  } catch (e) {
    await conn.sendMessage(m.chat, {
      react: { text: '❌', key: m.key }
    })
    m.reply('Error al crear el sticker')
  }
}

handler.help = ['s']
handler.tags = ['tools']
handler.command = ['s', 'sticker']

export default handler
