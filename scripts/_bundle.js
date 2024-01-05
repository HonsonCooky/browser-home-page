/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_responder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll_responder */ \"./scripts/scroll_responder.js\");\n/* harmony import */ var _scroll_responder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scroll_responder__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme_responder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme_responder */ \"./scripts/theme_responder.js\");\n/* harmony import */ var _theme_responder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_theme_responder__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shortcuts_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shortcuts_loader */ \"./scripts/shortcuts_loader.js\");\n/* harmony import */ var _keyboard_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard_inputs */ \"./scripts/keyboard_inputs.js\");\n/* harmony import */ var _keyboard_inputs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_keyboard_inputs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/index.js?");

/***/ }),

/***/ "./scripts/keyboard_inputs.js":
/*!************************************!*\
  !*** ./scripts/keyboard_inputs.js ***!
  \************************************/
/***/ (() => {

eval("const special_characters = [\"g\", \"s\", \"v\", \"b\", \"z\", \"t\", \"w\"];\nlet scroll_direction = 0;\n\ndocument.addEventListener(\"keydown\", function(event) {\n  var character = event.key.toLowerCase();\n  if (character === \"?\") {\n    toggle_quick_links();\n  } else if (special_characters.includes(character)) {\n    special_character(character);\n  }\n  // Scrolling\n  const scrollAmount = 200;\n  switch (event.key) {\n    case \"j\":\n      window.scrollBy(0, scrollAmount); // Scroll down\n      break;\n    case \"k\":\n      window.scrollBy(0, -scrollAmount); // Scroll up\n      break;\n    case \"h\":\n      window.scrollBy(-scrollAmount, 0); // Scroll left\n      break;\n    case \"l\":\n      window.scrollBy(scrollAmount, 0); // Scroll right\n      break;\n  }\n});\n\nfunction toggle_quick_links(hide) {\n  var quick_links = document.getElementById(\"quick-links\");\n  if (hide || quick_links.style.visibility === \"visible\") {\n    quick_links.style.visibility = \"hidden\";\n  } else {\n    quick_links.style.visibility = \"visible\";\n  }\n}\n\nfunction special_character(character) {\n  toggle_quick_links(true);\n  var quick_links_children = document.getElementById(\"quick-links\").children;\n  var index = special_characters.indexOf(character);\n  quick_links_children[index].click();\n}\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/keyboard_inputs.js?");

/***/ }),

/***/ "./scripts/scroll_responder.js":
/*!*************************************!*\
  !*** ./scripts/scroll_responder.js ***!
  \*************************************/
/***/ (() => {

eval("window.onscroll = function() {\n  var cur_height = document.body.scrollTop;\n  document.body.style.backgroundPositionY =\n    \"-\" + Math.floor(cur_height / 5) + \"px\";\n};\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/scroll_responder.js?");

/***/ }),

