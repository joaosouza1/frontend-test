const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    // Let React handle routes
    historyApiFallback: true,
    static: './dist',
    port: 3000
  },
  plugins: [
    // Enable hot refresh for React (see .babelrc)
    new ReactRefreshWebpackPlugin(),
    // Perform TypeScript type check on a separate thread
    new ForkTsCheckerWebpackPlugin(),
  ]
});
