class Game {
  constructor() {
    this.comBatu = document.getElementById("com-batu");
    this.comKertas = document.getElementById("com-kertas");
    this.comGunting = document.getElementById("com-gunting");
  }

  play() {
    const random = Math.floor(Math.random() * 3);
    console.log("random: ", random);

    if (random === 0) {
      this.comBatu.classList.add("highlight");
    } else if (random === 1) {
      this.comKertas.classList.add("highlight");
    } else if (random === 2) {
      this.comGunting.classList.add("highlight");
    }
  }
  remove() {
    this.comBatu.classList.remove("highlight");
    this.comKertas.classList.remove("highlight");
    this.comGunting.classList.remove("highlight");
  }
}

const game = new Game();
game.remove();

document.getElementById("player-gunting").addEventListener("click", () => {
  document.getElementById("player-gunting").classList.add("highlight");
  const game = new Game();
  game.play();
});
document.getElementById("player-kertas").addEventListener("click", () => {
  document.getElementById("player-kertas").classList.add("highlight");
  const game = new Game();
  game.play();
});
document.getElementById("player-batu").addEventListener("click", () => {
  document.getElementById("player-batu").classList.add("highlight");
  const game = new Game();
  game.play();
});

// For Refresh Button
const reloadButton = document.querySelector("#reload");

function reload() {
  reload = location.reload();
}
reloadButton.addEventListener("click", reload, false);

// Get Result
// triger
document.getElementById("player-kertas").addEventListener("click", () => {
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").remove();
  document.querySelector("#game-result .player-result").textContent = getResult();
});
document.getElementById("player-gunting").addEventListener("click", () => {
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").remove();

  document.querySelector("#game-result .player-result").textContent = getResult();
});

document.getElementById("player-batu").addEventListener("click", () => {
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").remove();
  document.querySelector("#game-result .player-result").textContent = getResult();
});

function getResult(player, com) {
  let result = "";
  if (player == "batu" && com == "gunting") {
    result = "PLAYER WIN";
  } else if (player == "batu" && com == "kertas") {
    result = "COM WIN";
  } else if (player == "gunting" && com == "batu") {
    result = "COM WIN";
  } else if (player == "gunting" && com == "kertas") {
    result = "PLAYER WIN";
  } else if (player == "kertas" && com == "gunting") {
    result = "COM WIN";
  } else if (player == "kertas" && com == "batu") {
    result = "PLAYER WIN";
  } else {
    result = "DRAW";
  }
  return result;
}
