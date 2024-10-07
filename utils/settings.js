s("#prxyl").addEventListener("input", () => {
  showFooter("changes unsaved", false);
});

s("#panicurl").addEventListener("input", () => {
  showFooter("changes unsaved", false);
});

s("#panicurl").addEventListener("focusout", () => {
  if (s(".footer").innerHTML !== "saved") {
    s(".footer").style.display = "none";
    s(".footer").innerHTML = "";
  }
});

s("#prxyl").addEventListener("focusout", () => {
  if (s(".footer").innerHTML !== "saved") {
    s(".footer").style.display = "none";
    s(".footer").innerHTML = "";
  }
});

s("#prxyl").addEventListener("change", () => {
  showFooter("saved");
  localStorage.prxylink = s("#prxyl").value;
  if (!localStorage.prxylink.includes("https://")) {
    let newlcs = localStorage.prxylink.split("");
    newlcs.unshift("https://");
    localStorage.prxylink = newlcs.join("");
  }
  s("#prxyl").value = localStorage.prxylink;
  checkCon();
});

s("#prxyl").value = localStorage.prxylink;

s("#panicurl").addEventListener("change", () => {
  localStorage.panicurl = s("#panicurl").value;
  if (!localStorage.panicurl.includes("https://")) {
    let newlcs = localStorage.panicurl.split("");
    newlcs.unshift("https://");
    localStorage.panicurl = newlcs.join("");
  }
  s("#panicurl").value = localStorage.panicurl;
  showFooter("saved");
  checkCon();
});

s("#panicurl").value = localStorage.panicurl;

document.onclick = () => {
  checkCon();

  if (!localStorage.prxylink.includes("https://")) {
    let newlcs = localStorage.prxylink.split("");
    newlcs.unshift("https://");
    localStorage.prxylink = newlcs.join("");
  }
  if (!localStorage.prxylink && document.activeElement === document.body) {
    localStorage.prxylink = "https://x.x.xxxxx.tw/";
    s("#prxyl").value = localStorage.prxylink;
  } else if (
    localStorage.prxylink &&
    document.activeElement === document.body
  ) {
    if (localStorage.prxylink.toLowerCase() === "https://")
      localStorage.prxylink = "https://x.x.xxxxx.tw/";

    s("#prxyl").value = localStorage.prxylink;
  } else {
    localStorage.panicurl = s("#panicurl").value;
    s("#prxyl").value = localStorage.prxylink;
  }
  checkCon();
  if (!localStorage.panicurl.includes("https://")) {
    let newlcs = localStorage.panicurl.split("");
    newlcs.unshift("https://");
    localStorage.panicurl = newlcs.join("");
  }
  if (!localStorage.panicurl && document.activeElement === document.body) {
    localStorage.panicurl = "https://google.com/";
    s("#panicurl").value = localStorage.panicurl;
  } else if (
    localStorage.panicurl &&
    document.activeElement === document.body
  ) {
    if (localStorage.panicurl.toLowerCase() === "https://")
      localStorage.panicurl = "https://google.com/";
    s("#panicurl").value = localStorage.panicurl;
  } else {
    localStorage.panicurl = s("#panicurl").value;
    s("#panicurl").value = localStorage.panicurl;
  }
  checkCon();
};

let globalTimeout;

function showFooter(text, timeout = true) {
  s(".footer").style.display = "flex";
  s(".footer").innerHTML = text;
  if (timeout) {
    if (globalTimeout) clearTimeout(globalTimeout);
    globalTimeout = setTimeout(() => {
      s(".footer").style.display = "none";
      s(".footer").innerHTML = "";
    }, 1500);
  }
}
