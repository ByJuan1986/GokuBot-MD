import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, {join} from 'path'
import { unwatchFile, watchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import fetch from 'node-fetch'

/**
 * @type {import('@adiwajshing/baileys')}
 */
const baileys = await import('@whiskeysockets/baileys')
const {proto, jidNormalizedUser, areJidsSameUser} = baileys

const isNumber = (x) => typeof x === 'number' && !isNaN(x)
const delay = (ms) =>
isNumber(ms) &&
new Promise((resolve) =>
setTimeout(function () {
clearTimeout(this)
resolve()
}, ms)
)

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
 */
export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || []
this.uptime = this.uptime || Date.now()
if (!chatUpdate) {
return
}
if (!chatUpdate || !chatUpdate.messages) {
return
} else {
this.pushMessage(chatUpdate.messages).catch(console.error)
}
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m) {
return
}
if (global.db.data == null) await global.loadDatabase()
try {
m = smsg(this, m) || m
if (!m) return
m.exp = 0
m.toruexp = false
m.torucoin = false
try {
// TODO: use loop to insert data instead of this
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!("name" in user)) user.name = m.name
if (!("exp" in user) || !isNumber(user.exp)) user.exp = 0
if (!("coin" in user) || !isNumber(user.coin)) user.coin = 0
if (!("torucoin" in user) || !isNumber(user.torucoin)) user.torucoin = 0
if (!("toruexp" in user) || !isNumber(user.toruexp)) user.toruexp = 0
if (!("torumana" in user) || !isNumber(user.torumana)) user.torumana = 0
if (!("torupoder" in user) || !isNumber(user.torupoder)) user.torupoder = 0
if (!("torufuerza" in user) || !isNumber(user.torufuerza)) user.torufuerza = 0
if (!("toruvelos" in user) || !isNumber(user.toruvelos)) user.toruvelos = 0
if (!("resistent" in user) || !isNumber(user.resistent)) user.resistent = 0
if (!("toruopti" in user) || !isNumber(user.toruopti)) user.toruopti = 0
if (!("torupico" in user) || !isNumber(user.torupico)) user.torupico = 0
if (!("toruach" in user) || !isNumber(user.toruach)) user.toruach = 0
if (!("toruesp" in user) || !isNumber(user.toruesp)) user.toruesp = 0
if (!("piesas" in user) || !isNumber(user.piesas)) user.piesas = 0
if (!("llaves" in user) || !isNumber(user.llaves)) user.llaves = 0
if (!("boletos" in user) || !isNumber(user.boletos)) user.boletos = 0
if (!("torupesc" in user) || !isNumber(user.torupesc)) user.torupesc = 0
if (!("regalos" in user) || !isNumber(user.regalos)) user.regalos = 0
if (!("nivele" in user) || !isNumber(user.nivele)) user.nivele = 0
if (!("rangos" in user) || !isNumber(user.rangos)) user.rangos = 0
if (!("tawbot" in user) || !isNumber(user.tawbot)) user.tawbot = 0
if (!("towbot" in user) || !isNumber(user.towbot)) user.towbot = 0
if (!("torufrag" in user) || !isNumber(user.torufrag)) user.torufrag = 0
if (!("toruw" in user) || !isNumber(user.toruw)) user.toruw = 0
if (!("tfuego" in user) || !isNumber(user.tfuego)) user.tfuego = 0
if (!("tagua" in user) || !isNumber(user.tagua)) user.tagua = 0
if (!("taire" in user) || !isNumber(user.taire)) user.taire = 0
if (!("toars" in user) || !isNumber(user.toars)) user.toars = 0
if (!("tousd" in user) || !isNumber(user.tousd)) user.tousd = 0
if (!("toper" in user) || !isNumber(user.toper)) user.toper = 0
if (!("ttierra" in user) || !isNumber(user.ttierra)) user.ttierra = 0
if (!("level" in user) || !isNumber(user.level)) user.level = 0
if (!("health" in user) || !isNumber(user.health)) user.health = 100
if (!("bank" in user) || !isNumber(user.bank)) user.bank = 0
if (!("bankk" in user) || !isNumber(user.bankk)) user.bankk = 0
if (!("packstickers" in user)) user.packstickers = null
if (!("premium" in user)) user.premium = false
if (!("administ" in user)) user.administ = false
if (!("moderador" in user)) user.moderador = false
if (!('registered' in user)) user.registered = false
if (!("premiumTime" in user)) user.premiumTime = 0
if (!("administTime" in user)) user.administTime = 0
if (!("moderadorTime" in user)) user.moderadorTime = 0
if (!('language' in user)) user.language = 'es'
if (!("banned" in user)) user.banned = false
if (!("block" in user)) user.block = false
if (!("bannedReason" in user)) user.bannedReason = ""
if (!("afk" in user) || !isNumber(user.afk)) user.afk = -1
if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!("afkReason" in user)) user.afkReason = ""
if (!("warn" in user) || !isNumber(user.warn)) user.warn = 0
} else
global.db.data.users[m.sender] = {
name: m.name,
exp: 0,
torucoin: 0,
toruexp: 0,
torumana: 0,
torupoder: 0,
torufuerza: 0,
toruvelos: 0,
resistent: 0,
toruopti: 0,
torupico: 0,
toruach: 0,
toruesp: 0,
piesas: 0,
llaves: 0,
boletos: 0,
torupesc: 0,
regalos: 0,
nivele: 0,
rangos: 0,
tawbot: 0,
towbot: 0,
torufrag: 0,
toruw: 0,
tfuego: 0,
tagua: 0,
taire: 0,
toars: 0,
tousd: 0,
toper: 0,
ttierra: 0,
level: 0,
health: 100,
bank: 0,
bankk: 0,
packstickers: null,
premium: false,
administ: false,
moderador: false,
premiumTime: 0,
administTime: 0,
moderadorTime: 0,
language: 'es',
banned: false,
block: false,
bannedReason: "",
afk: -1,
registered: false,
afkReason: "",
warn: 0
}
let akinator = global.db.data.users[m.sender].akinator
if (typeof akinator !== 'object') global.db.data.users[m.sender].akinator = {}
if (akinator) {
if (!('sesi' in akinator)) akinator.sesi = false
if (!('server' in akinator)) akinator.server = null
if (!('frontaddr' in akinator)) akinator.frontaddr = null
if (!('session' in akinator)) akinator.session = null
if (!('signature' in akinator)) akinator.signature = null
if (!('question' in akinator)) akinator.question = null
if (!('progression' in akinator)) akinator.progression = null
if (!('step' in akinator)) akinator.step = null
if (!('soal' in akinator)) akinator.soal = null
} else
global.db.data.users[m.sender].akinator = {
sesi: false,
server: null,
frontaddr: null,
session: null,
signature: null,
question: null,
progression: null,
step: null,
soal: null
}
let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}

