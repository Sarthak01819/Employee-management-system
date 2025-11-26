import React from "react";
import {
    FaClipboardList,
    FaCheckCircle,
    FaBolt,
    FaTimesCircle
} from "react-icons/fa";

const TaskListNumbers = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {/* New Tasks */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-white/20 transition cursor-default">
                <div className="p-4 rounded-xl bg-yellow-500/20 text-yellow-300 text-3xl">
                    <FaClipboardList />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">{data.taskNumbers.newTask}</h2>
                    <p className="text-gray-300 font-medium">New Tasks</p>
                </div>
            </div>

            {/* Completed */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-white/20 transition cursor-default">
                <div className="p-4 rounded-xl bg-green-500/20 text-green-300 text-3xl">
                    <FaCheckCircle />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">{data.taskNumbers.completed}</h2>
                    <p className="text-gray-300 font-medium">Completed</p>
                </div>
            </div>

            {/* Active */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-white/20 transition cursor-default">
                <div className="p-4 rounded-xl bg-blue-500/20 text-blue-300 text-3xl">
                    <FaBolt />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">{data.taskNumbers.active}</h2>
                    <p className="text-gray-300 font-medium">Active</p>
                </div>
            </div>

            {/* Failed */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:bg-white/20 transition cursor-default">
                <div className="p-4 rounded-xl bg-red-500/20 text-red-300 text-3xl">
                    <FaTimesCircle />
                </div>
                <div>
                    <h2 className="text-4xl font-bold">{data.taskNumbers.failed}</h2>
                    <p className="text-gray-300 font-medium">Failed</p>
                </div>
            </div>

        </div>
    );
};

export default TaskListNumbers;
