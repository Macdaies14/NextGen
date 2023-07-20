const img = document.querySelectorAll('img');

img.forEach((e) => {
    e.addEventListener('touchstart', () => {
      e.classList.toggle('active');
    })
})