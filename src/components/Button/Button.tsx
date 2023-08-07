import classNamesUtil from "../classNamesUtil";
import { ButtonProps } from "./Button.types";
const Button = ({ children, ClassName, onClick, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded ${classNamesUtil(
        "button",
        ClassName ? ClassName : "",
      )}`}>
      {children}
    </button>
  );
};

export default Button;
