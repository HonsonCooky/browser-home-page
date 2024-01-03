var matcher = window.matchMedia("(prefers-color-scheme: dark)");
var lightSchemeIcon = document.querySelector("link#light-scheme-icon");
var darkSchemeIcon = document.querySelector("link#dark-scheme-icon");
matcher.addEventListener("change", (event) => {
  if (event.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    darkSchemeIcon.remove();
    document.head.append(lightSchemeIcon);
  }
});
