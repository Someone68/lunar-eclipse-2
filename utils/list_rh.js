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
  "https://pragss.hbmc.net/",
  "https://florrio.ehcp.eu/",
  "https://mathnetwork3.undo.it/",
  "https://pro.hopto.org/",
  "https://mrchimmins.info.gf/",
  "https://moonfacts.host2go.net/",
  "https://hakanakawana.cbu.net/",
  "https://snoopthethird.oops.wtf/",
  "https://interesantedividoelmesa.pimp.co.za/",
  "https://rhproxy.kozow.com/",
  "https://pro-2.ddnsfree.com/",
  "https://coc1.20pack.com/",
  "https://dontstop.hackquest.com/",
  "https://coolsitehuh.tutak.at/",
  "https://ru.rusi.ch/",
  "https://chrome.developer.li/",
  "https://33.42.ar/",
  "https://rammer1.ds6.pw/",
  "https://rammer2.ds6.pw/",
  "https://techfor1.letz.dev/",
  "https://rammershark-x56.mathewparkin.com/",
  "https://rammershark-x57.mathewparkin.com/",
  "https://rammershark-x58.mathewparkin.com/",
  "https://rammershark-x59.mathewparkin.com/",
  "https://rammershark-x60.mathewparkin.com/",
  "https://gtwjeurtse.evils.in/",
  "https://wrthuryted.evils.in/",
  "https://vyunouyuji.evils.in/",
  "https://kdvshhx.matlib.org/",
  "https://kamiappp.streetdirectory.sg/",
  "https://hallolah.gryffindor.se/",
];

let openl = false;

list_rh.forEach((link) => {
  document.querySelector("#list").innerHTML +=
    `<a class='link rh'> [RH] ` + link + "</a>\n";
});

window.addEventListener("DOMContentLoaded", () => {
  qsall(".link").forEach((element) => {
    element.addEventListener("click", () => {
      clicklink(element.innerHTML.replace("[RH] ", "").replace("[EM] ", ""));
    });
  });
});

function clicklink(link) {
  if (openl) {
    window.open(link);
  } else {
    localStorage.prxylink = link;
    alert("Set " + link.replace("https://", "") + " as default proxy link.");
  }
}
