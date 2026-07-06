/*==============================
  TYPING EFFECT
==============================*/

const typingText = document.getElementById("typing");

const words = [
    "Software Engineer",
    "Java Developer",
    "Python Programmer",
    "Full Stack Learner",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*==============================
 DARK MODE
==============================*/

const themeBtn = document.getElementById("theme-btn");

let darkMode = true;

themeBtn.addEventListener("click", () => {

    if (darkMode) {

        document.documentElement.style.setProperty("--dark", "#f5f5f5");
        document.documentElement.style.setProperty("--text", "#111");
        document.documentElement.style.setProperty("--card", "#ffffff");
        document.documentElement.style.setProperty("--gray", "#444");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        darkMode = false;

    } else {

        document.documentElement.style.setProperty("--dark", "#0f172a");
        document.documentElement.style.setProperty("--text", "#f8fafc");
        document.documentElement.style.setProperty("--card", "#1e293b");
        document.documentElement.style.setProperty("--gray", "#94a3b8");

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        darkMode = true;

    }

});


/*==============================
SCROLL TO TOP
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
ACTIVE NAV LINK
==============================*/

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==============================
NAVBAR BACKGROUND
==============================*/

const header =
    document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(15,23,42,.98)";

        header.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.35)";

    }

    else {

        header.style.background =
            "rgba(15,23,42,.85)";

        header.style.boxShadow =
            "none";

    }

});


/*==============================
CONTACT FORM
==============================*/

const form =
    document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs =
        form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

            input.style.border =
                "2px solid red";

        }

        else {

            input.style.border =
                "2px solid limegreen";

        }

    });

    if (valid) {

        alert("Thank you! Your message has been sent.");

        form.reset();

    }

});


/*==============================
REVEAL ANIMATION
==============================*/

const revealElements =
    document.querySelectorAll(
        ".about, .skills, .education, .projects, .contact"
    );

function reveal() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0px)";

        }

    });

}

reveal();

window.addEventListener("scroll", reveal);


/*==============================
INITIAL ANIMATION
==============================*/

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(80px)";

    element.style.transition =
        "all .8s ease";

});


/*==============================
SKILL CARD EFFECT
==============================*/

const cards =
    document.querySelectorAll(".skill-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});


/*==============================
PROJECT CARD EFFECT
==============================*/

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-15px)";

        card.style.transition =
            ".4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});


/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
LOADING ANIMATION
==============================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/*==============================
CONSOLE MESSAGE
==============================*/

console.log("Portfolio Loaded Successfully 🚀");
