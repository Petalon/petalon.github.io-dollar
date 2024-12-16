document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');

    // Show loader and hide content initially
    loader.style.display = 'flex';
    content.style.visibility = 'hidden';

    // Fade out loader after 1 second and show content
    setTimeout(() => {
        loader.style.opacity = 0;
        content.style.visibility = 'visible';
        content.style.display = 'block'; // Ensure the content block is shown
    }, 1000); // Adjust timing as needed for a smoother effect
});
