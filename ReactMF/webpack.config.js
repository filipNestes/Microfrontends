const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "auto",
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),

    new ModuleFederationPlugin({
      name: "ReactMicrofrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./LayoutTemplate": "./src/layout/LayoutTemplate.js",
        "./MiniReactApp": "./src/miniApp/miniReactApp.js",
        "./MiniAppInput": "./src/miniApp/miniAppInput.js",
      },
      remotes: {
        footerVue: "FooterVue@http://localhost:3010/remoteEntry.js",
      },
      shared: {
        ...packageJson.dependencies,
        ...packageJson.sharedDependencies,
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    port: 3001,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};