if (chat) {
if (!("isBanned" in chat)) chat.isBanned = false
if (!("isMute" in chat)) chat.isMute = false
if (!("welcome" in chat)) chat.welcome = false
if (!("sWelcome" in chat)) chat.sWelcome = ""
if (!("sBye" in chat)) chat.sBye = ""
if (!("detect" in chat)) chat.detect = false
if (!("primaryBot" in chat)) chat.primaryBot = null
if (!("fAdmin" in chat)) chat.fAdmin = false
if (!("fAceptar" in chat)) chat.fAceptar = false
if (!("fRechazar" in chat)) chat.fRechazar = false
if (!("fNobot" in chat)) chat.fNobot = false
if (!("fChatgp" in chat)) chat.fChatgp = false
if (!("fSearch" in chat)) chat.fSearch = true
if (!("fConvert" in chat)) chat.fConvert = true
if (!("fAis" in chat)) chat.fAis = true
if (!("fAjustes" in chat)) chat.fAjustes = true
if (!("fTarget" in chat)) chat.fTarget = false
if (!("fStickers" in chat)) chat.fStickers = true
if (!("fOwners" in chat)) chat.fOwners = true
if (!("fInformation" in chat)) chat.fInformation = true
if (!("fLogos" in chat)) chat.fLogos = true
if (!("fToxico" in chat)) chat.fToxico = false
if (!("fEdits" in chat)) chat.fEdits = false
if (!("fPremium" in chat)) chat.fPremium = false
if (!("fModers" in chat)) chat.fModers = false
if (!("fAdminbot" in chat)) chat.fAdminbot = false
if (!("fGrupos" in chat)) chat.fGrupos = true
if (!("fRandoms" in chat)) chat.fRandoms = true
if (!("fUtils" in chat)) chat.fUtils = true
if (!("fReaction" in chat)) chat.fReaction = true
if (!("fJuegos" in chat)) chat.fJuegos = true
if (!("fEnlaces" in chat)) chat.fEnlaces = false
if (!("fEnlaces2" in chat)) chat.fEnlaces2 = false
if (!("fDescargas" in chat)) chat.fDescargas = true
if (!("fRpg" in chat)) chat.fRpg = true
if (!("fColection" in chat)) chat.fColection = true
if (!("fTienda" in chat)) chat.fTienda = true
if (!("fWaStick" in chat)) chat.fWaStick = false
if (!("fAutoStick" in chat)) chat.fAutoStick = false
if (!("fAutoDown" in chat)) chat.fAutoDown = false
if (!("fAudios" in chat)) chat.fAudios = false
if (!("fMenu" in chat)) chat.fMenu = true
} else
global.db.data.chats[m.chat] = {
isBanned: false,
isMute: false,
welcome: false,
sWelcome: "",
sBye: "",
detect: false,
primaryBot: null,
fAdmin: false,
fAceptar: false,
fRechazar: false,
fNobot: false,
fChatgp: false,
fSearch: true,
fConvert: true,
fAis: true,
fAjustes: true,
fTarget: false,
fStickers: true,
fOwners: true,
fInformation: true,
fLogos: true,
fToxico: false,
fEdits: false,
fPremium: false,
fModers: false,
fAdminbot: false,
fGrupos: true,
fRandoms: true,
fUtils: true,
fReaction: true,
fJuegos: true,
fEnlaces: false,
fEnlaces2: false,
fDescargas: true,
fRpg: true,
fColection: true,
fTienda: true,
fWaStick: false,
fAutoStick: false,
fAutoDown: false,
fAudios: false,
fMenu: true
}
let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!("self" in settings)) settings.self = false
if (!("restrict" in settings)) settings.restrict = true
if (!("fJadi" in settings)) settings.fJadi = false
if (!("fPrivado" in settings)) settings.fPrivado = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('fTemporal' in settings)) settings.fTemporal = false
if (!('fCountrys' in settings)) settings.fCountrys = false
if (!('antiCall' in settings)) settings.antiCall = true
if (!('fNoSpam' in settings)) settings.fNoSpam = false
if (!('fAiBot' in settings)) settings.fAiBot = false
if (!('prefix' in settings)) settings.prefix = opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@'
if (!('menuBot' in settings)) settings.menuBot = global.gokuMenu
if (!('imgBot' in settings)) settings.imgBot = global.gokuImg
if (!('nameBot' in settings)) settings.nameBot = global.botname
if (!('descBot' in settings)) settings.descBot = global.textbot
if (!('groupBot' in settings)) settings.groupBot = global.botgroup
if (!('canalBot' in settings)) settings.canalBot = global.botcanal
if (!('moneBot' in settings)) settings.moneBot = global.currency
if (!('expeBot' in settings)) settings.expeBot = global.currency2
if (!('emBot' in settings)) settings.emBot = global.emoji
} else
global.db.data.settings[this.user.jid] = {
self: false,
restrict: true,
fJadi: false,
fPrivado: false,
autoread: false,
iautoread2: false,
restrict: false,
fTemporal: false,
fCountrys: false,
antiCall: true,
fNoSpam: false,
fAiBot: false,
prefix: opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@',
menuBot: global.gokuMenu,
imgBot: global.gokuImg,
nameBot: global.botname,
descBot: global.textbot,
groupBot: global.botgroup,
canalBot: global.botcanal,
moneBot: global.currency,
expeBot: global.currency2,
emBot: global.emoji
}
} catch (e) {
console.error(e)
}

