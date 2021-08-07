import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';

export function X({ id, csx }: { id?: string; csx?: ThemeUIStyleObject }) {
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
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    </ThemedBox>
  );
}
