import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <button
      className={`text-[20px] leading-[28px] bg-black text-white px-8 py-2.5 rounded-lg mt-8 ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
