import React from 'react';

import {
  Box as ThemedBox,
  Link as ThemedLink,
  ThemeUIStyleObject,
} from 'theme-ui';

import { Plus } from '../Icon';

export interface MenuProps {
  expanded: boolean;
  children: JSX.Element[];
  csx?: ThemeUIStyleObject;
}

export function MenuLink({
  label,
  href,
  target,
}: {
  label: string;
  href?: string;
  target?: string;
}) {
  return (
    <ThemedLink
      href={href}
      target={target ?? '_blank'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'heading',
        textDecoration: 'none',
        pt: [2, 3, 4],
        pb: [2, 3, 4],
        fontSize: 80,
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover > #plus': {
            opacity: 1,
          },
        },
      }}
    >
      <Plus
        id="plus"
        csx={{
          pointerEvents: 'none',
          mr: 7,
          opacity: 0,
          transition: 'opacity 0.2s ease-out',
          width: 48,
          height: 48,
        }}
      />
      {label}
    </ThemedLink>
  );
}

export function Menu({ expanded, children, csx }: MenuProps) {
  return (
    <ThemedBox>
      <ThemedBox
        sx={{
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? 'all' : 'none',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          minWidth: 0,
          maxHeight: '100vh',
          width: '100vw',
          backgroundColor: 'background',
          zIndex: 9999,
          mt: '3.75rem',
          pt: [4],
          transition: 'opacity 0.25s',
          display: 'grid',
          columnGap: '3rem',
          ...csx,
        }}
      >
        <ThemedBox sx={{ gridColumnStart: 7, gridColumnEnd: 12 }}>
          <nav>{children}</nav>
        </ThemedBox>
      </ThemedBox>
    </ThemedBox>
  );
}
