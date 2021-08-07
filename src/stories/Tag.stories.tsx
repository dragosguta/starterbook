import React from 'react';

import { Tag, TagProps } from '../components/Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
  argTypes: {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => console.log(e),
  },
};

export const Main = (args: TagProps) => {
  return <Tag {...args}>hello</Tag>;
};

Main.args = {
  label: 'hello',
  checked: true,
};
