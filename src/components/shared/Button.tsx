import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={`text-[20px] leading-[28px] bg-black text-white px-8 py-2.5 rounded-lg mt-8 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
