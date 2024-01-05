const special_characters = ["g", "s", "v", "b", "z", "t", "w"];
let scroll_direction = 0;

document.addEventListener("keydown", function(event) {
  var character = event.key.toLowerCase();
  if (character === "?") {
    toggle_quick_links();
  } else if (special_characters.includes(character)) {
    special_character(character);
  }
  // Scrolling
  const scrollAmount = 200;
  switch (event.key) {
    case "j":
      window.scrollBy(0, scrollAmount); // Scroll down
      break;
    case "k":
      window.scrollBy(0, -scrollAmount); // Scroll up
      break;
    case "h":
      window.scrollBy(-scrollAmount, 0); // Scroll left
      break;
    case "l":
      window.scrollBy(scrollAmount, 0); // Scroll right
      break;
  }
});

function toggle_quick_links(hide) {
  var quick_links = document.getElementById("quick-links");
  if (hide || quick_links.style.visibility === "visible") {
    quick_links.style.visibility = "hidden";
  } else {
    quick_links.style.visibility = "visible";
  }
}

function special_character(character) {
  toggle_quick_links(true);
  var quick_links_children = document.getElementById("quick-links").children;
  var index = special_characters.indexOf(character);
  quick_links_children[index].click();
}
