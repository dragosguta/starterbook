import React from 'react';

import { ThemeProvider as ThemeUIThemeProvider, Theme } from 'theme-ui';

const theme: Theme = {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 172, 256, 512],
  fonts: {
    body:
      'relative-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    faux:
      'relative-faux-book-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    heading:
      'relative-medium-pro, Roboto, system-ui, -apple-system, BlinkMacSystemFont',
    mono: 'relative-mono-11-pitch-pro, Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 24, 34, 48, 64, 80, 96, 128],
  letterSpacings: {
    body: '0.01em',
    mono: '0.07em',
    faux: '0.05em',
    heading: '-0.015em',
    smallcaps: '0.07em',
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 400,
  },
  lineHeights: {
    body: 1.35,
    heading: 1.05,
    h1: 1.05,
    h2: 1.1,
    h3: 1.2,
  },
  colors: {
    text: '#1b1e23',
    background: '#FFFFFF',
    primary: '#1b1e23',
    secondary: '#808080',
    muted: '#b9b9bb',
    hinted: '#f4f4f4',
    red: '#f07071',
    orange: '#ea9755',
    yellow: '#d4c05e',
    green: '#7eb36a',
    teal: '#64b9c4',
    blue: '#85a2f7',
    purple: '#bc85d9',
    pink: '#e587b6',
    grey: '#a9b4c4',
    modes: {
      dark: {
        text: '#ebebec',
        background: '#1b1e23',
        primary: '#ebebec',
        secondary: '#808080',
        muted: '#393a3d',
        hinted: '#3f4144',
        red: '#f07071',
        orange: '#ea9755',
        yellow: '#d4c05e',
        green: '#7eb36a',
        teal: '#64b9c4',
        blue: '#85a2f7',
        purple: '#bc85d9',
        pink: '#e587b6',
        grey: '#a9b4c4',
      },
    },
  },
  layout: {
    container: {
      px: [3, 4, 5, 6],
      maxWidth: '1920px',
    },
  },
  text: {
    paragraph: {
      fontSize: [3],
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      my: ['1em'],
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
    },
    a: {
      color: 'text',
      '@media (hover: hover) and (pointer: fine)': {
        '&:active': {
          color: 'text',
        },
        '&:hover': {
          color: 'secondary',
        },
      },
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    hr: {
      border: 'none',
      borderStyle: 'solid',
      borderWidth: '0px',
      borderTopWidth: '1px',
      borderColor: 'muted',
    },
    p: {
      fontSize: [3, 3, 3, 4],
      lineHeight: 'body',
      fontFamily: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      my: ['1em'],
    },
    h1: {
      fontSize: [6, 6, 7, 8],
      fontFamily: 'heading',
      letterSpacing: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h1',
      mt: [5, 7, 7],
      mb: [5, 6, 6],
    },
    h2: {
      fontSize: [5, 5, 5, 6],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h2',
      mt: [5, 6, 6],
      mb: [4, 5, 5],
    },
    h3: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    h4: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    h5: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    h6: {
      fontSize: [4, 4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'h3',
      mt: [4, 5, 5],
      mb: [3, 4, 4],
    },
    blockquote: {
      bg: 'hinted',
      color: 'primary',
      fontFamily: 'body',
      lineHeight: '1.35',
      fontSize: [3, 3, 3, 4],
      borderRadius: '1px',
      mx: [0],
      my: [4, 4, 4, 5],
      p: [3, 3, 3, 4],
      '> p': {
        m: [0],
      },
    },
    ul: {
      paddingInlineStart: ['20px', '20px', '20px', '24px'],
      marginBlockStart: [-2, -2, -2, -3],
      fontSize: [3, 3, 3, 4],
    },
    ol: {
      paddingInlineStart: ['26px', '26px', '26px', '42px'],
      marginBlockStart: [-2, -2, -2, -3],
      fontSize: [3, 3, 3, 4],
    },
    thematicBreak: {
      mt: [6, 6, 7, 7],
    },
    pre: {
      p: [3, 3, 3, 4],
      fontSize: [1, 1, 1, 2],
      fontFamily: 'mono',
      letterSpacing: 'mono',
      borderRadius: '1px',
      overflowWrap: 'break-word',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      whiteSpace: 'break-spaces',
      color: 'primary',
      bg: 'hinted',
      '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
        color: 'secondary',
      },
      '.property,.boolean,.deleted,.class-name,.variable': {
        color: 'primary',
      },
      '.function,.boolean,.number,.constant,.symbol,.class-name': {
        color: 'primary',
      },
      '.atrule, .attr-value, .keyword': {
        color: 'primary',
      },
      '.selector, .string, .char, .inserted': {
        color: 'secondary',
      },
    },
    inlineCode: {
      px: [1],
      pb: ['3px'],
      pt: ['1px'],
      mx: ['1px'],
      fontSize: [1, 1, 1, 2],
      fontFamily: 'mono',
      letterSpacing: 'mono',
      bg: 'hinted',
      color: 'primary',
      borderRadius: '1px',
    },
  },
  breakpoints: ['40em', '64em', '102em'],
  config: {
    initialColorModeName: 'light',
    printColorModeName: 'light',
    useColorSchemeMediaQuery: false,
  },
};

export function ThemeProvider(props: {
  children: JSX.Element | JSX.Element[];
  theme?: any;
}) {
  return (
    <ThemeUIThemeProvider theme={props.theme ? props.theme : theme}>
      {props.children}
    </ThemeUIThemeProvider>
  );
}
