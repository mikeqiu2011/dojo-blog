<template>
  <div class="create">
    <form @submit.prevent="create">
      <label>Title:</label>
      <input type="text" v-model="title" required />
      <label>Content:</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to enter a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="addTag" />
      <button>create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import createPost from "../composables/createPost";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const create = () => {
      let post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      createPost(post);
      console.log("post created");
    };

    const addTag = (e) => {
      if (tag.value) {
        console.log(tags.value);
        tags.value.push(tag.value);
        tag.value = "";
      }
    };

    return { title, body, tag, tags, create, addTag };
  },
};
</script>

<style>
</style>