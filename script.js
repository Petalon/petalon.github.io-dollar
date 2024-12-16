function showDollarAnimation() {
    const container = document.getElementById('animation-container');

    // Create a new dollar element
    const dollar = document.createElement('div');
    dollar.textContent = '$';
    dollar.classList.add('dollar');

    // Randomize its starting position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    dollar.style.left = `${x}px`;
    dollar.style.top = `${y}px`;

    // Append the dollar sign to the container
    container.appendChild(dollar);

    // Remove the dollar sign after animation
    dollar.addEventListener('animationend', () => {
        dollar.remove();
    });
}
