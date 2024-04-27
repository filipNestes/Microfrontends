import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "viteVueApp",
      filename: "remoteEntry.js",
      exposes: {
        "./MyComponent": "./src/bootstrap",
      },
      shared: ["vue"],
    }),
  ],
});
