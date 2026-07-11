// Suchitra Varities Website

document.addEventListener("DOMContentLoaded", function () {

    alert("🙏 Suchitra Varities-এ আপনাকে স্বাগতম!");

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
