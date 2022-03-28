<template>
  <div class="tags">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts.js";
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";

import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
  setup() {
    const { posts, error } = getPosts();
    const route = useRoute();

    const tagPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { tagPosts, posts, error };
  },
  components: { Spinner, PostList, TagCloud },
};
</script>

<style>
</style>