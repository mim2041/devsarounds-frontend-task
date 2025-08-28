import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`text-[20px] leading-[28px] bg-black text-white px-8 py-2.5 rounded-lg mt-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
