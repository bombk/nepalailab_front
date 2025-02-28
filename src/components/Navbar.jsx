import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        <Link to="/">NepalAiLab</Link>
                    </h1>

                    {/* Desktop & Mobile Menu */}
                    <div className="hidden md:flex space-x-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/videos">Videos</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Same as Desktop */}
            <div
                className={`md:hidden transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                } bg-gray-900`}
            >
                <div className="flex flex-col items-center space-y-4 py-4">
                    <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
                    <NavLink to="/videos" onClick={() => setIsOpen(false)}>Videos</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                    <NavLink to="/signup" onClick={() => setIsOpen(false)}>Signup</NavLink>
                    <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>

                </div>
            </div>
        </nav>
    );
}

/* Reusable NavLink Component */
function NavLink({ to, children, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="px-3 py-2 text-lg font-medium hover:bg-blue-800 rounded transition-all"
        >
            {children}
        </Link>
    );
}
