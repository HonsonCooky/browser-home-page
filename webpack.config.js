const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./scripts"),
  },
};
