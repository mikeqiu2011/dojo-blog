import { ref } from "vue"
import projectFirestore from "../firebase/config"

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await projectFirestore.collection('posts').get()
            console.log(res.docs);
            // console.log(projectFirestore);

        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    };

    load()

    return { posts, error }
}

export default getPosts 