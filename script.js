const score = document.getElementById("score");
const tries = document.getElementById("tries");
const time = document.getElementById("time");
const pause = document.getElementById("pause");
const main = document.getElementById("main")

var count = 10
var cardID = "", tempID = "";
var cardClick = 1, counter = 0, userScore = 0;
var min = 0, sec = 0;
var pauseGame = false, match = false;

var path = "/imgs/"
var images = ["parrot", "cat", "dog", "dragon", "fox", "hamster", "panda", "penguin",
  "parrot", "cat", "dog", "dragon", "fox", "hamster", "panda", "penguin"]

function shuffleArr(images) {
  for (var i = images.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [images[i], images[rand]] = [images[rand], images[i]]
  }
}

function insertImages(imgs) {
  imgs.forEach(img => {
    let card = document.createElement("div");
    card.className = `flip-card ${img}`;
    card.id = `${img}${count}`
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/imgs/earth.png">
        </div>
        <div class="flip-card-back">
          <img src="`+ path + img + ".png" + `">
        </div>
      </div>
      `;

    card.addEventListener("click", () => {
      check(card);
    });

    main.appendChild(card);
    count++;
  });
}

function check(e) {
  cardID = e.id.toString()

  if (cardID.slice(0, -2) == tempID.slice(0, -2) && cardID != tempID) {
    console.log("same");
    score.textContent = userScore += 20;
    e.className += " flip-forever";
    document.getElementById(tempID).className += " flip-forever";
    match = true;
  } else {
    console.log("cardID : " + cardID + "\ntempID : " + tempID)
    if (cardID != tempID && tempID != "") {
      // document.getElementById(tempID).className += " flip-forever";
      e.className += " flip-forever";

    }
    // e.className += " flip-forever";
  }

  if (cardID != tempID && tempID != "") {
    cardClick++;
  }

  if (cardClick == 2) {
    tries.textContent = counter < 9 ? `0${++counter}` : ++counter;
    cardClick = 0;

    if (!match) {
      document.getElementById(tempID).className = document.getElementById(tempID).className.replace(" flip-forever", "");
      e.className.replace(" flip-forever", "");
      match = false
    }
  }

  tempID = cardID;
}

function timeCounter() {
  if (!pauseGame) {
    sec++;

    if (sec == 60) {
      min++;
      sec = 0;
    }

    var timer = min <= 9 ? `0${min}` : min;
    timer += sec <= 9 ? `:0${sec}` : `:${sec}`;
    time.textContent = timer;
  }
}

pause.addEventListener("click", () => {
  if (pauseGame) {
    pauseGame = false;
    pause.querySelector('img').src = "/imgs/pause.png"
  } else {
    pauseGame = true;
    pause.querySelector('img').src = "/imgs/play.png"
  }
})

shuffleArr(images)
insertImages(images);

setInterval(timeCounter, 1000)