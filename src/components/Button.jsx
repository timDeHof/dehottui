import React from "react";
import classNamesUtil from "./classNamesUtil";

const Button = ({ children, ClassName, onClick, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded ${ClassName}`}>
      {children}
    </button>
  );
};

export default Button;
