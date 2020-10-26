const scoreTarget = document.getElementById("score");
let score = 0,
    multiplierPrice = 200,
    multiplier = 1,
    timing = 0;

scoreTarget.addEventListener("click", () => {
    score += 1 * multiplier;
    scoreTarget.innerHTML = score;
    displayNone();
});

document.getElementById("multiplierShop").addEventListener("click", () => {
    multiplierBuy();
});
document.getElementById("hero").addEventListener("click", () => {
    newHero();
});

function multiplierBuy() {
    if (score > multiplierPrice) {
        multiplier++;
        score = score - multiplierPrice;
        multiplierPrice = multiplierPrice * 2;
        document.getElementById("multiplier").innerHTML = multiplier;
        document.getElementById("nextMultiplier").innerHTML = `X${multiplier}`;
        document.getElementById("cost").innerHTML = multiplierPrice;
    } else {
        alert("You don't have enough cookie !");
    }
}
function newHero() {
    if (score > heroPrice) {
        timing = 1000 - hero;
        score = score - multiplierPrice;
        multiplierPrice = multiplierPrice * 2;
        document.getElementById("multiplier").innerHTML = multiplier;
        document.getElementById("nextMultiplier").innerHTML = `X${multiplier}`;
        document.getElementById("cost").innerHTML = multiplierPrice;
    } else {
        alert("You don't have enough cookie !");
    }
}

function displayNone() {
    let display = document.querySelectorAll(".display");
    for (let i = 0; i < display.length; i++)
        if (cost < score) {
            display[i].classList.add('d-none');
        } else if (cost > score) {
            display[i].classList.remove('d-none');
        }
}
