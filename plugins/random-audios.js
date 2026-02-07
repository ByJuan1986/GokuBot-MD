import util from 'util'
import path from 'path'

let handler = (m) => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) return true
if (chat.isBanned) return
if (m.fromMe) return !0
if (!db.data.chats[m.chat].fAudios) return

const audioMap = [
{regex: /^Bien pensado boddy|bien pensado$/i, url: 'https://files.catbox.moe/cv4969.mp3'},
{regex: /^soy toxico|les saluda el toxico$/i, url: 'https://files.catbox.moe/pxgxpk.mp3'},
{regex: /^buenas noches bro$/i, url: 'https://files.catbox.moe/wsgu0d.aac'},
{regex: /^buenos dias$/i, url: 'https://od.lk/s/NTZfMjkxOTY4ODlf/buenos%20d%C3%ADas%20Goku%20latino.mp3'},  
{regex: /^hola GokuBot$/i, url: 'https://od.lk/s/NTZfMjg3MzA5NDFf/GokuBot%20hola%20latino.mp3'},
{regex: /^kame haaa$/i, url: 'https://files.catbox.moe/g2r6ww.mp3'},
{regex: /^Goku eta vaina es seria$/i, url: 'https://od.lk/s/NTZfMjk4MTU0NTNf/Esta%20vaina%20es%20seria.mp3'},

// Audio en latino 
{regex: /^carita empapada$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzZf/Carita%20empapada.mp3'},  
{regex: /^cell tiene miedo$/i, url: 'https://od.lk/s/NTZfMjkyMjY5MjVf/C%C3%A9lula%20tuve%20miedo.mp3'},
{regex: /^insecto$/i, url: 'https://od.lk/s/NTZfMjkwMDk0NDFf/Goku%20latino%20insecto.mp3'},
{regex: /^hay alguien en el grupo$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzdf/Hay%20alguien%20en%20el%20grupo.mp3'},
{regex: /^los pinguinos$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzhf/Los%20ping%C3%BCinos.mp3'},
{regex: /^maldicion$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzlf/Maldicion.mp3'},
{regex: /^mangekyo$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODBf/Mangekyo.mp3'},
{regex: /^Mary Jane$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODFf/Mary%20Jane.mp3'},
{regex: /^la fe de cristo rey$/i, url: 'https://od.lk/s/NTZfMjg3NDE0MjBf/Meme%20-%20La%20fe%20de%20Cristo%20rey.mp3'},
{regex: /^maltito$/i, url: 'https://od.lk/s/NTZfMjg3NDczMzNf/meme%2010%20-%20eres%20un%20maltito.mp3'},
{regex: /^machete$/i, url: 'https://od.lk/s/NTZfMjg3NjY4OTNf/meme%2011%20-%20machete.mp3'},
{regex: /^se volvio canon$/i, url: 'https://od.lk/s/NTZfMjg3NjY5MzRf/meme%2012%20-%20se%20volvi%C3%B3%20canon%20de%20golpe.mp3'},
{regex: /^eres fuerte$/i, url: 'https://od.lk/s/NTZfMjg3NjY5NjVf/meme%2013%20-%20eres%20fuerte%20pero%20Cristo%20mas.mp3'},
{regex: /^yo soy el mas perron$/i, url: 'https://od.lk/s/NTZfMjg3NjY5ODJf/meme%2014%20-%20yo%20soy%20el%20m%C3%A1s%20Perroni%20aqui.mp3'},

  
]

let matchedAudio = audioMap.find((audio) => audio.regex.test(m.text))

if (matchedAudio) {
try {
this.sendPresenceUpdate('recording', m.chat)
this.sendFile(m.chat, matchedAudio.url, 'goku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  //sendMessage(m.chat, {audio: {url: matchedAudio.url}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m})
} catch (e) {
console.error(e)
} finally {
}
}

return !0
}
export default handler

/*
let handler = async (m, {conn}) => {
if (!db.data.chats[m.chat].fAudios && m.isGroup) throw 0

let vaudio = 'https://files.catbox.moe/pxgxpk.mp3'
conn.sendFile(m.chat, vaudio, 'a.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}
handler.customPrefix = /bien pensado|bien pensado boddy/i
handler.command = new RegExp()
export default handler
*/
