exports.edu = (id, XBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋
❉──────────❉

╔════════════════════
║   *_EDUCATION_ MENU*
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *#wiki* <query>Wikipedia.
║│2. *#nulis* <teks>
║│3. *#quran*
║│4. *#pantun*
║│5. *#nama* <nama anda>
║│6. *#pasangan* <Aris & Cahya>
║│7. *#lirik* <nama lagu>
║│8. *#chord* <nama lagu>
║│9. *#wikien* <query>Wikipedia.
║│10. *#puisi1 / #puisi2*
║│11. *#cerpen*
║│12. *#resep*
║╰───────────
╠════════════════════
║  *BOT BY AFFIS JUNIANTO*
╚════════════════════

╔[ *TANGGAL HARI INI🗓️* ]
╚➣ _*${tampilTanggal}*_
╔[ *SEKARANG JAM🕒* ]
╚➣ _*${tampilWaktu}*_
╔[ *BOT AKTIF🤖* ]
╚➣ _*${aktif}*_
`
}