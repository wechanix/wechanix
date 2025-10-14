document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.homeimage img');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentIndex = 0;
    
    // Function to show the current image and hide others
    function showImage(index) {
        // Hide all images
        images.forEach(img => img.classList.remove('active'));
        
        // Show the current image
        images[index].classList.add('active');
    }
    
    // Event listener for previous arrow
    prevArrow.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    });
    
    // Event listener for next arrow
    nextArrow.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });
    
    // Initialize the slider
    showImage(currentIndex);
});