import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const activeClass = (name) => {
    return location.pathname === name ? "font-bold" : "";
  };

  return (
    <aside className="w-[260px] bg-slate-600 h-full pt-[80px] pb-[120px] px-5 flex flex-col justify-between text-white shrink-0">
      <div className="flex flex-col gap-5">
        <NavLink
          to="/dashboard/overview"
          className={`p-[10px] ${activeClass("/dashboard/overview")}`}
        >
          Characters
        </NavLink>
        <NavLink
          to="/dashboard/locations"
          className={`p-[10px] ${activeClass("/dashboard/locations")}`}
        >
          Locations
        </NavLink>
        <NavLink
          to="/dashboard/episodes"
          className={`p-[10px] ${activeClass("/dashboard/episodes")}`}
        >
          Episodes
        </NavLink>
      </div>
      <div>
        <p onClick={() => handleLogout()} className="p-[10px] cursor-pointer">
          Logout
        </p>
      </div>
    </aside>
  );
};

export default SideBar;
