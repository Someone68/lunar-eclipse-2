window.addEventListener("keydown", (e) => {
  if (e.ctrlKey) {
    openl = true;
    qsall(".link").forEach((element) => {
      element.style.color = "lightcoral";
      element.style.cursor = "pointer";
      element.classList.add("link_click");
    });
  }
});

window.addEventListener("keyup", (e) => {
  openl = false;
  qsall(".link").forEach((element) => {
    element.style.color = "";
    element.style.cursor = "cell";
    element.classList.remove("link_click");
  });
});
