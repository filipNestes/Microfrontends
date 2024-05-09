const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),

    new ModuleFederationPlugin({
      name: "main",
      filename: "remoteEntry.js",
      remotes: {
        reactMf: "ReactMicrofrontend@http://localhost:3001/remoteEntry.js",
        angularMf: "AngularMicrofrontend@http://localhost:3002/remoteEntry.js",
        vueMf: "VueMicrofrontend@http://localhost:3003/remoteEntry.js",
        svelteMf: "SvelteMicrofrontend@http://localhost:3004/remoteEntry.js",
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!npmpackage)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sass|less|css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};
