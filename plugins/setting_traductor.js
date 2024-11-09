import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {args, usedPrefix, command}) => {
  const msg = `╭❪ 💬 ›› _Ingrese el comando y escriba el texto que quiera traducir, tambien ponga el idioma de traduccion._\n\n- *\`Por ejemplo:\`*\n${usedPrefix + command} es Hello, how are you?`;
  if (!args || !args[0]) return m.reply(msg);
  let lang = args[0];
  let text = args.slice(1).join(' ');
  const defaultLang = 'es';
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  try {
    const result = await translate(`${text}`, {to: lang, autoCorrect: true});
    await m.reply(result.text);
  } catch {
    try {
      const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
      const loll = await lol.json();
      const result2 = loll.result.translated;
      await m.reply(result2);
} catch (e) {
      await conn.reply(m.chat, `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`, m);
    }
  }
};
handler.help = ['trad']
handler.tags = ['tools']
handler.command = ['translate', 'traducir', 'trad'];
handler.register = true
export default handler;
