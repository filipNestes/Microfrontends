<template>
  <div>
    {{ message }}
    <Content />
  </div>
</template>

<script>
import Content from "./Content.vue";

export default {
  components: {
    Content,
  },
};
</script>
