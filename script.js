const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const gifContainer = document.getElementById("gif-container");

let scale = 1; // Păstrează dimensiunea inițială

noBtn.addEventListener("click", function() {
    scale += 0.2; // Crește dimensiunea treptat
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", function() {
    gifContainer.classList.remove("hidden");
});
