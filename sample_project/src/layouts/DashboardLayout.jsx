import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-grow">
        <Header />
        <div
          className="p-5 overflow-y-scroll"
          style={{ height: "calc(100vh - 65.66px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
