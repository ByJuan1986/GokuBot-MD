import fetch from 'node-fetch';
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fAjustes && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ herramientas ]* estan desactivados...` }, { quoted: m })
}

if (!text) return conn.sendMessage(m.chat, { text: `ᗢ Proporcione el nombre de un pais.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* Argentina` }, { quoted: m });
try {
await m.react("⏰");
let api = `https://delirius-apiofc.vercel.app/tools/flaginfo?query=${text}`;
let response = await fetch(api);
let json = await response.json();
let datas = json.data;
let park = `〆  C O U N T R Y  :  D A T A

\t𝇈 📍 \`\`\`Informacion del país.\`\`\`

\t⧆ *Nombre* ╮ 
> ${datas.officialName} *(${text})*

\t⧆ *Organización* ╮ 
> ${datas.memberOf}

\t⧆ *Capital* ╮ 
> ${datas.capitalCity}

\t⧆ *Continente* ╮ 
> ${datas.continent}

\t⧆ *Población* ╮ 
> ${datas.population}

\t⧆ *Prefijo* ╮ 
> ${datas.callingCode}

\t⧆ *Moneda* ╮ 
> ${datas.currency}

\t\t📍 *Descripción:*
\t» ${datas.description}`;
let img = datas.image;
conn.sendMessage(m.chat, { image: { url: img }, caption: park }, { quoted: fkontak });
await m.react("✅")
} catch (e) {
await conn.sendMessage(m.chat, { text: `${e.message}` }, { quoted: m });
m.react('📍');
  }
};

handler.command = ['pais', 'flag'];
export default handler;
