const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      { exclude: /node_modules/, test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.(scss|css)$/, use: ["vue-style-loader", "css-loader", 'sass-loader']
      }
    ]
  },
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'public', 'index.html'),
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
