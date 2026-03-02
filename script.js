const giftBox = document.getElementById("giftBox");
const intro = document.querySelector(".intro-screen");
const main = document.getElementById("mainContent");
const video = document.getElementById("giftVideo");
const music = document.getElementById("bgMusic");
const floatingContainer = document.querySelector(".floating-container");

let dropInterval;

/* OPEN GIFT */

giftBox.addEventListener("click", () => {

    giftBox.classList.add("open");

    setTimeout(() => {
        intro.style.display = "none";
        main.classList.remove("hidden");

        // Start video
        video.play();

        // Start background music
        music.volume = 0.5;
        music.play();

        // Start falling decorations
        startFloating();

    }, 800);
});

/* FLOATING DECORATIONS */

const floatingImages = [
    "assets/drop2.jpg",
    "assets/drop1.gif",
    "assets/drop3.png"
];

function createFloating() {
    const img = document.createElement("img");
    img.src = floatingImages[Math.floor(Math.random() * floatingImages.length)];
    img.classList.add("floating");
    img.style.left = Math.random() * 100 + "%";
    img.style.animationDuration = (5 + Math.random() * 5) + "s";

    floatingContainer.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 10000);
}

function startFloating() {
    dropInterval = setInterval(createFloating, 700);
}