window.onload = function () {
    // Ajoutez un écouteur d'événements pour la défilement de la fenêtre
    window.addEventListener("scroll", function() {
        var backToTopButton = document.querySelector(".back-to-top");
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Vérifiez si l'élément avec l'ID "myButton" existe
    var myButton = document.getElementById("myButton");
    if (myButton) {
        // Ajoutez un écouteur d'événements au bouton
        myButton.addEventListener("click", function() {
            // Trouvez l'élément de destination
            var destination = document.getElementById("jeuu");

            // Faites défiler jusqu'à l'élément de destination
            destination.scrollIntoView({ behavior: "smooth" });

            // Affichez l'élément de destination avec une transition
            destination.style.marginTop = "0";
            destination.style.opacity = "1";
        });
    }

    const conteneur = document.getElementById('conteneur');
    const texteCache = document.getElementById('texteCache');

    conteneur.addEventListener('mouseover', () => {
        texteCache.style.display = 'block';
    });

    conteneur.addEventListener('mouseout', () => {
        texteCache.style.display = 'none';
    });

};