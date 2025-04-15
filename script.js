document.querySelectorAll(".header-list-item-a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

window.onload = function () {
    typeEffect();

    const toggleButton = document.getElementById("darkModeToggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.querySelector("header").classList.toggle("dark-mode");
    });
};

const text = "Nuva Shrestha";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;
        setTimeout(typeEffect, 200);
    }
}