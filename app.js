const logo = document.querySelectorAll("#gallery path");

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
// const themeMap = {
//   dark: "light",
//   light: "solar",
//   solar: "dark"
// };

// const theme = localStorage.getItem('theme')
//   || (tmp = Object.keys(themeMap)[0],
//       localStorage.setItem('theme', tmp),
//       tmp);
// const bodyClass = document.body.classList;
// bodyClass.add(theme);

// function toggleTheme() {
//   const current = localStorage.getItem('theme');
//   const next = themeMap[current];

//   bodyClass.replace(current, next);
//   localStorage.setItem('theme', next);
// }

// document.getElementById('themeButton').onclick = toggleTheme;