function toggleMenu() {
    const mobileMenu = document.querySelector(".menu-container-mobile");
    mobileMenu.classList.toggle("active");

    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.classList.toggle("visible");
    });
}