// menu fitur bot
const a = '```'
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal, groupName, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => { 
	return `
Hallo _*${pushname2}*_👋 selamat datang di menu Erza Bot berikut adalah menu yang ada pada bot ini

╭──「 *SIMPEL INFO* 」──
│
│❦ *Nama*    : *${pushname2}*
│❦ *Member*  : *${premi}*
│❦ *Limit*   : *${limitt}*
│❦ *Time*    : *${jam} WIB*
│❦ *Tgl*     : *${tanggal}*
│❦ *Erza User*    : *${user.length} user*
│
│  *Deteceted Info Group*
│
│✎ *Name group* : *${groupName}*
│✎ *Welcome*    : *${Welcomee}*
│✎ *Simi simi*  : *${Simihh}*
│✎ *Anime mode* : *${ModeAnime}*
│✎ *Nsfw node*  : *${Nsfww}*
│✎ *Antibad*    : *${BadWordd}*
│✎ *Antilink*   : *${AntiLinkk}*
│✎ *Antivirus*  : *${AntiVirtexx}*
│
│  *Suport Me*
│
│☻ *insta*     : *${instagram}*
│☻ *Youtube*   : *${yt}*
│☻ *Blogger*   : *www.reysekha.my.id*
│☻ *Preset LR* : *www.reysekha.site*
│☻ *Rest Api*  : *reysekha.herokuapp.com*
│
│
│  *Bot Info*
│
│➸ *OS*: *Android 8.1.0*
│➸ *Device*: *Redmi 6A (cactus)*
│➸ *ROM*: *O11019*
│➸ *Baseband*: *unknown*
│➸ *Kernel*: *armv7l Linux 4.9.77*
│➸ *Uptime*: *${kyun(uptime)}*
│➸ *CPU*: *mt6762m*
│➸ *GPU*: *mt6762m*
│➸ *RAM*: *1432MiB / 1794MiB*
╰───────────────────


╭──「 *LIST MENU* 」──
│+ *${prefix}menuphotoxory*
│+ *${prefix}menutekspro*
│+ *${prefix}menuwallpaper*
│+ *${prefix}menucreator*
│+ *${prefix}menumedia*
│+ *${prefix}menugrup*
│+ *${prefix}menuothers*
│+ *${prefix}menuprimbon*
│+ *${prefix}menuinformasi*
│+ *${prefix}menufun*
│+ *${prefix}menuscrapper*
│+ *${prefix}menuencrypt*
│+ *${prefix}menuspam*
│+ *${prefix}menuowner*
│+ *${prefix}report lapor bug*
│+ *${prefix}thanksto* 
╰───────────────────

Terima kasih telah menggunakan Erza-BOT.💓

_© 2021 - Made with By Rey 💓_`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
${a}Untuk Sekarang Bot Hanya Bisa Digunakan Di Group Karna,${a} \n*Kalian Yang Menggunakan Bot Terlalu Spam*

*NOTE:*
Jika Bot Ini Ada Di Grup Anda Admin Grup Suruh Aktifkan Bot Dengan Cara ${prefix}bott aktif

*Adapun Daftar Menu Yang Di Public Sama Owner Dan Bisa Kalian Gunakan Tanpa Di Group*

- ${prefix}brainly
- ${prefix}kalkulator
- ${prefix}ytsearch
- ${prefix}moddroid
- ${prefix}happymod
- ${prefix}playstore
- ${prefix}tanggaljadian
- ${prefix}stiker
- ${prefix}resepmasakan
- ${prefix}film
- ${prefix}infocuaca
- ${prefix}infogempa
- ${prefix}tahta
- ${prefix}igstalk
- ${prefix}tiktokstalk
- ${prefix}instastory
- ${prefix}translate
- ${prefix}quran
- ${prefix}tafsirquran
- ${prefix}lirik
- ${prefix}chord
- ${prefix}nulis
- ${prefix}puisiimg
- ${prefix}randomkpop
- ${prefix}quotes
- ${prefix}bucin
- ${prefix}artinama
- ${prefix}wattpad
- ${prefix}jarak
- ${prefix}infoalamat
- ${prefix}mimpi
- ${prefix}bacotandilan
- ${prefix}instavid
- ${prefix}instaimg

*Apa Yang Terbaru??*

~ random gambar KPOP ✓
~ random gambar EXO ✓
~ Fitur Anti virtex ✓
~ Fitur Anti Link ✓
~ Bacotan Dilan ✓
~ wattpad searching ✓
~ puisi dalam bentuk gambar ✓
~ Mencari resep masakan ✓
~ text to picture (bisa request warna) ✓
~ Tiktok scrapper ✓
~ instagram image downloader ✓ => command: ${prefix}instaimg link url
~ instagram video downloader ✓ => command: ${prefix}instavid link url

~ Resep Masakan ✓ => comand: ${prefix}resepmasakan rawon [ contoh]

~ Anti Virtex on/off ✓ command: ${prefix}antivirtex on
- *Gunakan Apabila Ada Yg Ngirim Virtex*

~ Anti Virtex ✓ => command: ${prefix}antivirtexx
- *Bot Akan Mengirimkan Teks Biar Member Tidak Mengalami Lag*

~ Xnxx scrapper ✓

`
}
exports.bottt = bottt
// donasi menu

const donasi = (name) => { 
	return `       
╭─≽「 *DONASI AGAR BOT TETAP ONLINE* 」
┴
│✓ *Trakteer: https://trakteer.id/FarhanXCo*
│✓ *Saweria: https://saweria.co/FarhanXCo*
│
│✓ ${a}Pulsa: 08311800241${a}
│ *15k Invite Bot Ke Grup selama 1 bulan*
│
│✓ ${a}OVO: 08311800241${a}
│ *10k Invite Bot Ke Group Selama 1 Bulan*
┬
╰─────≽「 *BY ${name}* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}
exports.limitcount = limitcount
