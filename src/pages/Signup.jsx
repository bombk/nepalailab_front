import { useState } from "react";
import { API_URL } from "../config";


function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/signup/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ first_name: firstName, last_name: lastName, username, email, password }),
        });

        if (response.ok) {
            alert("Signup successful!");
            Navigate("/login");
        } else {
            const errorData = await response.json();
            alert("Signup failed: " + (errorData.error || "Unknown error"));
        }
    };

    return (
        <form onSubmit={handleSignup} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

            <input className="border p-2 w-full my-2" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input className="border p-2 w-full my-2" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input className="border p-2 w-full my-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" className="border p-2 w-full my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="border p-2 w-full my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-3" type="submit">
                Sign Up
            </button>
        </form>
    );
}

export default Signup;
