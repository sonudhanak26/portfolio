const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");

    sections.forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(targetId).classList.add("active");
  });
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Typing animation
const typedText = document.getElementById("typed-text");
const originalText = typedText.innerHTML;
typedText.innerHTML = "";

let index = 0;
function type() {
  if (index < originalText.length) {
    typedText.innerHTML += originalText.charAt(index);
    index++;
    setTimeout(type, 60);
  }
}
type();
