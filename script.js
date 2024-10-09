let shouldpanic = true;

function everySecond() {
  s("#time").innerHTML =
    new Date().toLocaleTimeString() +
    "&nbsp;&nbsp;&nbsp;" +
    new Date().toLocaleDateString();
}

setInterval(everySecond, 1000);
everySecond();

function typew(text, elm) {
  let i = 0;
  let speed = 70;
  function typeWriter(txt, ele) {
    console.log(txt);
    if (i < txt.length) {
      ele.innerHTML += txt.charAt(i);
      i++;
      setTimeout(() => {
        typeWriter(txt, ele);
      }, speed);
    } else {
      ele.classList.add("typew-done");
    }
  }
  typeWriter(text, elm);
}

window.addEventListener("DOMContentLoaded", () => {
  qsall(".typew").forEach((element) => {
    typew(element.getAttribute("data-text"), element);
  });
});

function checkCon() {
  if (localStorage.favicon) {
    if (localStorage.title) {
      if (
        localStorage.title.trim().length >= 1 &&
        localStorage.favicon.trim().length >= 1
      ) {
        s("title").innerHTML = localStorage.title;
        s(".favicon").href =
          (window.location.pathname.includes("utils/") ? "../" : "") +
          localStorage.favicon;
      }
    }
  }
  if (!localStorage.prxylink) {
    localStorage.prxylink = "https://x.x.xxxxx.tw/";
  }
  if (localStorage.prxylink && document.activeElement === document.body) {
    if (localStorage.prxylink.toLowerCase() === "https://")
      localStorage.prxylink = "https://x.x.xxxxx.tw/";
  }
  if (s("#prxylink")) {
    s("#prxylink").src = localStorage.prxylink;
  }
  if (!localStorage.panicurl) {
    localStorage.panicurl = "https://google.com/";
  }
  if (localStorage.panicurl && document.activeElement === document.body) {
    if (localStorage.panicurl.toLowerCase() === "https://")
      localStorage.panicurl = "https://google.com/";
  }
}

checkCon();
window.onload = checkCon;

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function disguise(img, text) {
  localStorage.favicon = img;
  localStorage.title = text;
  checkCon();
}

function customdis() {
  let text = prompt("Tab Name*: ");
  let favicon = prompt("Tab Icon Link (OPTIONAL): ");
  if (!favicon) {
    favicon = "not_set_will_cause_error_but_it_fine";
  }
  localStorage.favicon = favicon;
  localStorage.title = text;
  checkCon();
  alert("Disguise Set!");
}

function cloak() {
  tab = window.open();
  tab.window.document.body.innerHTML = `<!DOCTYPE html><html><head><style>*{padding:0;margin:0;}html,body{width:100%;height:100vh}</style></head><body><iframe src="https://${window.location.host}" style="border:0px #ffffff none;" name="lunar" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe></body></html>`;
  location.replace(localStorage.panicurl);
}

document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.already) {
    localStorage.showPanic = "Yes";
  }
  localStorage.already = "Yes";
});

function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  if (!localStorage.already) {
    localStorage.showPanic = "Yes";
  }
  localStorage.already = "Yes";
}

const xor = {
  encode(str) {
    if (!str) return str;
    return encodeURIComponent(
      str
        .toString()
        .split("")
        .map((char, ind) =>
          ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
        )
        .join("")
    );
  },
  decode(str) {
    if (!str) return str;
    let [input, ...search] = str.split("?");

    return (
      decodeURIComponent(input)
        .split("")
        .map((char, ind) =>
          ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
        )
        .join("") + (search.length ? "?" + search.join("?") : "")
    );
  },
};

function onclicky() {
  qsall("input", (input) => {
    if (document.activeElement !== document.body) {
      shouldpanic = false;
    } else {
      shouldpanic = true;
    }
  });
}

qsall("*", (element) => {
  element.addEventListener("click", onclicky);
});

function replaceGoogle() {
  if (shouldpanic) location.replace(localStorage.panicurl);
}

function checkPanic() {
  if (localStorage.showPanic) {
    qsall(".panic", (button) => {
      button.style.display = "inline-block";
      button.addEventListener("click", replaceGoogle);
    });
  } else {
    qsall(".panic", (button) => {
      button.style.display = "none";
    });
  }
}

checkPanic();

document.addEventListener("keypress", (e) => {
  if (localStorage.showPanic) {
    if (e.key.toLowerCase() === "`") {
      replaceGoogle();
    }
  }
});

function togglePanic() {
  if (localStorage.showPanic) {
    localStorage.removeItem("showPanic");
  } else {
    localStorage.showPanic = "Yes";
  }
  checkPanic();
}

function redir(url) {
  location.href = url;
}

function replace(url) {
  location.replace(url);
}

function hideNav() {
  s("nav").style.display = "none";
  s(".line").style.display = "none";
  s(".content").style.height = "100vh";
  s(".content").style.top = "0";
  s(".shownav").style.display = "inline-block";
}

function showNav() {
  s("nav").style.display = "flex";
  s(".line").style.display = "";
  s(".content").style.height = "calc(100vh - 42px)";
  s(".content").style.top = "52px";
  s(".shownav").style.display = "none";
}
