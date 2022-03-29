import { ref } from "vue"
import { db } from "../firebase/config"

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const res = await db.collection('posts').get()
            posts.value = res.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log(posts.value);

        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    };

    load()

    return { posts, error }
}

export default getPosts 