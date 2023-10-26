global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^ʜᴏᴡ ᴍᴜᴄʜ ɪꜱ ᴛʜᴇ ʀᴇꜱᴜʟᴛ ᴏꜰ/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ᴛʜᴀᴛ Qᴜᴇꜱᴛɪᴏɴ ʜᴀꜱ ᴀʟʀᴇᴀᴅʏ ʙᴇᴇɴ ᴀɴꜱᴡᴇʀᴇᴅ.*', author, null, [['ᴘʟᴀʏ ᴀɢᴀɪɴ', '/mates']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
if (m.text == math.result) {
conn.sendButton(m.chat, `*ᴄᴏʀʀᴇᴄᴛ ᴀɴꜱᴡᴇʀ!!*\n*ʏᴏᴜ ʜᴀᴠᴇ ᴡᴏɴ: ${math.bonus} 𝚇𝙿*`, author, null, [['ᴘʟᴀʏ ᴀɢᴀɪɴ', `/math ${math.mode}`]], m)
global.db.data.users[m.sender].exp += math.bonus
clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `*ʏᴏᴜʀ ᴄʜᴀɴᴄᴇꜱ ᴀʀᴇ ᴏᴠᴇʀ*\n*ᴛʜᴇ ᴀɴꜱᴡᴇʀ ɪꜱ: ${math.result}*`, author, null, [['ᴘʟᴀʏ ᴀɢᴀɪɴ', `/math ${math.mode}`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `*ɪɴᴄᴏʀʀᴇᴄᴛ ᴀɴꜱᴡᴇʀ*\n*ꜱᴛɪʟʟ ᴀᴠᴀɪʟᴀʙʟᴇ ${global.math[id][2]} ᴏᴘᴘᴏʀᴛᴜɴɪᴛɪᴇꜱ*`, m)
}}}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
export default handler
