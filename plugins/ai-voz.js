import axios from 'axios';

const modelos = {
  gura: { voice_id: "67ae0979-5d4b-11ee-a861-00163e2ac61b", voice_name: "Nahida" },
  onix: { voice_id: "67ae0f40-5d4b-11ee-a861-00163e2ac61b", voice_name: "Optimus Prime" },
  toru: { voice_id: "67ada61f-5d4b-11ee-a861-00163e2ac61b", voice_name: "Elon Musk" },
  ax: { voice_id: "c82964b9-d093-11ee-bfb7-e86f38d7ec1a", voice_name: "Eminem" }
};

const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X)",
  "Mozilla/5.0 (Linux; Android 8.0.0)"
];

function getRandomIp() {
  return Array.from({ length: 4 }).map(() => Math.floor(Math.random() * 256)).join('.');
}

async function generarTTS(texto, modelo) {
  if (!modelos[modelo]) throw new Error('Modelo no válido');

  const agent = userAgents[Math.floor(Math.random() * userAgents.length)];
  const { voice_id, voice_name } = modelos[modelo];

  const payload = {
    raw_text: texto,
    url: "https://filme.imyfone.com/text-to-speech/anime-text-to-speech/",
    product_id: "200054",
    convert_data: [{
      voice_id,
      speed: "1",
      volume: "50",
      text: texto,
      pos: 0
    }]
  };

  const res = await axios.post(
    'https://voxbox-tts-api.imyfone.com/pc/v1/voice/tts',
    payload,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'X-Forwarded-For': getRandomIp(),
        'User-Agent': agent
      }
    }
  );

  const audioUrl = res.data?.data?.convert_result?.[0]?.oss_url;
  if (!audioUrl) throw new Error('No se pudo generar el audio.');

  const audioBuffer = await axios.get(audioUrl, {
    responseType: 'arraybuffer'
  });

  return {
    buffer: audioBuffer.data,
    voice_name
  };
}

const handler = async (m, { text, conn, command, usedPrefix }) => {
if (!global.db.data.chats[m.chat].fAis && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ inteligencia artificial ]* estan desactivados...` }, { quoted: m })
}

  let listado = `• toru\n• gura\n• onix\n• ax`
  if (!text.includes('=')) {
    return conn.sendMessage(m.chat, { text: `ᗢ Proporciona un texto mas el tipo de voz segun tu preferencia.\n\n> Voces disponibles:\n${listado}\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* hola, como estas=toru` }, { quoted: m });
  }

  let [contenido, modelo] = text.split('=').map(v => v.trim().toLowerCase());



  try {
    const tts = await generarTTS(contenido, modelo);

    await conn.sendMessage(m.chat, {
      audio: tts.buffer,
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: m });

  } catch (e) {
    await conn.reply(m.chat, `${e.message}`, m);
  } finally {
    if (msg?.key) await conn.sendMessage(m.chat, { delete: msg.key });
  }
};

handler.command = ['voz'];
export default handler;
