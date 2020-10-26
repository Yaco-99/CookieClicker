const scoreTarget = document.getElementById("score"),
  timerTarget = document.getElementById("bonus");
let score = 0,
  multiplierPrice = 200,
  multiplier = 1,
  timing = 0,
  heroPrice = 500,
  hero = 0,
  interval = 0,
  bonusCheck = false,
  bonus = 1;

scoreTarget.addEventListener("click", () => {
  console.log(bonus);
  bonusCheck ? (bonus = 2) : (bonus = 1);
  score += 1 * multiplier * bonus;
  displayScore();
});

document.getElementById("multiplierShop").addEventListener("click", () => {
  multiplierBuy();
});

document.getElementById("hero").addEventListener("click", () => {
  newHero();
});

document.getElementById("bonus").addEventListener("click", () => {
  score -= 600;
  bonusCheck = true;
  let timeLeft = 30;
  let timer = setInterval(function timer() {
    timeLeft--;
    timerTarget.innerHTML = `Time left : ${timeLeft}`;
  }, 1000);
  setTimeout(function bonusON() {
    bonusCheck = false;
    clearTimeout(timer);
    timerTarget.innerHTML = `BONUS 200% (600)`;
  }, 30000);
});

function multiplierBuy() {
  if (score > multiplierPrice) {
    multiplier++;
    score = score - multiplierPrice;
    multiplierPrice = multiplierPrice * 2;
    document.getElementById("multiplier").innerHTML = `X ${multiplier}`;
    document.getElementById("multiplierShop").innerHTML = `X${
      multiplier + 1
    } (${multiplierPrice})`;
    displayScore();
  } else {
    alert("You don't have enough cookie !");
  }
}
function newHero() {
  if (hero == 1000) {
    alert("Your team is full");
    return;
  }
  if (score > heroPrice) {
    timing = 1000 - hero;
    score = score - heroPrice;
    heroPrice = heroPrice * 3;
    document.getElementById("hero").innerHTML = `Hero (${heroPrice})`;
    hero += 200;
    displayScore();
    interval ? clearInterval(interval) : "not";
    interval = setInterval(autoClicker, timing);
  } else {
    alert("You don't have enough cookie !");
  }
}
function displayScore() {
  scoreTarget.innerHTML = score;
}

function autoClicker() {
  score++;
  displayScore();
}
