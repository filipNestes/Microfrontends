<template>
  <footer class="app-footer">
    <div class="footer-content">Footer in VUE.JS</div>
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
  }
}
</style>
