const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BannerPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: { prism: "./src/js/app.js" },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  // mode: "development",
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // Elimina otros comentarios
            preamble: `/*! 
* Copyright 2025 Pirulug (https://github.com/pirulug)
* PrismJS 1.29.0 (https://prismjs.com)
* Licensed MIT
*/`,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    // DELETE
    new CleanWebpackPlugin(),

    // Banner
    new BannerPlugin({
      banner: `/*!
* Copyright 2025 Pirulug (https://github.com/pirulug)
* PrismJS 1.29.0 (https://prismjs.com)
* Licensed MIT
*/`,
      raw: true,
      entryOnly: false,
    }),

    // CSS
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // Nombre del archivo CSS
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //asd
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
};
