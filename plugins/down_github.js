import fetch from 'node-fetch'
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
let pontexto = '╭❪ 💬 ›› _Ingrese el comando mas un enlace de algun repositorio de GitHub para descargarlo._'
let novalido = '╭❪ 📌 ›› _El enlace ingresado no es un enlace de un repositorio de GitHub, verifique que sea correcto._'
let espere = '╭❪ ⏳ ›› _Descargando los archivos, espere un momento..._'
//let aquitiene = '╭❪ ✅ ›› _¡¡Aqui tiene su archivo!!_'
  if (!args[0]) {
    return conn.reply(m.chat, pontexto, m)
  }
  if (!regex.test(args[0])) {
    return conn.reply(m.chat, novalido, m)
  }
  let [_, user, repo] = args[0].match(regex) || []
  let sanitizedRepo = repo.replace(/.git$/, '')
  let repoUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}`
  let zipUrl = `https://api.github.com/repos/${user}/${sanitizedRepo}/zipball`

  try {
  conn.reply(m.chat, espere, m)
    let [repoResponse, zipResponse] = await Promise.all([
      fetch(repoUrl),
      fetch(zipUrl),
    ])
    let repoData = await repoResponse.json()
    let filename = zipResponse.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    let type = zipResponse.headers.get('content-type')

await conn.sendFile(m.chat, await zipResponse.buffer(), filename, null, m)

  } catch {

  }
}
handler.command = ['gitclone']
handler.register = true 
export default handler
