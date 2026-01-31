import fetch from 'node-fetch'
import FormData from 'form-data'
import { fileTypeFromBuffer } from "file-type"
import crypto from "crypto"

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        
        // Validar que sea una imagen
        if (!/image\/(png|jpe?g|gif)/.test(mime)) {
            return conn.sendMessage(m.chat, { 
                text: `❌ Debes responder a una imagen (PNG, JPG, JPEG o GIF)` 
            }, { quoted: m })
        }
        
        // Descargar la imagen
        const media = await q.download()
        
        // Subir a PostImages
        await conn.sendMessage(m.chat, { text: `⏳ Subiendo imagen a PostImages...` }, { quoted: m })
        
        const link = await finalEnlace(media)
        
        await conn.sendMessage(m.chat, { 
            text: `✅ Imagen subida exitosamente!\n\n🔗 URL: ${link}\n📊 Tamaño: ${formatBytes(media.length)}\n⏰ Permanente - Sin caducidad` 
        }, { quoted: m })
        
    } catch (error) {
        console.error('Error:', error)
        await conn.sendMessage(m.chat, { 
            text: `❌ Error al subir la imagen: ${error.message}` 
        }, { quoted: m })
    }
}

handler.command = ["postimage", "postimg", "imgpost"]
export default handler

function formatBytes(bytes) {
    if (bytes === 0) return '0 B'
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`
}

async function finalEnlace(buffer) {
    try {
        // Obtener información del tipo de archivo
        const fileType = await fileTypeFromBuffer(buffer)
        const ext = fileType ? fileType.ext : 'jpg'
        
        // Generar nombre único
        const randomName = crypto.randomBytes(8).toString('hex')
        const fileName = `image_${randomName}.${ext}`
        
        // Crear FormData
        const form = new FormData()
        form.append('file', buffer, {
            filename: fileName,
            contentType: fileType ? fileType.mime : 'image/jpeg'
        })
        form.append('type', 'file')
        form.append('action', 'upload')
        
        // Headers que simulan un navegador real
        const headers = {
            ...form.getHeaders(),
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
            'Origin': 'https://postimages.org',
            'Referer': 'https://postimages.org/',
            'X-Requested-With': 'XMLHttpRequest'
        }
        
        // Subir a PostImages usando su API alternativa
        const response = await fetch('https://postimages.org/json/rr', {
            method: 'POST',
            body: form,
            headers: headers
        })
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`)
        }
        
        const data = await response.json()
        
        // Verificar respuesta
        if (data.status === 'OK' && data.url) {
            return data.url
        } else if (data.url) {
            return data.url
        } else {
            throw new Error('PostImages no devolvió una URL válida')
        }
        
    } catch (error) {
        throw new Error(`Error al subir a PostImages: ${error.message}`)
    }
}
