<template>
  <div class="home">
    <h1>Home</h1>
    <label>input name you want to search</label>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref([
      "mike",
      "kevin",
      "mario",
      "yoshi",
      "liugi",
      "robin",
      "andrew",
    ]);

    watch(search, () => {
      console.log(search);
    });

    const filteredNames = computed(() => {
      console.log("computed func called");
      return names.value.filter((name) => name.includes(search.value));
    });

    return { search, names, filteredNames };
  },
};
</script>
