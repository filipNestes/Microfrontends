<template>
  <div class="vueMf">
    <div class="vueMf-title">
      <svg
        class="logo"
        viewBox="0 0 128 128"
        width="32"
        height="32"
        data-v-224d45d0=""
      >
        <path
          fill="#42b883"
          d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
          data-v-224d45d0=""
        ></path>
        <path
          fill="#35495e"
          d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
          data-v-224d45d0=""
        ></path>
      </svg>
      <span> Vue.js </span>
    </div>
    <div class="message">
      Message from React: <span>{{ messageFromReact }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueMiniApp",

  data() {
    return {
      messageFromReact: "",
    };
  },
  methods: {
    handleReactMessage(event) {
      this.messageFromReact = event.detail.message;
      console.log("Received message from React:", this.messageFromReact);
    },
  },

  mounted() {
    window.addEventListener("fromReact", this.handleReactMessage);
  },

  beforeDestroy() {
    window.removeEventListener("fromReact", this.handleReactMessage);
  },
};
</script>

<style lang="scss" scoped>
.vueMf {
  width: 30rem;
  height: 15rem;
  background-color: #80cd88;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .vueMf-title {
    color: #484848;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0.5rem;
      width: 3rem;
      height: 3rem;
    }

    span {
      margin-left: 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      font-family: "Inter var experimental", "Inter var", Inter, -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      color: #35495e;
    }
  }
  .message {
    text-align: left;
    padding: 10px 10px;
    font-size: 18px;
    font-weight: bold;

    span {
      color: #2c3e50;
    }
  }
}
</style>
