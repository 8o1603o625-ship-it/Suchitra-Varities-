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
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let text = card.innerText.toLowerCase();

if(text.includes(filter)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});
