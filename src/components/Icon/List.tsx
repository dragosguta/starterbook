import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';

export function List({ id, csx }: { id?: string; csx?: ThemeUIStyleObject }) {
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
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </ThemedBox>
  );
}