/***/ "./scripts/shortcuts_loader.js":
/*!*************************************!*\
  !*** ./scripts/shortcuts_loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_vimium_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/vimium.json */ \"./assets/vimium.json\");\n/* harmony import */ var _assets_edge_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/edge.json */ \"./assets/edge.json\");\n/* harmony import */ var _assets_firefox_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/firefox.json */ \"./assets/firefox.json\");\n/* harmony import */ var _assets_vim_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/vim.json */ \"./assets/vim.json\");\n\n\n\n\nload_simple(_assets_vimium_json__WEBPACK_IMPORTED_MODULE_0__, document.getElementById(\"vimium-shortcuts\"));\nload_simple(_assets_edge_json__WEBPACK_IMPORTED_MODULE_1__, document.getElementById(\"edge-shortcuts\"));\nload_complex(_assets_vim_json__WEBPACK_IMPORTED_MODULE_3__, document.getElementById(\"vim-shortcuts-tbls\"));\nload_dynamic_multi(_assets_firefox_json__WEBPACK_IMPORTED_MODULE_2__, document.getElementById(\"firefox-shortcuts\"));\n\n/**\n * Object Looks Like:\n * {\n * \"Shortcut\": \"Description\",\n * \"Shortcut\": \"Description\",\n * ...\n * }\n */\nfunction load_simple(json, into) {\n  const html_components = [];\n  const entries = Object.entries(json).sort((a, b) => (a[0] < b[0] ? -1 : 1));\n\n  for (const [key, value] of entries) {\n    html_components.push(\n      `<tr><td><kbd>${key}</kbd></td><td>${value}</td></tr>`,\n    );\n  }\n\n  const group = document.createElement(\"div\");\n  group.classList.add(\"tbl-group\");\n  const table = document.createElement(\"table\");\n  const values = html_components.join(\"\\n\");\n  table.innerHTML = `\n      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>\n      <tbody>${values}</tbody>\n    `;\n  group.appendChild(table);\n  into.appendChild(group);\n}\n\n/**\n * Object Looks Like:\n * {\n * \"Context\": {\n * \"Shortcut\": \"Description\",\n * \"Shortcut\": \"Description\",\n * ...\n * }\n * }\n */\n\nfunction sort_contexts(json) {\n  return (a, b) => {\n    return Object.keys(json[a]).length - Object.keys(json[b]).length;\n  };\n}\n\nfunction load_complex(json, into) {\n  const sorter = sort_contexts(json);\n  const contexts = Object.keys(json).sort(sorter);\n\n  for (const context_key of contexts) {\n    const html_components = [];\n    const shortcuts = json[context_key];\n    const entries = Object.entries(shortcuts).sort((a, b) =>\n      a[0] < b[0] ? -1 : 1,\n    );\n\n    for (const [key, value] of entries) {\n      html_components.push(\n        `<tr><td><kbd>${key}</kbd></td><td>${value}</td></tr>`,\n      );\n    }\n\n    const group = document.createElement(\"div\");\n    group.classList.add(\"tbl-group\");\n    const header = document.createElement(\"h4\");\n    header.innerHTML = context_key;\n    const table = document.createElement(\"table\");\n    const values = html_components.join(\"\\n\");\n    table.innerHTML = `\n      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>\n      <tbody>${values}</tbody>\n    `;\n    group.appendChild(header);\n    group.appendChild(table);\n    into.appendChild(group);\n  }\n}\n\n/**\n * Object Looks Like:\n * {\n * \"Context\": {\n * \"Action Description\": [\"Shortcut_1\", \"Shortcut_2\"],\n * ...\n * }\n *}\n */\nfunction load_dynamic_multi(json, into) {\n  const sorter = sort_contexts(json);\n  const contexts = Object.keys(json).sort(sorter);\n\n  for (const context_key of contexts) {\n    const html_components = [];\n    const shortcuts = json[context_key];\n    const entries = Object.entries(shortcuts).sort((a, b) =>\n      a[0] < b[0] ? -1 : 1,\n    );\n\n    for (const [desc, value] of entries) {\n      const keys = value.map((key) => `<kbd>${key}</kbd>`).join(\" || \");\n      html_components.push(`<tr><td>${keys}</td><td>${desc}</td></tr>`);\n    }\n\n    const group = document.createElement(\"div\");\n    group.classList.add(\"tbl-group\");\n    const header = document.createElement(\"h4\");\n    header.innerHTML = context_key;\n    const table = document.createElement(\"table\");\n    const values = html_components.join(\"\\n\");\n    table.innerHTML = `\n      <thead><tr><th>Shortcuts</th><th>Action</th></tr></thead>\n      <tbody>${values}</tbody>\n    `;\n    group.appendChild(header);\n    group.appendChild(table);\n    into.appendChild(group);\n  }\n}\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/shortcuts_loader.js?");

/***/ }),

/***/ "./scripts/theme_responder.js":
/*!************************************!*\
  !*** ./scripts/theme_responder.js ***!
  \************************************/
/***/ (() => {

eval("var matcher = window.matchMedia(\"(prefers-color-scheme: dark)\");\nvar lightSchemeIcon = document.querySelector(\"link#light-scheme-icon\");\nvar darkSchemeIcon = document.querySelector(\"link#dark-scheme-icon\");\nmatcher.matches ? to_dark_theme() : to_light_theme();\nmatcher.addEventListener(\"change\", (event) => {\n  event.matches ? to_dark_theme() : to_light_theme();\n});\n\nfunction to_light_theme() {\n  darkSchemeIcon.remove();\n  document.head.append(lightSchemeIcon);\n}\n\nfunction to_dark_theme() {\n  lightSchemeIcon.remove();\n  document.head.append(darkSchemeIcon);\n}\n\n\n//# sourceURL=webpack://browser-home-page/./scripts/theme_responder.js?");

/***/ }),

