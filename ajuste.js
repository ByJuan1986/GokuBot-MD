import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { load } from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
global.botNumberCode = '' 
global.confirmCode = ''
//agrega tu numero o mas.
global.owner = [
['573108625104', 'Punisher', true]
]

//Ignorar este apartado.
global.mods = []
global.prems = []

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.9'

//Nombres y mas.
global.sessions = 'GokuBotSession'
global.vs = '1.9.9'
global.nameqr = 'GokuBot-MD'
global.namebot = '𝙂𝙤𝙠𝙪𝘽𝙤𝙩'
global.packname = '𔒝 𝙂𝙤𝙠𝙪𝘽𝙤𝙩 𔒝'
global.botname = 'ᘜㄖҜㄩ'
global.wm = '𔓕 𝘉𝘺𝘑𝘶𝘢𝘯1986 𔓕'
global.author = 'ByJuan1986'


//Redes y mas
global.grupo1 = 'https://chat.whatsapp.com/L2vpoClRqYC6wsmGC0gFqS'
global.grupo2 = 'https://chat.whatsapp.com/ELy0mvOw5JyLnHmwFY7j1K'
global.grupo3 = 'https://chat.whatsapp.com/LmDvJZWd0eQCzhR8lwJ5B4'
global.grupo4 = 'https://chat.whatsapp.com/LddDN9xDXcg15IuOirylqZ'
global.grupo5 = 'https://chat.whatsapp.com/EaTmnGSAX3pH06Dl7MRzmV'
global.canal = 'https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w'
global.md = 'https://github.com/ByJuan1986/GokuBot-MD' 

//Fakes
//global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655135-5493873655168@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ɢᴏᴋᴜ ʙᴏᴛ ᴍᴅ︎', orderTitle: 'Bang', thumbnail: imgs, sellerJid: '0@s.whatsapp.net'}}}
//global.esti = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5493873655135-5493873655168@g.us" } : {})},message: {"videoMessage": { "title": `𝑮𝒐𝒌𝒖𝑩𝒐𝒕-𝑴𝑫`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `ɢᴏᴋᴜ ʙᴏᴛ ᴍᴅ︎`, 'jpegThumbnail': imgs }}}

//Librerias
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//Rpg
global.multiplier = 69
global.maxwarn = '3'

//No tocar
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
