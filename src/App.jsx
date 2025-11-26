import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  const authData = useContext(AuthContext);

  const [userType, setUserType] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserType(loggedInUser.type);
      setLoggedInUserData(loggedInUser.data);
    }
  }, []);

  if (!authData || !authData.admin || !authData.employees) {
    return <div>Loading...</div>;
  }

  if (!userType) {
    return (
      <Login
        setUserType={setUserType}
        setLoggedInUserData={setLoggedInUserData}
      />
    );
  }

  if (userType === "admin") {
    return <AdminDashboard setUserType={setUserType} setLoggedInUserData={setLoggedInUserData} />;
  }

  if (userType === "employee") {
    return <EmployeeDashboard loggedInUser={loggedInUserData} setUserType={setUserType} setLoggedInUserData={setLoggedInUserData} />;
  }

  return null;
};

export default App;