/***/ "./assets/edge.json":
/*!**************************!*\
  !*** ./assets/edge.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"Ctrl + Shift + B\":\"Show or hide the favorites bar\",\"Alt + Shift + B\":\"Set focus on the first item in the favorites bar\",\"Ctrl + D\":\"Save the current tab as a favorite\",\"Ctrl + Shift + D\":\"Save all open tabs as favorites in a new folder\",\"Ctrl + Shift + E\":\"Open search in sidebar\",\"Alt + D\":\"Select the URL in the address bar to edit\",\"Ctrl + E\":\"Open a search query in the address bar\",\"Alt + E\":\"Open the Settings and more menu\",\"Ctrl + F\":\"Open find on page\",\"Alt + F\":\"Open the Settings and more menu\",\"Ctrl + G\":\"Jump to the next result for find on page\",\"Ctrl + Shift + G\":\"Jump to the previous result for find on page\",\"Ctrl + H\":\"Open History \",\"Ctrl + Shift + I\":\"Open Developer Tools\",\"Alt + Shift + I\":\"Open the Send feedback dialog\",\"Ctrl + J\":\"Open Downloads \",\"Ctrl + K\":\"Open a search query in the address bar\",\"Ctrl + Shift + K\":\"Duplicate the current tab\",\"Ctrl + L\":\"Select the URL in the address bar to edit\",\"Ctrl + Shift + L\":\"Paste and search or Paste and go (if it\\'s a URL)\",\"Ctrl + M\":\"Mute the current tab (toggle)\",\"Ctrl + Shift + M\":\"Sign in as a different user or browse as a Guest\",\"Ctrl + N\":\"Open a new window\",\"Ctrl + Shift + N\":\"Open a new InPrivate window\",\"Ctrl + O\":\"Open a file from your computer in Edge\",\"Ctrl + Shift + O\":\"Open Favorites \",\"Ctrl + P\":\"Print the current page\",\"Ctrl + Shift + P\":\"Print using the system dialog\",\"Ctrl + R\":\"Reload the current page\",\"Ctrl + Shift + R\":\"Reload the current page, ignoring cached content\",\"Ctrl + S\":\"Save the current page\",\"Ctrl + T\":\"Open a new tab and switch to it\",\"Ctrl + Shift + T\":\"Reopen the last closed tab, and switch to it\",\"Alt + Shift + T\":\"Set focus on the first item in the app bar toolbar\",\"Ctrl + U\":\"View source\",\"Ctrl + Shift + U\":\"Start or stop Read Aloud\",\"Ctrl + Shift + V\":\"Paste without formatting\",\"Ctrl + W\":\"Close the current tab\",\"Ctrl + Shift + W\":\"Close the current window\",\"Ctrl + Shift + Y\":\"Open Collections\",\"Ctrl + 0 (zero)\":\"Reset page zoom level\",\"Ctrl + 1, 2, ... 8\":\"Switch to a specific tab\",\"Ctrl + 9\":\"Switch to the last tab\",\"Ctrl + Enter\":\"Add www. to the beginning and .com to the end of text typed in the address bar\",\"Ctrl + Tab\":\"Switch to the next tab\",\"Ctrl + Shift + Tab\":\"Switch to the previous tab\",\"Ctrl + Plus (+)\":\"Zoom in\",\"Ctrl + Minus (-)\":\"Zoom out\",\"Ctrl + \\\\\\\\ (in a PDF)\":\"Toggle PDF between fit to page / fit to width\",\"Ctrl + [ (in a PDF)\":\"Rotate PDF counter-clockwise 90*\",\"Ctrl + ] (in a PDF)\":\"Rotate PDF clockwise 90*\",\"Ctrl + Shift + Delete\":\"Open clear browsing data options\",\"Alt\":\"Set focus on the Settings and more button\",\"Alt + Left arrow\":\"Go back\",\"Alt + Right arrow\":\"Go forward\",\"Alt + Home\":\"Open your home page in the current tab\",\"Alt + F4\":\"Close the current window\",\"F1\":\"Open Help\",\"F3\":\"Find in the current tab\",\"F4\":\"Select the URL in the address bar\",\"Ctrl + F4\":\"Close the current tab\",\"F5\":\"Reload the current tab\",\"Shift + F5\":\"Reload the current tab, ignoring cached content\",\"F6\":\"Move focus to next pane\",\"Shift + F6\":\"Move focus to previous pane\",\"Ctrl + F6\":\"Move focus to the web content pane\",\"F7\":\"Turn caret browsing on or off\",\"F9\":\"Enter or exit Immersive Reader\",\"F10\":\"Set focus on the Settings and more button\",\"F10 + Enter\":\"Open Setting and more menu\",\"Shift + F10\":\"Open context menu\",\"F11\":\"Enter full screen (toggle)\",\"F12\":\"Open Developer Tools\",\"Esc\":\"Stop loading page; close dialog or pop-up\",\"Spacebar\":\"Scroll down webpage, one screen at a time\",\"Shift + Spacebar\":\"Scroll up webpage, one screen at a time\",\"PgDn\":\"Scroll down webpage, one screen at a time\",\"Ctrl + PgDn\":\"Switch to the next tab\",\"PgUp\":\"Scroll up webpage, one screen at a time\",\"Ctrl + PgUp\":\"Switch to the previous tab\",\"Home\":\"Go to the top of the page, Move keyboard focus to first item of pane\",\"End\":\"Go to the bottom of the page, Move keyboard focus to last item of pane\",\"Tab\":\"Go to next tab stop\",\"Shift + Tab\":\"Go to previous tab stop\"}');\n\n//# sourceURL=webpack://browser-home-page/./assets/edge.json?");

/***/ }),

