import React, { useState } from "react";
import "./floating_card.css";

/**
 * Toggle Floating Card: Toggle the visibility of this card.
 */
function toggle_floating_card(id, hide) {
  const fc = document.getElementById(id);
  const visible = fc.style.visibility === "visible" || hide;
  fc.style.visibility = visible ? "hidden" : "visible";
}

/**
 * Floating Card: A floating card that hovers in the middle of the screen, and
 * toggles visibility on `activate_char`
 */
export default function FloatingCard({ id, activate_char, children }) {
  useState(function () {
    document.addEventListener("keydown", function (event) {
      if (event.key === activate_char) toggle_floating_card(id);
      else toggle_floating_card(id, true);
    });
  }, []);

  return (
    <div id={id} className="floating-card">
      {children}
    </div>
  );
}
