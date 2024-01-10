import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import QuickLinks from "./components/quicklinks";
import Title from "./components/title";
import ThemeListener from "./components/theme_listener";

function Main() {
  return (
    <ThemeListener>
      <QuickLinks />
      <Title />
    </ThemeListener>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
