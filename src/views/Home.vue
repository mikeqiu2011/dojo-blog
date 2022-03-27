<template>
  <div class="home">
    <h1>Home</h1>
    <h3>using refs</h3>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }} - {{ nameOne }}</p>
    <button @click="updateNinjaOne">update</button>

    <h3>using reactive</h3>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
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

    const nameOne = ref("refName");
    const nameTwo = reactive("reactiveName");

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
      nameOne.value = "mike";
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 40; //we dont need to use value, access the property directly
      nameTwo = "mike";
    };

    return {
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
      nameOne,
      nameTwo,
    };
  },
};
</script>
