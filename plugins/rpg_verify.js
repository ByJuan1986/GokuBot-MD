import db from '../goku/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let api = await axios.get(`https://deliriussapi-oficial.vercel.app/tools/country?text=${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
     let userNationalityData = api.data.result
     let userNationality = userNationalityData ? `${userNationalityData.name} ${userNationalityData.emoji}` : 'Desconocido'
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`╭❪ 💬 ›› _Ya estas registrado en el bot, si quieres registrarte de nuevo, use el comando: *#unreg*_`)
  if (!Reg.test(text)) return m.reply(`╭❪ 🚀 ›› _Ingrese el comando y escriba su nombre y edad separados por un punto._\n\n- *\`Por ejemplo:\`*\n*#reg Punisher.23*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('╭❪ ❌ ›› _Nombre faltante, ingrese de nuevo el comando y no olvide poner su nombre y edad..._')
  if (!age) return m.reply('╭❪ ❌ ›› _Edad faltante, ingrese de nuevo el comando y no olvide poner su nombre y edad..._')
  if (name.length >= 100) return m.reply('╭❪ ❌ ›› _El nombre no debe de contener mas de 100 caracteres, intentalo de nuevo..._' )
  age = parseInt(age)
  if (age > 100) return m.reply('╭❪ ⁉️ ›› _Ingrese una edad apropiada por favor..._')
  if (age < 5) return m.reply('╭❪ ⁉️ ›› _Si de verdad eres un niño, no se te permitira usar el bot, intentalo de nuevo..._')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  global.db.data.users[m.sender].money += 600
  global.db.data.users[m.sender].limit += 15
  global.db.data.users[m.sender].exp += 245
  global.db.data.users[m.sender].joincount += 5
  let sn = createHash('md5').update(m.sender).digest('hex')
let registrado = `
*𔓕   ───   \`REGISTRADO\`   ───𔓕*

- *NOMBRE:* ${name}
- *EDAD:* ${age} años
- *CODIGO:* ${sn}
`
}
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 
export default handler