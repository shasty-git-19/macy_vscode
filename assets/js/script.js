document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submittedData = document.getElementById("submittedData");
    const backButton = document.getElementById("backButton");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!firstName || !lastName || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!confirm("Are you sure you want to submit the form?")) {
            return;
        }

        document.getElementById("displayFirstName").textContent = firstName;
        document.getElementById("displayLastName").textContent = lastName;
        document.getElementById("displayEmail").textContent = email;
        document.getElementById("displayMessage").textContent = message;
 
        contactForm.style.display = "none";
        submittedData.classList.remove("hidden");
    });

    backButton.addEventListener("click", function () {
        contactForm.reset(); 
        contactForm.style.display = "block";
        submittedData.classList.add("hidden");
    });
});