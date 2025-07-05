import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext); // ✅ exports properly

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const userInfo = localStorage.getItem("user");

    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }

    const verifyToken = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("/api/profile");
        if (res.data) {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
        } else {
          handleLogout();
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = async (email, password) => {
    setError(null);
    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        setUser(res.data.user);
        return true;
      } else {
        setError("No token received.");
        return false;
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Login failed");
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout: handleLogout, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
