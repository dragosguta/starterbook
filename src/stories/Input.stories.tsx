import React from 'react';

import { TextInput, TextInputProps } from '../components/Input';

export default {
  title: 'Example/Input',
  component: TextInput,
};

export const Text = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

Text.args = {
  label: 'Text label',
  placeholder: 'Text placeholder',
  size: 'small',
  invalid: false,
  isLoading: false,
};
