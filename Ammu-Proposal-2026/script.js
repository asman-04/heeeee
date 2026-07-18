/* =========================================================
   AMMU PROPOSAL 2026
   script.js
   PART 1
========================================================= */

"use strict";

/* =========================================================
   SELECTORS
========================================================= */

const loader = document.getElementById("loader");

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

const startBtn = document.getElementById("startBtn");

const heroCard = document.querySelector(".glass-card");

const title = document.querySelector(".title");

const subtitle = document.querySelector(".subtitle");

const message = document.querySelector(".message");

/* =========================================================
   INITIALIZE
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

    startWebsite();

});

/* =========================================================
   START WEBSITE
========================================================= */

function startWebsite(){

    hideLoader();

    setupMusic();

    animateHero();

    setupStartButton();

}

/* =========================================================
   LOADER
========================================================= */

function hideLoader(){

    if(!loader) return;

    setTimeout(()=>{

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },800);

    },2000);

}

/* =========================================================
   MUSIC
========================================================= */

function setupMusic(){

    if(!music || !musicBtn) return;

    music.volume = 0.35;

    musicBtn.innerHTML = "🎵";

    musicBtn.addEventListener("click",toggleMusic);

    window.addEventListener("pointerdown", autoPlayMusic, { once: true });

}

function autoPlayMusic(){

    music.play().catch(()=>{});

}

function toggleMusic(){

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🎵";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🔇";

    }

}

/* =========================================================
   HERO ANIMATION
========================================================= */

function animateHero(){

    if(heroCard){

        heroCard.style.opacity="0";

        heroCard.style.transform="translateY(50px)";

        setTimeout(()=>{

            heroCard.style.transition="1s ease";

            heroCard.style.opacity="1";

            heroCard.style.transform="translateY(0)";

        },400);

    }

    fadeElement(title,600);

    fadeElement(subtitle,900);

    fadeElement(message,1200);

    fadeElement(startBtn,1500);

}

function fadeElement(element,delay){

    if(!element) return;

    element.style.opacity="0";

    element.style.transform="translateY(25px)";

    setTimeout(()=>{

        element.style.transition=".8s ease";

        element.style.opacity="1";

        element.style.transform="translateY(0)";

    },delay);

}

/* =========================================================
   BUTTON
========================================================= */

function setupStartButton(){

    if(!startBtn) return;

    startBtn.addEventListener("mouseenter",()=>{

        startBtn.style.transform="scale(1.05)";

    });

    startBtn.addEventListener("mouseleave",()=>{

        startBtn.style.transform="scale(1)";

    });

    startBtn.addEventListener("click",scrollNext);

}

/* =========================================================
   SCROLL
========================================================= */

function scrollNext(){

    const next=document.getElementById("page2");

    if(next){

        next.scrollIntoView({

            behavior:"smooth"

        });

    }

}

/* =========================================================
   RANDOM NUMBER
========================================================= */

function random(min,max){

    return Math.random()*(max-min)+min;

}

/* =========================================================
   CREATE ELEMENT
========================================================= */

function create(tag,className){

    const el=document.createElement(tag);

    if(className){

        el.className=className;

    }

    return el;

}

/* =========================================================
   END PART 1
========================================================= */

console.log("❤️ Ammu Proposal 2026 - Part 1 Loaded");
/* =========================================================
   PART 2
   BACKGROUND ANIMATION ENGINE
========================================================= */

/* ===========================
   START BACKGROUND ENGINE
=========================== */

window.addEventListener("load", () => {

    createClouds();

    createGlowOrbs();

    createSparkles();

    createHearts();

    createRoses();

});


/* =========================================================
   CLOUDS
========================================================= */

function createClouds(){

    const container=document.getElementById("clouds");

    if(!container) return;

    for(let i=0;i<8;i++){

        const cloud=create("div","cloud");

        const w=random(120,220);

        const h=w*0.45;

        cloud.style.width=w+"px";
        cloud.style.height=h+"px";

        cloud.style.top=random(20,300)+"px";

        cloud.style.left=random(-300,window.innerWidth)+"px";

        cloud.style.animationDuration=random(40,70)+"s";

        cloud.style.animationDelay=(-random(0,40))+"s";

        container.appendChild(cloud);

    }

}


/* =========================================================
   HEARTS
========================================================= */

function createHearts(){

    const container=document.getElementById("hearts");

    if(!container) return;

    setInterval(()=>{

        const heart=create("div","heart");

        heart.innerHTML="❤️";

        heart.style.left=random(0,100)+"vw";

        heart.style.fontSize=random(18,34)+"px";

        heart.style.animationDuration=random(8,15)+"s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },16000);

    },900);

}


/* =========================================================
   SPARKLES
========================================================= */

function createSparkles(){

    const container=document.getElementById("sparkles");

    if(!container) return;

    for(let i=0;i<80;i++){

        const sparkle=create("div","sparkle");

        sparkle.style.left=random(0,100)+"%";

        sparkle.style.top=random(0,100)+"%";

        sparkle.style.animationDelay=random(0,5)+"s";

        sparkle.style.animationDuration=random(2,5)+"s";

        container.appendChild(sparkle);

    }

}


