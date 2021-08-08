import React from 'react';

import { IconButton as ThemedIconButton, ThemeUIStyleObject } from 'theme-ui';

import { GrowLoader } from '../Loader';

const buttonSizes: { [key: string]: ThemeUIStyleObject } = {
  small: {
    width: 48,
    height: 48,
    p: 2,
    ':focus': {
      boxShadow: 'inset 0 0 0 0.125rem',
    },
    ':focus-visible': {
      boxShadow: 'inset 0 0 0 0.125rem',
      outline: 'none',
    },
  },
  medium: {
    width: 72,
    height: 72,
    p: 3,
    ':focus': {
      boxShadow: 'inset 0 0 0 0.1875rem',
    },
    ':focus-visible': {
      boxShadow: 'inset 0 0 0 0.1875rem',
      outline: 'none',
    },
  },
  large: {
    width: 96,
    height: 96,
    p: 4,
    ':focus': {
      boxShadow: 'inset 0 0 0 0.25rem',
    },
    ':focus-visible': {
      boxShadow: 'inset 0 0 0 0.25rem',
      outline: 'none',
    },
  },
};

const loaderSizes: { [key: string]: ThemeUIStyleObject } = {
  small: {
    width: '0.75rem',
    height: '0.75rem',
  },
  medium: {
    width: '1.25rem',
    height: '1.25rem',
  },
  large: {
    width: '1.5rem',
    height: '1.5rem',
  },
};

export interface IconButtonProps {
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | String;
}

export function IconButton({
  size,
  children,
  disabled,
  onClick,
  isLoading,
}: IconButtonProps) {
  const isDisabled = isLoading ? true : disabled;
  return (
    <ThemedIconButton
      disabled={isDisabled}
      onClick={onClick}
      sx={{
        ...buttonSizes[size ?? 'small'],
        color: 'primary',
        cursor: 'pointer',
        borderRadius: 0,
        '@media (hover: hover) and (pointer: fine)': {
          ...(!isDisabled
            ? {
                '&:hover': {
                  backgroundColor: 'hinted',
                  transition: 'background-color 0.15s',
                },
              }
            : {}),
        },
        ...(!isDisabled
          ? {
              ':active': {
                backgroundColor: 'rgba(0,0,0,0.09)',
              },
            }
          : {}),
        ':disabled': {
          cursor: 'not-allowed',
          color: 'muted',
        },
        transition: 'box-shadow 0.15s',
      }}
    >
      {isLoading ? <GrowLoader csx={loaderSizes[size ?? 'small']} /> : children}
    </ThemedIconButton>
  );
}
