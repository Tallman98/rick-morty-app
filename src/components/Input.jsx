import React from "react";

const Input = ({ type, value, onChange, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={rest.name} className="font-medium text-base">
        {rest.label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border px-3 py-2 mt-2 mb-5 rounded-xl"
        {...rest}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};
export default Input;
