import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <div className="bg-linear-to-br from-[#0f0f0f] to-[#1b1b1b] p-6 mt-6 rounded-2xl shadow-xl border border-white/10">

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 py-3 px-5 rounded-xl mb-4 flex justify-between text-gray-200 font-semibold text-sm uppercase tracking-wide shadow-md">
        <h2 className="w-1/5 text-center">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h3 className="w-1/5 text-center">Active</h3>
        <h3 className="w-1/5 text-center">Completed</h3>
        <h3 className="w-1/5 text-center">Failed</h3>
      </div>

      {/* List */}
      <div className="h-[75%] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent pr-1">
        {employees?.map((emp, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-xl border border-white/10 py-3 px-5 rounded-xl flex justify-between items-center gap-5 text-white shadow hover:bg-white/20 transition cursor-default"
          >
            {/* Name */}
            <h2 className="w-1/5 text-center font-medium tracking-wide">
              {emp.firstname}
            </h2>

            {/* New Task */}
            <h3 className="w-1/5 text-center py-1 rounded-lg font-semibold border border-yellow-400 text-yellow-300 bg-yellow-400/10">
              {emp.taskNumbers.newTask}
            </h3>

            {/* Active */}
            <h3 className="w-1/5 text-center py-1 rounded-lg font-semibold border border-blue-400 text-blue-300 bg-blue-400/10">
              {emp.taskNumbers.active}
            </h3>

            {/* Completed */}
            <h3 className="w-1/5 text-center py-1 rounded-lg font-semibold border border-green-400 text-green-300 bg-green-400/10">
              {emp.taskNumbers.completed}
            </h3>

            {/* Failed */}
            <h3 className="w-1/5 text-center py-1 rounded-lg font-semibold border border-red-400 text-red-300 bg-red-400/10">
              {emp.taskNumbers.failed}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
