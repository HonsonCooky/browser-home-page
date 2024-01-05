import vimium_json from "../assets/vimium.json";
import edge_json from "../assets/edge.json";
import firefox_json from "../assets/firefox.json";
import vim_json from "../assets/vim.json";
load_simple(vimium_json, document.getElementById("vimium-shortcuts"));
load_simple(edge_json, document.getElementById("edge-shortcuts"));
load_complex(vim_json, document.getElementById("vim-shortcuts-tbls"));
load_dynamic_multi(firefox_json, document.getElementById("firefox-shortcuts"));

/**
 * Object Looks Like:
 * {
 * "Shortcut": "Description",
 * "Shortcut": "Description",
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

  const group = document.createElement("div");
  group.classList.add("tbl-group");
  const table = document.createElement("table");
  const values = html_components.join("\n");
  table.innerHTML = `
      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>
      <tbody>${values}</tbody>
    `;
  group.appendChild(table);
  into.appendChild(group);
}

/**
 * Object Looks Like:
 * {
 * "Context": {
 * "Shortcut": "Description",
 * "Shortcut": "Description",
 * ...
 * }
 * }
 */

function sort_contexts(json) {
  return (a, b) => {
    return Object.keys(json[a]).length - Object.keys(json[b]).length;
  };
}

function load_complex(json, into) {
  const sorter = sort_contexts(json);
  const contexts = Object.keys(json).sort(sorter);

  for (const context_key of contexts) {
    const html_components = [];
    const shortcuts = json[context_key];
    const entries = Object.entries(shortcuts).sort((a, b) =>
      a[0] < b[0] ? -1 : 1,
    );

    for (const [key, value] of entries) {
      html_components.push(
        `<tr><td><kbd>${key}</kbd></td><td>${value}</td></tr>`,
      );
    }

    const group = document.createElement("div");
    group.classList.add("tbl-group");
    const header = document.createElement("h4");
    header.innerHTML = context_key;
    const table = document.createElement("table");
    const values = html_components.join("\n");
    table.innerHTML = `
      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>
      <tbody>${values}</tbody>
    `;
    group.appendChild(header);
    group.appendChild(table);
    into.appendChild(group);
  }
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
  const sorter = sort_contexts(json);
  const contexts = Object.keys(json).sort(sorter);

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

    const group = document.createElement("div");
    group.classList.add("tbl-group");
    const header = document.createElement("h4");
    header.innerHTML = context_key;
    const table = document.createElement("table");
    const values = html_components.join("\n");
    table.innerHTML = `
      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>
      <tbody>${values}</tbody>
    `;
    group.appendChild(header);
    group.appendChild(table);
    into.appendChild(group);
  }
}
