import React from 'react';

import { Spinner, Grower } from '../components/Loader';

export default {
  title: 'Example/Loader',
};

export const Grow = () => {
  return <Grower />;
};

export const Spin = () => {
  return <Spinner />;
};
