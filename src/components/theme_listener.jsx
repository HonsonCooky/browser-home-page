import { useEffect } from "react";
import LightIcon from "../../public/icon_light.png";
import DarkIcon from "../../public/icon_dark.png";

/**
 * Fav Icon: Get a link to the favicon (or create one).
 */
function favicon() {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  return link;
}

/**
 * To Light Theme: This function is run when the theme switches to light (or on
 * load if it's currently light).
 */
function to_light_theme() {
  favicon().href = LightIcon;
}

/**
 * To Dark Theme: This function is run when the theme switches to dark (or on
 * load if it's currently dark).
 */
function to_dark_theme() {
  favicon().href = DarkIcon;
}

/**
 * Theme Listener: A non UI wrapper that sets up theme swapping listners.
 */
export default function ThemeListener(props) {
  useEffect(function () {
    // Theme Matching
    var matcher = window.matchMedia("(prefers-color-scheme: dark)");
    matcher.matches ? to_dark_theme() : to_light_theme();
    matcher.addEventListener("change", (event) => {
      event.matches ? to_dark_theme() : to_light_theme();
    });

    // Scroll Reaction
    window.onscroll = function () {
      var cur_height = window.scrollY;
      document.body.style.backgroundPositionY =
        "-" + Math.floor(cur_height / 5) + "px";
    };
  }, []);

  return props.children;
}
