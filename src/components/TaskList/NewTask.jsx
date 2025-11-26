import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = ({ data, employeeName, taskIndex }) => {
    const { refreshUserData } = useContext(AuthContext);

    const updateTaskStatus = (employeeName, taskIndex, status) => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const emp = employees.find(e => e.firstname === employeeName);
        if (!emp) return;

        const task = emp.tasks[taskIndex];
        if (!task) return;

        if (task.newTask) emp.taskNumbers.newTask -= 1;

        task.newTask = false;
        task.active = true;
        emp.taskNumbers.active += 1;

        localStorage.setItem("employees", JSON.stringify(employees));
        refreshUserData();
    };

    return (
        <div className="shrink-0 w-[320px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl text-white">

            {/* Category + Date */}
            <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 rounded-lg bg-blue-600/60 border border-blue-400 text-xs uppercase tracking-wide">
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

            {/* Accept Button */}
            <button
                onClick={() => updateTaskStatus(employeeName, taskIndex, "accept")}
                className="w-full py-2 mt-5 rounded-lg bg-emerald-500/80 border border-emerald-400 text-white font-semibold tracking-wide hover:bg-emerald-500 transition cursor-pointer shadow-lg"
            >
                Accept Task
            </button>

        </div>
    );
};

export default NewTask;
