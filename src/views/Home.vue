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
      <Spinner />
      <!-- <p>Loading data...</p> -->
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts.js";
import PostList from "../components/PostList.vue";

export default {
  setup() {
    const { posts, error } = getPosts();

    return { posts, error };
  },
  components: { PostList, Spinner },
};
</script>