/***/ "./assets/firefox.json":
/*!*****************************!*\
  !*** ./assets/firefox.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"Navigation\":{\"Back\":[\"Alt + ←\",\"Ctrl + [\"],\"Forward\":[\"Alt + →\",\"Ctrl + ]\"],\"Home\":[\"Alt + Home\"],\"Open File\":[\"Ctrl + O\"],\"Reload\":[\"F5\",\"Ctrl + R\"],\"Reload (override cache)\":[\"Ctrl + F5\",\"Ctrl + Shift + R\"],\"Stop\":[\"Esc\"]},\"Current Page\":{\"Focus Next Link or Input Field\":[\"Tab\"],\"Focus Previous Link or Input Field\":[\"Shift + Tab\"],\"Go Down a Screen\":[\"Page Down\",\"Space bar\"],\"Go Up a Screen\":[\"Page Up\",\"Shift + Space bar\"],\"Go to Bottom of Page\":[\"End\",\"Ctrl + ↓\"],\"Go to Top of Page\":[\"Home\",\"Ctrl + ↑\"],\"Move to Next Frame, Pop-Up\":[\"F6\"],\"Move to Previous Frame, Pop-Up\":[\"Shift + F6\"],\"Print\":[\"Ctrl + P\"],\"Save Focused Link\":[\"Alt + Enter\"],\"Save Page As\":[\"Ctrl + S\"],\"Zoom In\":[\"Ctrl + +\"],\"Zoom Out\":[\"Ctrl + -\"],\"Zoom Reset\":[\"Ctrl + 0\"]},\"Editing\":{\"Copy\":[\"Ctrl + C\"],\"Cut\":[\"Ctrl + X\"],\"Delete\":[\"Del\"],\"Delete Word to the Left\":[\"Ctrl + Backspace\"],\"Delete Word to the Right\":[\"Ctrl + Del\"],\"Go one Word to the Left\":[\"Ctrl + ←\"],\"Go one Word to the Right\":[\"Ctrl + →\"],\"Go to Beginning of Line\":[\"Home\"],\"Go to End of Line\":[\"End\"],\"Go to Beginning of Text\":[\"Ctrl + Home\"],\"Go to End of Text\":[\"Ctrl + End\"],\"Paste\":[\"Ctrl + V\"],\"Paste (as plain text)\":[\"Ctrl + Shift + V\"],\"Redo\":[\"Ctrl + Y\",\"Ctrl + Shift + Z\"],\"Select All\":[\"Ctrl + A\"],\"Undo\":[\"Ctrl + Z\"]},\"Search\":{\"Find in This Page\":[\"Ctrl + F\"],\"Find Again\":[\"F3\",\"Ctrl + G\"],\"Find Previous\":[\"Shift + F3\",\"Ctrl + Shift + G\"],\"Quick Find within link-text only\":[\"\\'\"],\"Quick Find\":[\"/\"],\"Close the Find or Quick Find bar\":[\"Esc\"],\"Switch Search Engine\":[\"Alt + ↓\",\"Alt + ↑\"],\"Web Search with Default Search Engine\":[\"Type ? and a space (or only ?) into empty Address Bar\"],\"Focus Address bar for Web Search with Default Search Engine\":[\"Ctrl + K\",\"Ctrl + J\"],\"Focus Search bar\":[\"Ctrl + K\",\"Ctrl + J\"],\"Change the Default Search Engine\":[\"Ctrl + ↓\",\"Ctrl + ↑\"],\"View menu to switch, add or manage search engines\":[\"Alt + ↓\",\"Alt + ↑\",\"F4\"]},\"Windows & Tabs\":{\"Close Tab\":[\"Ctrl + W\",\"Ctrl + F4\"],\"Close Window\":[\"Ctrl + Shift + W\",\"Alt + F4\"],\"Cycle through Tabs in Recently Used Order\":[\"Ctrl + Tab\"],\"Quit\":[\"Ctrl + Q\"],\"Go one Tab to the Left\":[\"Ctrl + Page Up\",\"Ctrl + Shift + Tab*\"],\"Go one Tab to the Right\":[\"Ctrl + Page Down\",\"Ctrl + Tab*\"],\"Go to Tab 1 to 8\":[\"Alt + 1 to 8\"],\"Go to Last Tab\":[\"Alt + 9\"],\"Move Tab Left\":[\"Ctrl + Shift + Page Up\"],\"Move Tab Right\":[\"Ctrl + Shift + Page Down\"],\"Move Tab to start\":[\"Ctrl + Shift + Home\"],\"Move Tab to end\":[\"Ctrl + Shift + End\"],\"Mute/Unmute Audio\":[\"Ctrl + M\"],\"New Tab\":[\"Ctrl + T\"],\"New Window\":[\"Ctrl + N\"],\"New Private Window\":[\"Ctrl + Shift + P\"],\"Open Address or Search in New Background Tab\":[\"Alt + Shift + Enter\"],\"Open Address or Search in New Foreground Tab\":[\"Alt + Enter\"],\"Open Address or Search in New Window\":[\"Shift + Enter\"],\"Open Search in New Background Tab\":[\"Ctrl + Enter\"],\"Open Search in New Foreground Tab\":[\"Ctrl + Shift + Enter\"],\"Open Focused Bookmark or Link in Current Tab\":[\"Enter\"],\"Open Focused Bookmark in New Foreground Tab\":[\"Ctrl + Enter\"],\"Open Focused Bookmark in New Background Tab\":[\"Ctrl + Shift + Enter\"],\"Open Focused Link in New Background Tab\":[\"Ctrl + Enter\"],\"Open Focused Link in New Foreground Tab\":[\"Ctrl + Shift + Enter\"],\"Open Focused Bookmark or Link in New Window\":[\"Shift + Enter\"],\"Show All Tabs\":[\"Ctrl + Shift + Tab\"],\"Reopen last closed tab or window\":[\"Ctrl + Shift + T\"],\"Reopen last closed window\":[\"Ctrl + Shift + N\"],\"Moves the URL left or right (if cursor is in the address bar)\":[\"Ctrl + Shift + X\"]},\"History\":{\"History sidebar\":[\"Ctrl + H\"],\"Library window (History)\":[\"Ctrl + Shift + H\"],\"Clear Recent History\":[\"Ctrl + Shift + Del\"]},\"Bookmarks\":{\"Bookmark This Page\":[\"Ctrl + D\"],\"Bookmarks sidebar\":[\"Ctrl + B\"],\"Show/hide the Bookmarks toolbar\":[\"Ctrl + Shift + B\"],\"Show All Bookmarks (Library Window)\":[\"Ctrl + Shift + O\"],\"Show List of All Bookmarks\":[\"Space\"]},\"Tools\":{\"Downloads\":[\"Ctrl + Shift + Y\"],\"Add-ons\":[\"Ctrl + Shift + A\"],\"Toggle Developer Tools\":[\"F12\",\"Ctrl + Shift + I\"],\"Web Console\":[\"Ctrl + Shift + K\"],\"Inspector\":[\"Ctrl + Shift + C\"],\"Take a screenshot\":[\"Ctrl + Shift + S\"],\"Style Editor\":[\"Shift + F7\"],\"Task Manager\":[\"Shift + Esc\"],\"Profiler\":[\"Shift + F5\"],\"Network\":[\"Ctrl + Shift + E\"],\"Responsive Design View\":[\"Ctrl + Shift + M\"],\"Page Source\":[\"Ctrl + U\"],\"Browser Console\":[\"Ctrl + Shift + J\"],\"Page Info\":[\"Ctrl + I\"]},\"PDF Viewer\":{\"Next page\":[\"N or J or →\"],\"Previous page\":[\"P or K or ←\"],\"Zoom in\":[\"Ctrl + +\"],\"Zoom out\":[\"Ctrl + -\"],\"Automatic Zoom\":[\"Ctrl + 0\"],\"Rotate the document clockwise\":[\"R\"],\"Rotate counterclockwise\":[\"Shift + R\"],\"Switch to Presentation Mode\":[\"Ctrl + Alt + P\"],\"Choose Text Selection Tool\":[\"S\"],\"Choose Hand Tool\":[\"H\"],\"Focus the Page Number input box\":[\"Ctrl + Alt + G\"]},\"Miscellaneous\":{\"Complete .com Address\":[\"Ctrl + Enter\"],\"Delete Selected Autocomplete Entry\":[\"Shift + Del\"],\"Toggle Full Screen\":[\"F11\"],\"Toggle Menu Bar activation (showing it temporarily when hidden)\":[\"Alt or F10\"],\"Toggle Reader Mode\":[\"Ctrl + Alt + R\"],\"Caret Browsing\":[\"F7\"],\"Focus Address Bar\":[\"F6\",\"Alt + D\",\"Ctrl + L\"],\"Focus Search Field in Library\":[\"F6\",\"Ctrl + F\"],\"Stop Autoscroll Mode\":[\"Esc\"],\"Cancel Drag-and-Drop Operation\":[\"Esc\"],\"Clear Search Field in Library or Sidebar\":[\"Esc\"],\"Close a Menu\":[\"Esc\",\"Alt\",\"F10\"],\"Toggle Context Menu\":[\"Shift + F10\"]},\"Media shortcuts\":{\"Toggle Play / Pause\":[\"Space bar\"],\"Decrease volume\":[\"↓\"],\"Increase volume\":[\"↑\"],\"Mute audio\":[\"Ctrl + ↓\"],\"Unmute audio\":[\"Ctrl + ↑\"],\"Seek back 15 seconds\":[\"←\"],\"Seek back 10 %\":[\"Ctrl + ←\"],\"Seek forward 15 seconds\":[\"→\"],\"Seek forward 10 %\":[\"Ctrl + →\"],\"Seek to the beginning\":[\"Home\"],\"Seek to the end\":[\"End\"]},\"Selection of Multiple Tabs\":{\"Select left, right, first or last tab. Deselect all other tabs.\":[\"Arrow Keys\",\"Home\",\"End\"],\"Move the colored border to left, right, first or last tab.\":[\"Ctrl + Arrow Keys\",\"Ctrl + Home\",\"Ctrl + End\"],\"Select or deselect the tab with the colored border. The other tabs stay selected or deselected.\":[\"Ctrl + Space\"]}}');\n\n//# sourceURL=webpack://browser-home-page/./assets/firefox.json?");

/***/ }),

