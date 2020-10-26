const scoreTarget = document.getElementById("score"),
    timerTarget = document.getElementById("bonus"),
    multiplierShop = document.getElementById("multiplierShop"),
    heroTarget = document.getElementById("hero");
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

// click = score in paragraph : html written before script p with id score + p mutliplicator 

scoreTarget.addEventListener("click", () => {
    console.log(bonus);
    bonusCheck ? (bonus = 2) : (bonus = 1); // besoin de savoir si le bonus existe : on vérifie s'il est vrai ou pas pour le multiplier. Si vrai = 2.
    score += 1 * multiplier * bonus; // score on doit le garder, on commence à 1. Multi = 1. Bonus = 1. 
    displayScore(); //
});

multiplierShop.addEventListener("click", () => {
    multiplierBuy();
});

heroTarget.addEventListener("click", () => {
    newHero();
});

timerTarget.addEventListener("click", () => {
    score -= 600;
    bonusCheck = true;
    let timeLeft = 30; // temps de 30 secondes cooldown
    timerTarget.setAttribute("disabled", true);
    let timer = setInterval(function timer() {
        timeLeft--; // 30s -1 etc horloge
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
    if (score > multiplierPrice) {
        multiplier++; // passe de 1 à 2
        score = score - multiplierPrice; // actualise score 
        multiplierPrice = multiplierPrice * 2; // le prix augmente a chaque achat
        document.getElementById("multiplier").innerHTML = `X ${multiplier}`; // actualse multiplier 
        multiplierShop.innerHTML = `X${multiplier + 1} (${multiplierPrice})`; // écrit le prochain pallier 
        displayScore(); // on display le changement de score
    } else {
        alert("You don't have enough cookie !"); // disabled
    }
}
function newHero() { // en bouton plus haut
    if (hero == 1000) {
        alert("Your team is full");
        return;
    }
    if (score > heroPrice) { // si on a assez d'argent
        timing = 1000 - hero; // premiere lecture 
        score = score - heroPrice;
        heroPrice = heroPrice * 3;
        heroTarget.innerHTML = `Hero (${heroPrice})`;
        hero += 200;
        displayScore();
        interval ? clearInterval(interval) : "not"; // obligé de mettre pour clear l'intervall sinon ca stack
        interval = setInterval(autoClicker, timing);
    } else {
        alert("You don't have enough cookie !");
    }
}

function displayNone() {
    score < multiplierPrice
        ? multiplierShop.setAttribute("disabled", true) // désactive le bouton
        : multiplierShop.removeAttribute("disabled"); // reture l'aatribut disable / réactive le bouton
    score < heroPrice
        ? heroTarget.setAttribute("disabled", true)
        : heroTarget.removeAttribute("disabled");
    bonusCheck
        ? "ok"
        : score < 600
            ? timerTarget.setAttribute("disabled", true)
            : timerTarget.removeAttribute("disabled");
}
function displayScore() { // prend l'innerHTML 
    scoreTarget.innerHTML = score;
    displayNone(); // activer ou désactiver les boutons
}

function autoClicker() {
    score++;
    displayScore();
}
