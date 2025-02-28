import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const user = JSON.parse(localStorage.getItem("user")); // Get stored user info
            if (!user) {
                navigate("/login");
                return;
            }

            try {
                const response = await fetch("http://127.0.0.1:8000/api/user-details/", {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${user.token}` }, // Send token if required
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    setUserData(data);
                } else {
                    navigate("/login"); // Redirect if unauthorized
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
                navigate("/login");
            }
        };

        fetchUserDetails();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("user"); // Remove user session
        navigate("/login"); // Redirect to login
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">User Dashboard</h1>

            {userData ? (
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Field</th>
                            <th className="border px-4 py-2">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="border px-4 py-2">Username</td><td className="border px-4 py-2">{userData.username}</td></tr>
                        <tr><td className="border px-4 py-2">Full Name</td><td className="border px-4 py-2">{userData.first_name} {userData.last_name}</td></tr>
                        <tr><td className="border px-4 py-2">Email</td><td className="border px-4 py-2">{userData.email}</td></tr>
                        <tr><td className="border px-4 py-2">Mobile</td><td className="border px-4 py-2">{userData.mobile || "N/A"}</td></tr>
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">Loading user data...</p>
            )}

            <button className="bg-red-500 text-white px-4 py-2 rounded w-full mt-4" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
