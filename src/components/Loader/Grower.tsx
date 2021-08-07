import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';
import { keyframes } from '@emotion/react';

const grow = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
`;

export function Grower({ csx }: { csx?: ThemeUIStyleObject }) {
  return (
    <ThemedBox
      as="div"
      sx={{
        display: 'grid',
        width: ['1rem', '1.25rem', '1.5rem', '1.75rem'],
        height: ['1rem', '1.25rem', '1.5rem', '1.75rem'],
        backgroundColor: 'currentColor',
        borderRadius: '50%',
        opacity: 0,
        animation: `${grow} 0.75s linear infinite`,
        ...csx,
      }}
    />
  );
}
