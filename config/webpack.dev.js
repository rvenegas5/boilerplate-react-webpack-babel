const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static: "../dist",
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
};

module.exports = merge(common, devConfig);
