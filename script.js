// -----------------------------
// AOS INIT
// -----------------------------
AOS.init({ duration: 900, once:false });

// -----------------------------
// HEADER SCROLL
// -----------------------------
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// -----------------------------
// MOBILE MENU TOGGLE
// -----------------------------
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Open menu
hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("open");
});

// Close menu using X
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});

// Close menu when clicking any link inside
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
});


// -----------------------------
// DARK/LIGHT MODE
// -----------------------------
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.innerHTML = `<i class="ri-sun-line"></i>`;
} else {
    themeToggle.innerHTML = `<i class="ri-moon-line"></i>`;
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = `<i class="ri-sun-line"></i>`;
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = `<i class="ri-moon-line"></i>`;
    }
});

// TOAST FUNCTION
// -----------------------------
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// -----------------------------
// CONTACT FORM HANDLER
// -----------------------------
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submit

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Validate fields
    if(!name || !email || !subject || !message) {
        alert("Please fill in all fields!");
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Show success message
    alert("Thank you! Your message has been sent.");

    // Clear form
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
});

