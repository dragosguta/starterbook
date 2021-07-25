import React from 'react';

import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => console.log(e),
  },
};

export const Primary = (args: ButtonProps) => {
  return <Button {...args}>hello world</Button>;
};

Primary.args = {
  size: 'small',
  kind: 'primary',
  isLoading: false,
};
