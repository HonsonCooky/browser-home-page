const path = require("path");

module.exports = {
  mode: "production",
  entry: "./scripts.js",
  output: {
    filename: "_main.js",
    path: path.resolve(__dirname),
  },
};
