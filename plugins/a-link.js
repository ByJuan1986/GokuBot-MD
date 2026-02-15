let linkRegex1 = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i
let linkRegex2 = /whatsapp\.com\/channel\/([0-9A-Za-z]{20,24})/i

let handler = (m) => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner}) {
    // Verificaciones básicas
    if (!m.isGroup) return true
    if (!m.text) return true
    if (m.fromMe) return true
    
    let chat = global.db.data.chats[m.chat]
    if (!chat || !chat.fEnlaces) return true // Si antienlaces está desactivado, salir
    
    const sender = m.sender
    
    // Verificar si es owner del bot
    const isGlobalOwner = global.owner.some(([ownerNumber]) => {
        return sender === `${ownerNumber}@s.whatsapp.net` || sender.split('@')[0] === ownerNumber.toString()
    })
    
    if (isOwner || isGlobalOwner) return true // Owners pueden enviar enlaces
    
    // Detectar si hay enlaces
    const hasGroupLink = linkRegex1.test(m.text)
    const hasChannelLink = linkRegex2.test(m.text)
    
    if (hasGroupLink || hasChannelLink) {
        console.log('Enlace detectado de:', sender)
        
        // Obtener el enlace del grupo actual
        let linkThisGroup = ''
        try {
            const groupCode = await conn.groupInviteCode(m.chat)
            linkThisGroup = `https://chat.whatsapp.com/${groupCode}`
        } catch (e) {
            console.log('Error obteniendo código del grupo:', e)
        }
        
        // Si el enlace es del mismo grupo, permitirlo
        if (linkThisGroup && m.text.includes(linkThisGroup)) {
            //console.log('Es enlace del mismo grupo, permitido')
            return true
        }
        
        // Si el bot no es admin, solo avisar
        if (!isBotAdmin) {
            await conn.reply(m.chat, `📍  Se detecto un enlace en este chat.\n- No soy admin para continuar la expulsión...`, m)
            return true
        }
        
        // Si es ADMINISTRADOR del grupo
        if (isAdmin) {
            console.log('Usuario es admin, solo advertencia y eliminar mensaje')
            
            await conn.sendMessage(m.chat, {
                text: `📍  Hola, @${sender.split('@')[0]}, como eres administrador, se te recomienda no enviar enlaces grupales.`,
                mentions: [sender]
            })
            
            // Eliminar solo el mensaje
            try {
                await conn.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: sender
                    }
                })
            } catch (e) {
                console.log('Error al eliminar mensaje:', e)
            }
            
            return false
        }
        
        // Si es USUARIO NORMAL (no admin, no owner)
        if (!isAdmin) {
            console.log('Usuario normal, eliminando')
            
            await conn.sendMessage(m.chat, {
                text: `📍  El usuario @${sender.split('@')[0]} sera eliminado en breve por enviar un enlace al chat...`,
                mentions: [sender]
            })
            
            // Eliminar el mensaje
            try {
                await conn.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.key.id,
                        participant: sender
                    }
                })
            } catch (e) {
                console.log('Error al eliminar mensaje:', e)
            }
            
            // Esperar antes de eliminar usuario
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            // Eliminar del grupo
            try {
                await conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
                //console.log('Usuario eliminado exitosamente')
            } catch (e) {
                //console.log('Error al eliminar usuario:', e)
                await conn.sendMessage(m.chat, {
                    text: `📍  No pude eliminar al usuario, es posible que no haya permisos...`
                })
            }
            
            return false
        }
    }
    
    return true
}

export default handler
