<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
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

    return { posts };
  },
  components: { PostList },
};
</script>
