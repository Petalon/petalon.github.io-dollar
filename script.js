function showConfetti(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  confetti({
    particleCount: 150,
    spread: 60,
    shapes: ['star'], // Custom shape for particles
    colors: ['#FFD700'], // Color for dollar sign particles
    origin: { x: x / window.innerWidth, y: y / window.innerHeight }
  });
}
