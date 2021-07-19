import React from 'react';
import './button.css';

export interface ButtonProps {
  primary: boolean;
  backgroundColor?: React.CSSProperties;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? backgroundColor : undefined }
      onClick={onClick}
    >
      {label}
    </button>
  );
};
