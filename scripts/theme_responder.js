var matcher = window.matchMedia("(prefers-color-scheme: dark)");
var lightSchemeIcon = document.querySelector("link#light-scheme-icon");
var darkSchemeIcon = document.querySelector("link#dark-scheme-icon");
matcher.matches ? to_dark_theme() : to_light_theme();
matcher.addEventListener("change", (event) => {
  event.matches ? to_dark_theme() : to_light_theme();
});

function to_light_theme() {
  darkSchemeIcon.remove();
  document.head.append(lightSchemeIcon);
}

function to_dark_theme() {
  lightSchemeIcon.remove();
  document.head.append(darkSchemeIcon);
}
