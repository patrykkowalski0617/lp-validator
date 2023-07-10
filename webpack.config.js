const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");

module.exports = {
  mode: "development",
  entry: { content: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test html",
      filename: "index.html",
      template: "src/template.html",
      inject: true,
      favicon: "src/favicon.png",
    }),
    new WebpackExtensionManifestPlugin({
      config: {
        base: "./baseManifest.js",
        extend: { description: "Fix Magento Generator" },
      },
      pkgJsonProps: ["version"],
    }),
  ],
};
