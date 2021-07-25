module.exports = {
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
