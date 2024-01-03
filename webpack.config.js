const path = require("path");

module.exports = {
  mode: "production",
  entry: "./scripts/scripts.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./scripts"),
  },
};
