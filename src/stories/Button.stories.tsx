import React from 'react';

import {
  Outline as OutlineButton,
  Icon as IconButton,
  ButtonProps,
} from '../components/Button';

import { List } from '../components/Icon';

export default {
  title: 'Example/Button',
  argTypes: {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => console.log(e),
  },
};

export const Outline = (args: ButtonProps) => {
  return <OutlineButton {...args}>Button</OutlineButton>;
};

export const Icon = (args: ButtonProps) => {
  return (
    <IconButton {...args}>
      <List />
    </IconButton>
  );
};

Outline.args = {
  size: 'small',
  isLoading: false,
  disabled: false,
};

Icon.args = {
  size: 'small',
  isLoading: false,
  disabled: false,
  outline: true,
};
