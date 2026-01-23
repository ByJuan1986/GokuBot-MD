import fs from 'fs';
import path from 'path';

let handler = async (m, { conn, usedPrefix, args, command }) => {
if (!global.db.data.chats[m.chat].fRandom && m.isGroup) {
return conn.sendMessage(m.chat, { text: `📍  Los comandos de *[ random ]* estan desactivados...` }, { quoted: m })
}

let random = `\t〨  *R A N D O M*

\t⸭ 📍 \`\`\`Escriba la categoría.\`\`\`

\t⧡ ${usedPrefix + command} ⧿ *messi*
\t⧡ ${usedPrefix + command} ⧿ *cr7*
\t⧡ ${usedPrefix + command} ⧿ *bts*
\t⧡ ${usedPrefix + command} ⧿ *navidad*
\t⧡ ${usedPrefix + command} ⧿ *halloween*
\t⧡ ${usedPrefix + command} ⧿ *itzy*
\t⧡ ${usedPrefix + command} ⧿ *universo*

⚶ Por ejemplo:
*${usedPrefix + command}* messi

> ${textbot}`;
if (!args[0]) {
await conn.sendMessage(m.chat, { text: random }, { quoted: m })
} else if (args[0] === "messi") {
let messi = `\t〨  *R A N D O M*

\t\t⧡ Random : *Messi*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg",
"https://media.ambito.com/p/00b816c8629a9e1b05dea5df93022c0d/adjuntos/239/imagenes/040/327/0040327464/messi-2jpg.jpg",
"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/12/01/16698512119239.jpg",
"https://ca-times.brightspotcdn.com/dims4/default/a84f325/2147483647/strip/true/crop/1024x683+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fd4%2F77%2F1a2481ed4e95bfdd6724d26709ad%2Fap22271074179210.jpg",
"https://www.latercera.com/resizer/Z_VZi1Hqck1y5JOoHAWOiRlkDjY=/900x600/filters:focal(910x502:920x492)/cloudfront-us-east-1.images.arcpublishing.com/copesa/ZNSDISO5EYDK4DBFGDDJKYHQUM.jpg",
"https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/11/638278ec700c7_1200.jpg",
"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/L5RFH3YOXBCFRIUX6QJANFWMYQ.jpg",
"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg",
"https://estaticos-cdn.sport.es/clip/c15604d8-94b8-4c9c-9cba-868e338ec1d0_alta-libre-aspect-ratio_default_0.jpg",
"https://media.gq.com.mx/photos/5ffb662e9274cd36fe35683c/3:2/w_2997,h_1998,c_limit/messi-cerveza-goles-porteros.jpg",
"https://editorial.uefa.com/resources/026c-12f705c46a6c-9f2eb0579483-1000/messi_graphic.jpeg",
"https://depor.com/resizer/TG13hFqgVthTnVUzUhGkZVFNPOg=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6K6PFNOXZZGLPHDGZQAX2OGZBI.jpg",
"https://eldiariony.com/wp-content/uploads/sites/2/2021/10/GettyImages-1234606862.jpg",
"https://i.pinimg.com/564x/db/dc/0a/dbdc0acc5cf7bdfc7665e9125906c2ca.jpg",
"https://cdn.futbolargentino.com/sdi/2020/08/17/lionel-messi-argentino-dejo-de-seguir-en-instagram-al-club-cule-y-se-reafirma-su-salida-850651-1.jpg",
"https://i.pinimg.com/736x/0a/87/0f/0a870f03b0b411a2f10fe6cf87a1f40f.jpg",
"https://cdn2.mediotiempo.com/uploads/media/2021/08/01/messi-agente-libre-junio-ig.jpg"  
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: messi }, { quoted: m });
} else if (args[0] === "cr7") {
let cristiano = `\t〨  *R A N D O M*

\t\t⧡ Random : *CR7*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://i.pinimg.com/originals/22/a6/6e/22a66ef9fc1067375df29ee4fd04954b.jpg",  
"https://i.pinimg.com/originals/16/85/cc/1685ccb76d0948fa2b1afd534c78df07.jpg",   
"https://besthqwallpapers.com/Uploads/13-4-2022/197987/thumb2-4k-cristiano-ronaldo-2022-manchester-united-football-stars.jpg", 
"https://wallpapercrafter.com/desktop/29516-Cristiano-Ronaldo-Portugal-Real-Madrid-soccer-4K.jpg", 
"https://p4.wallpaperbetter.com/wallpaper/451/899/608/cristiano-ronaldo-4k-wallpaper-preview.jpg", 
"https://images7.alphacoders.com/716/716405.jpg",
"https://i.pinimg.com/originals/dd/ae/00/ddae00bc11e07c959fd0ac8a2d0399c9.jpg",
"https://www.bitbol.la/files/image/48/48103/632a82af20e2f.png",  
"https://f.rpp-noticias.io/2022/06/03/1268023274076789-646335246612404-7480425914594186767-njpg.jpg",  
"https://static.foxdeportes.com/2021/10/cristiano-ronaldo-manchester-united-rts-545x907.jpg",  
"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/06/10/16233199183125.jpg",  
"https://cdn2.mediotiempo.com/uploads/media/2019/08/06/cristiano-ronaldo-revela-significado-grito.jpg",  
"https://media.vandal.net/i/1200x630/9-2017/201792611530_1.jpg",  
"https://www.elimparcial.com/__export/1579046867304/sites/elimparcial/img/2020/01/14/lourdes_vega_6_crop1579046866069.jpg_1902800913.jpg",  
"https://cdn2.rsvponline.mx/files/rsvp/styles/4x3_large/public/images/main/2022/qatar_2022-_cristiano_ronaldo_sera_castigado_y_multado_por_el_incidente_con_el_telefono_de_fan.jpg", 
"https://64.media.tumblr.com/8db29dbf60ea9ec68eda5a354f2d43d0/4762017af9821097-5a/s1280x1920/cf7090c5773b6cb2a0970583767bb2ae877024cf.jpg",  
"https://depor.com/resizer/2hgjg9FglsZQ48cZ6jCOHWguN_k=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WVFH5OOLUZESND4CMTBWMBFTLM.jpg",
"https://media.revistagq.com/photos/5e337ba67c484c00080a1dd9/4:3/w_3732,h_2799,c_limit/GettyImages-1163338011.jpg"  
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: cristiano }, { quoted: m });
} else if (args[0] === "bts") {
let bts = `\t〨  *R A N D O M*

\t\t⧡ Random : *BTS*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://telegra.ph/file/539510f8d6448830d5ec8.jpg",
"https://telegra.ph/file/c4d6f25668c95d9d34823.jpg",
"https://telegra.ph/file/7d78ac524a8b32475b3bb.jpg",
"https://telegra.ph/file/130812eb8865e5146387c.jpg",
"https://telegra.ph/file/9219977b94be023a300b1.jpg",
"https://telegra.ph/file/1eeaa582307b873d5cb0a.jpg",
"https://telegra.ph/file/49cc8c9e3a5a80fc2ba88.jpg",
"https://telegra.ph/file/b52e67074aad948e4b7f7.jpg",
"https://telegra.ph/file/02a3428762fb21e0ae0ee.jpg",
"https://telegra.ph/file/9a8e37d920343099ff10d.jpg",
"https://telegra.ph/file/8497a2091355103a49c34.jpg",
"https://telegra.ph/file/ad212fccc308f7079300a.jpg",
"https://telegra.ph/file/a79a8fd4be11c92d1dbe7.jpg",
"https://telegra.ph/file/2ed762060f26394729789.jpg",
"https://telegra.ph/file/ee541c06a64abc3e7c2c3.jpg",
"https://telegra.ph/file/bba7d9139d3e5ac8c4b4e.jpg",
"https://telegra.ph/file/5ffe936a473fcecfdbbd3.jpg",
"https://telegra.ph/file/4b39715a968823d0bc8d6.jpg",
"https://telegra.ph/file/430f99906d9b9f43e77b9.jpg",
"https://telegra.ph/file/525c3c1468cb9cac20bc8.jpg",
"https://telegra.ph/file/25c4bd71ada71e9d346f9.jpg",
"https://telegra.ph/file/dbab6145e36e6d13bb49f.jpg",
"https://telegra.ph/file/0889313b0cbec6d469389.jpg",
"https://telegra.ph/file/e3a3e55351b7c6a86dabb.jpg",
"https://telegra.ph/file/f93095070c0983d76682e.jpg",
"https://telegra.ph/file/7fffb9337b1ab038c5d08.jpg",
"https://telegra.ph/file/3d3e6de8bdcfc325a629e.jpg",
"https://telegra.ph/file/237618ade306136cff53d.jpg",
"https://telegra.ph/file/ed036642ed4aa17a7b27b.jpg",
"https://telegra.ph/file/82971a4eda19ab16125c7.jpg"
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: bts }, { quoted: m });
} else if (args[0] === "navidad") {
let navidad = `\t〨  *R A N D O M*

\t\t⧡ Random : *Navidad*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://concepto.de/wp-content/uploads/2015/05/navidad-e1546995987660-800x400.jpg",
"https://img.freepik.com/vector-gratis/letras-feliz-navidad-brillantes-confeti-brillantes-adornos_1262-16808.jpg",
"https://sp-ao.shortpixel.ai/client/q_lqip,ret_wait,w_760,h_550/https://sumate.mx/wp-content/uploads/2021/12/Navidad-760x550.jpg",
"https://images.milenio.com/dUYoCJk8yV0Ngz4gBV9iBFiePWM=/936x566/uploads/media/2019/12/02/te-contamos-cual-es-el_0_6_958_596.jpg",
"https://s1.significados.com/foto/significado-de-la-navidad.jpg",
"https://elordenmundial.com/wp-content/uploads/2020/12/navidad-celebracion-fiesta-tradicion-sociedad-historia-portada.jpg",
"https://conceptoabc.com/wp-content/uploads/2021/09/Navidad.jpg",
"https://img.asmedia.epimg.net/resizer/d9MIl-r64f1uJnJEO4q0yFQHnDk=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/S7H7HDZF2RJ7RJ3FYMDU5QFSQ4.jpg",
"https://elordenmundial.com/wp-content/uploads/2019/12/38808924684_458ea6dc73_k.jpg",
"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/11/12/16367293961507.jpg",
"https://www.fundeu.es/wp-content/uploads/2012/12/Navidad2013.jpg",
"https://astelus.com/wp-content/viajes/Celebracio%CC%81n-de-la-Navidad-alrededor-del-mundo.jpg",
"https://estaticos.muyhistoria.es/uploads/images/dossier/5d7f9bc05cafe8d2783c986a/navidad-1.jpg",
"https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/arbol-de-navidad.jpg",
"https://www.birthdaywishes.expert/wp-content/uploads/2018/10/feliz-navidad-cover-photo.jpg",
"https://i.ytimg.com/vi/VjGP-qSSJfs/maxresdefault.jpg",
"https://i.ytimg.com/vi/stiPofE7cY0/maxresdefault.jpg"  
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: navidad }, { quoted: m });
} else if (args[0] === "halloween") {
let hallow = `\t〨  *R A N D O M*

\t\t⧡ Random : *Halloween*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://telegra.ph/file/b1c03fd58f411a0423a32.jpg",
"https://telegra.ph/file/39960ae3b2ce3d5b5ad04.jpg",
"https://telegra.ph/file/9bc1e6e5707016bc8f201.jpg",
"https://telegra.ph/file/c3b7b0433e21c61c2e4b0.jpg",
"https://telegra.ph/file/ec47e790bcce3412303fb.jpg",
"https://telegra.ph/file/76783043c766ce2c0271d.jpg",
"https://telegra.ph/file/91264fd54a2e5017c0bf0.jpg",
"https://telegra.ph/file/6675c851ae820cb8358c7.jpg",
"https://telegra.ph/file/94cb5004051895340bd3d.jpg",
"https://telegra.ph/file/be0656f90e104da260131.jpg",
"https://telegra.ph/file/a3e7cc84d81b105132b93.jpg",
"https://telegra.ph/file/99c2550af265c42b99c33.jpg",
"https://telegra.ph/file/b88098323eb9e41313c84.jpg",
"https://telegra.ph/file/318ccd73ceeeda98e364a.jpg",
"https://telegra.ph/file/2706f519adcf921e8b60d.jpg",
"https://telegra.ph/file/909ae8de8e6c377232c7d.jpg",
"https://telegra.ph/file/ef6c1f8a9086871d297da.jpg",
"https://telegra.ph/file/44f6a0be05ae01d1895a7.jpg",
"https://telegra.ph/file/ed7f26916a24ed767b213.jpg",
"https://telegra.ph/file/fe96693d650ec00f9c285.jpg",
"https://telegra.ph/file/18079f2ebbaac3acc3aea.jpg",
"https://telegra.ph/file/fd1c71db6af76c91d949f.jpg",
"https://telegra.ph/file/a4f9f7ed296149677ef32.jpg",
"https://telegra.ph/file/6422560f09caabad6eaf7.jpg",
"https://telegra.ph/file/ffdb7da3a681d9b642224.jpg",
"https://telegra.ph/file/e09dbaa0006eff4259712.jpg",
"https://telegra.ph/file/9788a2307ff21d2e0fe12.jpg",
"https://telegra.ph/file/ccefd9306cc68a1cc5926.jpg",
"https://telegra.ph/file/2bd684d9e4a04666973e3.jpg",
"https://telegra.ph/file/bce6d4b92ac306526e051.jpg",
"https://telegra.ph/file/c141e7a583e9cb8a37c57.jpg",
"https://telegra.ph/file/eca1c9b7c2d1181a0ac2f.jpg",
"https://telegra.ph/file/d96ea8498533bd57bb2d4.jpg"
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: hallow }, { quoted: m });
} else if (args[0] === "itzy") {
let itzy = `\t〨  *R A N D O M*

\t\t⧡ Random : *Itzy*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://upload.wikimedia.org/wikipedia/commons/5/54/ITZY_at_SBS_Radio_in_July_2022.jpg",
"https://www.laguiago.com/wp-content/uploads/2021/09/Itzy.jpg",
"https://6.vikiplatform.com/image/a41ff8af90e1449693caf704fd06dbb7.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1",
"https://www.nme.com/wp-content/uploads/2021/09/itzy-crazy-in-love-jyp-entertainment-100921-e1631258154446.jpg",
"https://upload.wikimedia.org/wikipedia/commons/5/53/ITZY_K-POP_Debut_SHOWCASE_%28cropped%29.jpg",
"https://i.pinimg.com/originals/2b/5b/41/2b5b41a7a5b03f95d46099744ec13cab.jpg",
"https://www.nacionrex.com/__export/1550368923056/sites/debate/img/2019/02/16/13_02_itzy_1_crop1550366886614.png_423682103.png",
"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/itzy_main_9.jpg",
"https://i.pinimg.com/originals/a4/53/08/a453083dac717d1eac9b3a0fc9e9af79.jpg",
"https://i.pinimg.com/474x/76/8e/41/768e412fa8d5f613fb157e9e3644818e.jpg",
"https://i.pinimg.com/736x/e7/92/9f/e7929fda67a36a8994a265c7b4e9ee51.jpg",
"https://i.pinimg.com/736x/3a/f0/2f/3af02f8dab7d3f2a113495d8f1f2bbfc.jpg",
"https://i.pinimg.com/736x/2e/3a/79/2e3a79928b7e7acf3940e16bf740b926.jpg",
"https://upload.wikimedia.org/wikipedia/commons/5/54/ITZY_at_SBS_Radio_in_July_2022.jpg", 
"https://www.allkpop.com/upload/2021/04/content/290922/web_data/allkpop_1619702942_20210429-itzy.jpg",  
"https://www.billboard.com/wp-content/uploads/media/TWICE-ITZY-screenshot-2019-billboard-1548.jpg"
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: itzy }, { quoted: m });
} else if (args[0] === "universo") {
let universo = `\t〨  *R A N D O M*

\t\t⧡ Random : *Universo*
\t\t⧡ Bot : *${botname}*

> ${textbot}`;
let xd = [
"https://telegra.ph/file/f7ab32e14f9ca61557bae.jpg",
"https://telegra.ph/file/52d91662ebe30f006c9bc.jpg",
"https://telegra.ph/file/b30425d89dd1ced4fc19e.jpg",
"https://telegra.ph/file/d1e6e81b2ba7ebda1f6b7.jpg",
"https://telegra.ph/file/f26598f860c1a88e4ea8c.jpg",
"https://telegra.ph/file/10901306a3ea7b4a5cdaf.jpg",
"https://telegra.ph/file/204b67f5671cd7b5f64fe.jpg",
"https://telegra.ph/file/9bf86fca036205437e5f0.jpg",
"https://telegra.ph/file/0169444815c26391c55d4.jpg",
"https://telegra.ph/file/1284b399bc0b2d560e968.jpg",
"https://telegra.ph/file/1ef9014f57375e39cc3c4.jpg",
"https://telegra.ph/file/2512296c04d19b596a59c.jpg",
"https://telegra.ph/file/a2eeaa909c08c02bab699.jpg",
"https://telegra.ph/file/89800d3f864d15570bc14.jpg"
];
const fotos = xd[Math.floor(Math.random() * xd.length)];
await conn.sendMessage(m.chat, { image: { url: fotos }, caption: universo }, { quoted: m });
} else {
let pruebaXd = "📍  Objetivo no valido, usa *#rd* para buscar el resultado.";
return conn.sendMessage(m.chat, { text: pruebaXd }, { quoted: m });
}

}
handler.command = ["rd", "random"];

export default handler;

