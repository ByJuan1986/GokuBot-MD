import axios from 'axios'

let handler = async (m, { conn, text }) => {
let bot = '╭❪ ⏳ ›› _Buscando resultados, espere un momento..._'
conn.reply(m.chat, bot, m, rcanal, )
  if (!text) return conn.reply(m.chat, '╭❪ 💬 ›› _Ingrese el comando y una IP para ver sus detalles..._', m )

  axios.get(`http://ip-api.com/json/${text}?fields=status,message,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,hosting,query`).then ((res) => {
    const data = res.data

      if (String(data.status) !== "success") {
        throw new Error(data.message || "Falló")
      }
    let ipsearch = `
*\`DETALLES : IP\`*

- IP : ${data.query}
- País : ${data.country}
- Código de País : ${data.countryCode}
- Provincia : ${data.regionName}
- Código de Provincia : ${data.region}
- Ciudad : ${data.city}
- Distrito : ${data.district}
- Código Postal : ${res.data.zip}
- Zona Horaria : ${data.timezone}
- ISP : ${data.isp}
- Organización : ${data.org}
- AS : ${data.as}
- Mobile : ${data.mobile ? "Si" : "No"}
- Hosting : ${data.hosting ? "Si" : "No"}
`.trim()

conn.reply(m.chat, ipsearch, m )
})
}

handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler