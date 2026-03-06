// Wait until DOM fully loads

document.addEventListener("DOMContentLoaded", function () {

console.log("Portfolio Loaded Successfully");


// BOOT SCREEN

const boot = document.getElementById("boot-screen");

if (boot) {
setTimeout(() => {
boot.style.display = "none";
}, 3500);
}


// TYPING ANIMATION

const typingElement = document.getElementById("typing");

if (typingElement) {

new Typed("#typing", {
strings: [
"Machine Learning Enthusiast",
"Python Developer",
"Data Analyst",
"Web Developer"
],
typeSpeed: 60,
backSpeed: 40,
loop: true
});

}


// PARTICLES BACKGROUND

if (document.getElementById("particles-js")) {

particlesJS("particles-js", {
particles: {
number: {
value: 80
},
color: {
value: "#8b5cf6"
},
shape: {
type: "circle"
},
opacity: {
value: 0.5
},
size: {
value: 3
},
move: {
enable: true,
speed: 2
}
}
});

}


// NAVBAR SMOOTH SCROLL

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if (target) {

target.scrollIntoView({
behavior: "smooth"
});

}

});

});

});


// SCROLL TO PROJECTS BUTTON

function scrollToProjects() {

const section = document.getElementById("projects");

if (section) {

section.scrollIntoView({
behavior: "smooth"
});

}

}


// BACKGROUND MUSIC TOGGLE

function toggleMusic() {

const music = document.getElementById("bgMusic");

if (!music) return;

if (music.paused) {

music.play();

} else {

music.pause();

}

}