import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/dashboard/overview";
import Location from "../pages/dashboard/locations";
import Episodes from "../pages/dashboard/episodes";

const Router = () => {
  return (
    <Routes>
      <Route element={<Navigate to="/login" />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route
        element={
          <DashboardLayout>
            <Overview />
          </DashboardLayout>
        }
        path="/dashboard/overview"
      />
      <Route
        element={
          <DashboardLayout>
            <Location />
          </DashboardLayout>
        }
        path="/dashboard/locations"
      />
      <Route
        element={
          <DashboardLayout>
            <Episodes />
          </DashboardLayout>
        }
        path="/dashboard/episodes"
      />
    </Routes>
  );
};

export default Router;
