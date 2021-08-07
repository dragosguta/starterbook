import { ThemeProvider } from 'theme-ui';
import { Global, css } from '@emotion/react';

import theme from '../src/theme';

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
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: relative-book-pro;
            font-style: normal;
            font-weight: 400;
            src: url(/relative-book-pro.woff2);
          }
          @font-face {
            font-family: relative-medium-pro;
            font-style: normal;
            font-weight: 400;
            src: url(/relative-medium-pro.woff2);
          }
          @font-face {
            fontfamily: relative-mono-11-pitch-pro;
            fontstyle: normal;
            fontweight: 400;
            src: url(/relative-mono-11-pitch-pro.woff2);
          }
          @font-face {
            fontfamily: relative-faux-book-pro;
            fontstyle: normal;
            fontweight: 400;
            src: url(/relative-faux-book-pro.woff2);
          }
        `}
      />
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
