const merge = require("webpack-merge");
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

// Configs
const baseConfig = require("./webpack.base.config");

const prodConfiguration = env => ({
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(),
    new Visualizer({ filename: "./statistics.html" })
  ]
});

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
