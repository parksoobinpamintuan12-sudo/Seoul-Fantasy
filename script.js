const toggleBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
});

const dynamicMessage = document.getElementById("dynamicMessage");
if (dynamicMessage) {
    const hour = new Date().getHours();
    let greeting = "Welcome!";

    if (hour < 12) greeting = "Good morning from Seoul Fantasy!";
    else if (hour < 18) greeting = "Good afternoon — ready for Korean food?";
    else greeting = "Good evening — craving something warm?";

    dynamicMessage.textContent = greeting;
}

const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name.length < 3) {
            feedback.textContent = "Name must be at least 3 characters.";
            feedback.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            feedback.textContent = "Please enter a valid email.";
            feedback.style.color = "red";
            return;
        }

        if (message.length < 10) {
            feedback.textContent = "Message should be at least 10 characters.";
            feedback.style.color = "red";
            return;
        }

        feedback.textContent = "Message sent successfully! We'll get back to you soon.";
        feedback.style.color = "green";
        contactForm.reset();
    });





