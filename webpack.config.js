const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, isProduction ? "dist" : "build"),
      filename: "bundle.js",
      clean: true,
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            to: "",
            globOptions: {
              ignore: ["**/index.html"],
            },
          },
        ],
      }),
    ],
    devServer: {
      static: "./dist",
      port: 4400,
      open: true,
      historyApiFallback: true,
    },
    optimization: {
      minimize: isProduction,
    },
  };
};
