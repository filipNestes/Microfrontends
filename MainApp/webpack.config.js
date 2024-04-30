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
      exposes: {
        "./SharedState": "./src/SharedState",
      },
      remotes: {
        microfrontend: "microfrontend@http://localhost:3001/remoteEntry.js",
        angularMicrofrontend:
          "angularMicrofrontend@http://localhost:4201/remoteEntry.js",
        vueMicrofrontend:
          "vueMicrofrontend@http://localhost:3004/remoteEntry.js",
        viteVueApp: "viteVueApp@http://localhost:5173/remoteEntry.js",
        angularMf: "angularMf@http://localhost:3002/remoteEntry.js",
        svelteMf: "svelteMf@http://localhost:3008/remoteEntry.js",
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
    port: 3000,
    historyApiFallback: true, // Pridané, aby podporovalo SPA routovanie na klientovi
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
  },
};
