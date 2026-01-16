const texts = ["Bienvenue", "Welcome", "مرحبا"];
let index = 0;

const welcomeText = document.getElementById("welcome-text");
const splash = document.getElementById("splash");
const content = document.getElementById("content");

// Change welcome text every 1.6 seconds
const interval = setInterval(() => {
    index = (index + 1) % texts.length;
    welcomeText.textContent = texts[index];
}, 1600);

// Hide splash after 5 seconds
setTimeout(() => {
    clearInterval(interval);
    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        splash.style.display = "none";
        content.style.display = "flex";
    }, 800);
}, 5000);
