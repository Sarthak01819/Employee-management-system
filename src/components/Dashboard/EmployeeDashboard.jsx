import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import TaskList from "../TaskList/TaskList";
import TaskListNumbers from "../other/TaskListNumbers";

const EmployeeDashboard = ({ loggedInUser, setUserType, setLoggedInUserData }) => {
  const { employees } = useContext(AuthContext);

  if (!employees) return null;

  const employeeData = employees.find(
    (emp) => emp.firstname === loggedInUser.firstname
  );

  if (!employeeData) {
    return <h2 className="text-white">Employee not found</h2>;
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUserType(null);
    setLoggedInUserData(null);
  };

  return (
    <div className="min-h-screen w-full p-6 bg-linear-to-br from-[#0d0d0d] to-[#1a1a1a] flex flex-col gap-6">

      {/* Top Header Section */}
      <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex justify-between items-center">
        <div>
          <h1 className="text-white text-3xl font-bold tracking-wide">
            Welcome, {employeeData.firstname} 👋
          </h1>
          <p className="text-gray-300 mt-1 tracking-wide">
            Here’s your task summary and progress
          </p>
        </div>

        {/* Avatar + Logout */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 flex items-center justify-center text-xl font-semibold text-white shadow-lg">
            {employeeData.firstname[0]}
          </div>

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium cursor-pointer shadow-lg transition"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Task Numbers Card */}
      <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg">
        <TaskListNumbers data={employeeData} />
      </div>

      {/* Task List */}
      <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-lg grow overflow-hidden">
        <h2 className="text-xl font-semibold mb-3 text-white tracking-wide">
          Your Tasks
        </h2>
        <TaskList data={employeeData} />
      </div>

    </div>
  );
};

export default EmployeeDashboard;
