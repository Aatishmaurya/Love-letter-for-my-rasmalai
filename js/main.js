/*=========================================================
        FOR MY RASMALAI ❤️
        MAIN.JS
        PART 1
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        ELEMENTS
    =========================================*/

    const loader = document.getElementById("loading-screen");
    const enterBtn = document.getElementById("enterUniverse");
    const music = document.getElementById("backgroundMusic");
    const scrollBtn = document.getElementById("scrollButton");

    const revealElements = document.querySelectorAll(
        ".reveal, section"
    );



    /*=========================================
        LOADER
    =========================================*/

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },2500);



    /*=========================================
        MUSIC
    =========================================*/

    let musicStarted = false;

    if(enterBtn){

        enterBtn.addEventListener("click",()=>{

            if(music && !musicStarted){

                music.play().catch(()=>{});

                musicStarted = true;

            }

        });

    }



    /*=========================================
        MUSIC BUTTON
    =========================================*/

    const musicButton = document.getElementById("musicButton");

    if(musicButton){

        musicButton.addEventListener("click",()=>{

            if(!music)return;

            if(music.paused){

                music.play().catch(()=>{});

            }

            else{

                music.pause();

            }

        });

    }



    /*=========================================
        SCROLL BUTTON
    =========================================*/

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            scrollBtn.style.display="block";

        }

        else{

            scrollBtn.style.display="none";

        }

    });

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /*=========================================
        REVEAL
    =========================================*/

    function reveal(){

        revealElements.forEach((item)=>{

            const top=item.getBoundingClientRect().top;

            if(top<window.innerHeight-100){

                item.classList.add("active");

            }

        });

    }

    reveal();

    window.addEventListener("scroll",reveal);



});
