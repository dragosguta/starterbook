import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';
import { Button as ThemedButton } from 'theme-ui';

import { Grower } from '../Loader';
import { ButtonProps } from './base';

const buttonSizes: { [key: string]: ThemeUIStyleObject } = {
  small: {
    fontSize: [3, 3, 3, 4],
    fontFamily: 'body',
    letterSpacing: 'body',
    lineHeight: [1.2],
    border: '0.1875rem solid',
    borderColor: 'primary',
    padding: '0.75rem',
  },
  medium: {
    fontSize: [4, 4, 4, 5],
    fontFamily: 'body',
    letterSpacing: 'body',
    lineHeight: [1.2],
    border: '0.25rem solid',
    borderColor: 'primary',
    padding: '1rem',
  },
  large: {
    fontSize: [5, 5, 6, 7],
    fontFamily: 'heading',
    letterSpacing: 'heading',
    lineHeight: [1.2, 1.2, 1.25, 1.25],
    border: '0.5rem solid',
    borderColor: 'primary',
    padding: '1.5rem',
  },
};

const loaderSizes: { [key: string]: ThemeUIStyleObject } = {
  small: {
    width: '0.75rem',
    height: '0.75rem',
  },
  medium: {
    width: '1.5rem',
    height: '1.5rem',
  },
  large: {
    width: '2.25rem',
    height: '2.25rem',
  },
};

const labelSizes: { [key: string]: ThemeUIStyleObject } = {
  small: {
    padding: '0 0 0 0.75rem',
  },
  medium: {
    padding: '0 0 0 1rem',
  },
  large: {
    padding: '0 0 0 1.25rem',
  },
};

export function Outline({
  size,
  children,
  disabled,
  onClick,
  isLoading,
}: ButtonProps) {
  const isDisabled = isLoading ? true : disabled;
  return (
    <ThemedButton
      disabled={isDisabled}
      onClick={onClick}
      sx={{
        ...buttonSizes[size],
        borderRadius: 0,
        background: 'transparent',
        display: 'grid',
        color: 'primary',
        textAlign: 'left',
        cursor: 'pointer',
        width: 'fit-content',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: 'secondary',
            borderColor: 'secondary',
            transition: 'border 0.15s',
          },
        },
        ':focus': {
          boxShadow: 'inset 0 0 0 0.0625rem',
        },
        ':focus-visible': {
          boxShadow: 'inset 0 0 0 0.0625rem',
          outline: 'none',
        },
        ':disabled': {
          cursor: 'not-allowed',
          color: 'muted',
          borderColor: 'muted',
        },
      }}
    >
      <ThemedBox
        sx={{
          transition: 'color 0.15s',
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        {isLoading ? (
          <>
            <Grower csx={loaderSizes[size]} />
            <ThemedBox sx={labelSizes[size]}>{children}</ThemedBox>
          </>
        ) : (
          children
        )}
      </ThemedBox>
    </ThemedButton>
  );
}
