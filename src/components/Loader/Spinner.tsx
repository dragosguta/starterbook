import React from 'react';

import { Box as ThemedBox, ThemeUIStyleObject } from 'theme-ui';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export function SpinLoader({ csx }: { csx?: ThemeUIStyleObject }) {
  return (
    <ThemedBox
      as="div"
      sx={{
        display: 'grid',
        width: ['1rem', '1.25rem', '1.5rem', '1.75rem'],
        height: ['1rem', '1.25rem', '1.5rem', '1.75rem'],
        border: '0.2rem solid currentColor',
        borderRightColor: 'transparent',
        borderRadius: '50%',
        animation: `${spin} 0.75s linear infinite`,
        ...csx,
      }}
    />
  );
}
