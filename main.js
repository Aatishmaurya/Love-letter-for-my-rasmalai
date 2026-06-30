// ==============================
// OUR UNIVERSE ❤️
// main.js
// ==============================

// Wait until everything loads
window.addEventListener("load", () => {

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {
        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 1000);

    }, 2500);

});


// Music
const music = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");

let musicStarted = false;

enterBtn.addEventListener("click", () => {

    // Play music after user interaction
    if (!musicStarted) {

        music.play().catch(() => {
            console.log("Music couldn't autoplay.");
        });

        musicStarted = true;

    }

    // Smooth fade animation
    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        // We'll change this later
        alert("❤️ Welcome to Our Universe ❤️\n\nThis is just the beginning...");

        document.body.style.opacity = "1";

    }, 1000);

});


// Floating hearts every few seconds
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.opacity = Math.random();

    heart.style.pointerEvents = "none";

    heart.style.transition = "all 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = "translateY(-120vh)";

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 900);


// Small sparkle effect when moving mouse
document.addEventListener("mousemove", (e) => {

    const spark = document.createElement("div");

    spark.style.position = "fixed";

    spark.style.left = e.clientX + "px";

    spark.style.top = e.clientY + "px";

    spark.style.width = "6px";

    spark.style.height = "6px";

    spark.style.borderRadius = "50%";

    spark.style.background = "white";

    spark.style.pointerEvents = "none";

    spark.style.opacity = ".8";

    spark.style.transition = ".6s";

    document.body.appendChild(spark);

    setTimeout(() => {

        spark.style.transform = "scale(0)";

        spark.style.opacity = "0";

    }, 20);

    setTimeout(() => {

        spark.remove();

    }, 600);

});
