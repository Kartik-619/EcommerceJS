import { useState } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";

const Admin = () => {
  const { role,setRole } = useUserStore();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchAllUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get('http://localhost:3007/admin/users', {
        withCredentials: true
       
      });
      setRole(response.role);
      if (response.data.success) {
        setUsers(response.data.users || response.data);
      } else {
        setError(response.data.message || "Failed to fetch users");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err.response?.data?.message || "Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  if (role != "ADMIN") {
    console.log("admin access error",role)
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-gray-400">Admin access required</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      {/* Simple Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-gray-400">Manage users and view data</p>
      </div>

      {/* Centered Button */}
      {users.length === 0 && !loading && (
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
          <p className="text-red-300">{error}</p>
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

      {/* Users Table (Shows after button click) */}
      {users.length > 0 && !loading && (
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

          {/* Simple Order Details */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
            <div className="space-y-3">
              {users.slice(0, 5).map(user => 
                user.orders?.slice(0, 2).map((order, idx) => (
                  <div key={idx} className="p-3 bg-gray-900 rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-medium">{user.username}</span>
                        <span className="text-gray-400 text-sm ml-2">
                          Order #{order.id?.slice(0, 8)}...
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">${order.totalAmount?.toLocaleString()}</div>
                        <div className={`text-xs px-2 py-1 rounded ${
                          order.status === "COMPLETED" 
                            ? "bg-green-900 text-green-200" 
                            : "bg-yellow-900 text-yellow-200"
                        }`}>
                          {order.status}
                        </div>
                      </div>
                    </div>
                    {order.orderItems && order.orderItems.length > 0 && (
                      <div className="text-sm text-gray-400 mt-2">
                        {order.orderItems.length} items
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;