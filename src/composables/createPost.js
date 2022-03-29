
import { ref } from "vue"
import { db } from "../firebase/config";

const createPost = (post) => {

    const create = async () => {
        try {
            console.log(post);
            const res = await db.collection('posts').add(post)
            // console.log(res);
        } catch (err) {
            console.log(err);
            // error.value = err.message;
        }
    };

    create()

    // return { post, error }
}

export default createPost 