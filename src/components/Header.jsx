import React from "react";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="flex justify-end px-4 py-5 border border-b-gray-300">
      <p className="font-bold ">Hi, {user.username}!</p>
    </header>
  );
};

export default Header;