/***/ "./assets/vim.json":
/*!*************************!*\
  !*** ./assets/vim.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"Exiting\":{\":q\":\"Close file\",\":qa\":\"Close all files\",\":w\":\"Save\",\":wq / :x\":\"Save and close file\",\"ZZ\":\"Save and quit\",\"ZQ\":\"Quit without checking changes\"},\"Navigating\":{\"h j k l\":\"Arrow keys\",\"Ctrl + u / d\":\"Half-page up/down\",\"Ctrl + b / f\":\"Page up/down\"},\"Words\":{\"b / w\":\"Previous/next word\",\"ge / e\":\"Previous/next end of word\"},\"Line\":{\"0 (zero)\":\"Start of line\",\"^\":\"Start of line (after whitespace)\",\"$\":\"End of line\"},\"Character\":{\"fc\":\"Go forward to character c\",\"Fc\":\"Go backward to character c\"},\"Document\":{\"gg\":\"First line\",\"G\":\"Last line\",\":{number}\":\"Go to line {number}\",\"{number}G\":\"Go to line {number}\",\"{number}j\":\"Go down {number} lines\",\"{number}k\":\"Go up {number} lines\"},\"Window\":{\"zz\":\"Center this line\",\"zt\":\"Top this line\",\"zb\":\"Bottom this line\",\"H\":\"Move to top of screen\",\"M\":\"Move to middle of screen\",\"L\":\"Move to bottom of screen\"},\"Search\":{\"n\":\"Next matching search pattern\",\"N\":\"Previous match\",\"*\":\"Next whole word under cursor\",\"#\":\"Previous whole word under cursor\"},\"Tab pages\":{\":tabedit [file]\":\"Edit file in a new tab\",\":tabfind [file]\":\"Open file if exists in new tab\",\":tabclose\":\"Close current tab\",\":tabs\":\"List all tabs\",\":tabfirst\":\"Go to first tab\",\":tablast\":\"Go to last tab\",\":tabn\":\"Go to next tab\",\":tabp\":\"Go to previous tab\"},\"Editing\":{\"a\":\"Append\",\"A\":\"Append from end of line\",\"i\":\"Insert\",\"o\":\"Next line\",\"O\":\"Previous line\",\"s\":\"Delete char and insert\",\"S\":\"Delete line and insert\",\"C\":\"Delete until end of line and insert\",\"r\":\"Replace one character\",\"R\":\"Enter Replace mode\",\"u\":\"Undo changes\",\"Ctrl + r\":\"Redo changes\"},\"Exiting insert mode\":{\"Esc / Ctrl + [\":\"Exit insert mode\",\"Ctrl + C\":\"Exit insert mode, and abort current command\"},\"Clipboard\":{\"x\":\"Delete character\",\"dd\":\"Delete line (Cut)\",\"yy\":\"Yank line (Copy)\",\"p\":\"Paste\",\"P\":\"Paste before\",\"\\\\\"*p / \\\\\"+p\":\"Paste from system clipboard\",\"\\\\\"*y / \\\\\"+y\":\"Paste to system clipboard\"},\"Visual mode\":{\"v\":\"Enter visual mode\",\"V\":\"Enter visual line mode\",\"Ctrl + V\":\"Enter visual block mode\"},\"In visual mode\":{\"d / x\":\"Delete selection\",\"s\":\"Replace selection\",\"y\":\"Yank selection (Copy)\"},\"Find & Replace\":{\":%s/foo/bar/g\":\"Replace foo with bar in whole document\"},\"Operators list\":{\"d\":\"Delete\",\"y\":\"Yank (copy)\",\"c\":\"Change (delete then insert)\",\">\":\"Indent right\",\"<\":\"Indent left\",\"=\":\"Autoindent\",\"g~\":\"Swap case\",\"gU\":\"Uppercase\",\"gu\":\"Lowercase\",\"!\":\"Filter through external program\"},\"Operators Examples\":{\"dd\":\"(repeat the letter) Delete current line\",\"dw\":\"Delete to next word\",\"db\":\"Delete to beginning of word\",\"2dd\":\"Delete 2 lines\",\"dip\":\"Delete a text object (inside paragraph)\",\"(in visual mode) d\":\"Delete selection\"},\"Text objects\":{\"Operator\":\"[i]nside or [a]round \",\"p\":\"Paragraph\",\"w\":\"Word\",\"s\":\"Sentence\",\"[ ( { <\":\"A [], (), or {} block\",\"\\' \\\\\" `\":\"A quoted string\",\"b\":\"A block [(\",\"B\":\"A block in [{\",\"t\":\"A XML tag block\"},\"Text objects Examples\":{\"vip\":\"Select paragraph\",\"vipipipip\":\"Select more\",\"yip\":\"Yank inner paragraph\",\"yap\":\"Yank paragraph (including newline)\",\"dip\":\"Delete inner paragraph\",\"cip\":\"Change inner paragraph\"},\"Folds\":{\"key\":\"Uppercase = recursive\",\"zo / zO\":\"Open\",\"zc / zC\":\"Close\",\"za / zA\":\"Toggle\",\"zv\":\"Open folds for this line\",\"zM\":\"Close all\",\"zR\":\"Open all\",\"zm\":\"Fold more (foldlevel += 1)\",\"zr\":\"Fold less (foldlevel -= 1)\",\"zx\":\"Update folds\"},\"Navigation\":{\"%\":\"Nearest/matching {[()]}\",\"[( [{ [<\":\"Previous ( or { or <\",\"]( ]{ ]<\":\"Next ( or { or <\",\"[m\":\"Previous method start\",\"[M\":\"Previous method end\"},\"Jumping\":{\"Ctrl + O\":\"Go back to previous location\",\"Ctrl + I\":\"Go forward\",\"gf\":\"Go to file in cursor\"},\"Counters\":{\"Ctrl + A\":\"Increment number\",\"Ctrl + X\":\"Decrement\"},\"Windows\":{\"z{height}\":\"Resize pane to {height} lines tall\"},\"Tags\":{\":tag Classname\":\"Jump to first definition of Classname\",\"Ctrl + ]\":\"Jump to definition\",\"g]\":\"See all definitions\",\"Ctrl + T\":\"Go back to last tag\",\"Ctrl + O / I\":\"Back/forward\",\":tselect Classname\":\"Find definitions of Classname\",\":tjump Classname\":\"Find definitions of Classname (auto-select 1st)\"},\"Case (Visual)\":{\"~\":\"Toggle case (Case => cASE)\",\"gU\":\"Uppercase\",\"gu\":\"Lowercase\",\"gUU\":\"Uppercase current line (also gUgU)\",\"guu\":\"Lowercase current line (also gugu)\"},\"Marks\":{\"`^\":\"Last position of cursor in insert mode\",\"`.\":\"Last change in current buffer\",\"`\\\\\"\":\"Last exited current buffer\",\"`0\":\"In last file edited\",\"\\'\\'\":\"Back to line in current buffer where jumped from\",\"``\":\"Back to position in current buffer where jumped from\",\"`[\":\"To beginning of previously changed or yanked text\",\"`]\":\"To end of previously changed or yanked text\",\"`<\":\"To beginning of last visual selection\",\"`>\":\"To end of last visual selection\",\"ma\":\"Mark this cursor position as a\",\"`a\":\"Jump to the cursor position a\",\"\\'a\":\"Jump to the beginning of the line with position a\",\"d\\'a\":\"Delete from current line to line of mark a\",\"d`a\":\"Delete from current position to position of mark a\",\"c\\'a\":\"Change text from current line to line of a\",\"y`a\":\"Yank text from current position to position of a\",\":marks\":\"List all current marks\",\":delm a\":\"Delete mark a\",\":delm a-d\":\"Delete marks a, b, c, d\",\":delm abc\":\"Delete marks a, b, c\"},\"Misc\":{\".\":\"Repeat last command\",\"]p\":\"Paste under the current indentation level\",\":set ff=unix\":\"Convert Windows line endings to Unix line endings\"},\"Command line\":{\"Ctrl + R -> Ctrl + W\":\"Insert current word into the command line\",\"Ctrl + R\\\\\"\":\"Paste from \\\\\" register\",\"Ctrl + X -> Ctrl + F\":\"Auto-completion of path in insert mode\"},\"Text alignment\":{\"center\":\":center [width]\",\"right\":\":right [width]\",\"left\":\":left\"},\"Calculator\":{\"Ctrl + R -> = -> 128/2\":\"Shows the result of the division : ‘64’\"},\"Exiting with an error\":{\"short\":\":cq\",\"long\":\":cquit\"},\"Spell checking\":{\":set spell spelllang=en_us\":\"Turn on US English spell checking\",\"]s\":\"Move to next misspelled word after the cursor\",\"[s\":\"Move to previous misspelled word before the cursor\",\"z=\":\"Suggest spellings for the word under/after the cursor\",\"zg\":\"Add word to spell list\",\"zw\":\"Mark word as bad/mispelling\",\"zu / C-X (Insert Mode)\":\"Suggest words for bad word under cursor from spellfile\"}}');\n\n//# sourceURL=webpack://browser-home-page/./assets/vim.json?");

/***/ }),

