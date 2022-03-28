<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts.js";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  setup() {
    const { posts, error } = getPosts();
    console.log(posts.value);

    return { posts, error };
  },
  components: { PostList, Spinner, TagCloud },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>