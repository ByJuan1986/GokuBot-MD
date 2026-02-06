import { smsg } from "./lib/simple.js"
import { format } from "util"
import { fileURLToPath } from "url"
import path, { join } from "path"
import fs, { unwatchFile, watchFile } from "fs"
import chalk from "chalk"
import fetch from "node-fetch"
import ws from "ws"

const isNumber = x => typeof x === "number" && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
clearTimeout(this)
resolve()
}, ms))

export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || []
this.uptime = this.uptime || Date.now()
if (!chatUpdate) return
this.pushMessage(chatUpdate.messages).catch(console.error)
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m) return
if (global.db.data == null)
await global.loadDatabase()
try {
m = smsg(this, m) || m
if (!m) return
m.exp = 0
try {
const user = global.db.data.users[m.sender]
if (typeof user !== "object") {
global.db.data.users[m.sender] = {}
}
if (user) {
if (!("name" in user)) user.name = m.name
if (!("exp" in user) || !isNumber(user.exp)) user.exp = 0
if (!("coin" in user) || !isNumber(user.coin)) user.coin = 0
if (!("torucoin" in user) || !isNumber(user.torucoin)) user.torucoin = 0
if (!("toruexp" in user) || !isNumber(user.toruexp)) user.toruexp = 0
if (!("torucora" in user) || !isNumber(user.torucora)) user.torucora = 0
if (!("toruvela" in user) || !isNumber(user.toruvela)) user.toruvela = 0
if (!("torupiesa" in user) || !isNumber(user.torupiesa)) user.torupiesa = 0
if (!("torupasti" in user) || !isNumber(user.torupasti)) user.torupasti = 0
if (!("toruregal" in user) || !isNumber(user.toruregal)) user.toruregal = 0
if (!("torullave" in user) || !isNumber(user.torullave)) user.torullave = 0
if (!("boletos" in user) || !isNumber(user.boletos)) user.boletos = 0
if (!("torupesc" in user) || !isNumber(user.torupesc)) user.torupesc = 0
if (!("dlstickers" in user) || !isNumber(user.dlstickers)) user.dlstickers = 0
if (!("cupones" in user) || !isNumber(user.cupones)) user.cupones = 0
if (!("bank" in user) || !isNumber(user.bank)) user.bank = 0
if (!("bankk" in user) || !isNumber(user.bankk)) user.bankk = 0
if (!("puntos" in user) || !isNumber(user.puntos)) user.puntos = 0
if (!("nivele" in user) || !isNumber(user.nivele)) user.nivele = 0
if (!("rangos" in user) || !isNumber(user.rangos)) user.rangos = 0
if (!("tawbot" in user) || !isNumber(user.tawbot)) user.tawbot = 0
if (!("descargas" in user) || !isNumber(user.descargas)) user.descargas = 0
if (!("arcoins" in user) || !isNumber(user.arcoins)) user.arcoins = 0
if (!("uscoins" in user) || !isNumber(user.uscoins)) user.uscoins = 0
if (!("level" in user) || !isNumber(user.level)) user.level = 0
if (!("health" in user) || !isNumber(user.health)) user.health = 100
if (!("packstickers" in user)) user.packstickers = null
if (!("premium" in user)) user.premium = false
if (!("administ" in user)) user.administ = false
if (!("moderador" in user)) user.moderador = false
if (!('registered' in user)) user.registered = false
if (!("premiumTime" in user)) user.premiumTime = 0
if (!("administTime" in user)) user.administTime = 0
if (!("moderadorTime" in user)) user.moderadorTime = 0
if (!("banned" in user)) user.banned = false
if (!("bannedReason" in user)) user.bannedReason = ""
if (!("commands" in user) || !isNumber(user.commands)) user.commands = 0
if (!("afk" in user) || !isNumber(user.afk)) user.afk = -1
if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!("afkReason" in user)) user.afkReason = ""
if (!("warn" in user) || !isNumber(user.warn)) user.warn = 0
} else global.db.data.users[m.sender] = {
name: m.name,
exp: 0,
torucoin: 0,
toruexp: 0,
torucora: 0,
toruvela: 0,
torupiesa: 0,
torullave: 0,
torupasti: 0,
torupesc: 0,
coin: 0,
bank: 0,
bankk: 0,
puntos: 0,
nivele: 0,
rangos: 0,
tawbot: 0,
boletos: 0,
toruregal: 0,
cupones: 0,
descargas: 0,
dlstickers: 0,
arcoins: 0,
uscoins: 0,
level: 0,
health: 100,
packstickers: null,
premium: false,
administ: false,
moderador: false,
premiumTime: 0,
administTime: 0,
moderadorTime: 0,
banned: false,
bannedReason: "",
commands: 0,
afk: -1,
registered: false,
afkReason: "",
warn: 0
}
const chat = global.db.data.chats[m.chat]
if (typeof chat !== "object") {
global.db.data.chats[m.chat] = {}
}
if (chat) {
if (!("isBanned" in chat)) chat.isBanned = false
if (!("isMute" in chat)) chat.isMute = false
if (!("welcome" in chat)) chat.welcome = true
if (!("sWelcome" in chat)) chat.sWelcome = ""
if (!("sBye" in chat)) chat.sBye = ""
if (!("detect" in chat)) chat.detect = false
if (!("primaryBot" in chat)) chat.primaryBot = null
if (!("fAdmin" in chat)) chat.fAdmin = false
if (!("fViewonce" in chat)) chat.fViewonce = false
if (!("fAceptar" in chat)) chat.fAceptar = false
if (!("fRechazar" in chat)) chat.fRechazar = false
if (!("fNobot" in chat)) chat.fNobot = false
if (!("fChatgp" in chat)) chat.fChatgp = false
if (!("fSearch" in chat)) chat.fSearch = true
if (!("fConvert" in chat)) chat.fConvert = true
if (!("fAis" in chat)) chat.fAis = true
if (!("fAjustes" in chat)) chat.fAjustes = true
if (!("fStickers" in chat)) chat.fStickers = true
if (!("fOwners" in chat)) chat.fOwners = true
if (!("fInformation" in chat)) chat.fInformation = true
if (!("fLogos" in chat)) chat.fLogos = true
if (!("fEdits" in chat)) chat.fEdits = false
if (!("fAudios" in chat)) chat.fAudios = false
if (!("fAutoStick" in chat)) chat.fAutoStick = false
if (!("fPremium" in chat)) chat.fPremium = false
if (!("fModers" in chat)) chat.fModers = false
if (!("fAdminbot" in chat)) chat.fAdminbot = false
if (!("fGrupos" in chat)) chat.fGrupos = true
if (!("fRandoms" in chat)) chat.fRandoms = true
if (!("fUtils" in chat)) chat.fUtils = true
if (!("fReaction" in chat)) chat.fReaction = true
if (!("fJuegos" in chat)) chat.fJuegos = true
if (!("fEnlaces" in chat)) chat.fEnlaces = false
if (!("fDescargas" in chat)) chat.fDescargas = true
if (!("fAutoStick" in chat)) chat.fAutoStick = false
if (!("fRpg" in chat)) chat.fRpg = true
if (!("fMenu" in chat)) chat.fMenu = true
} else global.db.data.chats[m.chat] = {
isBanned: false,
isMute: false,
welcome: true,
sWelcome: "",
sBye: "",
detect: false,
primaryBot: null,
fAdmin: false,
fViewonce: false,
fAceptar: false,
fRechazar: false,
fNobot: false,
fChatgp: false,
fSearch: true,
fConvert: true,
fAis: true,
fAjustes: true,
fStickers: true,
fOwners: true,
fInformation: true,
fLogos: true,
fEdits: false,
fAudios: false,
fAutoStick: false,
fPremium: false,
fModers: false,
fAdminbot: false,
fGrupos: true,
fRandoms: true,
fUtils: true,
fReaction: true,
fJuegos: true,
fEnlaces: false,
fDescargas: true,
fAutoStick: false,
fRpg: true,
fMenu: true
}
const settings = global.db.data.settings[this.user.jid]
if (typeof settings !== "object") {
global.db.data.settings[this.user.jid] = {}
}
if (settings) {
if (!("self" in settings)) settings.self = false
if (!("restrict" in settings)) settings.restrict = true
if (!("fRentbot" in settings)) settings.fRentbot = true
if (!("fPrivado" in settings)) settings.fPrivado = false
if (!("gponly" in settings)) settings.gponly = false
} else global.db.data.settings[this.user.jid] = {
self: false,
restrict: true,
fRentbot: true,
fPrivado: false,
gponly: false
}} catch (e) {
console.error(e)
}
if (typeof m.text !== "string") m.text = ""
const user = global.db.data.users[m.sender]
try {
const actual = user.name || ""
const nuevo = m.pushName || await this.getName(m.sender)
if (typeof nuevo === "string" && nuevo.trim() && nuevo !== actual) {
user.name = nuevo
}} catch {}
const chat = global.db.data.chats[m.chat]
const settings = global.db.data.settings[this.user.jid]  
const isROwner = [...global.owner.map((number) => number)].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
const isOwner = isROwner || m.fromMe
const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender) || user.premium == true
const isOwners = [this.user.jid, ...global.owner.map((number) => number + "@s.whatsapp.net")].includes(m.sender)
if (settings.self && !isOwners) return
if (settings.gponly && !isOwners && !m.chat.endsWith('g.us') && !/donar|pay|bk|mp|plan|creador|support/gim.test(m.text)) return
if (opts["queque"] && m.text && !(isPrems)) {
const queque = this.msgqueque, time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}
 
