import React from 'react';

import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e),
  },
};

export const Primary = (args: ButtonProps) => {
  return <Button {...args} />;
};

Primary.args = {
  size: 'large',
  label: 'Button',
  primary: true,
};
