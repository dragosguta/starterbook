import React, { useCallback } from 'react';

import {
  IconButton as ThemedIconButton,
  ThemeUIStyleObject,
  useColorMode,
} from 'theme-ui';

import { Sun } from '../Sun';

export function Dimmer({ csx }: { csx?: ThemeUIStyleObject }) {
  const [colorMode, setColorMode] = useColorMode();
  const toggle = useCallback(
    () => setColorMode(colorMode === 'light' ? 'dark' : 'light'),
    [colorMode]
  );

  return (
    <ThemedIconButton
      aria-label="Toggle dark mode"
      onClick={toggle}
      role="checkbox"
      sx={{
        width: 32,
        height: 32,
        display: 'grid',
        cursor: 'pointer',
        ...csx,
      }}
    >
      <Sun
        csx={{
          '@media (hover: hover) and (pointer: fine)': {
            '&:hover': {
              stroke: 'secondary',
            },
          },
        }}
      />
    </ThemedIconButton>
  );
}
