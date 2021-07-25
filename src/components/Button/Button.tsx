import React from 'react';

import { Box as ThemedBox } from 'theme-ui';

import { Grower } from '../Grower';

export interface ButtonProps {
  kind: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: JSX.Element | String;
}

const getBaseButtonStyles = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small': {
      return {
        buttonBase: {
          fontSize: [2, 2, 2, 3],
          fontFamily: 'body',
          letterSpacing: 'body',
          border: '0.1875rem solid',
          borderColor: 'primary',
          padding: '0.75rem',
        },
        loaderBase: {
          width: '0.75rem',
          height: '0.75rem',
        },
        labelBase: {
          padding: '0 0 0 0.75rem',
        },
      };
    }
    case 'medium': {
      return {
        buttonBase: {
          fontSize: [4, 4, 4, 5],
          fontFamily: 'body',
          letterSpacing: 'body',
          border: '0.25rem solid',
          borderColor: 'primary',
          padding: '1rem',
        },
        loaderBase: {
          width: '1.5rem',
          height: '1.5rem',
        },
        labelBase: {
          padding: '0 0 0 1rem',
        },
      };
    }
    case 'large': {
      return {
        buttonBase: {
          fontSize: [5, 5, 6, 7],
          fontFamily: 'heading',
          letterSpacing: 'heading',
          border: '0.5rem solid',
          borderColor: 'primary',
          padding: '1.5rem',
        },
        loaderBase: {
          width: '2.25rem',
          height: '2.25rem',
        },
        labelBase: {
          padding: '0 0 0 1.25rem',
        },
      };
    }
    default: {
      throw new Error("Invalid size provided for 'button'");
    }
  }
};

export function Button({
  kind,
  size,
  onClick,
  isLoading,
  children,
}: ButtonProps) {
  const baseColor = kind === 'primary' ? 'primary' : 'secondary';
  const hoverColor = kind === 'primary' ? 'secondary' : 'primary';
  const { buttonBase, loaderBase, labelBase } = getBaseButtonStyles(size);
  return (
    <ThemedBox
      as="button"
      sx={{
        ...buttonBase,
        ...(kind === 'secondary' ? { border: 'none' } : {}),
        background: 'transparent',
        display: 'grid',
        color: baseColor,
        textAlign: 'left',
        cursor: 'pointer',
        width: 'fit-content',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            color: hoverColor,
            borderColor: hoverColor,
            transition: 'border 0.15s',
          },
        },
      }}
      onClick={onClick}
    >
      <ThemedBox
        as="div"
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
            <Grower csx={{ ...loaderBase }} />
            <ThemedBox as="div" sx={{ ...labelBase }}>
              {children}
            </ThemedBox>
          </>
        ) : (
          children
        )}
      </ThemedBox>
    </ThemedBox>
  );
}
