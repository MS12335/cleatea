// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

// munculkan sidebar menu
hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// Navbar scroll animation
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Animasi navigation bar
    if (wScroll > 0) {
        $(".navbar").addClass("scroll");
    } else if (wScroll == 0) {
        $(".navbar").removeClass("scroll");
    }
});

// Button whatsapp
const pesan = document.querySelector("#pesan");
const buttonWhatsapp = document.querySelector("#button-whatsapp");

buttonWhatsapp.addEventListener("mouseover", function (event) {
    event.preventDefault();
    pesan.classList.toggle("hover");
})

buttonWhatsapp.addEventListener("mouseout", function (event) {
    event.preventDefault();
    pesan.classList.remove("hover");
})