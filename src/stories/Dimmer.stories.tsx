import React from 'react';

import { Dimmer } from '../components/Dimmer';

export default {
  title: 'Example/Dimmer',
  component: Dimmer,
  argTypes: {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e),
  },
};

export const Toggle = () => {
  return <Dimmer />;
};
