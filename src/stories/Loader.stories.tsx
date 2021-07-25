import React from 'react';

import { Grower } from '../components/Grower';
import { Spinner } from '../components/Spinner';

export default {
  title: 'Example/Loader',
};

export const Grow = () => {
  return <Grower />;
};

export const Spin = () => {
  return <Spinner />;
};
