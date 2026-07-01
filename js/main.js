/* ==========================================================
   FOR MY RASMALAI ❤️
   MAIN.JS
   PART 1

   ✔ Loading Screen
   ✔ Enter Button
   ✔ Music
   ✔ Scroll To Top
   ✔ Reveal Animation
   ✔ Floating Hearts
========================================================== */


/*==============================
DOM ELEMENTS
==============================*/

const loader = document.getElementById("loading-screen");

const enterButton = document.getElementById("enterButton");

const backgroundMusic = document.getElementById("backgroundMusic");

const musicToggle = document.getElementById("musicToggle");

const scrollTopBtn = document.getElementById("scrollTop");

const floatingHearts = document.getElementById("floating-hearts");


/*==============================
LOADING SCREEN
==============================*/

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.pointerEvents = "none";

},1800);

});


/*==============================
ENTER BUTTON
==============================*/

enterButton.addEventListener("click",()=>{

document.getElementById("story").scrollIntoView({

behavior:"smooth"

});

});


/*==============================
MUSIC
==============================*/

let musicPlaying=false;

musicToggle.addEventListener("click",()=>{

if(!musicPlaying){

backgroundMusic.play();

musicPlaying=true;

musicToggle.innerHTML="🔊";

}

else{

backgroundMusic.pause();

musicPlaying=false;

musicToggle.innerHTML="🎵";

}

});


/*==============================
SCROLL TO TOP
==============================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollTopBtn.style.display="block";

}

else{

scrollTopBtn.style.display="none";

}

});

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==============================
REVEAL ANIMATION
==============================*/

const revealElements=document.querySelectorAll("section");

function revealSections(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();


/*==============================
FLOATING HEARTS
==============================*/

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-30px";

heart.style.fontSize=(12+Math.random()*18)+"px";

heart.style.color="rgba(255,92,138,.7)";

heart.style.animation="heartFloat 8s linear forwards";

floatingHearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,900);


/*==============================
HEART ANIMATION
==============================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartFloat{

0%{

transform:translateY(0) scale(1);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.8);

opacity:0;

}

}

`;

document.head.appendChild(style);


/*==============================
END PART 1
==============================*/