/***/ "./assets/vimium.json":
/*!****************************!*\
  !*** ./assets/vimium.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"j\":\"Scroll down\",\"k\":\"Scroll up\",\"gg\":\"Scroll to the top of the page\",\"G\":\"Scroll to the bottom of the page\",\"d\":\"Scroll a half page down\",\"u\":\"Scroll a half page up\",\"h\":\"Scroll left\",\"l\":\"Scroll right\",\"r\":\"Reload the page\",\"yy\":\"Copy the current URL to the clipboard\",\"p\":\"Open the clipboard\\'s URL in the current tab\",\"P\":\"Open the clipboard\\'s URL in a new tab\",\"i\":\"Enter insert mode\",\"v\":\"Enter visual mode\",\"gi\":\"Focus the first text input on the page\",\"f\":\"Open a link in the current tab\",\"F\":\"Open a link in a new tab\",\"gf\":\"Select the next frame on the page\",\"gF\":\"Select the page\\'s main/top frame\",\"/\":\"Enter find mode\",\"n\":\"Cycle forward to the next find match\",\"N\":\"Cycle backward to the previous find match\",\"o\":\"Open URL, bookmark or history entry\",\"O\":\"Open URL, bookmark or history entry in a new tab\",\"b\":\"Open a bookmark\",\"B\":\"Open a bookmark in a new tab\",\"T\":\"Search through your open tabs\",\"H\":\"Go back in history\",\"L\":\"Go forward in history\",\"t\":\"Create new tab\",\"J\":\"Go one tab left\",\"K\":\"Go one tab right\",\"g0\":\"Go to the first tab\",\"g$\":\"Go to the last tab\",\"yt\":\"Duplicate current tab\",\"x\":\"Close current tab\",\"X\":\"Restore closed tab\",\"?\":\"Show help\"}');\n\n//# sourceURL=webpack://browser-home-page/./assets/vimium.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;