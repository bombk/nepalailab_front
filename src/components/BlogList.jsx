import { useEffect, useState } from "react";
import { getPosts } from "../api";

function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(setPosts);
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
            {posts.map((post) => (
                <div key={post.id} className="bg-white shadow-md p-4 mb-4 rounded-lg">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">By {post.author}</p>
                    <p className="mt-2">{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
