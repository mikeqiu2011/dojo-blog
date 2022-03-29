<template>
  <h1>Realtime data</h1>
  <PostList :posts="posts" />
</template>

<script>
import { ref } from "@vue/reactivity";
import { db } from "../firebase/config";
import PostList from "../components/PostList.vue";

export default {
  setup() {
    const posts = ref([]);

    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // posts = snap.
        // console.log(snap);
        posts.value = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log(posts.value);
      });

    return { posts };
  },
  components: { PostList },
};
</script>

<style>
</style>