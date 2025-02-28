import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Blog from "./pages/Blog";
import VideoList from "./pages/VideoList";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/videos" element={<VideoList />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Routes>
               
            </div>
            <Footer />
        </Router>
    );
}

export default App;
