import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[x-ɢᴇɴ-ᴍᴅ]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 I'm X-Gen-MD \n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│       X-Gen-MD
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Slasher-Official 🇧🇩
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/919587210657
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing X-GEN-MD! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler