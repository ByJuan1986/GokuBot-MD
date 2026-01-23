import axios from 'axios';
import FormData from 'form-data';
import cheerio from 'cheerio';
const handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].fLogos && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ logos ]* estan desactivados...` }, { quoted: m })
}

if (!text) {
return conn.sendMessage(m.chat, { text: `ᗢ Proporcione un texto para crear un logo.\n\n\t⚶ Por ejemplo:\n*${usedPrefix + command}* toru` }, { quoted: m });
}
await m.react("⏰");
const modelos = {
logo1: 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html',
logo2: 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html',
logo3: 'https://en.ephoto360.com/advanced-glow-effects-74.html',
logo4: 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html',
logo5: 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html',
logo6: 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html',
logo7: 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html', 
logo8: 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html',
logo9: 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html',
logo10: 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html',
logo11: 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html',
logo12: 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html',
logo13: 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html',
logo14: 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html',
logo15: 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html',
logo16: 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html',
logo17: 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html',
logo18: 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html',
logo19: 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html',
logo20: 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html',
logo21: 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html',
logo22: 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html',
logo23: 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html',
logo24: 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html',
logo25: 'https://en.ephoto360.com/1917-style-text-effect-523.html',
logo26: 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html',
logo27: 'https://en.ephoto360.com/royal-text-effect-online-free-471.html',
logo28: 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html',
logo29: 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html',
logo30: 'https://en.ephoto360.com/create-a-cover-image-for-the-game-among-us-online-762.html',
logo31: 'https://en.ephoto360.com/foggy-rainy-text-effect-75.html',
logo32: 'https://en.ephoto360.com/graffiti-color-199.html',
logo33: 'https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html#google_vignette',
logo34: 'https://en.ephoto360.com/music-equalizer-text-effect-259.html',
logo35: 'https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html',
logo36: 'https://en.ephoto360.com/angel-wing-effect-329.html',
logo37: 'https://en.ephoto360.com/stars-night-online-1-85.html'
};

const modelo = modelos[command.toLowerCase()];

if (!modelo) {
return conn.sendMessage(m.chat, { text: `📍  No se ha encontrado el logo ( *${usedPrefix + command}* ), verifica si esta en la lista de logos.` }, { quoted: m });
};

const data = await ephoto(modelo, text);
await conn.sendMessage(m.chat, { image: { url: data }, caption: `${botname}\n> ${textbot}` }, { quoted: m });
};

async function ephoto(url, text) {
const formData = new FormData();
const initialResponse = await axios.get(url, {
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
}
});

const $ = cheerio.load(initialResponse.data);
const token = $('input[name=token]').val();
const buildServer = $('input[name=build_server]').val();
const buildServerId = $('input[name=build_server_id]').val();
formData.append('text[]', text);
formData.append('token', token);
formData.append('build_server', buildServer);
formData.append('build_server_id', buildServerId);

const postResponse = await axios({
url: url,
method: 'POST',
data: formData,
headers: {
'Accept': '*/*',
'Accept-Language': 'en-US,enq=0.9',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
'cookie': initialResponse.headers['set-cookie']?.join(' '),
...formData.getHeaders()
}
});

const $$ = cheerio.load(postResponse.data);
const formValueInput = JSON.parse($$('input[name=form_value_input]').val());
formValueInput['text[]'] = formValueInput.text;
delete formValueInput.text;

const finalResponse = await axios.post('https://en.ephoto360.com/effect/create-image', new URLSearchParams(formValueInput), {
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
'cookie': initialResponse.headers['set-cookie'].join(' ')
}
});

const dataFinal = buildServer + finalResponse.data.image;
return dataFinal;
};
handler.command = [
"logo1", "logo2", "logo3", 
"logo4", "logo5", "logo6", 
"logo7", "logo8", "logo9", 
"logo10", "logo11", "logo12", 
"logo13", "logo14", "logo15", 
"logo16", "logo17", "logo18", 
"logo19", "logo20", "logo21", 
"logo22", "logo23", "logo24", 
"logo25", "logo26", "logo27", 
"logo28", "logo29", "logo30", 
"logo31", "logo32", "logo33", 
"logo34", "logo35", "logo36", 
"logo37"
];
export default handler;

  
