const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require("dotenv-webpack")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "eval-source-map",
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
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    // Let React handle routes
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    // Enable hot refresh for React (see .babelrc)
    new ReactRefreshWebpackPlugin(),
    // Load environment variables from a .env file at the root folder
    new Dotenv(),
    // Perform TypeScript type check on a separate thread
    new ForkTsCheckerWebpackPlugin(),
  ]
};
