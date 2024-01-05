const special_characters = ["g", "s", "v", "b", "k", "t", "w"];

document.addEventListener("keydown", function(event) {
  var character = event.key.toLowerCase();
  if (character === "?") {
    toggle_quick_links();
    return;
  }
  if (special_characters.includes(character)) {
    special_character(character);
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
