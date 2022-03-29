import db from "../firebase/config";

const deletePost = (id) => {
    const load = async () => {
        try {
            const res = await db.collection('posts').doc(id).delete()
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    load()
}

export default deletePost 