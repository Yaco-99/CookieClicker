let score = document.getElementById("score");
let score = 0;

score.addEventListener("click", () => {
    let score = parseInt(score.innerHTML);
    score++;
    score.innerHTML += 1 * multiplier;
})



