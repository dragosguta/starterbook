import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';

export function Plus({ id, csx }: { id?: string; csx?: ThemeUIStyleObject }) {
  return (
    <ThemedBox
      id={id}
      as="svg"
      // @ts-ignore
      viewBox="0 0 16 16"
      fill="currentColor"
      sx={{
        width: '100%',
        height: '100%',
        ...csx,
      }}
    >
      <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
    </ThemedBox>
  );
}
