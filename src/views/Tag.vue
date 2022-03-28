<template>
  <div class="tags">
    <h1>tags</h1>
    <!-- <div v-if="error">error</div> -->
    <div v-if="tagPosts.length">
      <div v-for="post in tagPosts" :key="post.id">
        <SinglePost :post="post" />
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts.js";
import Spinner from "../components/Spinner.vue";
import SinglePost from "../components/SinglePost.vue";

import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    const { posts, error } = getPosts();
    const route = useRoute();
    // console.log(posts.value);
    console.log(error);

    // console.log(route.params.tag);

    const tagPosts = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(route.params.tag);
      });
    });
    // const { posts, error } = getPosts();
    // console.log(posts.value);

    // return { posts, error };

    return { tagPosts, error };
  },
  components: { Spinner, SinglePost },
};
</script>

<style>
</style>