/* =========================================================
   ROSE PETALS
========================================================= */

function createRoses(){

    const container=document.getElementById("roses");

    if(!container) return;

    setInterval(()=>{

        const rose=create("div","rose");

        rose.innerHTML="🌹";

        rose.style.left=random(0,100)+"vw";

        rose.style.fontSize=random(20,34)+"px";

        rose.style.animationDuration=random(10,18)+"s";

        container.appendChild(rose);

        setTimeout(()=>{

            rose.remove();

        },19000);

    },2200);

}


/* =========================================================
   GLOW ORBS
========================================================= */

function createGlowOrbs(){

    const bg=document.getElementById("background");

    if(!bg) return;

    const colors=[

        "#ff7eb3",

        "#ffd76b",

        "#8fd9ff",

        "#ffffff"

    ];

    for(let i=0;i<6;i++){

        const orb=create("div","glow-orb");

        const size=random(180,320);

        orb.style.width=size+"px";

        orb.style.height=size+"px";

        orb.style.left=random(0,100)+"vw";

        orb.style.top=random(0,100)+"vh";

        orb.style.background=colors[Math.floor(random(0,colors.length))];

        orb.style.animationDuration=random(10,18)+"s";

        bg.appendChild(orb);

    }

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener("resize",()=>{

    const clouds=document.querySelectorAll(".cloud");

    clouds.forEach(cloud=>{

        cloud.style.top=random(20,300)+"px";

    });

});


console.log("✨ Background Engine Loaded");

/* =========================================================
   PART 3
   CINEMATIC EFFECTS
========================================================= */

/* ===========================
   MOUSE GLOW
=========================== */

const mouseGlow = document.createElement("div");

mouseGlow.id = "mouseGlow";

document.body.appendChild(mouseGlow);

Object.assign(mouseGlow.style, {

    position: "fixed",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,255,255,.35), transparent 70%)",
    pointerEvents: "none",
    filter: "blur(35px)",
    transform: "translate(-50%,-50%)",
    zIndex: "-1",
    transition: "left .08s linear, top .08s linear"

});

document.addEventListener("mousemove", (e) => {

    mouseGlow.style.left = e.clientX + "px";

    mouseGlow.style.top = e.clientY + "px";

});


/* ===========================
   TYPEWRITER EFFECT
=========================== */

function typeWriter(element, speed = 40) {

    if (!element) return;

    const text = element.innerHTML;

    element.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }

    }

    typing();

}

window.addEventListener("load", () => {

    setTimeout(() => {

        typeWriter(document.querySelector(".subtitle"), 35);

    }, 1200);

});


/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

if (startBtn) {

    startBtn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";

        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

}


/* ===========================
   PARALLAX CARD
=========================== */

if (heroCard) {

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 35;

        const y = (window.innerHeight / 2 - e.clientY) / 35;

        heroCard.style.transform =
            `rotateY(${-x}deg) rotateX(${y}deg)`;

    });

    document.addEventListener("mouseleave", () => {

        heroCard.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

}


/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(

    ".fade-up,.fade-left,.fade-right,.fade-scale"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translate(0,0) scale(1)";

                entry.target.style.transition = "1s ease";

            }

        });

    },

    {

        threshold: .2

    }

);

revealElements.forEach(el => revealObserver.observe(el));


/* ===========================
   MUSIC FADE
=========================== */

function fadeVolume(target, duration = 1200) {

    if (!music) return;

    const start = music.volume;

    const diff = target - start;

    const steps = 30;

    const stepTime = duration / steps;

    let current = 0;

    const interval = setInterval(() => {

        current++;

        music.volume = start + diff * (current / steps);

        if (current >= steps) {

            clearInterval(interval);

        }

    }, stepTime);

}


/* ===========================
   PAGE VISIBILITY
=========================== */

document.addEventListener("visibilitychange", () => {

    if (!music) return;

    if (document.hidden) {

        fadeVolume(0.05);

    } else {

        fadeVolume(0.35);

    }

});


/* ===========================
   TITLE GLOW
=========================== */

setInterval(() => {

    if (!title) return;

    title.style.textShadow =
        "0 0 20px rgba(255,45,117,.4),0 0 40px rgba(255,182,193,.4)";

    setTimeout(() => {

        title.style.textShadow = "none";

    }, 800);

}, 3000);


/* ===========================
   CONSOLE
=========================== */

console.log("🎬 Cinematic Engine Loaded");
/* =========================================================
   PART 4
   FINAL PROPOSAL ENGINE
========================================================= */

/* ===========================
   PROPOSAL BUTTON
=========================== */

const proposalBtn = document.querySelector(".proposal-btn");

if (proposalBtn) {

    proposalBtn.addEventListener("click", () => {

        launchCelebration();

    });

}

/* =========================================================
   CELEBRATION
========================================================= */

