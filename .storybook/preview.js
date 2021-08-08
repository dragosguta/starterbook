import { ThemeProvider, GlobalStyles } from '../src/components/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyles />
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
