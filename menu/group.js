const a = '```'
const groupp = (prefix, pushname2, groupName, user, name, uptime, jam, tanggal, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
return `Hi!! ${pushname2}👋
Selamat Datang di Menu Group.
Berikut adalah beberapa perintah yang tersedia

     *USER INFO*

+  *USER*: *${pushname2}*
+  *PREMIUM*: ${premi}
+  *LIMIT*: *${limitt} perhari*

     *GROUP INFO*
     
+  *NAMA GRUP*: *${groupName}*
+  *MODE WELCOME": *${Welcomee}*
+  *MODE SIMI*: *${Simihh}*
+  *MODE ANIME*: *${ModeAnime}*
+  *MODE NSFW*:  *${Nsfww}*
+  *ANTIBADWORD*:  *${BadWordd}*
+  *ANTILINK*:  *${AntiLinkk}*
+  *ANTI VIRTEX*:  *${AntiVirtexx}*
+  *JAM:  *${jam} WIB*
+  *TANGGAL: *${tanggal}*
+  *RUNTIME:  ${kyun(uptime)}
+  *MEMBER: *${user.length} User*

╭────「 *MENU DETECTED* 」──
│+ *${prefix}antilink On/Off*
│+ *${prefix}welcome On/Off*
│+ *${prefix}grup buka/tutup*
│+ *${prefix}modeanime On/Off*
│+ *${prefix}nsfw On/Off*
│+ *${prefix}simih On/Off*
│+ *${prefix}kudeta*
│+ *${prefix}antivirtex on/off*
│+ *${prefix}badword on/off*
│+ *${prefix}neonime naruto*
│+ *${prefix}naruto*
│+ *${prefix}minato*
│+ *${prefix}boruto*
│+ *${prefix}hinata*
│+ *${prefix}sakura*
│+ *${prefix}sasuke*
│+ *${prefix}toukachan*
│+ *${prefix}megumin*
│+ *${prefix}rize*
│+ *${prefix}akira*
│+ *${prefix}itori*
│+ *${prefix}kurumi*
│+ *${prefix}miku*
│+ *${prefix}anime*
│+ *${prefix}animecry*
│+ *${prefix}animekiss*
╰───────────────────────

╭────「 *ONLY ADMIN* 」──
│+ *${prefix}fitnah @mentioned/isi/balasan*
│+ *${prefix}ownergrup*
│+ *${prefix}listonline*
│+ *${prefix}setpp*
│+ *${prefix}infogrup*
│+ *${prefix}add 628xxxxxxxxxx*
│+ *${prefix}kick @mentioned*
│+ *${prefix}kicktime @mentioned*
│+ *${prefix}promote @mentioned*
│+ *${prefix}demote @mentioned*
│+ *${prefix}setname*
│+ *${prefix}setdesc*
│+ *${prefix}linkgrup*
│+ *${prefix}tagme*
│+ *${prefix}wame*
│+ *${prefix}nyimak*
│+ *${prefix}hidetag*
│+ *${prefix}tagall*
│+ *${prefix}mentionall*
│+ *${prefix}adminlist*
│+ *${prefix}nsfwloli*
│+ *${prefix}nsfwpussy*
│+ *${prefix}nsfwclasic*
│+ *${prefix}nsfwyuri*
│+ *${prefix}nsfwlewd*
│+ *${prefix}nsfwsolo*
│+ *${prefix}nsfweron*
│+ *${prefix}nsfwparadise*
│+ *${prefix}nsfwbigtt*
│+ *${prefix}nsfwecchi*
│+ *${prefix}nsfwcum*
│+ *${prefix}nsfwblowjob*
│+ *${prefix}nsfwneko*
│+ *${prefix}nsfwtrap*
│+ *${prefix}hentai*
╰────────────────────────
Terima kasih telah menggunakan Erza-BOT.💓`
}
exports.groupp = groupp

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
