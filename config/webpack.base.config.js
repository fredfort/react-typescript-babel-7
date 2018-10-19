const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Add this in top

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".avsc", ".scss"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          use: [
            PLATFORM === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin({
        "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
      }),
      new CopyWebpackPlugin([{ from: "src/static" }]) // Add this in the plugins section
    ]
  };
};
