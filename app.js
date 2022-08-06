class Game {
  constructor() {
    this.comBatu = document.getElementById("com-batu");
    this.comKertas = document.getElementById("com-kertas");
    this.comGunting = document.getElementById("com-gunting");

    this.playerBatu = document.getElementById("player-batu");
    this.playerKertas = document.getElementById("player-kertas");
    this.playerGunting = document.getElementById("player-gunting");
    this.hasilcom = document.getElementById("hasil");
    this.random = "";
  }

  play() {
    const random = Math.floor(Math.random() * 3);
    console.log("random: ", random);
    this.random = random;

    if (random === 0) {
      this.comBatu.classList.add("highlight");
    } else if (random === 1) {
      this.comKertas.classList.add("highlight");
    } else if (random === 2) {
      this.comGunting.classList.add("highlight");
    }
    document.querySelector("#hasil").textContent = random;
  }
  getcomresult() {
    alert(this.random);
  }
  remove() {
    this.comBatu.classList.remove("highlight");
    this.comKertas.classList.remove("highlight");
    this.comGunting.classList.remove("highlight");
  }
  removeplayer() {
    this.playerBatu.classList.remove("highlight");
    this.playerKertas.classList.remove("highlight");
    this.playerGunting.classList.remove("highlight");
  }
}

const game = new Game();
game.remove();

document.getElementById("player-gunting").addEventListener("click", () => {
  const game = new Game();
  game.removeplayer();
  game.remove();
  document.getElementById("player-gunting").classList.add("highlight");
  game.play();
});
document.getElementById("player-kertas").addEventListener("click", () => {
  const game = new Game();
  game.removeplayer();
  game.remove();
  document.getElementById("player-kertas").classList.add("highlight");

  game.play();
});
document.getElementById("player-batu").addEventListener("click", () => {
  const game = new Game();
  game.removeplayer();
  game.remove();
  document.getElementById("player-batu").classList.add("highlight");

  game.play();
});

// For Refresh Button
const reloadButton = document.querySelector("#reload");

function reload() {
  const game = new Game();
  game.removeplayer();
  game.remove();

  document.querySelector("#game-result .player-result").style.display = "none";
  document.querySelector("#game-result .vs-text").style.display = "block";
}
reloadButton.addEventListener("click", reload, false);

// Get Result
// triger
document.getElementById("player-kertas").addEventListener("click", () => {
  const hasil = document.querySelector("#hasil").textContent;
  if (hasil == 0) {
    var com = "batu";
  } else if (hasil == 1) {
    var com = "kertas";
  } else if (hasil == 2) {
    var com = "gunting";
  }

  console.log("hasil pemenang: ", "player : kertas  vs com :" + com);
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").style.display = "none";
  // document.querySelector("#game-result .vs-text").remove();
  document.querySelector("#game-result .player-result").textContent = getResult("kertas", com);
});
document.getElementById("player-gunting").addEventListener("click", () => {
  const hasil = document.querySelector("#hasil").textContent;
  if (hasil == 0) {
    var com = "batu";
  } else if (hasil == 1) {
    var com = "kertas";
  } else if (hasil == 2) {
    var com = "gunting";
  }
  console.log("hasil pemenang: ", "player : gunting  vs com :" + com);
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").style.display = "none";
  // document.querySelector("#game-result .vs-text").remove();

  document.querySelector("#game-result .player-result").textContent = getResult("gunting", com);
});

document.getElementById("player-batu").addEventListener("click", () => {
  const hasil = document.querySelector("#hasil").textContent;
  if (hasil == 0) {
    var com = "batu";
  } else if (hasil == 1) {
    var com = "kertas";
  } else if (hasil == 2) {
    var com = "gunting";
  }
  console.log("hasil pemenang: ", "player : batu  vs com :" + com);
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").style.display = "none";
  // document.querySelector("#game-result .vs-text").remove();
  document.querySelector("#game-result .player-result").textContent = getResult("batu", com);
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

  console.log("hasil : ", result);
  return result;
}

function getResults(player, com) {
  let result = "";
  if (player == "batu" && com == "2") {
    result = "PLAYER WIN";
  } else if (player == "batu" && com == "1") {
    result = "COM WIN";
  } else if (player == "gunting" && com == "0") {
    result = "COM WIN";
  } else if (player == "gunting" && com == "1") {
    result = "PLAYER WIN";
  } else if (player == "kertas" && com == "2") {
    result = "COM WIN";
  } else if (player == "kertas" && com == "0") {
    result = "PLAYER WIN";
  } else {
    result = "DRAW";
  }
  return result;
}
