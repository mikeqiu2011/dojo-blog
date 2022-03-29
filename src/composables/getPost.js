
import { ref } from "vue"
import db from "../firebase/config";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await db.collection('posts').doc(id).get()
            // const res = await db.collection('posts').get()
            post.value = { ...res.data(), id: res.id }
            console.log(post.value);
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    };

    load()

    return { post, error }
}

export default getPost 