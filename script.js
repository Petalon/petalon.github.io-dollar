document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');

    // Fade out loader
    setTimeout(() => {
        loader.style.opacity = 0;
        content.style.display = 'block';
    }, 500); // Adjust the timing for the loader to fade out and content to fade in
});
