// import { getPosts } from "@/services/getPosts";
import { getPosts } from "@/services/getPosts";
import Link from "next/link";




const Posts = async () => {

    const postsData = await getPosts();
console.log(postsData);
    return (
        <div>
            <h6>All Posts</h6>
<div className="grid grid-cols-4 gap-10">

{
postsData?.slice(0, 10).map((post) => (
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button className="bg-green-500 px-4 py-2"><Link href={`/${post.id}`}>See Details</Link></button>
        <hr />
    </div>
))
}

</div>

        </div>
    );
};

export default Posts;