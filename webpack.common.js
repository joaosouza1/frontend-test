const path = require("path");
const Dotenv = require("dotenv-webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        // Load Babel-transpiled files (see .babelrc)
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        // Load CSS files
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Load SVGs as React components
        test: /\.svg$/,
        loader: "@svgr/webpack"
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  // Output the bundle as ./dist/bundle.js
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },
  plugins: [
    // Load environment variables from a .env file at the root folder
    new Dotenv(),
    // Bundle the HTML file and inject JS and CSS tags in it
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // Write index.html to the output folder so WebpackDevServer can serve it
      alwaysWriteToDisk: true
    }),
    // Enable the `alwaysWriteToDisk` for HtmlWebpackPlugin
    new HtmlWebpackHarddiskPlugin()
  ]
};
