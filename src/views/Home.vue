<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    console.log("setup");
    console.log(this); //'this' is null in setup

    const p = ref(null);

    let name = "mario";
    let age = 30;

    const handleClick = (e) => {
      console.log(p, p.value);
      p.value.classList.add("test");
    };

    return { name, age, handleClick, p };
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
