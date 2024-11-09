import { execSync } from 'child_process';
const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = `╭❪ 💬 ›› _Ya esta actualizado a la version mas reciente._`
if (messager.includes('Updating')) messager = `╭❪ ✅ ›› _Actualizando..._\n\n` + stdout.toString()
conn.reply(m.chat, messager, m);
} catch {      
try {    
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter(line => line.trim() !== '')
.map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('GokuBotSession/') || line.includes('npm-debug.log')) {
return null;
}
return '- *' + line.slice(3) + '*'})
.filter(Boolean);
if (conflictedFiles.length > 0) {
const errorMessage = `╭❪ 📌 ›› _Se ha encontrado archivos en conflicto con el repositorio al realizar cambios en la actualizacion, para actualizar debes de reiniciar completamente el bot manualmente._`
await conn.reply(m.chat, errorMessage, m);  
}}
} catch (error) {
console.error(error);
if (error.message) {
const errorMessage2 = `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`;
}
await m.reply(`╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`) 
}}};
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;
