<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import deletePost from "../composables/deletePost";
import db from "../firebase/config";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    const { post, error } = getPost(route.params.id);

    const handleDelete = () => {
      // await db.collection("posts").doc(route.params.id).delete();
      // router.push({ name: "Home" });
      db.collection("posts")
        .doc(route.params.id)
        .delete()
        .then(router.push({ name: "Home" }))
        .catch((err) => console.log(err));
    };

    // deletePost(route.params.id);

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
button.delete {
  margin: 10px auto;
}
</style>