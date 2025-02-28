import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch videos from API
        fetch(`${API_URL}/videos/`)
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {videos.map((video) => (
                    <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Embed YouTube Video */}
                        <div className="w-full h-48">
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${video.video_link.split('=')[1]}`} // Extract YouTube video ID
                                frameBorder="0"
                                allowFullScreen
                                title={video.title}
                            ></iframe>
                        </div>

                        {/* Video Title */}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-blue-600">
                                {video.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoList;