var settings = global.db.data.settings[this.user.jid]
let prefix
const defaultPrefix = '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@' // Valor por defecto
if (settings.prefix) {
if (settings.prefix.includes(',')) {
const prefixes = settings.prefix.split(',').map((p) => p.trim())
prefix = new RegExp('^(' + prefixes.map((p) => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')')
} else if (settings.prefix === defaultPrefix) {
prefix = new RegExp('^[' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ']')
} else {
prefix = new RegExp('^' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&'))
}
} else {
prefix = new RegExp('') // Permite comandos sin prefijo
}
const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net'
const isROwner = [...global.owner.map((number) => number)].map((v) => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
//const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + detectwhat).includes(m.sender)
const isPrems = isROwner || global.db.data.users[m.sender].premiumTime > 0

if (opts['queque'] && m.text && !(isMods || isPrems)) {
let queque = this.msgqueque,
time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}

if (
m.id.startsWith('EVO') ||
m.id.startsWith('Lyru-') ||
m.id.startsWith('EvoGlobalBot-') ||
(m.id.startsWith('BAE5') && m.id.length === 16) ||
m.id.startsWith('B24E') ||
(m.id.startsWith('8SCO') && m.id.length === 20) ||
m.id.startsWith('FizzxyTheGreat-')
)
return

if (opts['nyimak']) return
if (!isROwner && opts['self']) return
if (opts['pconly'] && m.chat.endsWith('g.us')) return
if (opts['gconly'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string') m.text = ''

m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = m.isGroup
? (global.cachedGroupMetadata
? await global.cachedGroupMetadata(m.chat).catch((_) => null)
: await this.groupMetadata(m.chat).catch((_) => null)) || {}
: {}
const participants = Array.isArray(groupMetadata?.participants) ? groupMetadata.participants : []

const decode = (j) => this.decodeJid(j)
const norm = (j) => jidNormalizedUser(decode(j))
const numOnly = (j) =>
String(decode(j))
.split('@')[0]
.replace(/[^0-9]/g, '')

const meIdRaw = this.user?.id || this.user?.jid // ej: 5215...:26@s.whatsapp.net
const meLidRaw = (this.user?.lid || conn?.user?.lid || '').toString().replace(/:.*/, '') || null // ej: 2064... (solo números)
const botNum = numOnly(meIdRaw)

const botCandidates = [
decode(meIdRaw),
jidNormalizedUser(decode(meIdRaw)),
botNum,
meLidRaw && `${meLidRaw}@lid`,
meLidRaw && jidNormalizedUser(`${meLidRaw}@lid`),
meLidRaw && `${meLidRaw}@s.whatsapp.net`
].filter(Boolean)

const senderCandidates = [decode(m.sender), jidNormalizedUser(decode(m.sender)), numOnly(m.sender)]

const participantsMap = {}
for (const p of participants) {
const raw = p.jid || p.id
const dj = decode(raw)
const nj = jidNormalizedUser(dj)
const no = numOnly(dj)
participantsMap[dj] = p
participantsMap[nj] = p
participantsMap[no] = p
}

const pick = (cands) => {
for (const k of cands) if (participantsMap[k]) return participantsMap[k]
return participants.find((p) => cands.some((c) => areJidsSameUser(norm(p.jid || p.id), jidNormalizedUser(decode(c))))) || null
}

const user = m.isGroup ? pick(senderCandidates) || {} : {}
const bot = m.isGroup ? pick(botCandidates) || {} : {}

const isRAdmin = user?.admin === 'superadmin'
const isAdmin = isRAdmin || user?.admin === 'admin' || user?.admin === true
const isBotAdmin = bot?.admin === 'admin' || bot?.admin === 'superadmin' || bot?.admin === true

m.isWABusiness = global.conn.authState?.creds?.platform === 'smba' || global.conn.authState?.creds?.platform === 'smbi'
m.isChannel = m.chat.includes('@newsletter') || m.sender.includes('@newsletter')

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')

for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin) continue
if (plugin.disabled) continue

const __filename = join(___dirname, name)

if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
console.error(e)
for (let [jid] of global.owner.filter((number, _, isDeveloper) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`../plugins/${name} » [ ${m.sender} ] » ${m.text}\n\`\`\`${format(e)}\`\`\`\n`.trim(), data.jid)
}
}
}

// Respeta restrict: plugins tag 'admin' saltan si no hay restrict ON
if (!opts['restrict']) {
if (plugin.tags && plugin.tags.includes('admin')) {
continue
}
}

const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : prefix

let matchCandidates =
_prefix instanceof RegExp
? [[_prefix.exec(m.text), _prefix]]
: Array.isArray(_prefix)
? _prefix.map((p) => {
let re = p instanceof RegExp ? p : new RegExp(str2Regex(p))
return [re.exec(m.text), re]
})
: typeof _prefix === 'string'
? [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]
: [[null, null]]

// MUY IMPORTANTE: buscar un match real (p[0]), no el regex
let match = matchCandidates.find((p) => p[0])

if (typeof plugin.before === 'function') {
if (
await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
})
)
continue
}

