ScrollReveal().reveal('.card', {
  origin: "left",
  distance: "100px",
  opacity: 0.1
})

ScrollReveal().reveal('.card-img', {
  origin: "bottom",
  distance: "100px",
  opacity: 0.1
})

var options = {
  strings: ['Una chica apasionada por lo que hace, excelente jugadora, y una gran amiga'], // Texto que se escribirá
  typeSpeed: 20,
  loop: false, // Establece si quieres que el texto se repita después de escribirlo
  cursorChar: '',
  onComplete: function() {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
  }
};

var typed = new Typed('#description', options);
