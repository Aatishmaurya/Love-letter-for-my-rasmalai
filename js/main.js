// ===============================
// OUR UNIVERSE ❤️
// Version 2
// ===============================

const loading = document.getElementById("loading");
const music = document.getElementById("music");
const enter = document.getElementById("enter");

// ----------------------
// Loading Screen
// ----------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        },1000);

    },2500);

});

// ----------------------
// Floating Hearts
// ----------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.opacity=Math.random();

    heart.style.pointerEvents="none";

    heart.style.transition="8s linear";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh) rotate(360deg)";

        heart.style.opacity="0";

    },30);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,800);

// ----------------------
// Mouse Sparkles
// ----------------------

document.addEventListener("mousemove",(e)=>{

    const dot=document.createElement("div");

    dot.style.position="fixed";

    dot.style.left=e.clientX+"px";

    dot.style.top=e.clientY+"px";

    dot.style.width="5px";

    dot.style.height="5px";

    dot.style.borderRadius="50%";

    dot.style.background="white";

    dot.style.pointerEvents="none";

    dot.style.opacity=".8";

    dot.style.transition=".6s";

    document.body.appendChild(dot);

    setTimeout(()=>{

        dot.style.transform="scale(0)";

        dot.style.opacity="0";

    },20);

    setTimeout(()=>{

        dot.remove();

    },600);

});

// ----------------------
// Enter Button
// ----------------------

enter.addEventListener("click",()=>{

    music.play().catch(()=>{});

    enter.innerHTML="Welcome ❤️";

    document.body.style.transition="1.2s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        // Later this will open the next section
        location.href="#story";

        document.body.style.opacity="1";

    },1200);

});
/*=========================
LOVE COUNTER
=========================*/

// Change this later to your actual anniversary
const startDate = new Date("2025-01-01T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor(diff/(1000*60*60));

const minutes = Math.floor(diff/(1000*60));

const seconds = Math.floor(diff/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}

updateCounter();

setInterval(updateCounter,1000);
/* ==========================
LOVE LETTER
========================== */

const message = `

This is just a placeholder letter.

Later you'll replace every word with your own.

Tell her how you met.

Tell her why she is special.

Tell her how she changed your life.

Tell her about your dreams together.

Tell her everything your heart wants to say.

❤️

Forever Yours.

`;

const envelope=document.getElementById("openLetter");

const letter=document.getElementById("letterBox");

const typing=document.getElementById("typingText");

envelope.addEventListener("click",()=>{

letter.style.display="block";

typing.innerHTML="";

let i=0;

function type(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,35);

}

}

type();

});
