const scoreTarget = document.getElementById("score");
let score = 0;

scoreTarget.addEventListener("click", () => {
    score += 1 * multiplier;
    scoreTarget.innerHTML = score;
})