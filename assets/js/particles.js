particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#030303"
      },
      polygon: { nb_sides: 5 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 2, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: false, speed: 0, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#030303",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "random",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 80, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});
