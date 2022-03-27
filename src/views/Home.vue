<template>
  <div class="home">
    <h1>Home</h1>
    <h3>using refs</h3>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "mario", age: 30 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    return { ninjaOne, updateNinjaOne };
  },
};
</script>
