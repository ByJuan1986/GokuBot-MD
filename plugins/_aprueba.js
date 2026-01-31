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
            text: `✅ Imagen subida exitosamente!\n\n🔗 URL: ${link}\n📊 Tamaño: ${formatBytes(media.length)}` 
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
        const randomName = crypto.randomBytes(6).toString('hex')
        const fileName = `${randomName}.${ext}`
        
        // Crear FormData
        const form = new FormData()
        form.append('upload', buffer, {
            filename: fileName,
            contentType: fileType ? fileType.mime : 'image/jpeg'
        })
        form.append('numfiles', '1')
        form.append('upload_session', crypto.randomBytes(16).toString('hex'))
        form.append('adult', 'false')
        
        // Subir a PostImages
        const response = await fetch('https://postimages.org/json/rr', {
            method: 'POST',
            body: form,
            headers: form.getHeaders()
        })
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Verificar si la subida fue exitosa
        if (data.status === 'OK' && data.url) {
            return data.url
        } else {
            throw new Error('PostImages no devolvió una URL válida')
        }
        
    } catch (error) {
        throw new Error(`Error al subir a PostImages: ${error.message}`)
    }
}
