import React, { useState } from "react";
import FloatingCard from "../templates/floating_card";
import "./quicklinks.css";

const id = "quick-links";
const key_shortcuts = ["g", "s", "v", "b", "k", "t", "w"];

/**
 * Keyboard Input: React to keyboard inputs
 */
function keyboard_input(event) {
  const index = key_shortcuts.indexOf(event.key);
  if (index === -1) return;
  document.getElementById(id).children[index].click();
}

/**
 * Quick Links: A list of sections on this page, where a keyboard shortcut
 * takes you to said section.
 */
export default function QuickLinks() {
  useState(function() {
    document.addEventListener("keydown", keyboard_input);
  }, []);

  return (
    <FloatingCard id={id} activate_char="?">
      <a href="https://github.com/HonsonCooky">[{key_shortcuts[0]}] Github</a>
      <a href="https://stackoverflow.com/">
        [{key_shortcuts[1]}] Stack Overflow
      </a>
      <a href="#vim-shortcuts">[{key_shortcuts[2]}] Vim Shortcuts</a>
      <a href="#browser-shortcuts">[{key_shortcuts[3]}] Browser Shortcuts</a>
      <a href="#keyb-map">[{key_shortcuts[4]}] Keyboard Map</a>
      <a href="#to-do">[{key_shortcuts[5]}] ToDo List</a>
      <a href="#draw">[{key_shortcuts[6]}] Whiteboard</a>
    </FloatingCard>
  );
}
