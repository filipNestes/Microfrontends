const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),

    new ModuleFederationPlugin({
      name: "microfrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./LayoutTemplate": "./src/layout/LayoutTemplate.js",
        "./MiniReactApp": "./src/miniApp/miniReactApp.js",
      },
      remotes: {
        footerVue: "footerVue@http://localhost:3010/remoteEntry.js",
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
        use: [
          "style-loader", // vytvorí štýlové uzly z JS reťazcov
          "css-loader", // prekladá CSS do CommonJS
          "sass-loader", // kompiluje Sass do CSS, pomocou Node Sass by default
        ],
      },
    ],
  },

  // Pridanie devServer konfigurácie
  devServer: {
    port: 3001, // Nastavenie portu na 3001
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};
