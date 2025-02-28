import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { API_URL } from "../config";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // Initialize useNavigate hook

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/login/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            navigate("/dashboard");  // Redirect to dashboard after successful login
        } else {
            const errorData = await response.json();
            alert("Login failed: " + (errorData.error || "Unknown error"));
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <input 
                className="border p-2 w-full my-2" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />

            <input 
                type="password" 
                className="border p-2 w-full my-2" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />

            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-3" type="submit">
                Login
            </button>
        </form>
    );
}

export default Login;
