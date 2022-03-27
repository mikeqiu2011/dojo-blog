
import { ref } from "vue"

const createPost = (post) => {

    const create = async () => {
        try {
            //simulate delay
            // await new Promise(resolve => { setTimeout(resolve, 2000) })

            let resp = await fetch("http://localhost:3000/posts/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            });
            // console.log(data);

            if (!resp.ok) {
                throw Error("post failed");
            }

            // console.log(posts.value);
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    };

    create()

    // return { post, error }
}

export default createPost 