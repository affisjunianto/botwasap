exports.info = (id, XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XBOT}*
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info ${XBOT}*
╠════════════════════
║├≽️⚜ *AUTOR* : _AFFIS_
║├≽️⚜ *DESIGNER* : _AMPIBI_
║├≽️⚜ *OWNER* : _AFFIS JUNIANTO_
╠════════════════════
║  *${XBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${XBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY AFFIS JUNIANTO*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
