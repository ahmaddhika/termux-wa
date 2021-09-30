const a = '```'
const encrypt = (prefix, pushname2, name) => {
return `Hi!! ${pushname2}👋
Selamat Datang di Menu Encrypt & Decrypt.
Berikut adalah beberapa perintah yang tersedia

╭─────「 *ENCRYPT & DECRYPT* 」
│+ *${prefix}encode64 string*
│+ *${prefix}decode64 encrypt*
│+ *${prefix}hexaencode string*
│+ *${prefix}hexadecode encrypt*
│+ *${prefix}encbinary string*
│+ *${prefix}decbinary encrypt*
│+ *${prefix}encoctal string*
│+ *${prefix}decoctal encrypt*
│+ *${prefix}dorking dork*
│+ *${prefix}whois Domain*
│+ *${prefix}hostsearch Domain*
│+ *${prefix}dnslookup IP/Domain*
│+ *${prefix}geoip IP*
│+ *${prefix}nping IP*
│+ *${prefix}pastebin teks*
│+ *${prefix}tinyurl link*
│+ *${prefix}bitly link*
│+ *${prefix}hashidentifier Encrypt Hash*
╰────────────────────────
Terima kasih telah menggunakan Erza-BOT.💓`
}
exports.encrypt = encrypt
