import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const base = 'px-4 py-2 rounded-md font-semibold transition duration-200';
  const style =
    variant === 'primary'
      ? `${base} bg-blue-500 text-white hover:bg-blue-600`
      : `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`;

  return (
    <button onClick={onClick} className={style}>
      {label}
    </button>
  );
};

export default Button;
