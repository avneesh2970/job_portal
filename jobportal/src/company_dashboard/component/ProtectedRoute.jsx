import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // ✅ use correct path

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth) return <Navigate to="/login" />; // Fallback if context is undefined

  const { user, loading } = auth;

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
