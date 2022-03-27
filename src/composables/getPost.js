
import { ref } from "vue"

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            //simulate delay
            await new Promise(resolve => { setTimeout(resolve, 2000) })

            let data = await fetch("http://localhost:3000/posts/" + id);
            // console.log(data);

            if (!data.ok) {
                throw Error("no data available");
            }
            post.value = await data.json();
            // console.log(posts.value);
        } catch (err) {
            console.log(err);
            error.value = err.message;
        }
    };

    load()

    return { post, error }
}

export default getPost 