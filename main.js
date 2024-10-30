document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Thank you for your message!");
    }
});

    document.querySelector('.scroll-button.left').addEventListener('click', function() {
        document.querySelector('.product-scroll-container').scrollBy({
            top: 0,
            left: -200, // Scroll left by 200 pixels
            behavior: 'smooth' // Smooth scroll
        });
    });

    document.querySelector('.scroll-button.right').addEventListener('click', function() {
        document.querySelector('.product-scroll-container').scrollBy({
            top: 0,
            left: 200, // Scroll right by 200 pixels
            behavior: 'smooth' // Smooth scroll
        });
    });
    // Scroll functionality for the original products section
    document.querySelector('.scroll-button.left').addEventListener('click', function() {
        document.querySelector('.product-scroll-container').scrollBy({
            top: 0,
            left: -200, // Scroll left by 200 pixels
            behavior: 'smooth' // Smooth scroll
        });
    });

    document.querySelector('.scroll-button.right').addEventListener('click', function() {
        document.querySelector('.product-scroll-container').scrollBy({
            top: 0,
            left: 200, // Scroll right by 200 pixels
            behavior: 'smooth' // Smooth scroll
        });
    });

    // Scroll functionality for the new products section
    document.querySelectorAll('#new-products .scroll-button.left')[0].addEventListener('click', function() {
        document.querySelector('#new-products .product-scroll-container').scrollBy({
            top: 0,
            left: -200, // Scroll left by 200 pixels
            behavior: 'smooth' // Smooth scroll
        });
    });

    document.querySelectorAll('#new-products .scroll-button.right')[0].addEventListener('click', function() {
        document.querySelector('#new-products .product-scroll-container').scrollBy({
            top: 0,
            left: 200, // Scroll right by 200 pixels
            behavior: 'smooth' // Smooth scroll
        });
    });


