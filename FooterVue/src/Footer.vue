<template>
  <footer class="app-footer">
    <div class="footer-content">
      Footer in
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
      VUE.JS
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;

  .footer-content {
    margin: 0 auto;
    width: 80%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1rem;
      height: 1rem;
      margin: 0 0.25rem;
    }
  }
}
</style>
