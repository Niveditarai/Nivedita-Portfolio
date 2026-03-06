// Run everything after page loads

window.addEventListener("load", function () {

console.log("Portfolio Loaded Successfully");


// Boot Screen Hide after 3.5 seconds

setTimeout(function () {

const boot = document.getElementById("boot-screen");

if (boot) {
boot.style.display = "none";
}

}, 3500);


// Typing Animation

if (document.getElementById("typing")) {

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


// Particles Background

if (document.getElementById("particles-js")) {

particlesJS("particles-js", {
particles: {
number: { value: 80 },
color: { value: "#8b5cf6" },
shape: { type: "circle" },
opacity: { value: 0.5 },
size: { value: 3 },
move: {
enable: true,
speed: 2
}
}
});

}

});


// Scroll to Projects Button

function scrollToProjects() {

const section = document.getElementById("projects");

if (section) {
section.scrollIntoView({
behavior: "smooth"
});
}

}


// Smooth Scroll for Navbar Links

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


// Background Music Toggle

function toggleMusic() {

const music = document.getElementById("bgMusic");

if (!music) return;

if (music.paused) {
music.play();
}
else {
music.pause();
}

}