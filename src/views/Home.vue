<template>
  <div class="home">
    <h1>Home</h1>
    <h3>using refs</h3>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update</button>

    <h3>using reactive</h3>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "mike", age: 20 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40; //we dont need to use value, access the property directly
    };

    return { ninjaOne, ninjaTwo, updateNinjaOne, updateNinjaTwo };
  },
};
</script>
