const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let scale = 1; // Păstrează dimensiunea inițială a butonului Yes

noBtn.addEventListener("click", function() {
    scale += 0.2; // Crește dimensiunea lui Yes
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", function() {
    window.location.href = "love.html"; // Redirecționează către pagina de iubire
});
