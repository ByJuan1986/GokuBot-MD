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
global.vs = "^2.5.6"
global.nameqr = "Punisher-Created"
global.sessions = "Sessions/Principal"
global.jadi = "Sessions/SubBot"
global.alanWasock = true

global.mess = {
example: '*Ejemplo de uso:*',
unlink: '*Enlace inválido para la solicitud.*\n- Verifica que sea un enlace correcto.',
nosear: '*No se encontraron datos que coincidan con tu búsqueda...*',
neces: '*Se requieren al menos 2 elementos...*',
fallo: '*No se pudo obtener la metadata...*',
noapi: '*Estado de la API: (código de error: X)...*',
succs: '[ ✓ ]  *Comando ejecutado con éxito..*.',
socket: '*Solo los [ sub-bots ] pueden usar este comando...*',
amigoss: '*Solo amigos agregados por el propietario..."'
}

global.botname = "𝐆𝐨𝐤𝐮𝐁𝐨𝐭 - 𝐁𝐲 𝐉𝐮𝐚𝐧𝟏𝟗𝟖𝟔"
global.canal = ""
global.botgrupo = ""
global.textbot = "ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ᴀɴᴅ ʀᴇsᴇʀᴠᴇᴅ ʙʏ @Punisher"
global.gokuImg = "https://od.lk/s/NTZfNDc2MzMxMDJf/menu2_GokuBot.jpg"
global.gokuMenu = "https://od.lk/s/NTZfNDc2MzMwOTdf/menu_GokuBot.jpg"

global.emoji = "🐲"
global.currency = "Yenes"
global.currency2 = "Monedas"
global.toem = "💴"
global.toem2 = "🪙"
global.toruCh = "https://files.catbox.moe/bbm4z7.jpg"

global.ch = { ch1: "120363148987849046@newsletter" }



let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.greenBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})

