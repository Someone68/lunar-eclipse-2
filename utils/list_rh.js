list_rh = [
  "https://jaydenmadethis.pii.at/",
  "https://dinnerbone.convoj.se/",
  "https://proxy.notho.me/",
  "https://you.send.aichi.me/",
  "https://you-are.wroth.org/",
  "https://proxy.it4e.co/",
  "https://proxy.kick.sh/",
  "https://i.am.not.sunny-love.com/",
  "https://proxy.zoho.to/",
  "https://20.42.ar/",
  "https://oo.poo.li/",
  "https://proxy.fpr.net/",
  "https://202.3vm.cl/",
  "https://x.x.xxxxx.tw/",
  "https://unblockproxy.duckdns.org/",
  "https://rhproxy-2.duckdns.org/",
  "https://rhproxy-3.duckdns.org/",
  "https://rhproxy.ddns.net/",
  "https://sksooskssksosksjsnalfnndmxmsmsosa.ponyhost.xyz/",
  "https://pragss.hbmc.net/",
  "https://yuki-bbs-r1.e-cloud.ch/",
  "https://yuki-bbs-r2.e-cloud.ch/",
  "https://yuki-bbs-r3.lain.ch/",
  "https://sigma-juan.bot.nu/",
  "https://radar-network.xn--d1aqf.org/",
  "https://subdomaniacs.xn--d1aqf.org/",
  "https://radarnetwork.xn--d1aqf.org/",
  "https://radarn3twork.xn--d1aqf.org/ ",
  "https://radar.network.xn--d1aqf.org/",
  "https://radar.network.prepaid4u.co.za/",
  "https://radar.network.mindboggle.us/",
  "https://anything2.0.pintravel.ro/",
  "https://superidoltheje.ftp.sh/",
];
list_rh.forEach((link) => {
  document.querySelector("#list").innerHTML +=
    `<a href='javascript:void(0)' onclick='localStorage.prxylink = "${link}";alert("Set ${link.replace(
      "https://",
      ""
    )} as default proxy link.");'> [RH] ` +
    link +
    "</a>\n";
});
