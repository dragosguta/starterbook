import React from 'react';

import { IconButton as ThemedIconButton, ThemeUIStyleObject } from 'theme-ui';

import { Grower } from '../Loader';
import { ButtonProps } from './base';

const buttonSizes: { [key: string]: ThemeUIStyleObject } = {
  small: {
    width: 48,
    height: 48,
    border: '0.1875rem solid',
    borderColor: 'primary',
  },
  medium: {
    width: 72,
    height: 72,
    border: '0.25rem solid',
    borderColor: 'primary',
  },
  large: {
    width: 96,
    height: 96,
    border: '0.5rem solid',
    borderColor: 'primary',
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

export function Icon({
  size,
  children,
  disabled,
  onClick,
  isLoading,
  outline,
}: ButtonProps & { outline?: boolean }) {
  const isDisabled = isLoading ? true : disabled;
  const hasOutline = outline === undefined ? true : outline;
  return (
    <ThemedIconButton
      disabled={isDisabled}
      onClick={onClick}
      sx={{
        ...buttonSizes[size],
        ...(!hasOutline ? { border: 'none' } : {}),
        color: 'primary',
        cursor: 'pointer',
        borderRadius: 0,
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: 'secondary',
            borderColor: 'secondary',
            transition: 'border 0.15s',
          },
        },
        ':disabled': {
          cursor: 'not-allowed',
          color: 'muted',
          borderColor: 'muted',
        },
      }}
    >
      {isLoading ? <Grower csx={loaderSizes[size]} /> : children}
    </ThemedIconButton>
  );
}
