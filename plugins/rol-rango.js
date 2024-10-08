const roles = {
'*0* 🍷': 0,
'*2* 🍷': 2,
'*4* 🍷': 4,
'*6* 🍷': 6,
'*8* 🍷': 8,
'*10* 🍹': 10,
'*12* 🍹': 12,
'*14* 🍹': 14,
'*16* 🍹': 16,
'*18* 🍹': 18,
'*20* 🥃': 20,
'*22* 🥃': 22,
'*24* 🥃': 24,
'*26* 🥃': 26,
'*28* 🥃': 28,
'*30* ☁️': 30,
'*32* ☁️': 32,
'*34* ☁️': 34,
'*36* ☁️': 36,
'*38* ☁️': 38,
'*40* 🪐': 40,
'*42* 🪐': 42,
'*44* 🪐': 44,
'*46* 🪐': 46,
'*48* 🪐': 48,
'*50* 💧': 50,
'*52* 💧': 52,
'*54* 💧': 54,
'*56* 💧': 56,
'*58* 💧': 58,
'*60* 🍿': 60,
'*62* 🍿': 62,
'*64* 🍿': 64,
'*66* 🍿': 66,
'*68* 🍿': 68,
'*70* 🌐': 70,
'*72* 🌐': 72,
'*74* 🌐': 74,
'*76* 🌐': 76,
'*78* 🌐': 78,
'*80* 💰': 80,
'*82* 💰': 82,
'*84* 💰': 84,
'*86* 💰': 86,
'*88* 💰': 88,
'*90* 🎁': 90,
'*92* 🎁': 92,
'*94* 🎁': 94,
'*96* 🎁': 96,
'*98* 🎁': 98,
'*100* 💻': 100,
'*102* 💻': 102,
'*104* 💻': 104,
'*106* 💻': 106,
'*108* 💻': 108,
'*110* 🎒': 110,
'*112* 🎒': 112,
'*114* 🎒': 114,
'*116* 🎒': 116,
'*118* 🎒': 118,
'*120* 🔔': 120,
'*122* 🔔': 122,
'*124* 🔔': 124,
'*126* 🔔': 126,
'*128* 🔔': 128,
'*130* 🌌': 130,
'*132* 🌌': 132,
'*134* 🌌': 134,
'*136* 🌌': 136,
'*138* 🌌': 138,
'*140* 🏆': 140,
'*145* 🏆': 145,
'*150* 🏆': 150,
'*155* 🏆': 155,
'*160* 🏆': 160,
'*170* 👑': 170,
'*185* 👑': 185,
'*200* 👑': 200,
'*250* 👑': 250,
'*300 MAX* 👑': 300
}

let handler = m => m
handler.before = async function (m, { conn }) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}
export default handler 