import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AllTask from "../other/AllTask";
import TaskListNumbers from "../other/TaskListNumbers";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";

const AdminDashboard = ({ setUserType, setLoggedInUserData }) => {
    const { employees } = useContext(AuthContext);

    if (!employees) return null;

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setUserType(null);
        setLoggedInUserData(null);
    };

    return (
        <div className="min-h-screen w-full p-6 bg-linear-to-br from-[#0d0d0d] to-[#1a1a1a] text-white flex flex-col gap-6">

            {/* Header */}
            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-5">
                <Header onLogout={handleLogout} />
            </div>

            {/* Create Task Section */}
            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6">
                <h2 className="text-2xl font-semibold mb-4 tracking-wide">
                    Create New Task ✨
                </h2>
                <CreateTask />
            </div>

            {/* All Tasks Section */}
            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 grow overflow-hidden">
                <h2 className="text-2xl font-semibold mb-4 tracking-wide">
                    All Tasks 📋
                </h2>
                <AllTask employees={employees} />
            </div>
        </div>
    );
};

export default AdminDashboard;