if (typeof plugin !== 'function') continue

if (!match) continue

usedPrefix = (match[0] || [])[0] || ''
let noPrefix = m.text.slice(usedPrefix.length)
let [command, ...args] = noPrefix.trim().split(/\s+/).filter(Boolean)
args = args || []
let _args = noPrefix.trim().split(/\s+/).slice(1)
let text = _args.join(' ')
command = (command || '').toLowerCase()

let fail = plugin.fail || global.dfail
let isAccept =
plugin.command instanceof RegExp
? plugin.command.test(command)
: Array.isArray(plugin.command)
? plugin.command.some((cmd) => (cmd instanceof RegExp ? cmd.test(command) : cmd === command))
: typeof plugin.command === 'string'
? plugin.command === command
: false

if (!isAccept) continue
m.plugin = name

if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (!['owner-unbanchat.js'].includes(name) && chat && chat.isBanned && !isROwner) return
if (
name != 'owner-unbanchat.js' &&
name != 'owner-exec.js' &&
name != 'owner-exec2.js' &&
name != 'tool-delete.js' &&
chat?.isBanned &&
!isROwner
)
return
if (m.text && user.banned && !isROwner) {
if (user.antispam > 2) return
m.reply(`Estas baneado...`)
user.antispam++
return
}
if (user.antispam2 && isROwner) return
let time = global.db.data.users[m.sender].spam + 3000
if (new Date() - global.db.data.users[m.sender].spam < 3000) {
console.log('Waos...')
continue
}
global.db.data.users[m.sender].spam = new Date() * 1
}

