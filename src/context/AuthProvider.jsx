import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();   // <-- REQUIRED EXPORT

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        employees: null,
        admin: null,
    });

    useEffect(() => {
        // Initialize localStorage default structure
        setLocalStorage();

        // Load data on first mount
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    // Refresh data in REAL TIME after task updates
    const refreshUserData = () => {
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    };

    return (
        <AuthContext.Provider
            value={{
                employees: userData.employees,
                admin: userData.admin,
                refreshUserData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
