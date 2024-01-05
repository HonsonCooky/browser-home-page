import vimium_json from "../assets/vimium.json";
import edge_json from "../assets/edge.json";
import firefox_json from "../assets/firefox.json";
load_simple(vimium_json, document.getElementById("vimium-shortcuts"));
load_simple(edge_json, document.getElementById("edge-shortcuts"));
load_dynamic_multi(firefox_json, document.getElementById("firefox-shortcuts"));

/**
 * Object Looks Like:
 * {
 * "shortcut": "description",
 * "shortcut": "description",
 * ...
 * }
 */
function load_simple(json, into) {
  const html_components = [];
  const entries = Object.entries(json).sort((a, b) => (a[0] < b[0] ? -1 : 1));

  for (const [key, value] of entries) {
    html_components.push(
      `<tr><td><kbd>${key}</kbd></td><td>${value}</td></tr>`,
    );
  }

  const values = html_components.join("\n");
  into.innerHTML = `<table>
    <thead><tr><th>Shortcut</th><th>Action</th></tr></thead>
    <tbody>${values}</tbody>
    </table>`;
}

/**
 * Object Looks Like:
 * {
 * "Context": {
 * "Action Description": ["Shortcut_1", "Shortcut_2"],
 * ...
 * }
 *}
 */
function load_dynamic_multi(json, into) {
  const contexts = Object.keys(json).sort((a, b) => (a[0] < b[0] ? -1 : 1));

  for (const context_key of contexts) {
    const html_components = [];
    const shortcuts = json[context_key];
    const entries = Object.entries(shortcuts).sort((a, b) =>
      a[0] < b[0] ? -1 : 1,
    );

    for (const [desc, value] of entries) {
      const keys = value.map((key) => `<kbd>${key}</kbd>`).join(" || ");
      html_components.push(`<tr><td>${keys}</td><td>${desc}</td></tr>`);
    }

    const values = html_components.join("\n");
    const header = document.createElement("h4");
    header.innerHTML = context_key;
    const table = document.createElement("table");
    table.innerHTML = `
      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>
      <tbody>${values}</tbody>
    `;
    into.appendChild(header);
    into.appendChild(table);
  }
}