function launchCelebration(){

    createHeartRain();

    createFireworks();

    createConfetti();

    showProposalMessage();

}

/* =========================================================
   HEART RAIN
========================================================= */

function createHeartRain(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            const heart=create("div");

            heart.innerHTML="💖";

            heart.style.position="fixed";

            heart.style.left=random(0,100)+"vw";

            heart.style.top="-40px";

            heart.style.fontSize=random(20,40)+"px";

            heart.style.zIndex="9999";

            heart.style.transition="5s linear";

            document.body.appendChild(heart);

            requestAnimationFrame(()=>{

                heart.style.top="110vh";

                heart.style.transform=`translateX(${random(-120,120)}px) rotate(${random(0,720)}deg)`;

                heart.style.opacity="0";

            });

            setTimeout(()=>{

                heart.remove();

            },5500);

        },i*40);

    }

}

/* =========================================================
   FIREWORKS
========================================================= */

function createFireworks(){

    for(let i=0;i<25;i++){

        setTimeout(()=>{

            firework(random(10,90),random(15,60));

        },i*300);

    }

}

function firework(x,y){

    for(let i=0;i<40;i++){

        const particle=create("div");

        particle.style.position="fixed";

        particle.style.left=x+"vw";

        particle.style.top=y+"vh";

        particle.style.width="8px";

        particle.style.height="8px";

        particle.style.borderRadius="50%";

        particle.style.background=`hsl(${random(0,360)},100%,65%)`;

        particle.style.zIndex="9999";

        document.body.appendChild(particle);

        const angle=Math.random()*Math.PI*2;

        const distance=random(80,220);

        const dx=Math.cos(angle)*distance;

        const dy=Math.sin(angle)*distance;

        requestAnimationFrame(()=>{

            particle.style.transition="1.8s ease-out";

            particle.style.transform=`translate(${dx}px,${dy}px)`;

            particle.style.opacity="0";

        });

        setTimeout(()=>{

            particle.remove();

        },2000);

    }

}

/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(){

    const colors=[

        "#ff4d8d",

        "#ffd54f",

        "#87ceeb",

        "#ffffff",

        "#ffb6c1"

    ];

    for(let i=0;i<250;i++){

        setTimeout(()=>{

            const confetti=create("div");

            confetti.style.position="fixed";

            confetti.style.width=random(6,14)+"px";

            confetti.style.height=random(8,18)+"px";

            confetti.style.background=colors[Math.floor(random(0,colors.length))];

            confetti.style.left=random(0,100)+"vw";

            confetti.style.top="-20px";

            confetti.style.opacity="1";

            confetti.style.transform=`rotate(${random(0,360)}deg)`;

            confetti.style.zIndex="9999";

            document.body.appendChild(confetti);

            requestAnimationFrame(()=>{

                confetti.style.transition=`${random(4,7)}s linear`;

                confetti.style.top="110vh";

                confetti.style.transform=`rotate(${random(720,1440)}deg)`;

            });

            setTimeout(()=>{

                confetti.remove();

            },7000);

        },i*15);

    }

}

/* =========================================================
   PROPOSAL MESSAGE
========================================================= */

function showProposalMessage(){

    const overlay=create("div");

    overlay.style.position="fixed";

    overlay.style.inset="0";

    overlay.style.background="rgba(0,0,0,.55)";

    overlay.style.display="flex";

    overlay.style.flexDirection="column";

    overlay.style.justifyContent="center";

    overlay.style.alignItems="center";

    overlay.style.backdropFilter="blur(12px)";

    overlay.style.zIndex="10000";

    overlay.innerHTML=`

        <div style="font-size:70px;">💍</div>

        <h1 style="
            color:white;
            font-size:60px;
            font-family:'Great Vibes',cursive;
            margin:20px 0;">
            Will You Be Mine Forever?
        </h1>

        <p style="
            color:white;
            font-size:22px;
            max-width:700px;
            text-align:center;
            line-height:1.8;
            padding:0 20px;">
            From the moment you entered my life,
            every heartbeat has carried your name.
            No matter where life takes us,
            I promise to stand beside you,
            protect your smile,
            and love you with all my heart.
        </p>

        <button id="closeProposal"
        style="
        margin-top:40px;
        padding:18px 45px;
        border:none;
        border-radius:50px;
        background:linear-gradient(90deg,#ff4d8d,#ffd54f);
        color:white;
        font-size:20px;
        cursor:pointer;">
        ❤️ Forever
        </button>

    `;

    document.body.appendChild(overlay);

    document.getElementById("closeProposal").onclick=()=>{

        overlay.remove();

    };

}

/* =========================================================
   PERFORMANCE CLEANUP
========================================================= */

setInterval(()=>{

    document.querySelectorAll("div").forEach(el=>{

        if(

            el.style.opacity==="0" &&

            el.parentNode===document.body

        ){

            el.remove();

        }

    });

},15000);

/* =========================================================
   END
========================================================= */

console.log("💖 Proposal Engine Loaded Successfully");