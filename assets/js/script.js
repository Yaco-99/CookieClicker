const scoreTarget = document.getElementById("score"),
  cookie = document.getElementById("cookie");
(timerTarget = document.getElementById("bonus")),
  (multiplierShop = document.getElementById("multiplierShop")),
  (heroTarget = document.getElementById("hero")),
  (buySound = document.getElementById("buySound"));
let score = 0,
  multiplierPrice = 200,
  multiplier = 1,
  timing = 0,
  heroPrice = 500,
  hero = 0,
  interval = 0,
  bonusCheck = false,
  bonus = 1;

displayScore();

cookie.addEventListener("click", () => {
  console.log(bonus);
  bonusCheck ? (bonus = 2) : (bonus = 1);
  score += 1 * multiplier * bonus;
  displayScore();
});

multiplierShop.addEventListener("click", () => {
  soudEffect();
  multiplierBuy();
});

heroTarget.addEventListener("click", () => {
  soudEffect();
  newHero();
});

timerTarget.addEventListener("click", () => {
  soudEffect();
  score -= 600;
  bonusCheck = true;
  let timeLeft = 30;
  timerTarget.setAttribute("disabled", true);
  let timer = setInterval(function timer() {
    timeLeft--;
    timerTarget.innerHTML = `Time left : ${timeLeft}`;
  }, 1000);
  setTimeout(function bonusON() {
    bonusCheck = false;
    clearTimeout(timer);
    timerTarget.innerHTML = `BONUS 200% (600)`;
    timerTarget.removeAttribute("disabled");
  }, 30000);
});

function multiplierBuy() {
  multiplier++;
  score = score - multiplierPrice;
  multiplierPrice = multiplierPrice * 2;
  document.getElementById("multiplier").innerHTML = `X ${multiplier}`;
  multiplierShop.innerHTML = `X${multiplier + 1} (${multiplierPrice})`;
  displayScore();
}

function newHero() {
  if (hero == 1000) {
    alert("Your team is full");
    return;
  }

  timing = 1000 - hero;
  score = score - heroPrice;
  heroPrice = heroPrice * 3;
  heroTarget.innerHTML = `Hero (${heroPrice})`;
  hero += 200;
  displayScore();
  interval ? clearInterval(interval) : "not";
  interval = setInterval(autoClicker, timing);
}

function displayNone() {
  score < multiplierPrice
    ? multiplierShop.setAttribute("disabled", true)
    : multiplierShop.removeAttribute("disabled");
  score < heroPrice
    ? heroTarget.setAttribute("disabled", true)
    : heroTarget.removeAttribute("disabled");
  bonusCheck
    ? "ok"
    : score < 600
    ? timerTarget.setAttribute("disabled", true)
    : timerTarget.removeAttribute("disabled");
}
function displayScore() {
  scoreTarget.innerHTML = score;
  displayNone();
}

function autoClicker() {
  score++;
  displayScore();
}

function soudEffect() {
  buySound.pause();
  buySound.currentTime = 0;
  buySound.play();
}
