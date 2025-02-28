
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">BLOG</h2>
          <p className="mt-2 text-sm">
          A blog is a type of website or online platform where individuals, businesses, or organizations can post content on a regular basis, typically in a reverse chronological order (newest posts at the top). The term "blog" is short for "weblog," which originally referred to a personal journal or log of activities on the web. Blogs can cover a wide range of topics, from personal stories and experiences to specialized fields like technology, lifestyle, fashion, health, education, or even niche hobbies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="/videos" className="hover:text-blue-400">Videos</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a href="#" className="text-blue-400 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-blue-300 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-pink-500 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-blue-600 hover:text-white text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} B LOG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
