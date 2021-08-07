import { useState } from 'react';

import { List as ListIcon, X as XIcon } from '../components/Icon';
import { Icon as IconButton } from '../components/Button';
import { Menu, MenuLink, MenuProps } from '../components/Menu';

export default {
  title: 'Example/Menu',
};

export const Overlay = (args: MenuProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <header sx={{ height: 24 }}>
        <IconButton
          size="small"
          outline={false}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <XIcon /> : <ListIcon />}
        </IconButton>
      </header>
      <Menu {...args} expanded={expanded} csx={{ top: 60 }}>
        <MenuLink label="Articles" href="/articles" />
        <MenuLink label="Photos" href="/photos" />
        <MenuLink label="About" href="/about" />
      </Menu>
    </div>
  );
};

Overlay.args = {
  links: [
    { label: 'Articles', href: '/about' },
    { label: 'Photos', href: '/photos' },
    { label: 'About', href: '/about' },
  ],
};
