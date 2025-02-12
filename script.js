document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = "So date when? When is you free?";
});

document.getElementById('noBtn').addEventListener('mouseover', function() {
    const max = 100;
    const min = 20;
    const deltaX = Math.floor(Math.random() * (max - min + 1)) + min;
    const deltaY = Math.floor(Math.random() * (max - min + 1)) + min;
    this.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});
