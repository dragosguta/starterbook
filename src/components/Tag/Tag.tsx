import React from 'react';
import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';

export interface TagProps {
  label: string;
  checked: boolean;
  kind?: 'primary' | 'secondary';
  csx?: ThemeUIStyleObject;
  children: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export function Tag({
  label,
  checked,
  kind,
  csx,
  children,
  onClick,
}: TagProps) {
  const color = !kind || kind === 'primary' ? 'primary' : 'secondary';
  return (
    <ThemedBox
      as={onClick ? 'button' : 'span'}
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      sx={{
        display: 'inline-block',
        fontSize: [1, 1, 1, 2],
        fontFamily: 'mono',
        letterSpacing: 'mono',
        cursor: onClick ? 'pointer' : 'inherit',
        color: color,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderColor: color,
        lineHeight: 'body',
        borderWidth: '0',
        borderBottomWidth: '0.0625rem',
        textTransform: 'uppercase',
        userSelect: 'none',
        transition: 'opacity 0.05s',
        pt: ['0.0625rem'],
        pb: ['0.125rem'],
        px: [0],
        m: [0],
        opacity:
          checked === null || checked ? 1 : color === 'primary' ? 0.24 : 0.33,
        ...csx,
      }}
      onClick={onClick}
    >
      {children}
    </ThemedBox>
  );
}
