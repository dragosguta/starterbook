import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';

export function ArrowRight({
  id,
  csx,
}: {
  id?: string;
  csx?: ThemeUIStyleObject;
}) {
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
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </ThemedBox>
  );
}
