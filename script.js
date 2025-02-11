const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const gifContainer = document.getElementById("gif-container");
const content = document.getElementById("content");

let scale = 1; 

noBtn.addEventListener("click", function() {
    scale += 0.2; 
    yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", function() {
    content.classList.add("hidden"); 
    gifContainer.classList.remove("hidden"); 
});
