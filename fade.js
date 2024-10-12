document.addEventListener("DOMContentLoaded", function() {
    // Get all the links on the page
    const links = document.querySelectorAll('a');

    // Add a click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent the default navigation
            event.preventDefault();
            
            // Add the fade-out class to the body (or main content area)
            document.body.classList.add('fade-out');
            
            // Wait for the fade-out animation to finish before navigating
            setTimeout(() => {
                window.location.href = link.href;
            }, 1000); // This timeout matches the animation duration (1s)
        });
    });
});