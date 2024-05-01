window.onload = function () {

    window.addEventListener('scroll', function () {
        var rect = projectSection.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // The "Projects" section is in view
            enlargeElements();
        } else {
            resetElements();
        }
    });

    window.addEventListener("scroll", function() {
        var backToTopButton = document.querySelector(".back-to-top");
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    document.getElementById("myButton").addEventListener("click", function() {
        // Trouvez l'élément de destination
        var destination = document.getElementById("jeuu");

        // Faites défiler jusqu'à l'élément de destination
        destination.scrollIntoView({ behavior: "smooth" });

        // Affichez l'élément de destination avec une transition
        destination.style.marginTop = "0";
        destination.style.opacity = "1";
    }); 
};