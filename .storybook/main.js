const path = require('path');

/** @see - https://github.com/storybookjs/storybook/pull/13300#issuecomment-783268111 */
const modulesDir = path.join(__dirname, '../node_modules');
const updateEmotionAliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': path.join(modulesDir, '@emotion/react'),
      '@emotion/styled': path.join(modulesDir, '@emotion/styled'),
      '@emotion/styled-base': path.join(modulesDir, '@emotion/styled'),
      'emotion-theming': path.join(modulesDir, '@emotion/react'),
    },
  },
});

module.exports = {
  managerWebpack: updateEmotionAliases,
  webpackFinal: updateEmotionAliases,
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          importSource: 'theme-ui', // or '@theme-ui/core'
          runtime: 'automatic',
          throwIfNamespace: false,
        },
      ],
    ],
  }),
};