if (m.isBaileys) return
m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
const groupMetadata = m.isGroup ? { ...(conn.chats[m.chat]?.metadata || await this.groupMetadata(m.chat).catch(_ => null) || {}), ...(((conn.chats[m.chat]?.metadata || await this.groupMetadata(m.chat).catch(_ => null) || {}).participants) && { participants: ((conn.chats[m.chat]?.metadata || await this.groupMetadata(m.chat).catch(_ => null) || {}).participants || []).map(p => ({ ...p, id: p.jid, jid: p.jid, lid: p.lid })) }) } : {}
const participants = ((m.isGroup ? groupMetadata.participants : []) || []).map(participant => ({ id: participant.jid, jid: participant.jid, lid: participant.lid, admin: participant.admin }))
const userGroup = (m.isGroup ? participants.find((u) => conn.decodeJid(u.jid) === m.sender) : {}) || {}
const botGroup = (m.isGroup ? participants.find((u) => conn.decodeJid(u.jid) == this.user.jid) : {}) || {}
const isRAdmin = userGroup?.admin == "superadmin" || false
const isAdmin = isRAdmin || userGroup?.admin == "admin" || false
const isBotAdmin = botGroup?.admin || false

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), "./plugins")
for (const name in global.plugins) {
const plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue
const __filename = join(___dirname, name)
if (typeof plugin.all === "function") {
try {
await plugin.all.call(this, m, {
chatUpdate,
__dirname: ___dirname,
__filename,
user,
chat,
settings
})
} catch (err) {
console.error(err)
}}
if (!opts["restrict"])
if (plugin.tags && plugin.tags.includes("admin")) {
continue
}
const strRegex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
const pluginPrefix = plugin.customPrefix || conn.prefix || global.prefix
const match = (pluginPrefix instanceof RegExp ?
[[pluginPrefix.exec(m.text), pluginPrefix]] :
Array.isArray(pluginPrefix) ?
pluginPrefix.map(prefix => {
const regex = prefix instanceof RegExp ?
prefix : new RegExp(strRegex(prefix))
return [regex.exec(m.text), regex]
}) : typeof pluginPrefix === "string" ?
[[new RegExp(strRegex(pluginPrefix)).exec(m.text), new RegExp(strRegex(pluginPrefix))]] :
[[[], new RegExp]]).find(prefix => prefix[1])
if (typeof plugin.before === "function") {
if (await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
userGroup,
botGroup,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename,
user,
chat,
settings
})) {
continue
}}
if (typeof plugin !== "function") {
continue
}
if ((usedPrefix = (match[0] || "")[0])) {
const noPrefix = m.text.replace(usedPrefix, "")
let [command, ...args] = noPrefix.trim().split(" ").filter(v => v)
args = args || []
let _args = noPrefix.trim().split(" ").slice(1)
let text = _args.join(" ")
command = (command || "").toLowerCase()
const fail = plugin.fail || global.dfail
const isAccept = plugin.command instanceof RegExp ?
plugin.command.test(command) :
Array.isArray(plugin.command) ?
plugin.command.some(cmd => cmd instanceof RegExp ?
cmd.test(command) : cmd === command) :
typeof plugin.command === "string" ?
plugin.command === command : false
global.comando = command

if ((m.id.startsWith("NJX-") || (m.id.startsWith("BAE5") && m.id.length === 16) || (m.id.startsWith("B24E") && m.id.length === 20))) return

if (global.db.data.chats[m.chat].primaryBot && global.db.data.chats[m.chat].primaryBot !== this.user.jid) {
const primaryBotConn = global.conns.find(conn => conn.user.jid === global.db.data.chats[m.chat].primaryBot && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED)
const participants = m.isGroup ? (await this.groupMetadata(m.chat).catch(() => ({ participants: [] }))).participants : []
const primaryBotInGroup = participants.some(p => p.jid === global.db.data.chats[m.chat].primaryBot)
if (primaryBotConn && primaryBotInGroup || global.db.data.chats[m.chat].primaryBot === global.conn.user.jid) {
throw !1
} else {
global.db.data.chats[m.chat].primaryBot = null
}} else {
}

if (!isAccept) continue
m.plugin = name
if (isAccept) { global.db.data.users[m.sender].commands = (global.db.data.users[m.sender].commands || 0) + 1 }
if (chat) {
const botId = this.user.jid
const primaryBotId = chat.primaryBot
if (name !== "a-bot.js" && chat?.isBanned && !isROwner) {
if (!primaryBotId || primaryBotId === botId) {
const aviso = `📍  El bot esta desactivado en este chat...`.trim()
await m.reply(aviso)
return
}}
if (m.text && user.banned && !isROwner) {
const mensaje = `📍  Estas baneado, no puedes usar comandos...`.trim()
if (!primaryBotId || primaryBotId === botId) {
m.reply(mensaje)
return
}}}
const adminMode = chat.modoadmin || false
const wa = plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || pluginPrefix || m.text.slice(0, 1) === pluginPrefix || plugin.command
if (adminMode && !isOwner && m.isGroup && !isAdmin && wa) return
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
fail("owner", m, this)
continue
}
if (plugin.rowner && !isROwner) {
fail("rowner", m, this)
continue
}
if (plugin.owner && !isOwner) {
fail("owner", m, this)
continue
}
if (plugin.premium && !isPrems) {
fail("premium", m, this)
continue
}
if (plugin.group && !m.isGroup) {
fail("group", m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) {
fail("botAdmin", m, this)
continue
} else if (plugin.admin && !isAdmin) {
fail("admin", m, this)
continue
}
if (plugin.private && m.isGroup) {
fail("private", m, this)
continue
}
if (plugin.register == true && user.registered == false) { 
fail('unreg', m, this)
continue
}
m.isCommand = true
m.exp += plugin.exp ? parseInt(plugin.exp) : 10
let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
userGroup,
botGroup,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename,
user,
chat,
settings
}
try {
await plugin.call(this, m, extra)
} catch (err) {
m.error = err
console.error(err)
} finally {
if (typeof plugin.after === "function") {
try {
await plugin.after.call(this, m, extra)
} catch (err) {
console.error(err)
}}}}}} catch (err) {
console.error(err)
} finally {
if (opts["queque"] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}
let user, stats = global.db.data.stats
if (m) {
if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
}}
try {
if (!opts["noprint"]) await (await import("./lib/print.js")).default(m, this)
} catch (err) {
console.warn(err)
console.log(m.message)
}}}

global.dfail = (type, m, conn) => {
let edadaleatoria = ['10', '28', '20', '40', '18', '21', '15', '11', '9', '17', '25'].getRandom()
let user2 = m.pushName || 'Anónimo'
let verifyaleatorio = ['reg', 'verify'].getRandom()
 const msg = {
rowner: `No puedes usar este comando...`,
owner: `Solo administradores del bot...`,
mods: `Solo moderadores del bot...`,
premium: `Solo usuarios premium del bot...`,
group: `Solo se ejecuta en chats grupales...`,
private: `Solo se ejecuta en chats individuales...`,
admin: `Solo un administrador puede usar el comando...`,
botAdmin: `Solo se ejecuta si el bot tiene privilegios admin...`,
unreg: `El comando ( *${command}* ) require un registro previo...`, 
restrict: `Comando restringido...`
 }[type]
if (msg) return conn.reply(m.chat, msg, m).then(_ => m.react('📍'))
}
let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.green("Se actualizo 'handler.js'"))
if (global.reloadHandler) console.log(await global.reloadHandler())
})
