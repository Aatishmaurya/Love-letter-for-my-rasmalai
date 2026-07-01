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
/*=========================================================
        DIARY ENGINE
=========================================================*/

const openBook = document.getElementById("openBook");
const bookOverlay = document.getElementById("bookOverlay");
const closeBook = document.getElementById("closeBook");

const pages = document.querySelectorAll(".book-page");
const nextButtons = document.querySelectorAll(".nextPage");
const prevButtons = document.querySelectorAll(".prevPage");

let currentPage = 0;


/*=========================================
OPEN BOOK
=========================================*/

function showPage(index){

    pages.forEach((page)=>{

        page.classList.remove("active");

    });

    if(pages[index]){

        pages[index].classList.add("active");

    }

}


if(openBook){

    openBook.addEventListener("click",()=>{

        currentPage=0;

        showPage(currentPage);

        bookOverlay.style.display="flex";

        document.body.style.overflow="hidden";

    });

}


/*=========================================
NEXT PAGE
=========================================*/

nextButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        if(currentPage<pages.length-1){

            currentPage++;

            showPage(currentPage);

        }

    });

});


/*=========================================
PREVIOUS PAGE
=========================================*/

prevButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        if(currentPage>0){

            currentPage--;

            showPage(currentPage);

        }

    });

});


/*=========================================
CLOSE BOOK
=========================================*/

function hideBook(){

    if(bookOverlay){

        bookOverlay.style.display="none";

    }

    document.body.style.overflow="auto";

}

if(closeBook){

    closeBook.addEventListener("click",hideBook);

}


/*=========================================
CLICK OUTSIDE
=========================================*/

if(bookOverlay){

    bookOverlay.addEventListener("click",(e)=>{

        if(e.target===bookOverlay){

            hideBook();

        }

    });

}


/*=========================================
ESC KEY
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        hideBook();

    }

});
/*=========================================================
        GALLERY ENGINE
=========================================================*/

const galleryItems = document.querySelectorAll(".gallery-item");
const galleryPopup = document.getElementById("galleryPopup");
const popupImage = document.getElementById("popupImage");
const popupCaption = document.getElementById("popupCaption");
const closeGallery = document.getElementById("closeGallery");


galleryItems.forEach((item)=>{

    item.addEventListener("click",()=>{

        const img=item.querySelector("img");

        const title=item.querySelector("h3");

        popupImage.src=img.src;

        popupCaption.innerHTML=title.innerHTML;

        galleryPopup.style.display="flex";

        document.body.style.overflow="hidden";

    });

});


function closeGalleryPopup(){

    galleryPopup.style.display="none";

    document.body.style.overflow="auto";

}


if(closeGallery){

    closeGallery.addEventListener("click",closeGalleryPopup);

}


galleryPopup.addEventListener("click",(e)=>{

    if(e.target===galleryPopup){

        closeGalleryPopup();

    }

});


document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeGalleryPopup();

    }

});
/*=========================================================
        OPEN WHEN ENGINE
=========================================================*/

const openCards = document.querySelectorAll(".openCard");
const popup = document.getElementById("openPopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const letters = {

sad:{

title:"😔 Open When You're Sad",

text:`

<p>

Hey ❤️

<br><br>

Agar tum ye padh rahi ho...

to shayad tumhara din utna achha nahi gaya.

<br><br>

Bas ek baat yaad rakhna...

har difficult day temporary hota hai.

<br><br>

Tum jitna sochti ho...

usse kahin zyada strong ho.

<br><br>

Smile karna...

kyunki tumhari smile bahut special hai.

❤️

</p>

`

},

miss:{

title:"🥺 Open When You Miss Me",

text:`

<p>

Agar tum mujhe miss kar rahi ho...

<br><br>

To ek chhoti si smile karna.

<br><br>

Ho sakta hai...

usi waqt main bhi tumhare baare me soch raha hoon.

<br><br>

Distance feelings ko kam nahi karti.

Kabhi kabhi aur gehra bana deti hai.

❤️

</p>

`

},

happy:{

title:"😊 Open When You're Happy",

text:`

<p>

Tumhari khushi dekhkar...

mujhe bhi khushi hoti hai.

<br><br>

Jo bhi achha hua hai...

use enjoy karo.

Celebrate karo.

Smile karo.

Aur ek smile meri taraf se bhi. ❤️

</p>

`

},

angry:{

title:"😤 Open When You're Angry",

text:`

<p>

Theek hai...

pehle ek deep breath.

<br><br>

Phir ek aur.

<br><br>

Ab paani piyo.

<br><br>

Ab socho...

kya ye problem

5 saal baad bhi important hogi?

<br><br>

Shayad nahi.

Tum sab handle kar logi.

❤️

</p>

`

},

night:{

title:"🌙 Open Before Sleeping",

text:`

<p>

Good Night ❤️

<br><br>

Aaj ka din chahe jaisa bhi raha ho...

kal ek naya din hoga.

<br><br>

Aaj ki tension...

aaj hi chhod do.

<br><br>

Sweet Dreams.

Take Care.

❤️

</p>

`

},

motivation:{

title:"💪 Need Motivation?",

text:`

<p>

Kabhi bhi apne aap ko

kam mat samajhna.

<br><br>

Har chhota step bhi

progress hota hai.

<br><br>

Main believe karta hoon

ki tum jo chaho

wo achieve kar sakti ho.

<br><br>

Keep Going.

❤️

</p>

`

}

};



openCards.forEach((card)=>{

card.addEventListener("click",()=>{

const type=card.dataset.open;

popupTitle.innerHTML=letters[type].title;

popupText.innerHTML=letters[type].text;

popup.style.display="flex";

document.body.style.overflow="hidden";

});

});



function closeOpenPopup(){

popup.style.display="none";

document.body.style.overflow="auto";

}



document.getElementById("closePopup")

.addEventListener("click",closeOpenPopup);



popup.addEventListener("click",(e)=>{

if(e.target===popup){

closeOpenPopup();

}

});



document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeOpenPopup();

}

});
