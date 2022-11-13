window.gameData = {
  gameLevel: {},
};

const difficultySelectionScreen = document.querySelector(
  ".difficulty-selection-screen"
);
const difficultySelectionLevels = difficultySelectionScreen.querySelector(
  ".difficulty-selection-levels"
);
const levelItems = difficultySelectionLevels.querySelectorAll(".item-level");
const difficultySelectionStart = document.querySelector(
  ".difficulty-selection-start"
);
const play = difficultySelectionStart.querySelector(".play");
const gameScreen = document.querySelector(".game-screen");

const gameField = document.querySelector(".game-field");
const gameFieldCards = gameField.querySelectorAll(".game-field-card");

let level;
play.addEventListener("click", () => {
  levelItems.forEach((elem) => {
    if (elem.checked) {
      level = elem.value;
      window.gameData.gameLevel["level"] = level;
    }
  });

  difficultySelectionScreen.classList.add("hidden");
  if (level === "1") {
    gameScreen.classList.remove("hidden");
    closeСards();
  } else if (level === "2") {
    gameScreen.classList.remove("hidden");
    closeСards();
  } else if (level === "3") {
    gameScreen.classList.remove("hidden");
    closeСards();
  } else {
    const infoBg = document.createElement("div");
    infoBg.classList.add("info-bg");
    const info = document.createElement("div");
    info.classList.add("info");
    const infoTitle = document.createElement("h1");
    infoTitle.classList.add("title");
    infoTitle.textContent = "Вы не выбрали уровень!";
    const infoClose = document.createElement("img");
    infoClose.classList.add("info-close");
    infoClose.src = "img/close.svg";
    document.body.appendChild(infoBg);
    infoBg.appendChild(info);
    info.appendChild(infoTitle);
    info.appendChild(infoClose);
    infoClose.addEventListener("click", () => {
      infoBg.classList.add("hidden");
      difficultySelectionScreen.classList.remove("hidden");
    });
  }
});

function closeСards() {
  setTimeout(() => {
    gameFieldCards.forEach((item) => {
      item.classList.add("card-closed");
    });
  }, 5000);
}
