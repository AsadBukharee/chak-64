import React from "react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: boolean;
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ accent, children, className = "", ...props }) => {
  return (
    <button
      className={`gradient-btn${accent ? " accent" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}; 