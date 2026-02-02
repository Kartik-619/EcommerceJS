import { useState, useEffect } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { role, userName, email, isAuthenticated } = useUserStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Check authentication on component mount
  useEffect(() => {
    console.log("Admin component - Current state:", {
      role,
      userName,
      email,
      isAuthenticated
    });
    
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to login");
      navigate('/login');
    }
    
    // If authenticated but not admin, show access denied
    if (isAuthenticated && role !== "ADMIN") {
      console.log(`Authenticated as ${role}, but need ADMIN`);
    }
  }, [role, isAuthenticated, navigate]);

  const fetchAllUsers = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("Fetching users...");
      const response = await axios.get('http://localhost:3007/admin/users', {
        withCredentials: true
      });
      
      console.log("Response received:", response.data);
      
      if (response.data.success) {
        setUsers(response.data.users || response.data);
      } else {
        setError(response.data.message || "Failed to fetch users");
      }
    } catch (err) {
      console.error("Full error:", {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message
      });
      
      if (err.response?.status === 403) {
        setError("Access Denied: You need ADMIN privileges. Your role is: " + (role || 'undefined'));
      } else if (err.response?.status === 401) {
        setError("Session expired. Please login again.");
        navigate('/login');
      } else {
        setError(err.response?.data?.message || "Error connecting to server");
      }
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking authentication
  if (!isAuthenticated) {
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show access denied if not admin
  if (role !== "ADMIN") {
    console.log("Access denied - Role:", role, "Is authenticated:", isAuthenticated);
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <div className="text-5xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-gray-400 mb-4">Admin access required</p>
          <div className="bg-gray-900 p-4 rounded mb-4">
            <p className="text-sm">Current role: <span className={role ? "text-yellow-400" : "text-red-400"}>
              {role || "undefined"}
            </span></p>
            <p className="text-sm">User: <span className="text-gray-300">{userName || "Unknown"}</span></p>
            <p className="text-sm">Authenticated: <span className={isAuthenticated ? "text-green-400" : "text-red-400"}>
              {isAuthenticated ? "Yes" : "No"}
            </span></p>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Admin UI
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      {/* Debug info - remove in production */}
      <div className="mb-4 p-3 bg-gray-900 rounded text-sm">
        <p>✅ Logged in as: <span className="text-green-400">{userName}</span></p>
        <p>✅ Role: <span className="text-purple-400">{role}</span></p>
        <p>✅ Email: <span className="text-blue-400">{email}</span></p>
        <button 
          onClick={() => {
            console.log("Full store state:", useUserStore.getState());
            fetchAllUsers();
          }}
          className="mt-1 text-xs bg-gray-800 px-2 py-1 rounded"
        >
          Debug Store & Fetch Users
        </button>
      </div>

      {/* Simple Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-gray-400">Manage users and view data</p>
      </div>

      {/* Centered Button */}
      {users.length === 0 && !loading && !error && (
        <div className="h-[60vh] flex flex-col items-center justify-center">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <div className="text-5xl mb-4">👥</div>
              <h2 className="text-xl font-bold mb-2">User Management</h2>
              <p className="text-gray-400">
                Click the button below to load all user data including their orders and history.
              </p>
            </div>

            <button
              onClick={fetchAllUsers}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loading Users..." : "Load All Users"}
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-red-900/20 border border-red-800 rounded">
          <p className="text-red-300 font-medium">{error}</p>
          <button
            onClick={fetchAllUsers}
            className="mt-2 text-sm bg-red-900/50 hover:bg-red-900 px-3 py-1 rounded"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
            <p>Loading user data...</p>
          </div>
        </div>
      )}

      {/* Users Table */}
      {users.length > 0 && !loading && !error && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">
                All Users ({users.length})
              </h2>
            </div>
            <button
              onClick={fetchAllUsers}
              className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm"
            >
              Refresh
            </button>
          </div>

          <div className="overflow-x-auto bg-gray-900 rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 text-left">Username</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Role</th>
                  <th className="p-3 text-left">Orders</th>
                  <th className="p-3 text-left">Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  const totalOrders = user.orders?.length || 0;
                  const totalSpent = user.orders?.reduce((sum, order) => 
                    sum + (order.totalAmount || 0), 0) || 0;

                  return (
                    <tr 
                      key={index} 
                      className="border-b border-gray-800 hover:bg-gray-800/50"
                    >
                      <td className="p-3">
                        <div className="font-medium">{user.username}</div>
                      </td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          user.role === "ADMIN" 
                            ? "bg-purple-900 text-purple-200" 
                            : "bg-blue-900 text-blue-200"
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3">{totalOrders}</td>
                      <td className="p-3">
                        ${totalSpent.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;