function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getRandomAlphabet() {
  const randomNumber = Math.random() * 25;
  const roundRandomNumber = Math.round(randomNumber);
  const alphabet = "abcdefghijklmnopqrstuvwxyz/";
  const alphabetIntoArray = alphabet.split("");
  const randomDisplayText = alphabetIntoArray[roundRandomNumber];
  const displayText = document.getElementById("display-text");
  displayText.innerText = randomDisplayText.toUpperCase();
  addBackgroundColorById(randomDisplayText);
}

document.getElementById("play-button").addEventListener("click", function () {
  const hidingGameStartSection = document.getElementById("home-section");
  hidingGameStartSection.classList.add("hidden");

  const unHidingPlayGroundSection = document.getElementById(
    "play-ground-section"
  );
  unHidingPlayGroundSection.classList.remove("hidden");

  getRandomAlphabet();
});

 const keyHandler = document.addEventListener("keyup", function (event) {
  const displayText = document.getElementById("display-text");
  const currentAlphabet = displayText.innerText;
  const currentAlphabetText = currentAlphabet.toLowerCase();
  const playerPressed = event.key;

  if (currentAlphabetText === playerPressed) {
    getRandomAlphabet();
    removeBackgroundColorById(currentAlphabetText);

    const currentScore = document.getElementById("current-score");
    const currentScoreText = currentScore.innerText;
    const getInnerTextByNumber = parseInt(currentScoreText);
    const result = getInnerTextByNumber + 1;
    currentScore.innerText = result;
  } else {
    const lifeRemain = document.getElementById("life-remain");
    const currentLife = lifeRemain.innerText;
    const gettingCurrentLifeByNumber = parseInt(currentLife);
    const decreaseLife = gettingCurrentLifeByNumber - 1;
    lifeRemain.innerText = decreaseLife;

    if (decreaseLife === 0) {
      const HidingPlayGroundSection = document.getElementById(
        "play-ground-section"
      );
      HidingPlayGroundSection.classList.add("hidden");

      const finalScoreSection = document.getElementById("final-score-section");
      finalScoreSection.classList.remove("hidden");

      const currentScore = document.getElementById("current-score");
      const currentScoreText = currentScore.innerText;
      const getInnerTextByNumber = parseInt(currentScoreText);
      const result = getInnerTextByNumber + 1 - 1;
      const score = document.getElementById("score");
      score.innerText = `Score: ${result}`;

    //   document
    //     .getElementById("play-again-button")
    //     .addEventListener("click", function () {
    //       const hidingFinalSection = document.getElementById(
    //         "final-score-section"
    //       );
    //       hidingFinalSection.classList.add("hidden");

    //       const unHidingPlayGroundSection = document.getElementById(
    //         "play-ground-section"
    //       );
    //       unHidingPlayGroundSection.classList.remove("hidden");
          
    //     });
    }
  }
});

document
        .getElementById("play-again-button")
        .addEventListener("click", function () {
          const hidingFinalSection = document.getElementById(
            "final-score-section"
          );
          hidingFinalSection.classList.add("hidden");

          const unHidingPlayGroundSection = document.getElementById(
            "play-ground-section"
          );
          unHidingPlayGroundSection.classList.remove("hidden");

          lifeRemain(5)
        });
