<template>
  <div class="content">
    <svg
      class="logo"
      viewBox="0 0 128 128"
      width="24"
      height="24"
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
    <span> VUE microfrontend </span>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: #80cd88;
  color: #484848;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 0.5rem;
  }
}
</style>
