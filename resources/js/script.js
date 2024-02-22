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
        <h1>Get Ready</h1>
        <p id="countdownValue">3</p>
        <button onclick="changePage('main')">Back</button>
        
        
        `;
      countDown();
      break;
    case "main":
      content.innerHTML = `
      <h1>Cite Out It</h1>
      <button onclick="changePage('start')">Start game</button>
        
        `;
      break;
  }
}

function countDown() {
  let value = 3;
  const startCountdown = setInterval(function () {
    document.getElementById("countdownValue").innerHTML = value;
    value--;

    if (value < 0) {
      clearInterval(startCountdown);
      document.getElementById("countdownValue").innerHTML = "CATEGORY";
    }
  }, 1000);
}
