import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`px-[8px] py-[2px] border rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
