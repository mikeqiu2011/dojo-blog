import { ref } from "vue"

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {

            let data = await fetch("http://localhost:3000/posts");
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

    load()

    return { posts, error }
}

export default getPosts 