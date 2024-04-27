import { createApp } from "vue";
import App from "./App";

const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

const devRoot = document.querySelector("#vue-microfrontend");
if (devRoot) {
  mount(devRoot);
}

export { mount };
