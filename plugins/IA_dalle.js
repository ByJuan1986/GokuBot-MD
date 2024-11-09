import fetch from 'node-fetch';

const handler = async (m, {conn, text, usedPrefix, command}) => {
    if (!text) throw `╭❪ 💬 ›› _Ingrese el comando y escriba el texto que quiera para crear una imagen con dall-e._`;
    
    await conn.sendMessage(m.chat, {text: '╭❪ ⏳ ›› _Creando, espere un momento..._'}, {quoted: m});
    
    try {
        const response = await fetch(`https://api-xovvip.vercel.app/text2img?text=${encodeURIComponent(text)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const buffer = await response.buffer();
        
        await conn.sendMessage(m.chat, {image: buffer}, {quoted: m});
    } catch {
        throw `╭❪ ❌ ›› _Ocurrio un error inesperado en el comando:_ *${usedPrefix + command}*\n\n- _Vuelva a intentarlo, si el fallo continua, reporta el comando con lo siguiente._\n\n- \`Por ejemplo:\`\n_*#reporte* Hola desarrollador, el comando *${usedPrefix + command}* esta dando un error repentinamente al ingresar._`;
    }
}

handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;