const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BannerPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: { prism: "./src/js/app.js" },
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : "source-map",
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
              preamble: `/*! 
* Copyright 2026 Pirulug (https://github.com/pirulug)
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
      new CleanWebpackPlugin(),
      new BannerPlugin({
        banner: `/*!
* Copyright 2026 Pirulug (https://github.com/pirulug)
* PrismJS 1.29.0 (https://prismjs.com)
* Licensed MIT
*/`,
        raw: true,
        entryOnly: false,
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
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
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/,
          use: "svg-inline-loader",
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "test"),
      },
      compress: true,
      port: 9000,
      open: true,
    },
  };
};
