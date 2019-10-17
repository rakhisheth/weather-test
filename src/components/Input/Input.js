import React from "react";

const Input = ({ type, className, children, onChange, placeholder, value }) => {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    >
      {children}
    </input>
  );
};

export default Input;
