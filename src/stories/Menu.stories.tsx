import { useState } from 'react';
import { Story } from '@storybook/react';

import { List as ListIcon, X as XIcon } from '../components/Icon';
import { IconButton } from '../components/Button';
import { Menu, MenuLink, MenuProps } from '../components/Menu';

export default {
  title: 'Example/Menu',
  argTypes: {
    links: {
      name: 'links',
      type: { name: 'array', required: true },
      defaultValue: [
        { label: 'Articles', href: '/articles' },
        { label: 'Photos', href: '/photos' },
        { label: 'About', href: '/about' },
      ],
    },
  },
};

export const Overlay: Story<
  MenuProps & { links: { label: string; href: string }[] }
> = (args) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <header sx={{ height: 24 }}>
        <IconButton size="small" onClick={() => setExpanded(!expanded)}>
          {expanded ? <XIcon /> : <ListIcon />}
        </IconButton>
      </header>
      <Menu {...args} expanded={expanded} csx={{ top: 60 }}>
        {args.links.map((link) => (
          <MenuLink label={link.label} href={link.href} />
        ))}
      </Menu>
    </div>
  );
};
