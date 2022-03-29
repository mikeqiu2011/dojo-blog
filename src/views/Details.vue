<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
  <button @click="handleDelete">delete post</button>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import deletePost from "../composables/deletePost";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    const { post, error } = getPost(route.params.id);

    const handleDelete = () => {
      deletePost(route.params.id);
      router.push({ name: "Home" });
    };

    return { post, error, handleDelete };
  },
  components: { Spinner },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>