import { useState } from "react";
import useUserStore from "./../../store/userStore";

const Admin = () => {
  const { userName, email, role } = useUserStore();

  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState(null);

  // Dummy API simulation
  const fetchUserAnalytics = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalUsers: 1284,
          admins: 4,
          activeUsers: 892,
          newUsersToday: 27,
          users: [
            {
              id: 1,
              username: "kartik",
              email: "kartik@gmail.com",
              role: "ADMIN",
              orders: 12
            },
            {
              id: 2,
              username: "rahul",
              email: "rahul@gmail.com",
              role: "USER",
              orders: 3
            },
            {
              id: 3,
              username: "ananya",
              email: "ananya@gmail.com",
              role: "USER",
              orders: 0
            }
          ]
        });
      }, 1000);
    });
  };

  const handleGetAnalytics = async () => {
    setLoading(true);
    const data = await fetchUserAnalytics();
    setAnalytics(data);
    setLoading(false);
  };

  if (role !== "ADMIN") {
    return (
      <div className="bg-black text-white h-screen flex items-center justify-center">
        <h2 className="text-xl">🚫 Unauthorized – Admins only</h2>
      </div>
    );
  }

  return (
    <div className="bg-black text-white w-full min-h-screen p-10">

      {/* Header */}
      <div className="bg-slate-800 p-4 rounded-md w-fit mb-6">
        <h3 className="text-lg font-semibold">Welcome, {userName}</h3>
        <p className="text-sm text-gray-300">{email}</p>
        <p className="text-sm text-gray-400">Role: {role}</p>
      </div>

      {/* Button */}
      <button
        onClick={handleGetAnalytics}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded-md mb-8"
      >
        {loading ? "Fetching Analytics..." : "Get User Analytics"}
      </button>

      {/* Analytics Cards */}
      {analytics && (
        <div className="grid grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-sm text-gray-400">Total Users</p>
            <p className="text-2xl font-bold">{analytics.totalUsers}</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-sm text-gray-400">Admins</p>
            <p className="text-2xl font-bold">{analytics.admins}</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-sm text-gray-400">Active Users</p>
            <p className="text-2xl font-bold">{analytics.activeUsers}</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-md">
            <p className="text-sm text-gray-400">New Today</p>
            <p className="text-2xl font-bold">{analytics.newUsersToday}</p>
          </div>
        </div>
      )}

      {/* User Table */}
      {analytics && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-900 rounded-md">
            <thead>
              <tr className="border-b border-slate-700 text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Username</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Orders</th>
              </tr>
            </thead>
            <tbody>
              {analytics.users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-800 hover:bg-slate-800"
                >
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default Admin;
