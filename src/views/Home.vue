<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPost" :posts="posts" />
    <button @click="showPost = !showPost">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius blanditiis sunt quo voluptatum animi iure deserunt obcaecati, molestiae corrupti labore autem dignissimos. Facilis iusto cum dolorum, illo ullam aperiam deleniti quis unde iure dolores, sint atque distinctio maxime repudiandae praesentium tempora illum. Voluptatem architecto fugiat sit odio atque ipsam maiores assumenda enim pariatur, mollitia debitis. Optio deleniti eius, sequi commodi nesciunt id laborum ab architecto mollitia magni quos autem totam unde, in distinctio voluptates excepturi, veniam reprehenderit pariatur iusto alias soluta error eum! Maxime quae nihil fuga, porro nam obcaecati quidem, accusantium tenetur similique, voluptate ut laudantium magnam! Officia, reprehenderit!",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius blanditiis sunt quo voluptatum animi iure deserunt obcaecati, molestiae corrupti labore autem dignissimos. Facilis iusto cum dolorum, illo ullam aperiam deleniti quis unde iure dolores, sint atque distinctio maxime repudiandae praesentium tempora illum. Voluptatem architecto fugiat sit odio atque ipsam maiores assumenda enim pariatur, mollitia debitis. Optio deleniti eius, sequi commodi nesciunt id laborum ab architecto mollitia magni quos autem totam unde, in distinctio voluptates excepturi, veniam reprehenderit pariatur iusto alias soluta error eum! Maxime quae nihil fuga, porro nam obcaecati quidem, accusantium tenetur similique, voluptate ut laudantium magnam! Officia, reprehenderit!",
        id: 2,
      },
    ]);
    const showPost = ref(true);

    return { posts, showPost };
  },
  components: { PostList },
};
</script>
