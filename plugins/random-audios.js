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

//Himno GokuBot hardstyle
{regex: /^Gokubot hardstyle 01$/i, url: 'https://od.lk/s/MThfNzMwODk4NTBf/GokuBot%20hardstyle%2001.mp3'},
{regex: /^Gokubot hardstyle 02$/i, url: 'https://od.lk/s/MThfNzMwODk4NTFf/GokuBot%20hardstyle%2002.mp3'}, 
{regex: /^Gokubot hardstyle 03$/i, url: 'https://od.lk/s/MThfNzMwODk5MTdf/GokuBot%20hardstyle%2003.mp3'},
{regex: /^Gokubot hardstyle 04$/i, url: 'https://od.lk/s/MThfNzMwODk5MzBf/GokuBot%20hardstyle%2004.mp3'},
{regex: /^Gokubot hardstyle 05$/i, url: 'https://od.lk/s/MThfNzMwODk5ODRf/GokuBot%20hardstyle%2005.mp3'},
 
// Himno GokuBot Cantaditas
{regex: /^Gokubot cantadita 01$/i, url: 'https://od.lk/s/MThfNzMwODk5MzNf/GokuBot%20cantadita%2001.mp3'},
{regex: /^Gokubot cantadita 02$/i, url: 'https://od.lk/s/MThfNzMwOTAwMzdf/Leyenda-Z.ogg'},

 
 
{regex: /^Gokubot 1|cancion GokuBot$/i, url: 'https://od.lk/s/NTZfNDc1MTI4NzFf/GokuBot%20cancion.mp3'},
{regex: /^Gokubot 2|cancion GokuBot 2$/i, url: 'https://od.lk/s/NTZfNDc5MDI1NzJf/GokuBot%20cancion%202.mp3'},
{regex: /^Gokubot 3|cancion GokuBot 3$/i, url: 'https://od.lk/s/NTZfNTQ4MTkzMzBf/GokuBot%20en%20Pista.mp3'},
{regex: /^Gokubot 4|cancion GokuBot 4$/i, url: 'https://od.lk/s/NTZfNTUwOTg0Mjlf/GokuBot%20en%20Pista%20%281%29.mp3'},
{regex: /^Bien pensado bojgfdfddy|bien pensaaaaado$/i, url: 'https://files.catbox.moe/cv4969.mp3'},
 
// Personajes dragon ball en castellano 
{regex: /^Final flash|vegeta flash$/i, url: 'https://od.lk/s/NTZfNDc2OTg4MDhf/Final%20flash%20castellano.mp3'},
{regex: /^baba la cansina|hermana de mutenroshi$/i, url: 'https://od.lk/s/NTZfNDc2OTkzNTBf/Baba%20la%20cansina.mp3'},
{regex: /^calvito|calvito Krilin$/i, url: 'https://od.lk/s/NTZfNDc4OTc4NzVf/Vegeta%20le%20dice%20calvito%20a%20Krilin.mp3'},
{regex: /^la calvicie$/i, url: 'https://od.lk/s/NTZfNDc5MDYxMDBf/La%20calvicie.mp3'},
{regex: /^gordito|régimen|regimen$/i, url: 'https://od.lk/s/NTZfNDc5MjQ4NTlf/Vegeta%20le%20dice%20a%20Bu%20que%20est%C3%A1%20a%20dieta.mp3'},
{regex: /^no soy un héroe de la justicia|no soy un heroe de la justicia$/i, url: 'https://od.lk/s/NTZfNDc5MjUwMTBf/No%20soy%20un%20heroe%20de%20la%20justicia.mp3'},

