import React from 'react';
import { Story } from '@storybook/react';

import { OutlineButton, OutlineButtonProps } from '../components/Button';

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

export const Outline: Story<OutlineButtonProps> = (args) => {
  return <OutlineButton {...args}>Button</OutlineButton>;
};