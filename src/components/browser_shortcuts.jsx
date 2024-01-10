import edge_shortcuts from "../../public/edge.json";
import firefox_shortcuts from "../../public/firefox.json";
import vimium_shortcuts from "../../public/vimium.json";
import React from "react";
import Card from "../templates/card";
import "./browser_shortcuts.css";

function Edge() {
  return <h2>Edge</h2>;
}

function Firefox() {
  return <h2>Firefox</h2>;
}

function Vimium() {
  return <h2>Vimium</h2>;
}

export default function BrowserShortcuts() {
  return (
    <div id="browser-shortcuts">
      <Card>
        <h1 className="sticky-title">Browser Shortcuts</h1>
        <Edge />
        <Firefox />
        <Vimium />
      </Card>
    </div>
  );
}
