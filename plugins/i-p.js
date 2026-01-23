import speed from 'performance-now'
import moment from 'moment-timezone'
import { cpus as _cpus, totalmem, freemem, platform, hostname } from 'os'
import { exec, execSync } from 'child_process'
import { sizeFormatter } from 'human-readable'
import os from 'os'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
if (!global.db.data.chats[m.chat].fInformation && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ información ]* estan desactivados...` }, { quoted: m })
}

const start = new Date().getTime()
await m.react("📍")
//conn.sendMessage(m.chat, { text: `📍  Enviando resultados de avance, espere un momento...` }, { quoted: m })
const end = new Date().getTime()
const ping = end - start

const timestamp = speed()
const latency = speed() - timestamp

const uptime = process.uptime()
const hours = Math.floor(uptime / 3600)
const minutes = Math.floor((uptime % 3600) / 60)
const seconds = Math.floor(uptime % 60)
const uptimeFormatted = `${hours}h ${minutes}m ${seconds}s`

let totalUsers = Object.keys(global.db.data.users).length
let totalChats = Object.keys(global.db.data.chats).length
let totalBots = global.conns.filter(conn => conn.user && conn.ws.socket && conn.ws.socket.readyState !== 3).length

const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024 / 1024).toFixed(2)
const totalRAM = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
const freeRAM = (os.freemem() / 1024 / 1024 / 1024).toFixed(2)
const cpu = os.cpus()[0]
const cpuModel = cpu.model.split('@')[0].trim()
const cpuSpeed = (cpu.speed / 1000).toFixed(2) 
const cores = os.cpus().length
const arch = os.arch()
const platform = os.platform().toUpperCase()
const nodeVer = process.version
const hostname = os.hostname()
const loadAvg = os.loadavg().map(n => n.toFixed(2)).join(', ')
const fechaHora = moment().tz('America/Buenos_Aires').format('YYYY/MM/DD, h:mm:ss A')

exec('neofetch --stdout', async (error, stdout) => {
let sysInfo = stdout.toString('utf-8').replace(/Memory:/, 'Ram:')
let response = `⏰ ${ping} ms *[${latency.toFixed(2)} ms]*`
await conn.sendMessage(m.chat, { text: response }, { quoted: m })
})
}

handler.command = ['p', 'ping']

export default handler
                                            
                                            
