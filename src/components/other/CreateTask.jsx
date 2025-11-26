import React, { useState } from 'react';

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTaskObj = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        const data = JSON.parse(localStorage.getItem("employees"));

        data.forEach((emp) => {
            if (assignTo === emp.firstname) {
                emp.tasks.push(newTaskObj);
                emp.taskNumbers.newTask += 1;
            }
        });

        localStorage.setItem("employees", JSON.stringify(data));

        window.location.reload();

        setTaskTitle("");
        setTaskDescription("");
        setTaskDate("");
        setAssignTo("");
        setCategory("");
    };

    return (
        <div className="w-full mt-10">
            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 text-white">

                <form
                    onSubmit={submitHandler}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >

                    {/* Left Column */}
                    <div className="flex flex-col gap-5">
                        {/* Task Title */}
                        <div>
                            <label className="block text-gray-300 mb-1 text-sm">Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                type="text"
                                placeholder="Make a UI Design"
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white outline-none placeholder-gray-300 focus:bg-white/30 transition"
                            />
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-gray-300 mb-1 text-sm">Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                type="date"
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white outline-none focus:bg-white/30 transition"
                            />
                        </div>

                        {/* Assign To */}
                        <div>
                            <label className="block text-gray-300 mb-1 text-sm">Assign To</label>
                            <input
                                value={assignTo}
                                onChange={(e) => setAssignTo(e.target.value)}
                                type="text"
                                placeholder="Employee Name"
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white outline-none placeholder-gray-300 focus:bg-white/30 transition"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-300 mb-1 text-sm">Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder="design, dev, etc."
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white outline-none placeholder-gray-300 focus:bg-white/30 transition"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-5">
                        {/* Description */}
                        <div>
                            <label className="block text-gray-300 mb-1 text-sm">Description</label>
                            <textarea
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                                placeholder="About the task..."
                                rows={8}
                                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white outline-none placeholder-gray-300 focus:bg-white/30 transition resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-2 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold tracking-wide shadow-lg hover:opacity-90 transition cursor-pointer"
                        >
                            Create Task
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateTask;
