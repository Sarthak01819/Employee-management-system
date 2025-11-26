import React from "react";

const Header = ({ onLogout, data }) => {
  const firstname = data?.firstname || "Admin";

  return (
    <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 flex justify-between items-center">

      {/* Left Side – Welcome Text */}
      <div>
        <h1 className="text-xl text-gray-300">Hello,</h1>
        <h2 className="text-3xl font-bold text-white tracking-wide">
          {firstname} <span className="inline-block">👋</span>
        </h2>
      </div>

      {/* Right Side – Avatar + Logout */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 shadow-md flex items-center justify-center text-white text-xl font-semibold uppercase">
          {firstname[0]}
        </div>

        {/* Logout button */}
        <button
          onClick={onLogout}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-medium cursor-pointer shadow-md transition-all"
        >
          Log Out
        </button>
      </div>

    </div>
  );
};

export default Header;
