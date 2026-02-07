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
{regex: /^que linda estas$/i, url: 'https://od.lk/s/NTZfMjg3NjcwOTJf/meme%2015%20-%20qu%C3%A9%20linda%20estas.mp3'},
{regex: /^viejo sabroso$/i, url: 'https://od.lk/s/NTZfMjg3NjczMzNf/meme%2016%20viejo%20sabroso.mp3'},
{regex: /^o my good$/i, url: 'https://od.lk/s/NTZfMjg3NDE1NTJf/meme%202%20-%20O%20my%20God.mp3'},
{regex: /^espera Vegueta$/i, url: 'https://od.lk/s/NTZfMjg3NDE2ODNf/meme%203%20-%20Espera%20Vegeta.mp3'},
{regex: /^Napa su nivel$/i, url: 'https://od.lk/s/NTZfMjg3NDcwNTNf/meme%204%20-%20Nappa%20su%20nivel.mp3'},
{regex: /^cada dia mas basado$/i, url: 'https://od.lk/s/NTZfMjg3NDcxMDBf/meme%205%20-%20cada%20d%C3%ADa%20m%C3%A1s%20basado.mp3'},
{regex: /^y a mi que$/i, url: 'https://od.lk/s/NTZfMjg3NDcxMzBf/meme%206%20-%20ami%20que%20vergas%20me%20importa.mp3'},    
{regex: /^y este quien poronga es$/i, url: 'https://od.lk/s/NTZfMjg3NDcxNTZf/meme%207%20-%20este%20que%20pongas%20es.mp3'},
{regex: /^eres un cobarde$/i, url: 'https://od.lk/s/NTZfMjg3NDcyMTZf/meme%208%20-%20t%C3%BA%20eres%20un%20cobarde.mp3'},    
{regex: /^ya basta$/i, url: 'https://od.lk/s/NTZfMjg3NDcyNDdf/meme%209%20-%20ya%20basta%20Freezer.mp3'},
{regex: /^mi dinero$/i, url: 'https://od.lk/s/NTZfMjkyMjY5NDFf/mi%20dinero%20disminulle.mp3'},
{regex: /^la depuracion$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODJf/purga%20infinita%20latino.mp3'},
{regex: /^que bendicion$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODNf/Que%20bendicion.mp3'},
{regex: /^que calor$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODVf/Que%20calor.mp3'},
{regex: /^que rico$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODZf/Que%20rico.mp3'},    
{regex: /^si la verdad es que si$/i, url: 'https://od.lk/s/NTZfMjg5OTA0OTFf/Si%20la%20verdad%20es%20que%20si.mp3'},
{regex: /^ta bien$/i, url: 'https://od.lk/s/NTZfMjg3MzAzOTBf/Ta%20bien.mp3'},
{regex: /^silvando$/i, url: 'https://od.lk/s/NTZfMjg3MjkwOThf/Gohan%20silbido.mp3'},
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
