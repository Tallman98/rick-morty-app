import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/dashboard/overview");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1 className="text-center mt-10 font-bold text-5xl text-[#913383]">
        R&M
      </h1>
      <div className="w-[25rem] justify-center items-center mx-auto  py-3 border rounded mt-20 shadow-2xl bg-white">
        <h1 className="font-bold text-3xl px-7">Login</h1>
        <form
          className="px-7 mt-[24px] border-t pt-3"
          onSubmit={(e) => onSubmit(e)}
        >
          <Input
            label="Username"
            onChange={(e) => handleChange(e)}
            placeholder="Username"
            value={formData.username ?? ""}
            name="username"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            value={formData.password ?? ""}
            name="password"
          />
          <div className="flex mb-5 gap-3 items-center">
            <input type="checkbox" />
            <label for="remember me">Remember me</label>
          </div>
          <button
            className="w-full border py-2 rounded-xl bg-[#b73fa5] text-white hover:bg-[#b73fa5e0] ease-in-out 0.5s"
            type="submit"
          >
            Login
          </button>
          <a
            href="#"
            className="font-md text-md flex justify-center mt-2 mb-10 "
          >
            Forgot Password
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
