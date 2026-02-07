import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import axios from "axios"
import { fileURLToPath } from "url"
import fs from "fs"

//Owner
global.botNumber = ""
global.owner = [ "5493873655135", "34686630246", "34636445091", "5493873634786", "573108625104", "51959842633", "51957626299" ]

global.apikeyOptishield = "ebe2e764b8a003d278472b711498aec7"

global.sendOptishield = async (params) => {
params.apikey = global.apikeyOptishield;
const { data: json } = await axios("https://optishield.uk/api/", {  params });
return json
}

//Roles
global.suittag = ["5493873655135"] 
global.prems = []
global.mods = []

global.libreria = "mx-baileys"
global.vs = "^1.7.2"
global.nameqr = "Punisher-Created"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.alanWasock = true

global.botname = "G O K U  :  New Bot"
global.botweb = ""
global.canal = ""
global.botgrupo = ""
global.textbot = "ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ᴀɴᴅ ʀᴇsᴇʀᴠᴇᴅ ʙʏ @Punisher"
global.gokuImg = "https://files.catbox.moe/ox4wq2.jpg"
global.gokuMenu = "https://files.catbox.moe/wnibgu.jpg"

global.dev = "Punisher"
global.author = "@Punisher"
global.etiqueta = "@toru / @gura / @goku"
global.currency = "Yenes"
global.currency2 = "Monedas"
global.toem = "💴"
global.toem2 = "🪙"
global.banner = "https://qu.ax/XPDQK.jpg"
global.catalogo = "https://qu.ax/EpMPK.jpg"
global.toruCh = "https://files.catbox.moe/bbm4z7.jpg"

global.ch = { ch1: "120363148987849046@newsletter" }



let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.greenBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})