// Porta
{regex: /^Porta dragon ball$/i, url: 'https://od.lk/s/NTZfNDg1NDg2Njdf/Porta%20dragon%20ball.mp3'},
{regex: /^Porta dragon ball 1,5$/i, url: 'https://od.lk/s/NTZfNDg1NTIwMzRf/Dragon%20ball%20rap%201.5%20Porta.mp3'},

 
// GokuBot castellano
{regex: /^buenas noches|que descanses$/i, url: 'https://od.lk/s/NTZfMjkxOTY1NjNf/buenas%20noches%20que%20descanses%20castellano.mp3'},
{regex: /^buenos dias|buenos días|feliz dias$/i, url: 'https://od.lk/s/NTZfMjkxOTY4NzJf/Buenos%20d%C3%ADas%20voz%20goku.mp3'}, 
{regex: /^hola soy GokuBot$/i, url: 'https://od.lk/s/NTZfMjg3MzA4NTZf/GokuBot%20hola%20castellano.mp3'},
{regex: /^kamehaa$/i, url: 'https://od.lk/s/NTZfMjg3MzA4NTdf/GokuBot%20kamehaa%20castellano.mp3'},

// BSO dragón ball castellano 
{regex: /^DB opening castellano$/i, url: 'https://od.lk/s/NTZfMjg3MzEzMzdf/Dragon%20ball%20opening%20castellano.mp3'},
{regex: /^DB ending castellano$/i, url: 'https://od.lk/s/NTZfMjg3MzEzMzNf/Dragon%20ball%20ending%20castellano.mp3'},
{regex: /^DBZ1 opening castellano$/i, url: 'https://od.lk/s/NTZfNDg0NjYxMDVf/DBZ1%20opening%20castellano.mp3'},
{regex: /^DBZ2 opening castellano$/i, url: 'https://od.lk/s/NTZfNDg0NjYxNzVf/DBZ2%20opening%20castellano.mp3'},

// BSO dragon ball valenciano
{regex: /^DB opening valenciano$/i, url: 'https://od.lk/s/NTZfNDg0ODQ2NDZf/DB%20opening%20valenciano.mp3'},
{regex: /^DB ending valenciano$/i, url: 'https://od.lk/s/NTZfNDg0ODQzMzhf/DB%20ending%20valenciano.mp3'},
{regex: /^DBZ opening valenciano$/i, url: 'https://od.lk/s/NTZfNDg0ODQzNDFf/DBZ%20opening%20valenciano.mp3'},
{regex: /^DBZ ending valenciano$/i, url: 'https://od.lk/s/NTZfNDg0ODQzNDBf/DBZ%20ending%20valenciano.mp3'},
{regex: /^DBZ2 opening valenciano$/i, url: 'https://od.lk/s/NTZfNDg0ODQ2ODZf/DBZ2%20opening%20valenciano.mp3'},
{regex: /^DBZ2 ending valenciano$/i, url: 'https://od.lk/s/NTZfNDg0ODQ3MTNf/DBZ2%20ending%20valenciano.mp3'},
 
// GokuBot latino  
{regex: /^Hola soy Goku|hola GokuBot$/i, url: 'https://od.lk/s/NTZfMjg3MzA5NDFf/GokuBot%20hola%20latino.mp3'},

// BSO Catalan 
{regex: /^DB opening catalan$/i, url: 'https://od.lk/s/NTZfNTgyNjgwNTlf/DB%20opening%20catala.mp3'},
{regex: /^DB ending catalan$/i, url: 'https://od.lk/s/NTZfNTgyNjkwMjJf/DB%20ending%20catalan.mp3'},


// BSO japonés 
{regex: /^DB opening japones$/i, url: 'https://od.lk/s/NTZfNTgyNzE3MzJf/DB%20opening%20japones.mp3'},
{regex: /^DB ending japones$/i, url: 'https://od.lk/s/NTZfNTgyNzE3Mjlf/DB%20ending%20japones.mp3'},
 
