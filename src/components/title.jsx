import React from "react";

export default function() {
  return (
    <div id="title">
      <h1>HonsonCooky</h1>
      <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
