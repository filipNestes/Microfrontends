<template>
  <div>
    {{ message }}
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
