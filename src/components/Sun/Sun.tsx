import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';

export function Sun({ csx }: { csx?: ThemeUIStyleObject }) {
  return (
    <ThemedBox
      as="svg"
      // @ts-ignore
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      stroke="currentColor"
      stroke-width="1.5"
      sx={{
        strokeWidth: '1.75',
        transition: 'stroke 0.15s',
        ...csx,
      }}
    >
      <circle cx="12" cy="12" r="4.77" />
      <line x1="12" x2="12" y2="4.06" />
      <line x1="12" y1="19.94" x2="12" y2="24" />
      <line x1="20.49" y1="3.51" x2="17.61" y2="6.39" />
      <line x1="6.39" y1="17.61" x2="3.51" y2="20.49" />
      <line x1="20.49" y1="20.49" x2="17.61" y2="17.61" />
      <line x1="6.39" y1="6.39" x2="3.51" y2="3.51" />
      <line x1="24" y1="12" x2="19.94" y2="12" />
      <line x1="4.06" y1="12" y2="12" />
    </ThemedBox>
  );
}
