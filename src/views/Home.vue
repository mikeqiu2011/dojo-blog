<template>
  <div class="home">
    <h1>Home</h1>
    {{ names }}
    <p>{{ filteredNames }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Home",
  setup() {
    const names = ref(["mike", "kevin", "mario", "yoshi", "liugi"]);

    const filteredNames = computed(() => {
      return names.value.filter((name) => name.length > 4);
    });

    return { names, filteredNames };
  },
};
</script>
