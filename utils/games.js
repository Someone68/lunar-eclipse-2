games = ["1v1lol", "amongus", "badtimesimulator", "basketballstars", "slope"];

games.forEach((game) => {
  let btn = document.createElement("button");
  btn.classList.add("actionbutton");
  btn.innerHTML = game;
  s(".games").append(btn);

  // Create line breaks and append them without modifying innerHTML
  let lineBreak = document.createElement("br");
  s(".games").append(lineBreak);
  s(".games").append(lineBreak.cloneNode());

  btn.addEventListener("click", () => {
    redir(`./gmes/launchedgame.html?gameurl=${game}`);
  });
});
