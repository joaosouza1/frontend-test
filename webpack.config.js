const path = require("path");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        // Enable JSX (find options in .babelrc)
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        // Enable TypeScript
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        // Enable importing CSS from React components
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // Enable importing SVG as a React component
        test: /\.svg$/,
        loader: "@svgr/webpack"
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ]
};
