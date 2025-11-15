import React, { useState, useEffect } from "react";
import { instance } from "../../api/axios";
import { useDispatch } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AuthContainer = () => {
  const dispatch = useDispatch();
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("access-admin-token");

    if (!token) {
      setIsTokenValid(false);
      setLoading(false);
      return;
    }

    instance
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setIsTokenValid(true);
        }
      })
      .catch((err) => {
        console.error("Auth error:", err);
        setIsTokenValid(false);
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("access-admin-token");
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-medium">
        Tekshirilmoqda...
      </div>
    );
  }

  if (!isTokenValid) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AuthContainer;
