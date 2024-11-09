import os from 'os';
import { execSync } from 'child_process';

const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const getDiskSpace = () => {
    try {
        const stdout = execSync('df -h | grep -E "^/dev/root|^/dev/sda1"').toString();
        const [ , size, used, available, usePercent ] = stdout.split(/\s+/);
        return { size, used, available, usePercent };
    } catch (error) {
        console.error('✧ Error al obtener el espacio en disco:', error);
        return null;
    }
};

const handler = async (m, { conn }) => {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const _muptime = process.uptime() * 1000
    const muptime = clockString(_muptime)
    const hostname = os.hostname();
    const platform = os.platform();
    const arch = os.arch();
    const nodeUsage = process.memoryUsage();
    const diskSpace = getDiskSpace();

    const message = `
- *\`INFO BOT\`*
- *Host:* ${hostname}
- *Plataforma:* ${platform}
- *Arquitectura:* ${arch}
- *Ram total:* ${formatBytes(totalMem)}
- *Ram libre:* ${formatBytes(freeMem)}
- *Ram usado:* ${formatBytes(usedMem)}
- *Bot activo:* ${muptime}

- *\`NODE JS:\`*
- *Rss:* ${formatBytes(nodeUsage.rss)}
- *Heap total:* ${formatBytes(nodeUsage.heapTotal)}
- *Heap usado:* ${formatBytes(nodeUsage.heapUsed)}
- *Externo:* ${formatBytes(nodeUsage.external)}
- *Buffers:* ${formatBytes(nodeUsage.arrayBuffers)}

- *\`ESPACIO REGISTRADO:\`*
${diskSpace ? `
- *Almacenamiento:* ${diskSpace.size}
- *Usado:* ${diskSpace.used}
- *Disponible:* ${diskSpace.available}
- *Uso en porcentaje:* ${diskSpace.usePercent}` : 'Sin detalles.'}
`;

    await conn.reply(m.chat, message.trim(), m, rcanal, );
};

handler.command = ['infobot', 'botsistem'];
handler.register = true;

export default handler;

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}