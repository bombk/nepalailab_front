import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/posts/`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    // Function to strip HTML tags and limit to 100 characters
    const getPlainText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent.substring(0, 100); // Get first 100 characters
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {post.image && (
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        )}

                        <div className="p-4">
                            <h2 className="text-xl font-semibold">
                                <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
                                    {post.title}
                                </Link>
                            </h2>

                            {/* Render only the first 100 characters of plain text */}
                            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                                {getPlainText(post.content)}...
                            </p>

                            <Link to={`/post/${post.id}`} className="text-blue-500 mt-3 block">
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
