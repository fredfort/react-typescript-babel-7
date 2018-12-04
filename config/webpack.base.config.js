const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js)$/,
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
            "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]",
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
      new CopyWebpackPlugin([{ from: "src/static" }]),
      new ForkTsCheckerWebpackPlugin()
    ]
  };
};
