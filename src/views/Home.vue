<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <input type="text" v-model="name" />
    <button @click="age++">increase age</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    console.log("setup");
    console.log(this); //'this' is null in setup

    const name = ref("mario"); //by default, this is not reactive variable
    const age = ref(30); //now this variable is reactive

    const handleClick = (e) => {
      name.value = "mike"; //this wont change the html
      age.value = 20; // we can change the value here
    };

    return { name, age, handleClick }; //only after return you can associate with the DOM
  },
};
</script>
