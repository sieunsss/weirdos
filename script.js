document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000);
    }
});

document.getElementById("open-sidebar").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("close-sidebar").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "0";
});
