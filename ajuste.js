import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import cheerio from 'cheerio';
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";

global.owner = [['573108625104', 'Punisher', true],
['16285002831', 'Colaborador 1', true],
['34686630246', 'Colaborador 2', true]];
global.mods = [];
global.prems = [];
global.mbmdConexiones = true;
global.isBaileysFail = false;
global.obtenerQrWeb = 0;
global.keepAliveRender = 0;
global.botNumberCode = "";
global.confirmCode = "";

global.Key360 = ["Gata_Dios"];
global.openai_key = 'sk-0';
global.openai_org_id = 'org-3';
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = "GataDiosV3";
global.itsrose = ["4b146102c4d500809da9d1ff"];
global.baileys = "@whiskeysockets/baileys";
global.apis = 'https://deliriussapi-oficial.vercel.app';

global.APIs = { xteam: 'https://api.xteam.xyz', dzx: 'https://api.dhamzxploit.my.id', lol: 'https://api.lolhuman.xyz', violetics: 'https://violetics.pw', neoxr: 'https://api.neoxr.my.id', zenzapis: 'https://api.zahwazein.xyz', akuari: 'https://api.akuari.my.id', akuari2: 'https://apimu.my.id', fgmods: 'https://api.fgmods.xyz', botcahx: 'https://api.botcahx.biz.id', ibeng: 'https://api.ibeng.tech/docs', rose: 'https://api.itsrose.site', popcat : 'https://api.popcat.xyz', xcoders : 'https://api-xcoders.site' },
global.APIKeys = { 'https://api.xteam.xyz': `${keysxteam}`, 'https://api.lolhuman.xyz': `${lolkeysapi}`, 'https://api.neoxr.my.id': `${keysneoxr}`, 'https://violetics.pw': 'beta', 'https://api.zahwazein.xyz': `${keysxxx}`, 'https://api.fgmods.xyz': 'DRLg5kY7', 'https://api-fgmods.ddns.net': 'fg-dylux', 'https://api.botcahx.biz.id': 'Admin', 'https://api.ibeng.tech/docs': 'tamvan', 'https://api.itsrose.site': 'Rs-Zeltoria', 'https://api-xcoders.site': 'Frieren'}

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;

global.official = [["5493873655135", 'MBMD | OFC', 1], ["5493873655168", 'MBMD | BOT', 1]];
global.mail = '';
global.desc = '';
global.desc2 = '';
global.country = '';
global.nameqr = 'GokuBot-MD'
global.namebot = '𝙂𝙤𝙠𝙪𝘽𝙤𝙩'
global.packname = '𔒝 𝙂𝙤𝙠𝙪𝘽𝙤𝙩 𔒝'
global.botname = 'ᘜㄖҜㄩ'
global.wm = '𔓕 𝘉𝘺𝘑𝘶𝘢𝘯1986 𔓕'
global.author = 'ByJuan1986'
global.vs = "7.9.5";
global.miscanales = { micanal: '120363368769201105@newsletter', micanal2: '120363318353263389@newsletter' };
global.wm = "IA";
global.nomorown = "573108625104";
global.botdate = `Fecha: ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`;
global.bottime = `Tiempo: ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;
global.multiplier = 85;

global.canalwa = 'https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w';

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})
