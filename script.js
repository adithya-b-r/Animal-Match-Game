<<<<<<< HEAD
const score = document.getElementById("score");
const tries = document.getElementById("tries");
const time = document.getElementById("time");
const pause = document.getElementById("pause");
const main = document.getElementById("main");
const rstGame = document.getElementById("rst-game");

var count = 10;
var firstCard = null, secondCard = null;
var cardClick = 0, counter = 0, userScore = 0;
var min = 0, sec = 0;
var pauseGame = false, match = false;

// Game Audios
var flipAudio = new Audio('/audio/flipcard.mp3');
var matchAudio = new Audio('/audio/success.mp3');
var gameCompleteAudio = new Audio('/audio/gameComplete.mp3');

var path = "/imgs/";
var images = ["parrot", "cat", "dog", "dragon", "fox", "hamster", "panda", "penguin",
  "parrot", "cat", "dog", "dragon", "fox", "hamster", "panda", "penguin"];

function shuffleArr(images) {
  for (var i = images.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [images[i], images[rand]] = [images[rand], images[i]];
  }
}

function insertImages(imgs) {
  imgs.forEach(img => {
    let card = document.createElement("div");
    card.className = `flip-card ${img}`;
    card.id = `${img}${count}`;
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/imgs/earth.png">
        </div>
        <div class="flip-card-back">
          <img src="${path}${img}.png">
        </div>
      </div>
      `;

    card.addEventListener("click", () => {
      check(card);
      flipAudio.play();

    });

    main.appendChild(card);
    count++;
  });
}

function check(card) {
  if (cardClick === 2 || card.classList.contains("flip-forever")) return;

  card.classList.add("flip-forever");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  cardClick = 2;

  // Check if the two cards match
  if (firstCard.id.slice(0, -2) === secondCard.id.slice(0, -2)) {
    userScore += 20;
    score.textContent = userScore;
    firstCard.style.pointerEvents = 'none';
    secondCard.style.pointerEvents = 'none';
    matchAudio.play();
    resetCardSelection(true);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flip-forever");
      secondCard.classList.remove("flip-forever");
      resetCardSelection(false);
    }, 500);
  }

  tries.textContent = counter < 9 ? `0${++counter}` : ++counter;

  if (score.textContent == 160) {
    restartInitialisation();
  }
}

function restartInitialisation() {
  pauseTheGame();

  if (score.textContent == 160) {
    document.getElementById("gameTitle").innerText = "You Win";
    document.getElementById("gameTitle").style.color = "green";
  }

  document.getElementById("gameOver").style.display = "flex";
  document.getElementById("fscore").textContent = score.textContent;
  document.getElementById("ftries").textContent = tries.textContent;
  document.getElementById("ftime").textContent = time.textContent;
  gameCompleteAudio.play();
}

function resetCardSelection(isMatch) {
  if (isMatch) {
    match = true;
  } else {
    match = false;
  }

  firstCard = null;
  secondCard = null;
  cardClick = 0;
}

function timeCounter() {
  if (!pauseGame) {
    sec++;

    if (sec === 60) {
      min++;
      sec = 0;
    }

    var timer = min <= 9 ? `0${min}` : min;
    timer += sec <= 9 ? `:0${sec}` : `:${sec}`;
    time.textContent = timer;
  }
}

function pauseTheGame() {
  pauseGame = !pauseGame;

  pause.querySelector('img').src = pauseGame ? "/imgs/play.png" : "/imgs/pause.png";
  main.style.pointerEvents = pauseGame ? "none" : "auto";
}

function resetGame() {
  document.getElementById("gameOver").style.display = "none";
  location.reload();
}

rstGame.addEventListener("click", resetGame);
pause.addEventListener("click", pauseTheGame);

shuffleArr(images);
insertImages(images);

setInterval(timeCounter, 1000); //1 sec
=======
const score = document.getElementById("score");
const tries = document.getElementById("tries");
const time = document.getElementById("time");
const pause = document.getElementById("pause");
const main = document.getElementById("main");
const rstGame = document.getElementById("rst-game");

var count = 10;
var firstCard = null, secondCard = null;
var cardClick = 0, counter = 0, userScore = 0;
var min = 0, sec = 0;
var pauseGame = false, match = false;

// Game Audios
var flipAudio = new Audio('/audio/flipcard.mp3');
var matchAudio = new Audio('/audio/success.mp3');
var gameCompleteAudio = new Audio('/audio/gameComplete.mp3');

var path = "/imgs/";
var images = ["parrot", "cat", "dog", "dragon", "fox", "hamster", "panda", "penguin",
  "parrot", "cat", "dog", "dragon", "fox", "hamster", "panda", "penguin"];

function shuffleArr(images) {
  for (var i = images.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [images[i], images[rand]] = [images[rand], images[i]];
  }
}

function insertImages(imgs) {
  imgs.forEach(img => {
    let card = document.createElement("div");
    card.className = `flip-card ${img}`;
    card.id = `${img}${count}`;
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/imgs/earth.png">
        </div>
        <div class="flip-card-back">
          <img src="${path}${img}.png">
        </div>
      </div>
      `;

    card.addEventListener("click", () => {
      check(card);
      flipAudio.play();

    });

    main.appendChild(card);
    count++;
  });
}

function check(card) {
  if (cardClick === 2 || card.classList.contains("flip-forever")) return;

  card.classList.add("flip-forever");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  cardClick = 2;

  // Check if the two cards match
  if (firstCard.id.slice(0, -2) === secondCard.id.slice(0, -2)) {
    userScore += 20;
    score.textContent = userScore;
    firstCard.style.pointerEvents = 'none';
    secondCard.style.pointerEvents = 'none';
    matchAudio.play();
    resetCardSelection(true);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flip-forever");
      secondCard.classList.remove("flip-forever");
      resetCardSelection(false);
    }, 500);
  }

  tries.textContent = counter < 9 ? `0${++counter}` : ++counter;

  if (score.textContent == 160) {
    restartInitialisation();
  }
}

function restartInitialisation() {
  pauseTheGame();

  if (score.textContent == 160) {
    document.getElementById("gameTitle").innerText = "You Win";
    document.getElementById("gameTitle").style.color = "green";
  }

  document.getElementById("gameOver").style.display = "flex";
  document.getElementById("fscore").textContent = score.textContent;
  document.getElementById("ftries").textContent = tries.textContent;
  document.getElementById("ftime").textContent = time.textContent;
  gameCompleteAudio.play();
}

function resetCardSelection(isMatch) {
  if (isMatch) {
    match = true;
  } else {
    match = false;
  }

  firstCard = null;
  secondCard = null;
  cardClick = 0;
}

function timeCounter() {
  if (!pauseGame) {
    sec++;

    if (sec === 60) {
      min++;
      sec = 0;
    }

    var timer = min <= 9 ? `0${min}` : min;
    timer += sec <= 9 ? `:0${sec}` : `:${sec}`;
    time.textContent = timer;
  }
}

function pauseTheGame() {
  pauseGame = !pauseGame;

  pause.querySelector('img').src = pauseGame ? "/imgs/play.png" : "/imgs/pause.png";
  main.style.pointerEvents = pauseGame ? "none" : "auto";
}

function resetGame() {
  document.getElementById("gameOver").style.display = "none";
  location.reload();
}

rstGame.addEventListener("click", resetGame);
pause.addEventListener("click", pauseTheGame);

shuffleArr(images);
insertImages(images);

setInterval(timeCounter, 1000); //1 sec
>>>>>>> 7341184ead04c1d0d9c858e3c1392552b83cbdff
setTimeout(restartInitialisation, 120000);  //End game after 2 mins