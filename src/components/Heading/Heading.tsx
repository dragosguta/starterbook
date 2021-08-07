import React from 'react';

import { Heading as ThemedHeading } from 'theme-ui';

export function Heading({ children }: { children: string }) {
  return <ThemedHeading as="h1">{children}</ThemedHeading>;
}
