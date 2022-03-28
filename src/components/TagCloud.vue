<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div>{{ tags }}</div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["posts"],
  setup(props) {
    const tags = ref([]);
    const getUniqueTags = () => {
      const tagSet = new Set();
      props.posts.forEach((post) => {
        post.tags.forEach((tag) => tagSet.add(tag));
      });
      console.log(tagSet);
      tags.value = [...tagSet];
    };

    getUniqueTags();

    return { tags };
  },
};
</script>

<style>
</style>