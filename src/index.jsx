import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import QuickLinks from "./components/quicklinks";
import Title from "./components/title";
import ThemeListener from "./components/theme_listener";
import BrowserShortcuts from "./components/browser_shortcuts";

function Main() {
  return (
    <ThemeListener>
      <QuickLinks />
      <Title />
      <BrowserShortcuts />
      <div style={{ height: "300vh" }}></div>
    </ThemeListener>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
