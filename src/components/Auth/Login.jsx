import React, { useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";

const Login = ({ setUserType, setLoggedInUserData }) => {
    const [user, setUser] = useState({ email: "", password: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        const { admin, employees } = getLocalStorage();

        const foundAdmin = admin.find(
            (a) => a.email === user.email && a.password === user.password
        );

        if (foundAdmin) {
            setUserType("admin");
            setLoggedInUserData(foundAdmin);
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({ type: "admin", data: foundAdmin })
            );
            return;
        }

        const foundEmployee = employees.find(
            (emp) => emp.email === user.email && emp.password === user.password
        );

        if (foundEmployee) {
            setUserType("employee");
            setLoggedInUserData(foundEmployee);
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({ type: "employee", data: foundEmployee })
            );
            return;
        }

        alert("Invalid email or password");
    };

    return (
        <div className="h-screen w-full flex items-center justify-center bg-linear-to-br from-[#0f0f0f] to-[#1e1e1e] text-white px-4">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">

                <h1 className="text-3xl font-semibold text-center mb-6 tracking-wide">
                    Welcome Back 👋
                </h1>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:bg-white/30 transition"
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:bg-white/30 transition"
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full py-2 bg-linear-to-r from-blue-600 to-blue-700 rounded-lg font-semibold tracking-wide shadow-md hover:opacity-90 transition cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-6">
                    © {new Date().getFullYear()} Task Manager
                </p>
            </div>
        </div>
    );
};

export default Login;
