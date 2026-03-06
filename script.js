// Typing Animation

var typed = new Typed("#typing", {
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


// Smooth Scroll to Projects

function scrollToProjects(){
document.getElementById("projects").scrollIntoView({
behavior: "smooth"
});
}


// Smooth Scroll for Navbar Links

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});


// Background Music Toggle

function toggleMusic(){

const music = document.getElementById("bgMusic");

if(music.paused){
music.play();
}
else{
music.pause();
}

}


// Page Load Console Message (optional)

window.onload = function(){

console.log("Portfolio Loaded Successfully");

};