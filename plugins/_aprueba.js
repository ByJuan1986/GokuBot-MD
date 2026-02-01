
const palabras = ["gato", "perro", "pájaro", "elefante", "tigre", "ballena", "mariposa", "tortuga", "conejo", "rana", "pulpo", "ardilla", "jirafa", "cocodrilo", "pingüino", "delfín", "serpiente", "hámster", "mosquito", "abeja", "Porno", "negro", "television", "computadora", "botsito", "reggaeton", "economía", "electrónica", "facebook", "WhatsApp", "Instagram", "tiktok", "milanesa", "presidente", "bot", "películas", 
]

const intentosMaximos = 6
const gam = new Map()

function elegirPalabraAleatoria() {
return palabras[Math.floor(Math.random() * palabras.length)]
}

function ocultarPalabra(palabra, letrasAdivinadas) {
let palabraOculta = "";
for (const letra of palabra) {
if (letrasAdivinadas.includes(letra)) {
palabraOculta += letra + " "; 
} else {
palabraOculta += "_ "; 
}
}
return palabraOculta.trim(); 
}


function mostrarAhorcado(intentos) {
const dibujo = [
" ____",
" |  |",
intentos < 6 ? " | O" : " |",
intentos < 5 ? " | /" : intentos < 4 ? " | / " : intentos < 3 ? " | / \\" : intentos < 2 ? " | / \\" : " |",
intentos < 2 ? "_|_" : " |",
]
return dibujo.slice(0, intentosMaximos - intentos).join("\n")
}

function juegoTerminado(sender, mensaje, palabra, letrasAdivinadas, intentos) {
if (intentos === 0) {
gam.delete(sender);
return `${mostrarAhorcado(intentos)}\n\n📍  Has perdido, la palabra correcta era *[ ${palabra} ]*.`;
} else if (!mensaje.includes("_")) {
let expGanada = Math.floor(Math.random() * 300); //fáciles
let monGanada = Math.floor(Math.random() * 300); //fáciles
if (palabra.length >= 8) {
expGanada = Math.floor(Math.random() * 3500); //difíciles
monGanada = Math.floor(Math.random() * 3500); //difíciles
}
global.db.data.users[sender].toruexp += expGanada;
global.db.data.users[sender].torucoin += monGanada;
gam.delete(sender);
return `🎉  ¡Has ganado!\n- La palabra correcta era *[ ${palabra} ]*.\n\n> *Ganancias:*\n${toem} *${currency}* : +${monGanada}\n${toem2} *${currency2}* : +${expGanada}`;
} else {
return `${mostrarAhorcado(intentos)}\n\n${mensaje}`;
}
}

let handler = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
if (gam.has(m.sender)) {
return conn.sendMessage(m.chat, { text: `📍  Tienes un juego ya iniciado.\n- Terminalo para otra partida...` }, { quoted: m })
}
let palabra = elegirPalabraAleatoria()
let letrasAdivinadas = []
let intentos = intentosMaximos
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
let text = `[ ❔ ]  Adivina la siguiente palabra:\n\n> *Palabra:*\n${mensaje}\n\n• *Intentos* : ${intentos}`
conn.sendMessage(m.chat, { text: text }, { quoted: m })
}

handler.before = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
let juego = gam.get(m.sender)
if (!juego) return
let { palabra, letrasAdivinadas, intentos } = juego
if (m.text.length === 1 && m.text.match(/[a-zA-Z]/)) {
let letra = m.text.toLowerCase()
if (!letrasAdivinadas.includes(letra)) {
letrasAdivinadas.push(letra)
if (!palabra.includes(letra)) {
intentos--
}
}
let mensaje = ocultarPalabra(palabra, letrasAdivinadas)
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
if (respuesta.includes("¡Perdiste!") || respuesta.includes("¡Ganaste!")) {
conn.reply(m.chat, respuesta, m)
} else {
gam.set(m.sender, { palabra, letrasAdivinadas, intentos })
conn.sendMessage(m.chat, { text: respuesta + `\n\n• *Intentos* : ${intentos}` }, { quoted: m })
}
} else {
let mensaje = ocultarPalabra(palabra, letrasAdivinadas);
let respuesta = juegoTerminado(m.sender, mensaje, palabra, letrasAdivinadas, intentos)
conn.sendMessage(m.chat, { text: respuesta }, { quoted: m })
gam.delete(m.sender)
}
}


handler.command = ['ahorcado']
handler.group = true

export default handler
