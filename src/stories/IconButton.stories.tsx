import React from 'react';
import { Story } from '@storybook/react';

import { IconButton, IconButtonProps } from '../components/Button';

import { List } from '../components/Icon';

export default {
  title: 'Example/Button',
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: 'small'
    },
    onClick: {
      name: 'onClick',
      type: { name: 'function', required: true },
    },
    isLoading: {
      name: 'isLoading',
      type: { name: 'boolean', required: false },
      defaultValue: false
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      defaultValue: false
    }
  },
};

export const Icon: Story<IconButtonProps> = (args) => {
  return (
    <IconButton {...args}>
      <List />
    </IconButton>
  );
};