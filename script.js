const words = ["Monkey D. Luffy", "Roronoa zoro", "Nami", "Usopp","Sanji", "Tony Tony Chopper", "Nico Robin", "Franky", "Brook", "Jinbe"]; 
const wordDisplay = document.getElementById("word-display");
let currentIndex = 0;

function changeWord() {
    wordDisplay.textContent = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(changeWord, 2000); 