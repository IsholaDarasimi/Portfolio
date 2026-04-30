// smooth scroll
document.querySelectorAll("a[href^='#']").forEach(a => {
  a.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// form
function sendMessage(e){
  e.preventDefault();
  alert("Message sent successfully 🚀");
}

// theme glow toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("glow");
});