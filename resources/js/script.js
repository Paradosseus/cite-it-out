const categories = [
  "Colors",
  "Dangerous activities",
  "Outdoor activities",
  "Things you have in your car",
  "Bathroom things",
  "Name for a dog",
  "Alcoholic drinks",
  "Breakfast foods",
  "Name for a child",
  "Name of Fears",
];

function changePage(page) {
  const content = document.getElementById("content");
  switch (page) {
    case "start":
      content.innerHTML = `
      <div class="items-container">
        <h1>Get Ready</h1>
        <p id="countdownValue">3</p>
        <a href="index.html"> <button class="button">Back</button></a>
      </div>
        `;
      countDown();
      break;
    case "main":
      content.innerHTML = `
        <div class="items-container">
          <h1 class="game-title">Cite It Out</h1>
          <button class="button" onclick="changePage('start')">Start game</button>
        </div>
        `;
      break;
    case "timeOutPage":
      content.innerHTML = `
      <div class="items-container">
        <h1>Time's Up!</h1>
        <h1>Play again?</h1>
        <audio id="times-up-audio" autoplay>
        <source src="resources/media/times-up.mp3" type="audio/mpeg">
        </audio>
        <button class="button" onclick="changePage('start')">Yes</button>
        <button class="button" onclick="changePage('main')">No</button>
        </div>
        `;
      break;
  }
}

function toggleHelp() {
  const helpContainer = document.getElementById("how-to-container");
  helpContainer.classList.toggle("show");
}

function countDown() {
  let value = 3;
  const startCountdown = setInterval(function () {
    document.getElementById("countdownValue").innerHTML = value;
    value--;

    if (value < 0) {
      clearInterval(startCountdown);
      document.getElementById("countdownValue").innerHTML = "";
      generateCategory();
    }
  }, 1000);
}

function generateCategory() {
  let selectedCategory =
    categories[Math.floor(Math.random() * categories.length) + 1];

  const category = document.createElement("p");
  category.id = "categoryValue";
  category.innerHTML = selectedCategory;
  const counterElement = document.getElementById("countdownValue");

  counterElement.parentNode.replaceChild(category, counterElement);

  startTimer();
}

function startTimer() {
  let timerValue = 2;

  const timer = setInterval(function () {
    timerValue--;

    if (timerValue < 0) {
      clearInterval(timer);
      changePage("timeOutPage");
    }
  }, 2000);
}

const timeUpAudio = document.getElementById("times-up-audio").autoplay;

// timeUpAudio.addEventListener("canplaythrough", function (event) {
//   timeUpAudio.autoplay = true;
//   timeUpAudio.load();
// });
