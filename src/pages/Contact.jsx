import { useState, useEffect } from "react";
import { API_URL } from "../config";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [csrfToken, setCsrfToken] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    // Function to get CSRF token from cookies
    const getCSRFToken = () => {
        return document.cookie.split("; ")
            .find(row => row.startsWith("csrftoken="))
            ?.split("=")[1];
    };

    useEffect(() => {
        setCsrfToken(getCSRFToken());
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/contact/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,  // Include CSRF token
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setResponseMessage(data.message); // Success message from the server
            setFormData({ name: "", email: "", number: "", message: "" }); // Clear the form
        } else {
            setResponseMessage("Failed to submit. Please try again.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
            {responseMessage && <p className="text-green-500 text-center mb-4">{responseMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="number"
                    placeholder="Mobile Number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    maxLength="10"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                ></textarea>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
