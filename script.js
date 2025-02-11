const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const gifContainer = document.getElementById("gif-container");

noBtn.addEventListener("mouseover", function() {
    yesBtn.style.transform = "scale(1.5)";
});

yesBtn.addEventListener("click", function() {
    gifContainer.classList.remove("hidden");
});
