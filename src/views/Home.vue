<template>
  <div class="home">
    <h1>Home</h1>
    {{ name }}
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const name = computed(() => {
      return "mike";
    });

    return { name };
  },
};
</script>
