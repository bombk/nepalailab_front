import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { API_URL } from "../config";

function Home() {
    const [posts, setPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);

    useEffect(() => {
        // Fetch all posts (limit to 9)
        fetch(`${API_URL}/posts/`)
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 9))); // Limit to 9 posts

        // Fetch popular posts
        fetch(`${API_URL}/popular-posts/`)
            .then(response => response.json())
            .then(data => setPopularPosts(data));
    }, []);

    // Function to extract plain text and truncate it
    const getPlainText = (html, length) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent.substring(0, length); // Extract text and limit characters
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Carousel */}
            <Carousel />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                {/* Main Content (Increased width to span 3 columns) */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
                            {post.image && (
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h2 className="text-xl font-semibold">
                                <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600">{getPlainText(post.content, 50)}...</p> {/* Safe text extraction */}
                            <Link to={`/post/${post.id}`} className="text-blue-500 mt-3 block">
                                Read More →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Sidebar (Reduced width to 1 column) */}
                <div className="col-span-1 bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-blue-600 mb-4">Popular Posts</h2>
                    {popularPosts.slice(0, 3).map(post => ( // Limit popular posts to 3
                        <div key={post.id} className="mb-4">
                            <h3 className="text-lg font-medium">
                                <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 text-sm">{getPlainText(post.content, 50)}...</p> {/* Safe text extraction */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
