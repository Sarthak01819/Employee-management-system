import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data, employeeName, taskIndex }) => {
    const { refreshUserData } = useContext(AuthContext);

    const updateTaskStatus = (employeeName, taskIndex, status) => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const emp = employees.find(e => e.firstname === employeeName);
        if (!emp) return;

        const task = emp.tasks[taskIndex];
        if (!task) return;

        if (task.active) emp.taskNumbers.active -= 1;

        task.newTask = false;
        task.active = false;
        task.completed = false;
        task.failed = false;

        if (status === "completed") {
            task.completed = true;
            emp.taskNumbers.completed += 1;
        }
        if (status === "failed") {
            task.failed = true;
            emp.taskNumbers.failed += 1;
        }

        localStorage.setItem("employees", JSON.stringify(employees));
        refreshUserData();
    };

    return (
        <div className="shrink-0 w-[320px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl text-white">

            {/* Category + Date */}
            <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 rounded-lg bg-red-600/60 border border-red-400 text-xs tracking-wide uppercase">
                    {data.category}
                </span>
                <span className="text-gray-300 text-sm">{data.date}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold tracking-wide">{data.title}</h2>

            {/* Description */}
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                {data.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-between gap-3 mt-5">

                {/* Mark Completed */}
                <button
                    onClick={() => updateTaskStatus(employeeName, taskIndex, "completed")}
                    className="flex-1 py-2 rounded-lg bg-green-500/80 border border-green-400 text-white font-medium tracking-wide hover:bg-green-500 transition cursor-pointer shadow-lg"
                >
                    Complete
                </button>

                {/* Mark Failed */}
                <button
                    onClick={() => updateTaskStatus(employeeName, taskIndex, "failed")}
                    className="flex-1 py-2 rounded-lg bg-red-600/80 border border-red-400 text-white font-medium tracking-wide hover:bg-red-600 transition cursor-pointer shadow-lg"
                >
                    Fail
                </button>

            </div>

        </div>
    );
};

export default AcceptTask;
