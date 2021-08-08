import React from 'react';

import { SpinLoader, GrowLoader } from '../components/Loader';

export default {
  title: 'Example/Loader',
};

export const Grow = () => {
  return <GrowLoader />;
};

export const Spin = () => {
  return <SpinLoader />;
};