let hl = _prefix
let adminMode = global.db.data.chats[m.chat].modoadmin
let gata = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) continue

if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) {
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) {
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) {
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) {
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) {
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) {
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) {
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) {
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) {
fail('unreg', m, this)
continue
}

m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10
if (xp > 2000) {
m.reply('Exp limit')
continue
}

if (!isPrems && plugin.torucoin && global.db.data.users[m.sender].torucoin < plugin.torucoin * 1) {
this.sendMessage(m.chat, { text: `No tienes suficientes ${currency}...` }, { quoted: m })
continue
}

m.exp += xp
if (!isPrems && plugin.toruexp && global.db.data.users[m.sender].toruexp < plugin.toruexp * 1) {
this.sendMessage(m.chat, { text: `No tienes suficientes ${currency2}...` }, { quoted: m })
continue
}
if (plugin.level > _user.level) {
this.sendMessage(m.chat, { text: `Se requiere el nivel ${plugin.level} para usar este comando...` }, { quoted: m })
continue
}

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
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
if (!isPrems) m.toruexp = m.toruexp || plugin.toruexp || false
m.torucoin = m.torucoin || plugin.torucoin || false
} catch (e) {
m.error = e
console.error(e)
if (e) {
let text = format(e) || 'Error desconocido'
for (let api in global.APIs) {
let key = global.APIs[api].key
if (key) text = text.replace(new RegExp(key, 'g'), 'Admin')
}
if (e.name)
for (let [jid] of global.owner.filter((number, _, isDeveloper) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`[ ${name} ] » ${m.sender} » ${m.text}\n\`\`\`${format(e)}\`\`\`\n`.trim(), data.jid )
}
m.reply(text)
}
} finally {
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}
}
if (m.toruexp) m.reply('Gastaste toruexp...')
}
if (m.torucoin) m.reply('Gastaste torucoin...')
break
}
} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
}
//console.log(global.db.data.users[m.sender])
let user,
stats = global.db.data.stats
if (m) {
let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: bang,
participant: cancellazzione
}
})
}
if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
user.toruexp -= m.toruexp * 1
user.torucoin -= m.torucoin * 1
}