// BSO dragon ball latino  
{regex: /^DB opening latino$/i, url: 'https://od.lk/s/NTZfNDg0ODQ4MTVf/DB%20opening%20latino.mp3'},
{regex: /^DB ending latino$/i, url: 'https://od.lk/s/NTZfNTgyNjcxNDlf/DB%20ending%20Latino.mp3'},

 
// Personajes dragon ball en latino
{regex: /^callate|Cállate|🤫$/i, url: 'https://od.lk/s/NTZfNDg0NjU2NTdf/callate.mp3'},
{regex: /^y este quien poronga es$/i, url: 'https://od.lk/s/NTZfNDg0NjA1NDZf/Y%20este%20quien%20poronga%20es.mp3'},
{regex: /^esto va ser epico$/i, url: 'https://od.lk/s/NTZfNDg0NjA0NDNf/Esto%20va%20ser%20epico.mp3'},
{regex: /^como quedo la moto|moto|Trunks$/i, url: 'https://od.lk/s/NTZfNDc4ODYwNzJf/Trunks%20c%C3%B3mo%20qued%C3%B3%20la%20moto.mp3'},
{regex: /^levantate|levantate insecto$/i, url: 'https://od.lk/s/NTZfNDc3Mjk1NTZf/Vegueta%20despertador.mp3'},
{regex: /^como quedo la moto|moto|Trunks$/i, url: 'https://od.lk/s/NTZfNDc4ODYwNzJf/Trunks%20c%C3%B3mo%20qued%C3%B3%20la%20moto.mp3'},
{regex: /^yo superare$/i, url: 'https://od.lk/s/NTZfNDc3Mjk1NTNf/yo%20tambi%C3%A9n%20superare%20latino.mp3'},
{regex: /^Insecto|insecto verde$/i, url: 'https://od.lk/s/NTZfNDc2OTg1MjBf/insecto%20verde.mp3'},
{regex: /^No seas ingenuo|no weas ingenuo vegeta$/i, url: 'https://od.lk/s/NTZfNDc2OTkzMDBf/No%20seas%20ingenuo%20Vegeta.mp3'},
{regex: /^Goku eta vaina es seria$/i, url: 'https://od.lk/s/NTZfMjk4MTU0NTNf/Esta%20vaina%20es%20seria.mp3'},
{regex: /^carita empapada$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzZf/Carita%20empapada.mp3'},  
{regex: /^cell tiene miedo$/i, url: 'https://od.lk/s/NTZfMjkyMjY5MjVf/C%C3%A9lula%20tuve%20miedo.mp3'},
{regex: /^insecto$/i, url: 'https://od.lk/s/NTZfMjkwMDk0NDFf/Goku%20latino%20insecto.mp3'},
{regex: /^maldicion$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzlf/Maldicion.mp3'},
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
{regex: /^joder|me están mirando|me estan mirando$/i, url: 'https://od.lk/s/NTZfNDc5MDI1Njdf/Se%20estan%20riendo%20de%20mi.mp3'},
{regex: /^por fin apareciste$/i, url: 'https://od.lk/s/NTZfNDc5MDU2NDBf/Picoro%20por%20fin%20apareciste%20malnacido.mp3'},
{regex: /^eres un ser increíble$/i, url: 'https://od.lk/s/NTZfNDc5MDU4NDJf/Eres%20un%20ser%20increible.mp3'},
{regex: /^mondongo$/i, url: 'https://od.lk/s/NTZfNDc5MDU4NDhf/Goku%20diciendo%20mondongo.mp3'},
{regex: /^ta bien$/i, url: 'https://od.lk/s/NTZfNDc5MDU4NjVf/Goku%20ta%20bien.mp3'},
{regex: /^mi niña bonita$/i, url: 'https://od.lk/s/NTZfNDc5MDU4NzVf/Mi%20nina%20bonita%20Goku.mp3'},
{regex: /^los terrenos|los terrenos de la abuelita$/i, url: 'https://od.lk/s/NTZfNDc5MDU4ODJf/Los%20terrenos%20de%20la%20abuelita.mp3'},
{regex: /^esas tetas no dejan de mirarme$/i, url: 'https://od.lk/s/NTZfNDg3NzYwNjJf/esas%20tetas%20no%20me%20dejan%20de%20mirar.mp3'},
{regex: /^kaio ken|kaioken$/i, url: 'https://od.lk/s/NTZfNTY4NDQ2Mjlf/Kaio%20ken%20latino.mp3'},
{regex: /^por que no me la chupas|porque no me la chupas$/i, url: 'https://od.lk/s/NTZfNTY4NDQ4Mjdf/porque%20no%20mejor%20me%20la%20chupas.mp3'},
{regex: /^sabes loco estás celoso|sabes loco estas celoso$/i, url: 'https://od.lk/s/NTZfNTY4NDY0NTNf/sabes%20loco%20est%C3%A1s%20celoso.mp3'},

 // Audio en latino
{regex: /^hay alguien en el grupo$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzdf/Hay%20alguien%20en%20el%20grupo.mp3'},
{regex: /^los pinguinos$/i, url: 'https://od.lk/s/NTZfMjg3MzAzNzhf/Los%20ping%C3%BCinos.mp3'},
{regex: /^la depuracion$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODJf/purga%20infinita%20latino.mp3'},
{regex: /^que bendicion$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODNf/Que%20bendicion.mp3'},
{regex: /^que calor$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODVf/Que%20calor.mp3'},
{regex: /^que rico$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODZf/Que%20rico.mp3'},    
{regex: /^si la verdad es que si$/i, url: 'https://od.lk/s/NTZfMjg5OTA0OTFf/Si%20la%20verdad%20es%20que%20si.mp3'},
{regex: /^ta bien$/i, url: 'https://od.lk/s/NTZfMjg3MzAzOTBf/Ta%20bien.mp3'},
{regex: /^mangekyo$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODBf/Mangekyo.mp3'},
{regex: /^Mary Jane$/i, url: 'https://od.lk/s/NTZfMjg3MzAzODFf/Mary%20Jane.mp3'},
{regex: /^oye|gallina|oye la gallina$/i, url: 'https://od.lk/s/NTZfNDc5MDI1NDZf/Oye%20la%20gallina.mp3'},
{regex: /^sexo$/i, url: 'https://od.lk/s/NTZfNDc5MDI1NjRf/Sexo%20cancion.mp3'},
{regex: /^mmmm$/i, url: 'https://od.lk/s/NTZfNDc5MDI1Njlf/mm2.mp3'},
{regex: /^esta leyendo biblia|biblia$/i, url: 'https://od.lk/s/NTZfNDc5MDI3Njhf/Est%C3%A1%20leyendo%20la%20biblia.mp3'},
{regex: /^mirar para adelante|adelante$/i, url: 'https://od.lk/s/NTZfNDc5MjUwMDlf/Mirar%20para%20adelante.mp3'},

 // Melodias
{regex: /^pvp|una partida|un combate$/i, url: 'https://od.lk/s/NTZfNDc3NDU5MTZf/Goku%20ultra%20instinto.mp3'}, 
{regex: /^alarma$/i, url: 'https://od.lk/s/NTZfMjg3MjkwOTRf/Alarma.mp3'},
{regex: /^silbando$/i, url: 'https://od.lk/s/NTZfMjg3MjkwOThf/Gohan%20silbido.mp3'},  
{regex: /^dj dragon ball$/i, url: 'https://od.lk/s/NTZfMjg3MjkwODlf/Dj%20drag%C3%B3n%20ball.mp3'},
{regex: /^felicidades bro$/i, url: 'https://od.lk/s/NTZfMjg3MjkwOTZf/Feliz%20cumple.mp3'},
{regex: /^jumanji$/i, url: 'https://od.lk/s/NTZfMjg3MjkwOTlf/Jumaji.mp3'},
{regex: /^lobo$/i, url: 'https://od.lk/s/NTZfMjg3MjkxMDJf/Lobo.mp3'},
{regex: /^psicosis$/i, url: 'https://od.lk/s/NTZfMjg3MjkxMDhf/Psicosis.mp3'},
{regex: /^risa Nelson$/i, url: 'https://od.lk/s/NTZfMjg3MjkxMDlf/Risa%20Nelson.mp3'},
{regex: /^soy un nomo$/i, url: 'https://od.lk/s/NTZfMjg3MjkxMTBf/Soy%20un%20nomo.mp3'},
{regex: /^terminator$/i, url: 'https://od.lk/s/NTZfMjg3MjkxMTJf/Terminator%202.mp3'},
{regex: /^un caracol$/i, url: 'https://od.lk/s/NTZfMjg3MjkxMTNf/Un%20caracol%20fugaz.mp3'}, 
{regex: /^caramelo|caramelo de chocolate|🍭|🍬$/i, url: 'https://od.lk/s/NTZfNDc4OTc1MDBf/Caramelos%20de%20chocolate.mp3'},
{regex: /^hentai|musica hentai|🥵|🌡️$/i, url: 'https://od.lk/s/NTZfNDc4OTc2Njhf/hentai.mp3'},
{regex: /^shunkanido|adios|👋$/i, url: 'https://od.lk/s/NTZfNDc4OTc3MDVf/Shunkanido.mp3'},
{regex: /^sexual|sexo$/i, url: 'https://od.lk/s/NTZfNDc4OTc3MzRf/Sxo%20anal.mp3'},
{regex: /^mm|mmm|mmmm$/i, url: 'https://od.lk/s/NTZfNDc4OTc3Njdf/mmmm.mp3'},
{regex: /^nico$/i, url: 'https://od.lk/s/NTZfNDc4OTc4MTlf/niconico.mp3'},

// Sonidos en castellano
{regex: /^abogado| sal ratita|ver la colita$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1MzNf/Abogado.mp3'},
{regex: /^multiplicate por cero$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1MzBf/Bart%20Simpson%20multipliquese.mp3'},
{regex: /^cobarde|pecador|pecador de la pradera$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1MzRf/Basta%20cobarde%20pecador.mp3'},
{regex: /^cansino|a llegado el cansino$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1Mzdf/Cansinoo.mp3'},
{regex: /^eres hijo de mil padres$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1Mzlf/Eres%20un%20hijo%20de%20mil%20padres.mp3'},
{regex: /^bocadillo$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDFf/Homer%20Simpson%20bocadillo.mp3'},
{regex: /^jo tio$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDNf/Homer%20Simpson%20Jo%20tio.mp3'},
{regex: /^mosqui$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDRf/Homer%20Simpson%20mosquis.mp3'},
{regex: /^rodaran|rodarán|rodarán vidones$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDVf/Homer%20Simpson%20rodaran.mp3'},
{regex: /^hoy no... mañana$/i, url: 'https://od.lk/s/NTZfNDg1MzU3NTJf/Jose%20Mota%20-%20Hoy%20no%20ma%C3%B1ana.mp3'},
{regex: /^la cabra$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDdf/La%20cabra.mp3'},
{regex: /^la purga$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDhf/La%20purga%20castellano.mp3'},
{regex: /^la técnica de Piter pan$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NDlf/La%20t%C3%A9cnica%20de%20Piter%20pan.mp3'},
{regex: /^los dioses del Olimpo$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NTBf/Los%20dioses%20del%20Olimpo%20me%20han%20abandonado.mp3'},
{regex: /^liando porros$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NTFf/Los%20Simpson%20-%20Liando%20porros.mp3'},
{regex: /^sayonara baby$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NTJf/Sayonara%20baby.mp3'},
{regex: /^todo el olimpo caerá$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NTNf/Todo%20el%20Olimpo%20caera.mp3'},
{regex: /^yo soy tu padre$/i, url: 'https://od.lk/s/NTZfMjg3Mjk1NTdf/Yo%20soy%20tu%20padre.mp3'},

// Jose Mota
{regex: /^el cansino|cansino$/i, url: 'https://od.lk/s/NTZfNTQ3OTg2ODVf/Jose%20Mota%20-%20El%20cansino.mp3'},
{regex: /^el tio de la vara|vara$/i, url: 'https://od.lk/s/NTZfNTQ3OTg2Nzhf/Jose%20Mota%20-%20El%20tio%20la%20vara.mp3'},
{regex: /^eres muy tonto|tonto$/i, url: 'https://od.lk/s/NTZfNTQ3OTg2ODhf/Jose%20Mota%20-%20eres%20muy%20tonto.mp3'},
{regex: /^hoy no...|hoy no... mañana$/i, url: 'https://od.lk/s/NTZfNTQ3OTg2OTRf/Jose%20Mota%20-%20Hoy%20no%20mana%C3%B1a.mp3'},
{regex: /^ey jubilado$/i, url: 'https://od.lk/s/NTZfNTQ3OTg3MDlf/Jose%20Mota%20-%20iey%20jubilao%21.mp3'},

// Blasa
{regex: /^no cuentes na$/i, url: 'https://od.lk/s/NTZfNTQ4MDg4Mjhf/Blasa%20-%20Eso%20si%20te%20pido%20que%20no%20cuentes%20na.mp3'},
{regex: /^esto es rustico$/i, url: 'https://od.lk/s/NTZfNTQ3OTg3MjJf/Blasa%20-%20Esto%20es%20rustico.mp3'},
{regex: /^na de na$/i, url: 'https://od.lk/s/NTZfNTQ4MDg4Mzdf/Blasa%20-%20Na%20de%20na.mp3'},
{regex: /^soy superstar$/i, url: 'https://od.lk/s/NTZfNTQ4MDg4Mzlf/Blasa%20-%20Soy%20superstar.mp3'},

// Berengario
{regex: /^Berengario el tractorista$/i, url: 'https://od.lk/s/NTZfNTQ4MTY3OTNf/Berengario%20el%20tractorista.mp3'},

// Ricardo Boquerone
{regex: /^me cago en el amor$/i, url: 'https://od.lk/s/NTZfNTQ4ODMyMTZf/Ricardo%20Boquerone%20-%20Me%20cago%20en%20el%20amor.mp3'},
{regex: /^No quiero pensar en el amor$/i, url: 'https://od.lk/s/NTZfNTQ4ODMyMTdf/Ricardo%20Boquerone%20-%20No%20quiero%20pensar%20en%20el%20amor.mp3'},

// Sonido LQS
{regex: /^espartaco$/i, url: 'https://od.lk/s/NTZfMjg2NDY3MDhf/Amador%20Ribas%20-%20Espartaco.mp3'},
{regex: /^mandanga villancico$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2Mzdf/Amador%20Ribas%20-%20Mandanga%20villancicos.mp3'},
{regex: /^merengue$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2Mzlf/Amador%20Ribas%20-%20Merengue%20merengue.mp3'},
{regex: /^porque tocas$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2NDJf/Amador%20Ribas%20-%20Porque%20tocas.mp3'},
{regex: /^que viene$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2NDNf/Amador%20Ribas%20-%20Que%20viene%20que%20viene.mp3'},
{regex: /^salami$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2NDRf/Amador%20Ribas%20-%20Salami.mp3'},
{regex: /^te voy a poner fina$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2NDVf/Amador%20Ribas%20-%20Te%20voy%20a%20poner%20fina%20filipina.mp3'},
{regex: /^que culito tengo$/i, url: 'https://od.lk/s/NTZfMjg3Mjg2NDZf/Antonio%20Recio%20-%20Que%20culito%20tengo.mp3'},
 
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
