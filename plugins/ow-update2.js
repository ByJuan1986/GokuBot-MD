import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

const REPO_URL = 'https://github.com/mx-community/Digital-Bot.git';
const REPO_BRANCH = 'main'; 
let handler = async (m) => {
try {
await conn.sendMessage(m.chat, { text: `Iniciando actualización, espere un momento...` }, { quoted: m })
await execPromise(`rm -rf ./tmp-repo && git clone --depth=1 --branch ${REPO_BRANCH} ${REPO_URL} ./tmp-repo`);
const { stdout: diffOutput } = await execPromise('diff -qr ./tmp-repo ./ | grep -v ".git" || true');

if (!diffOutput.trim()) {
await execPromise('rm -rf ./tmp-repo');
return conn.sendMessage(m.chat, { text: `📍  El proyecto ya cuenta con su versión actual.` }, { quoted: m });
}

// Copia solo archivos modificados
await execPromise('cp -ru ./tmp-repo/* ./');
await execPromise('rm -rf ./tmp-repo');

// Generar resumen de cambios
const resumen = diffOutput
.split('\\n')
.filter(Boolean)
.map(linea => {
if (linea.includes('Files')) {
return '⫹⫺ *Modificado:* ' + linea.split(' and ')[0].replace('Files ', '').trim();
} else if (linea.includes('Only in')) {
return '⧉ *Nuevo archivo:* ' + linea.replace('Only in ', '').trim();
} else {
return '⎙ ' + linea.trim();
}
}).join('\n\n');

let infoActual = `·─┄ · ✦ *Update : Server* ✦ ·
> Se ha actualizado la pagina web con exito.

${resumen}`.trim();
await m.reply(infoActual);

} catch (e) {
console.error(e);
await conn.sendMessage(m.chat, { text: `*[ 📍 ]*  ERROR_COMMAND = ${e.message}` }, { quoted: m });
}
};

handler.help = ['update2'];
handler.tags = ['tools'];
handler.command = ['fix2']
handler.rowner = true

export default handler;
  
