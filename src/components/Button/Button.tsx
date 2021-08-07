import React from 'react';

import { Button as ThemedButton } from 'theme-ui';

export interface ButtonProps {
  primary: boolean;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ primary, label, onClick }) => {
  return (
    <ThemedButton
      type="button"
      onClick={onClick}
      sx={{
        backgroundColor: primary ? 'primary' : 'secondary',
        cursor: 'pointer',
      }}
    >
      {label}
    </ThemedButton>
  );
};
