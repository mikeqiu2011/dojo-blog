<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <p>Loading data...</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  setup() {
    const posts = ref([]);
    const error = ref(null);
    const uri = "http://localhost:3000/posts";

    const load = async () => {
      try {
        let data = await fetch(uri);
        // console.log(data);

        if (!data.ok) {
          throw Error("no data available");
        }
        posts.value = await data.json();
        // console.log(posts.value);
      } catch (err) {
        console.log(err);
        error.value = err.message;
      }
    };

    load();

    return { posts, error };
  },
  components: { PostList },
};
</script>
