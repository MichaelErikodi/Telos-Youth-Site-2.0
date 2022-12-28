const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const faders = document.querySelectorAll('.fade-in')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link"). forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const appearOptions = {
    threshold: 0.2
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions); 


faders.forEach(fader => {
    appearOnScroll.observe(fader);
})