let stat
if (m.plugin) {
let now = +new Date()
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total)) stat.total = 1
if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last)) stat.last = now
if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}
}
}

try {
if (!opts['noprint']) await (await import('./lib/print.js')).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)
}
let settingsREAD = global.db.data.settings[this.user.jid] || {}
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])
//if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])

if (db.data.chats[m.chat].reaction && m.text.match(/(ción|dad|aje|oso|izar|mente|pero|tion|age|ous|ate|and|but|ify)/gi)) {
let emot = pickRandom(['🥵', '🥶', '🥳', '📍', '🐟', '🔥', '⏰', '⚔️', '✅' ])
if (!m.fromMe) return this.sendMessage(m.chat, {react: {text: emot, key: m.key}})
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
}
}


/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate
 */
export async function groupsUpdate(groupsUpdate) {
if (opts['self'] && !isOwner && !isROwner) return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data?.chats?.[id],
text = ''
if (!chats?.detect) continue
// if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
//if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
//if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
//if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) continue
await this.sendMessage(id, {text, mentions: this.parseMention(text)})
}
}

export async function callUpdate(callUpdate) {
let isAnticall = global.db.data.settings[this.user.jid].antiCall
if (!isAnticall) return
for (let nk of callUpdate) {
if (nk.isGroup == false) {
if (nk.status == 'offer') {
let callmsg = await this.reply(nk.from, `Hola usuario. *@${nk.from.split('@')[0]}*, seras bloqueado por hacer una ${nk.isVideo ? 'video llamada' : 'llamada'} en este chat.`, false, { mentions: [nk.from] } )
//let data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
await this.updateBlockStatus(nk.from, 'block')
}
}
}
}

export async function deleteUpdate(message) {
try {
const {fromMe, id, participant, remoteJid} = message
if (fromMe) return
let msg = this.serializeM(this.loadMessage(id))
console.log(msg)
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return
if (!msg) return
let isGroup = remoteJid.endsWith('@g.us')
let isPrivate = !isGroup && remoteJid.endsWith('@s.whatsapp.net')
if (!isGroup && !isPrivate) return
const antideleteMessage = `El usuario @${participant.split`@`[0]} elimino un mensaje.\n- Reenviando...`.trim()
await this.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})
this.copyNForward(msg.chat, msg).catch((e) => console.log(e, msg))
} catch (e) {
console.error(e)
}
}

global.dfail = (type, m, conn) => {
let msg = {
rowner: fargs.prop,
owner: fargs.dAdmin,
mods: fargs.moder,
premium: fargs.prem,
group: fargs.grupo,
private: fargs.privado,
admin: fargs.admins,
botAdmin: fargs.bAdmin,
unreg: fargs.registro,
restrict: fargs.estric
}[type]

//if (msg) return m.reply(msg)

if (msg) return conn.reply(m.chat, msg, m).then(_ => m.react('📍'))
//conn.relayMessage(m.chat, prep.message, {messageId: prep.key.id})
}

const file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.greenBright("Update 'handler.js'"))
//if (global.reloadHandler) console.log(await global.reloadHandler());
})
