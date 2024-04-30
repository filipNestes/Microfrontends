import App from "./MiniApp.svelte";

const mount = (el) => {
  new App({
    target: el,
  });
};

export { mount };
