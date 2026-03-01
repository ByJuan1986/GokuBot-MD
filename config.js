import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import axios from "axios"
import { fileURLToPath } from "url"
import fs from "fs"

//Owner
global.botNumber = ""
global.owner = [ "5493873655135", "34686630246", "34636445091", "5493873634786", "573108625104", "51959842633", "51957626299" ]

//Roles
global.suittag = ["5493873655135"] 
global.prems = []
global.mods = []

global.libreria = "mx-baileys"
global.vs = "^2.5.6-lt"
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

global.fargs = {
  prop: '✦  *No puedes usar este comando...*',
  dAdmin: '✦  *Solo administradores del bot...*',
  moder: '✦  *Solo moderadores...*',
  prem: '✦  *Solo usuarios premium...*',
  grupo: '✦  *Solo en chats grupales...*',
  privado: '✦  *Solo en chats individuales...*',
  admins: '✦  *Solo administradores...*',
  bAdmin: '✦  *Solo si el bot es administrador...*',
  registro: '✦  *Añade tu nombre a la lista de usuarios.*\n\n> *Por ejemplo:*\n*#new* Punisher',
  amigos: '✦  *Solo amigos agendados por @Punisher...*',
  estric: '✦  *Comando restringido...*'
}

global.botname = "𝐆𝐨𝐤𝐮𝐁𝐨𝐭 - 𝐁𝐲 𝐉𝐮𝐚𝐧𝟏𝟗𝟖𝟔"
global.canal = "https://whatsapp.com/channel/0029VaSZsS14Y9lhQYCFvO0w"
global.botgrupo = ""
global.textbot = "« ᴀɪ-ᴅʀɪᴠᴇɴ ᴡʜᴀᴛsᴀᴘᴘ ᴇxᴘᴇʀɪᴇɴᴄᴇ »"
global.gokuImg = "https://od.lk/s/NTZfNDc2MzMxMDJf/menu2_GokuBot.jpg"
global.gokuMenu = "https://od.lk/s/NTZfNDc2MzMwOTdf/menu_GokuBot.jpg"
global.currency = "GokuCoins"
global.currency2 = "Tickes"
global.emoji = "🐲"
global.toem = "🐉"
global.toem2 = "🔖"
global.toruCh = "https://raw.githubusercontent.com/nulswa/files/main/uploads/temporal/7bb11ded912219f6.jpg"

global.ch = {
ch1: "120363148987849046@newsletter",
ch2: "120363195436416919@newsletter",
ch3: "120363234822910701@newsletter",
ch4: "120363248027382788@newsletter",
ch5: "120363405626996983@newsletter",
ch6: "120363263357160092@newsletter",
ch7: "120363422011302677@newsletter"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.greenBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})

