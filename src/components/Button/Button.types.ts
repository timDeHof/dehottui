import React from "react";
export interface ButtonProps {
  children: React.ReactNode;
  ClassName?: string;
  onClick?: () => void;
}
